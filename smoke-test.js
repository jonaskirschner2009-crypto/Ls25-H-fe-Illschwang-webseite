const assert = require('assert');
const http = require('http');

const BASE_URL = process.env.HOF_SMOKE_URL || 'http://localhost:3000';

function request(path, options = {}) {
  return new Promise((resolve, reject) => {
    const body = options.body ? JSON.stringify(options.body) : null;
    const req = http.request(
      `${BASE_URL}${path}`,
      {
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {}),
          ...(body ? { 'Content-Length': Buffer.byteLength(body) } : {})
        }
      },
      (res) => {
        let text = '';
        res.on('data', (chunk) => {
          text += chunk;
        });
        res.on('end', () => {
          let data = null;
          try {
            data = text ? JSON.parse(text) : null;
          } catch {
            data = text;
          }
          resolve({ status: res.statusCode, data });
        });
      }
    );

    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function main() {
  const adminLogin = await request('/api/auth/login', {
    method: 'POST',
    body: { username: 'Admin', password: 'admin123' }
  });
  assert.strictEqual(adminLogin.status, 200, 'Admin-Login sollte 200 zurückgeben.');
  assert.ok(adminLogin.data && adminLogin.data.token, 'Admin-Login liefert keinen Token.');

  const publicState = await request('/api/public/state');
  assert.strictEqual(publicState.status, 200, 'Öffentlicher State sollte 200 zurückgeben.');
  assert.ok(publicState.data && typeof publicState.data.version === 'number', 'Öffentlicher State muss eine Versionsnummer liefern.');
  assert.ok(publicState.data && typeof publicState.data.state === 'object', 'Öffentlicher State muss ein state-Objekt liefern.');

  const businesses = await request('/api/public/businesses');
  assert.strictEqual(businesses.status, 200, 'Öffentliche Betriebsliste sollte 200 zurückgeben.');
  assert.ok(Array.isArray(businesses.data && businesses.data.businesses), 'Betriebsliste muss ein Array sein.');

  const userName = `smoketest_${Date.now()}`;
  const userRegister = await request('/api/user/register', {
    method: 'POST',
    body: { username: userName, password: 'password123' }
  });
  assert.strictEqual(userRegister.status, 201, 'User-Registrierung sollte 201 zurückgeben.');
  assert.ok(userRegister.data && userRegister.data.user && userRegister.data.user.username === userName, 'Registrierung liefert falschen Usernamen.');

  const userLogin = await request('/api/user/login', {
    method: 'POST',
    body: { username: userName, password: 'password123' }
  });
  assert.strictEqual(userLogin.status, 200, 'User-Login sollte 200 zurückgeben.');
  assert.ok(userLogin.data && userLogin.data.token, 'User-Login liefert keinen Token.');

  console.log('Smoke-Test: PASS');
  console.log(`Admin token: ${adminLogin.data.token.length}`);
  console.log(`State version: ${publicState.data.version}`);
  console.log(`Businesses: ${businesses.data.businesses.length}`);
  console.log(`User: ${userRegister.data.user.username}`);
}

main().catch((error) => {
  console.error('Smoke-Test: FAIL');
  console.error(error.stack || error.message);
  process.exit(1);
});
