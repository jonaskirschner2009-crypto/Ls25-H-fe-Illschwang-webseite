/* === HOEFE_CODE_START === */
        let hoefeData = [
            {
                id: 1,
                name: "Hof 1 - Schweinehof Mutzbauer",
                slogan: "Moderne Haltung mit Herz.",
                beschreibung: "Der Schweinehof Mutzbauer steht für eine bodenständige und wirtschaftliche Landwirtschaft. Mit modernen Stallanlagen, eigener Futterproduktion und ausreichend Lagerkapazitäten bietet der Betrieb optimale Voraussetzungen für eine erfolgreiche Schweinehaltung.",
                groesse: "0.96 ha",
                flaechen: "Ackerfläche 64 (2.3 ha)",
                tierhaltung: "Schweine",
                schwerpunkt: "Schweinehaltung und Ackerbau",
                preis: "612.389 €",
                zielgruppe: "Dieser Hof eignet sich besonders für Landwirte, die in die Schweinehaltung einsteigen oder ihren bestehenden Betrieb erweitern möchten.",
                preise: [
                    { pos: 1, bez: "Beton Freiland Silo (groß)", stück: "20.000 €", gesamt: "20.000 €" },
                    { pos: 2, bez: "Betriebshalle mit Silo Anbau", stück: "204.750 €", gesamt: "204.750 €" },
                    { pos: 3, bez: "Schweinestall (Kapazität: 170 Schweine)", stück: "46.500 €", gesamt: "46.500 €" },
                    { pos: 4, bez: "Bauernhaus mit Halle & Werkstatt", stück: "198.139 €", gesamt: "198.139 €" },
                    { pos: 5, bez: "Güllelager", stück: "0 €", gesamt: "0 €" },
                    { pos: 6, bez: "Weinzierl GFK Silo 43 (4x)", stück: "35.750 €", gesamt: "143.000 €" }
                ]
            },
            {
                id: 5,
                name: "Hof 5 - Kuhhof Meyer",
                slogan: "Wo Landwirtschaft auf Verantwortung trifft.",
                beschreibung: "Der Kuhhof Meyer steht für traditionelle Milchviehhaltung, moderne Landwirtschaft und einen zuverlässigen Familienbetrieb.",
                groesse: "1.92 ha",
                flaechen: "Ackerfläche 56 (1.70 ha)",
                tierhaltung: "Kühe",
                schwerpunkt: "Viehhaltung und Ackerbau",
                preis: "782.896 €",
                zielgruppe: "Der Kuhhof Meyer eignet sich besonders für Landwirte, die Freude an der Milchviehhaltung haben.",
                preise: [
                    { pos: 1, bez: "Beton Freiland Silo (klein)", stück: "10.000 €", gesamt: "10.000 €" },
                    { pos: 2, bez: "Moderne Maschinenhalle (2x)", stück: "37.250 €", gesamt: "74.500 €" },
                    { pos: 3, bez: "Kuhställe (2x) für 90 Tiere", stück: "162.348 €", gesamt: "324.696 €" },
                    { pos: 4, bez: "Bauernhaus mit Werkstatt", stück: "209.700 €", gesamt: "209.700 €" },
                    { pos: 5, bez: "Weinzierl GFK Silo 43 Extension (4x)", stück: "35.750 €", gesamt: "143.000 €" },
                    { pos: 6, bez: "Kälberhütten - Individuell (7x)", stück: "250 €", gesamt: "250 €" },
                    { pos: 7, bez: "Kälberhütte - Gruppe", stück: "750 €", gesamt: "750 €" },
                    { pos: 8, bez: "Misthaufen", stück: "8.500 €", gesamt: "8.500 €" }
                ]
            },
            {
                id: 6,
                name: "Hof 6 - Kuhhof Graf",
                slogan: "Mit Herz für Tiere, mit Blick auf die Zukunft.",
                beschreibung: "Der Kuhhof Graf steht für moderne Milchviehhaltung und solide Landwirtschaft.",
                groesse: "1.73 ha",
                flaechen: "Ackerfläche 74 (1.28 ha)",
                tierhaltung: "Kühe",
                schwerpunkt: "Viehhaltung und Ackerbau",
                preis: "747.082 €",
                zielgruppe: "Der Kuhhof Graf eignet sich besonders für Landwirte, die einen klassischen Milchviehbetrieb suchen.",
                preise: [
                    { pos: 1, bez: "Beton Freiland Silo (groß)", stück: "20.000 €", gesamt: "20.000 €" },
                    { pos: 2, bez: "Ballen- und Palettenlager", stück: "115.412 €", gesamt: "115.412 €" },
                    { pos: 3, bez: "Kuhställe (2x) für 90 Tiere", stück: "162.348 €", gesamt: "324.696 €" },
                    { pos: 4, bez: "Agrarhalle mit Werkstatt", stück: "26.400 €", gesamt: "26.400 €" },
                    { pos: 5, bez: "Weinzierl GFK Silo 43 Extension (2x)", stück: "35.750 €", gesamt: "71.500 €" },
                    { pos: 6, bez: "Bayerisches Bauernhaus", stück: "189.174 €", gesamt: "189.174 €" }
                ]
            },
            {
                id: 7,
                name: "Hof 7 - Kuhhof Ibler",
                slogan: "Starke Höfe, Gesunde Tiere. Gute Zukunft.",
                beschreibung: "Der Kuhhof Ibler steht für bodenständige Milchviehhaltung und nachhaltige Bewirtschaftung.",
                groesse: "2.06 ha",
                flaechen: "Ackerfläche 153 (1.70 ha)",
                tierhaltung: "Kühe",
                schwerpunkt: "Viehhaltung und Ackerbau",
                preis: "809.531 €",
                zielgruppe: "Der Kuhhof Ibler eignet sich für Landwirte, die eine hohe Eigenversorgung anstreben.",
                preise: [
                    { pos: 1, bez: "Beton Freiland Silo (groß)", stück: "20.000 €", gesamt: "20.000 €" },
                    { pos: 2, bez: "Maschinenhalle mit Unterstand", stück: "26.740 €", gesamt: "26.740 €" },
                    { pos: 3, bez: "Kuhställe (2x) für 90 Tiere", stück: "212.270 €", gesamt: "424.541 €" },
                    { pos: 4, bez: "Fermenter 1", stück: "82.500 €", gesamt: "82.500 €" },
                    { pos: 5, bez: "BGA Anlage", stück: "195.000 €", gesamt: "195.000 €" },
                    { pos: 6, bez: "Siloplatte", stück: "15.000 €", gesamt: "15.000 €" },
                    { pos: 7, bez: "Misthaufen", stück: "8.500 €", gesamt: "8.500 €" },
                    { pos: 8, bez: "Moderne Maschinenhalle", stück: "37.250 €", gesamt: "37.250 €" }
                ]
            },
            {
                id: 8,
                name: "Hof 8 - Kuhhof Singer",
                slogan: "Gemeinsam für eine starke Landwirtschaft.",
                beschreibung: "Der Kuhhof Singer steht für traditionelle Milchviehhaltung.",
                groesse: "2.26 ha",
                flaechen: "Ackerfläche 195 (0.76 ha)",
                tierhaltung: "Kühe",
                schwerpunkt: "Viehhaltung und Ackerbau",
                preis: "774.170 €",
                zielgruppe: "Ideal für klassische Milchviehbetriebe.",
                preise: [
                    { pos: 1, bez: "Beton Freiland Silo (groß)", stück: "20.000 €", gesamt: "20.000 €" },
                    { pos: 2, bez: "Maschinenhalle mit Unterstand", stück: "26.740 €", gesamt: "26.740 €" },
                    { pos: 3, bez: "Kuhställe (2x) für 90 Tiere", stück: "212.270 €", gesamt: "424.541 €" },
                    { pos: 4, bez: "Fermenter 1", stück: "82.500 €", gesamt: "82.500 €" },
                    { pos: 5, bez: "BGA Anlage", stück: "195.000 €", gesamt: "195.000 €" },
                    { pos: 6, bez: "Siloplatte", stück: "15.000 €", gesamt: "15.000 €" },
                    { pos: 7, bez: "Misthaufen", stück: "8.500 €", gesamt: "8.500 €" },
                    { pos: 8, bez: "Moderne Maschinenhalle", stück: "37.250 €", gesamt: "37.250 €" }
                ]
            },
            {
                id: 9,
                name: "Hof 9 - Schweinehof Schmidt",
                slogan: "Aus Tradition gewachsen, für die Zukunft gemacht.",
                beschreibung: "Der Schweinehof Schmidt steht für eine leistungsstarke Schweinehaltung.",
                groesse: "1.07 ha",
                flaechen: "Ackerfläche 194 (2.48 ha)",
                tierhaltung: "Schweine",
                schwerpunkt: "Schweinezucht und Ackerbau",
                preis: "767.000 €",
                zielgruppe: "Fokus auf effiziente Schweinezucht.",
                preise: [
                    { pos: 1, bez: "Haus 04", stück: "216.000 €", gesamt: "216.000 €" },
                    { pos: 2, bez: "Unterstand (groß) (2x)", stück: "12.500 €", gesamt: "25.000 €" },
                    { pos: 3, bez: "Schweinestall für 170 Tiere", stück: "46.500 €", gesamt: "46.500 €" },
                    { pos: 4, bez: "Misthaufen", stück: "8.500 €", gesamt: "8.500 €" },
                    { pos: 5, bez: "Weinzierl GFK Silo 43", stück: "35.750 €", gesamt: "71.500 €" },
                    { pos: 6, bez: "Bunker Silo", stück: "16.000 €", gesamt: "16.000 €" }
                ]
            },
            {
                id: 11,
                name: "Hof 11 - Kuhhof Donhauser",
                slogan: "Gemeinsam für eine starke Landwirtschaft.",
                beschreibung: "Moderne Milchviehhaltung kombiniert mit Geflügelhaltung.",
                groesse: "1.76 ha",
                flaechen: "Ackerfläche 82 (2.17 ha)",
                tierhaltung: "Kühe & Hühner",
                schwerpunkt: "Viehhaltung und Ackerbau",
                preis: "747.946 €",
                zielgruppe: "Vielseitiger Betrieb für Milch & Eier.",
                preise: [
                    { pos: 1, bez: "Moderne Maschinenhalle (2x)", stück: "37.250 €", gesamt: "74.500 €" },
                    { pos: 2, bez: "Hühnerstall mit 50 Tieren", stück: "5.000 €", gesamt: "5.000 €" },
                    { pos: 3, bez: "Kuhstall bis zu 40 Tieren (groß)", stück: "67.500 €", gesamt: "67.500 €" },
                    { pos: 4, bez: "Fahrsilo", stück: "30.000 €", gesamt: "60.000 €" },
                    { pos: 5, bez: "Betriebshalle mit Silo", stück: "257.196 €", gesamt: "257.196 €" },
                    { pos: 6, bez: "Misthaufen", stück: "8.500 €", gesamt: "8.500 €" },
                    { pos: 7, bez: "Weinzierl GFK Silo 43 Extension", stück: "34.750 €", gesamt: "34.750 €" },
                    { pos: 8, bez: "Weinzierl GFK Silo 43", stück: "35.750 €", gesamt: "35.750 €" }
                ]
            },
            {
                id: 12,
                name: "Hof 12 - Kuhhof Pirner",
                slogan: "Mit Herz für Tiere, mit Blick auf die Zukunft.",
                beschreibung: "Bodenständiger Hof mit großen Hallenkapazitäten.",
                groesse: "1.41 ha",
                flaechen: "Ackerfläche 124 (3.00 ha)",
                tierhaltung: "Kühe",
                schwerpunkt: "Viehhaltung und Ackerbau",
                preis: "809.392 €",
                zielgruppe: "Ideal für Landwirte mit großem Maschinenpark.",
                preise: [
                    { pos: 1, bez: "Farmhaus mit Kuhstall", stück: "40.000 €", gesamt: "40.000 €" },
                    { pos: 2, bez: "Kleine Maschinenhalle", stück: "27.500 €", gesamt: "27.500 €" },
                    { pos: 3, bez: "Fahrsilo (2x)", stück: "30.000 €", gesamt: "60.000 €" },
                    { pos: 4, bez: "Großer Unterstand", stück: "12.500 €", gesamt: "12.500 €" },
                    { pos: 5, bez: "Hof Silo", stück: "10.000 €", gesamt: "10.000 €" },
                    { pos: 6, bez: "Getreidehalle", stück: "238.196 €", gesamt: "238.196 €" },
                    { pos: 7, bez: "Misthaufen", stück: "8.500 €", gesamt: "8.500 €" },
                    { pos: 8, bez: "Dieseltank", stück: "8.000 €", gesamt: "8.000 €" }
                ]
            },
            {
                id: 13,
                name: "Hof 13 - Biokuhhof Hartmann",
                slogan: "Traditionell denken. Nachhaltig handeln.",
                beschreibung: "Fokus auf Bio-Milch und Direktvermarktung.",
                groesse: "2.28 ha",
                flaechen: "Ackerfläche 229 (1.38 ha)",
                tierhaltung: "Kühe",
                schwerpunkt: "Viehhaltung und Ackerbau",
                preis: "608.343 €",
                zielgruppe: "Für Bio-Pioniere und Hofladen-Betreiber.",
                preise: [
                    { pos: 1, bez: "Moderner Kuhstall bis 50 Tiere", stück: "257.196 €", gesamt: "257.196 €" },
                    { pos: 2, bez: "Misthaufen", stück: "8.500 €", gesamt: "8.500 €" },
                    { pos: 3, bez: "Großes Bunker Silo", stück: "16.000 €", gesamt: "16.000 €" },
                    { pos: 4, bez: "Gewächshaus (klein)", stück: "1.500 €", gesamt: "1.500 €" },
                    { pos: 5, bez: "Verkaufshütte (groß)", stück: "2.500 €", gesamt: "2.500 €" },
                    { pos: 6, bez: "Bayerisches Bauernhaus", stück: "189.147 €", gesamt: "189.147 €" },
                    { pos: 7, bez: "Holzunterstand mit Silo", stück: "23.250 €", gesamt: "23.250 €" },
                    { pos: 8, bez: "Weinzierl GFK Silo 43", stück: "35.750 €", gesamt: "71.500 €" },
                    { pos: 9, bez: "Kälberhütte - Individuum (6x)", stück: "250 €", gesamt: "250 €" },
                    { pos: 10, bez: "Moderne Maschinenhalle", stück: "37.250 €", gesamt: "37.250 €" }
                ]
            },
            {
                id: 14,
                name: "Hof 14 - Tierhof Baumer",
                slogan: "Alles aus einer Hand.",
                beschreibung: "Umfangreicher Mischbetrieb für Schweine und Rinder.",
                groesse: "1.79 ha",
                flaechen: "Ackerfläche 1 (1.71 ha)",
                tierhaltung: "Kühe & Schweine",
                schwerpunkt: "Viehhaltung und Ackerbau",
                preis: "744.286 €",
                zielgruppe: "Für Landwirte, die auf mehrere Standbeine setzen.",
                preise: [
                    { pos: 1, bez: "Kuhstall bis 40 Tiere", stück: "67.000 €", gesamt: "67.000 €" },
                    { pos: 2, bez: "Bayerisches Bauernhaus", stück: "189.147 €", gesamt: "189.147 €" },
                    { pos: 3, bez: "Weinzierl GFK Silo 43 Extension", stück: "34.750 €", gesamt: "34.750 €" },
                    { pos: 4, bez: "Weinzierl GFK Silo 43 (2x)", stück: "35.750 €", gesamt: "35.750 €" },
                    { pos: 5, bez: "Bunker Silo", stück: "16.000 €", gesamt: "16.000 €" },
                    { pos: 6, bez: "Moderne Maschinenhalle", stück: "37.250 €", gesamt: "37.250 €" },
                    { pos: 7, bez: "Bayerischer Kuhstall mit Unterstand 120 Tiere", stück: "62.500 €", gesamt: "62.500 €" },
                    { pos: 8, bez: "Schweinestall bis zu 170 Tieren", stück: "46.500 €", gesamt: "46.500 €" },
                    { pos: 9, bez: "Misthaufen", stück: "8.500 €", gesamt: "8.500 €" },
                    { pos: 10, bez: "Bayerisches Bauernhaus mit Halle", stück: "198.139 €", gesamt: "198.139 €" },
                    { pos: 11, bez: "Großer Unterstand", stück: "12.500 €", gesamt: "12.500 €" }
                ]
            },
            {
                id: 15,
                name: "Hof 15 - Ackerbau Knarr",
                slogan: "Wir ackern für die Zukunft.",
                beschreibung: "Reiner Ackerbaubetrieb mit Silos und Hallen.",
                groesse: "0.95 ha",
                flaechen: "Ackerfläche 13 (2.76 ha)",
                tierhaltung: "keine",
                schwerpunkt: "Ackerbau",
                preis: "619.700 €",
                zielgruppe: "Spezialisiert auf Feldbewirtschaftung.",
                preise: [
                    { pos: 1, bez: "Moderne Maschinenhalle", stück: "73.250 €", gesamt: "73.250 €" },
                    { pos: 2, bez: "Garage 02", stück: "12.500 €", gesamt: "12.500 €" },
                    { pos: 3, bez: "Haus 11", stück: "159.100 €", gesamt: "159.100 €" },
                    { pos: 4, bez: "Bin 2000+2", stück: "65.000 €", gesamt: "65.000 €" }
                ]
            },
            {
                id: 16,
                name: "Hof 16 - Ackerbau Huber",
                slogan: "Tradition im Herzen. Zukunft im Blick.",
                beschreibung: "Kompakter Ackerbaubetrieb mit stattlichem Wohnhaus.",
                groesse: "1.27 ha",
                flaechen: "Ackerfläche 22 (5.16 ha)",
                tierhaltung: "keine",
                schwerpunkt: "Ackerbau",
                preis: "513.900 €",
                zielgruppe: "Ideal für reine Ackerbauprofis.",
                preise: [
                    { pos: 1, bez: "Oberbayerisches Bauernhaus mit Werkstatt", stück: "209.000 €", gesamt: "209.000 €" },
                    { pos: 2, bez: "Moderne Maschinen Halle", stück: "37.250 €", gesamt: "37.250 €" },
                    { pos: 3, bez: "Sägewerk Schuppen", stück: "10.000 €", gesamt: "10.000 €" }
                ]
            }
        ];
        /* === HOEFE_CODE_END === */

        const defaultKaeuferListe = [
            "🛒 | Fahrzeughändler",
            "🐄 | Viehhandel",
            "🏭 | Landhandel",
            "🚜 | Lohnunternehmen",
            "🏠 | Lennard & Alex",
            "🏠 | Agrarbetrieb Illschwang",
            "🏠 | Bergwiesenhof",
            "🏠 | Hof Kirchberger",
            "🍇 | Weingut Werner",
            "🏛️ | Gemeinde"
        ];

        /* ================================================================
           HÖFE DER ILLSCHWANG – ZENTRALE KONFIGURATION
           Diese Werte stehen absichtlich VOR jeder Initialisierung.
           Dadurch kann das erste Rendering nicht mehr durch die
           Konfiguration oder den Admin-Zustand blockiert werden.
        ================================================================= */
        /* Admin-Zugangsdaten werden ausschließlich vom Backend verwaltet.
           Im Browser werden niemals Passwörter gespeichert oder ausgeliefert. */
        const ADMIN_CODE_DEFAULTS = [];

        /* === DISCORD_CODE_START === */
        const DISCORD_CODE_CONFIG = {
            settings: { },
            channels: [
                {
                    id: 'dc-kaufantraege',
                    name: '#kaufanträge',
                    serverId: '1547013482338328647',
                    channelId: '1547013483046899754',
                    event: 'purchase'
                }
            ]
        };
        /* === DISCORD_CODE_END === */

        /* === STATUS_CODE_START === */
        const HOF_STATUS_CODE_DEFAULTS = {};
        const HOF_BUYER_CODE_DEFAULTS = {};
        /* === STATUS_CODE_END === */

        let kaeuferListe = JSON.parse(localStorage.getItem('ls25_kaeuferListe')) || defaultKaeuferListe;
        let businessList = [];
        let hofStatus = structuredClone(HOF_STATUS_CODE_DEFAULTS || {});
        let hofKaeufer = structuredClone(HOF_BUYER_CODE_DEFAULTS || {});

        // Jeder Hof bekommt beim Start garantiert einen gültigen Verkaufsstatus.
        // Nur ein ausdrücklich gespeicherter Verkauf bleibt verkauft.
        hoefeData.forEach(hof => {
            if (hofStatus[hof.id] !== 'verkauft' && hofStatus[hof.id] !== 'zu-verkaufen') {
                hofStatus[hof.id] = 'zu-verkaufen';
            }
        });

        var aktuellerFilter = 'alle';
        let aktuellerModalHofId = null;
        let detailModalScrollY = 0;
        let inputModalCallback = null;
        let selectedCustomDropdownValue = "";
        let isAdmin = false;
        let adminUserPreview = false;
        let observedRole = null;
        let currentAdminId = null;
        let currentUserAccount = null;
        let userAccountModalMode = 'login';
        let adminProfileEditId = null;
        let adminProfiles = [];
        let adminSessionPassword = '';
        let adminProfilesLoaded = false;
        let adminLogs = JSON.parse(localStorage.getItem('ls25_adminLogs')) || [];
        let savedHoefe = {}; // Änderungen werden beim HTML-Speichern direkt in den Quellcode geschrieben.
        let tempUploadedImages = [];
        let pendingImageLoads = 0;
        let purchaseApplications = JSON.parse(localStorage.getItem('ls25_kaufantraege')) || [];
        let hiddenPurchaseApplicationIds = new Set(JSON.parse(localStorage.getItem('ls25_kaufantraege_hidden') || '[]'));
        let purchaseModalHofId = null;
        let discordSettings = structuredClone(DISCORD_CODE_CONFIG.settings || {});
        const discordCodeChannels = (DISCORD_CODE_CONFIG.channels || []).map(c => ({
            ...c,
            url: c.serverId && c.channelId ? `https://discord.com/channels/${c.serverId}/${c.channelId}` : '',
        }));
        let discordChannels = [...discordCodeChannels];
        let hofSearchTerm = '';
        let favoritesOnly = false;
        let favoriteHoefe = JSON.parse(localStorage.getItem('ls25_favoriteHoefe')) || [];
        let compareHoefe = JSON.parse(localStorage.getItem('ls25_compareHoefe')) || [];
        const compareLimit = 3;
        let hofFinder = { priceMin:'', priceMax:'', areaMin:'', areaMax:'', type:'', animal:'', equipment:'', sort:'default', freeOnly:false, favoritesOnly:false };
        let purchaseApplicationUnread = Number(localStorage.getItem('ls25_kaufantraege_unread') || 0);
        let purchaseApplicationSeenIds = new Set(JSON.parse(localStorage.getItem('ls25_kaufantraege_seen') || '[]'));
        let purchaseApplicationSeenInitialized = purchaseApplicationSeenIds.size > 0;
        let customAddedHoefe = [];
        let deletedHofIds = [];
        let hofEditId = null;
        let ownProfileEditing = false;

        // Theme und Admin-UI erst nach der vollständigen Initialisierung aktualisieren.
        const savedTheme = localStorage.getItem('ls25_theme') || 'dark';
        if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        // UI-Initialisierung erfolgt erst ganz am Ende nach vollständiger DOM-/State-Initialisierung.

        function toggleTheme() {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('ls25_theme', isDark ? 'dark' : 'light');
            updateThemeButtonUI();
        }

        function updateThemeButtonUI() {
            const isDark = document.documentElement.classList.contains('dark');
            const icon = document.getElementById('theme-icon');
            const text = document.getElementById('theme-text');
            if (icon) icon.textContent = isDark ? '☀️' : '🌙';
            if (text) text.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        }

        function parseEuroValue(value) {
            const match = String(value || '').replace(/\./g, '').replace(',', '.').match(/-?[0-9]+(?:\.[0-9]+)?/);
            return match ? Number(match[0]) : 0;
        }

        function parseHaValue(value) {
            const match = String(value || '').replace(',', '.').match(/([0-9]+(?:\.[0-9]+)?)/);
            return match ? Number(match[1]) : 0;
        }

        function getHofFinderType(hof) {
            const tier = String(hof.tierhaltung || '').toLowerCase();
            const focus = String(hof.schwerpunkt || '').toLowerCase();
            const hasAnimals = tier && tier !== 'keine' && tier !== '-';
            const hasArable = /ackerbau|acker/.test(focus) || /ackerbau|acker/.test(String(hof.flaechen || '').toLowerCase());
            if (hasAnimals && hasArable) return 'Gemischtbetrieb';
            if (hasAnimals) {
                if (tier.includes('schwein')) return 'Schweine';
                if (tier.includes('milch') || tier.includes('kuh') || tier.includes('rind')) return 'Milchvieh';
                if (tier.includes('geflügel') || tier.includes('huhn')) return 'Geflügel';
                if (tier.includes('schaf')) return 'Schafe';
                if (tier.includes('pferd')) return 'Pferde';
                return 'Tierhaltung';
            }
            if (hasArable) return 'Ackerbau';
            return 'Sonstiges';
        }

        function hofMatchesFinder(hof) {
            const price = parseEuroValue(hof.preis);
            const area = parseHaValue(hof.groesse);
            const priceMin = hofFinder.priceMin === '' ? null : Number(hofFinder.priceMin);
            const priceMax = hofFinder.priceMax === '' ? null : Number(hofFinder.priceMax);
            const areaMin = hofFinder.areaMin === '' ? null : Number(hofFinder.areaMin);
            const areaMax = hofFinder.areaMax === '' ? null : Number(hofFinder.areaMax);
            const text = `${hof.name || ''} ${hof.beschreibung || ''} ${hof.tierhaltung || ''} ${hof.schwerpunkt || ''} ${hof.flaechen || ''} ${(hof.preise || []).map(p => p.bez || '').join(' ')}`.toLowerCase();

            if (priceMin !== null && price < priceMin) return false;
            if (priceMax !== null && price > priceMax) return false;
            if (areaMin !== null && area < areaMin) return false;
            if (areaMax !== null && area > areaMax) return false;
            if (hofFinder.type && getHofFinderType(hof) !== hofFinder.type) return false;
            if (hofFinder.animal) {
                const animalText = String(hof.tierhaltung || '').toLowerCase().trim();
                const noAnimals = !animalText || animalText === 'keine' || animalText === '-' || animalText.includes('keine tier');
                if (hofFinder.animal === 'keine') {
                    if (!noAnimals) return false;
                } else if (!animalText.includes(hofFinder.animal.toLowerCase())) return false;
            }
            if (hofFinder.equipment && !text.includes(hofFinder.equipment.toLowerCase())) return false;
            return true;
        }

        function formatEuro(n) { return Number(n || 0).toLocaleString('de-DE') + ' €'; }

        // Der Hof-Finder passt seine Grenzen automatisch an die aktuell hinterlegten Höfe an.
        // Preis: auf die nächste 100.000-€-Stufe aufrunden (z. B. 867.450 € -> 900.000 €).
        // Größe: auf die nächste 10-ha-Stufe aufrunden (z. B. 47 ha -> 50 ha).
        function getFinderCaps() {
            const list = Array.isArray(hoefeData) ? hoefeData : [];
            const prices = list.map(h => parseEuroValue(h.preis)).filter(v => v > 0);
            const areas = list.map(h => parseHaValue(h.groesse)).filter(v => v > 0);
            const maxPrice = prices.length ? Math.max(...prices) : 0;
            const maxArea = areas.length ? Math.max(...areas) : 0;
            const priceCap = Math.max(100000, Math.ceil(maxPrice / 100000) * 100000);
            const areaCap = Math.max(10, Math.ceil(maxArea / 10) * 10);
            return { maxPrice, maxArea, priceCap, areaCap };
        }

        function applyFinderCaps() {
            const caps = getFinderCaps();
            const priceMin = document.getElementById('finder-price-min-range');
            const priceMax = document.getElementById('finder-price-max-range');
            const areaMin = document.getElementById('finder-area-min-range');
            const areaMax = document.getElementById('finder-area-max-range');
            if (priceMin) priceMin.max = String(caps.priceCap);
            if (priceMax) priceMax.max = String(caps.priceCap);
            if (areaMin) areaMin.max = String(caps.areaCap);
            if (areaMax) areaMax.max = String(caps.areaCap);
            return caps;
        }

        let finderLiveRenderTimer = null;
        let finderRangeInteraction = false;

        function scheduleFinderLiveRender() {
            clearTimeout(finderLiveRenderTimer);
            finderLiveRenderTimer = setTimeout(() => {
                finderLiveRenderTimer = null;
                renderHöfe();
            }, 80);
        }

        function setFinderRange(key, value) {
            // Der Finder bleibt beim Ändern von Slidern dauerhaft geöffnet.
            const panel = document.getElementById('hof-finder-panel');
            if (panel) { panel.dataset.open = 'true'; panel.classList.remove('hidden'); }
            const num = value === '' ? '' : Number(value);
            const pair = key === 'priceMin' || key === 'priceMax' ? ['priceMin','priceMax'] : ['areaMin','areaMax'];
            hofFinder[key] = num;
            const caps = getFinderCaps();
            const maxDefault = pair[0] === 'priceMin' ? caps.priceCap : caps.areaCap;
            let min = hofFinder[pair[0]] === '' ? 0 : Number(hofFinder[pair[0]]);
            let max = hofFinder[pair[1]] === '' ? maxDefault : Number(hofFinder[pair[1]]);
            if (min > max) {
                if (key === pair[0]) hofFinder[pair[1]] = num;
                else hofFinder[pair[0]] = num;
            }
            // Während des Ziehens niemals die Range-Inputs neu setzen: Das würde auf
            // Touch-Geräten den Slider zurücksetzen und den Finder scheinbar schließen.
            updateFinderRangeLabelsOnly();
            scheduleFinderLiveRender();
        }

        function updateFinderRangeLabelsOnly() {
            const caps = getFinderCaps();
            const ranges = {
                'finder-price-min-range': hofFinder.priceMin === '' ? 0 : Number(hofFinder.priceMin),
                'finder-price-max-range': hofFinder.priceMax === '' ? caps.priceCap : Number(hofFinder.priceMax),
                'finder-area-min-range': hofFinder.areaMin === '' ? 0 : Number(hofFinder.areaMin),
                'finder-area-max-range': hofFinder.areaMax === '' ? caps.areaCap : Number(hofFinder.areaMax)
            };
            const labels = {
                'finder-price-min-label': formatEuro(ranges['finder-price-min-range']),
                'finder-price-max-label': formatEuro(ranges['finder-price-max-range']),
                'finder-area-min-label': `${ranges['finder-area-min-range']} ha`,
                'finder-area-max-label': `${ranges['finder-area-max-range']} ha`
            };
            Object.entries(labels).forEach(([id,v]) => { const e=document.getElementById(id); if(e)e.textContent=v; });
        }

        function toggleFinderFreeOnly() { hofFinder.freeOnly = !hofFinder.freeOnly; renderHöfe(); }
        function toggleFinderFavoritesOnly() { hofFinder.favoritesOnly = !hofFinder.favoritesOnly; renderHöfe(); }

        function removeFinderFilter(key) {
            if (key === 'sort') hofFinder.sort = 'default';
            else if (key === 'freeOnly' || key === 'favoritesOnly') hofFinder[key] = false;
            else hofFinder[key] = '';
            syncFinderInputs();
            renderHöfe();
        }

        function syncFinderInputs() {
            const values = { 'finder-type':hofFinder.type, 'finder-animal':hofFinder.animal, 'finder-equipment':hofFinder.equipment, 'finder-sort':hofFinder.sort };
            Object.entries(values).forEach(([id,v]) => { const e=document.getElementById(id); if(e)e.value=v; });
            const caps = applyFinderCaps();
            const ranges = {'finder-price-min-range':hofFinder.priceMin===''?0:Number(hofFinder.priceMin),'finder-price-max-range':hofFinder.priceMax===''?caps.priceCap:Number(hofFinder.priceMax),'finder-area-min-range':hofFinder.areaMin===''?0:Number(hofFinder.areaMin),'finder-area-max-range':hofFinder.areaMax===''?caps.areaCap:Number(hofFinder.areaMax)};
            Object.entries(ranges).forEach(([id,v])=>{const e=document.getElementById(id);if(e)e.value=v;});
            const labels={'finder-price-min-label':formatEuro(ranges['finder-price-min-range']),'finder-price-max-label':formatEuro(ranges['finder-price-max-range']),'finder-area-min-label':`${ranges['finder-area-min-range']} ha`,'finder-area-max-label':`${ranges['finder-area-max-range']} ha`};
            Object.entries(labels).forEach(([id,v])=>{const e=document.getElementById(id);if(e)e.textContent=v;});
        }

        function updateFinderUI() {
            const panel = document.getElementById('hof-finder-panel');
            const btn = document.getElementById('hof-finder-btn');
            const result = document.getElementById('finder-result-count');
            if (!panel) return;
            if (panel.dataset.open === 'true') panel.classList.remove('hidden'); else panel.classList.add('hidden');
            if (btn) {
                const active = Object.entries(hofFinder).some(([k,v]) => k !== 'sort' && ((typeof v === 'boolean' && v) || (typeof v === 'string' && v !== '') || (typeof v === 'number' && v !== ''))) || hofFinder.sort !== 'default';
                btn.classList.toggle('bg-indigo-600', active); btn.classList.toggle('text-white', active);
            }
            const chips = [];
            const add = (key,label) => chips.push(`<button type="button" onclick="removeFinderFilter('${key}')" class="px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-900/60">${escapeHtmlAttr(label)} ×</button>`);
            if (hofFinder.priceMin !== '' && Number(hofFinder.priceMin) > 0) add('priceMin',`Preis ab ${formatEuro(hofFinder.priceMin)}`);
            const caps = getFinderCaps();
            if (hofFinder.priceMax !== '' && Number(hofFinder.priceMax) < caps.priceCap) add('priceMax',`Preis bis ${formatEuro(hofFinder.priceMax)}`);
            if (hofFinder.areaMin !== '' && Number(hofFinder.areaMin) > 0) add('areaMin',`ab ${hofFinder.areaMin} ha`);
            if (hofFinder.areaMax !== '' && Number(hofFinder.areaMax) < caps.areaCap) add('areaMax',`bis ${hofFinder.areaMax} ha`);
            if (hofFinder.type) add('type',hofFinder.type); if (hofFinder.animal) add('animal',hofFinder.animal); if (hofFinder.equipment) add('equipment',`🔎 ${hofFinder.equipment}`);
            if (hofFinder.sort !== 'default') add('sort',document.getElementById('finder-sort')?.selectedOptions[0]?.textContent || 'Sortierung');
            if (hofFinder.freeOnly) add('freeOnly','🏷️ Nur zu verkaufen'); if (hofFinder.favoritesOnly) add('favoritesOnly','♥ Nur Favoriten');
            const chipBox=document.getElementById('finder-active-filters'); if(chipBox) chipBox.innerHTML=chips.length?chips.join(''):'<span class="text-xs text-slate-400">Keine erweiterten Filter aktiv.</span>';
            const free=document.getElementById('finder-free-only'), fav=document.getElementById('finder-favorites-only');
            [ [free,hofFinder.freeOnly], [fav,hofFinder.favoritesOnly] ].forEach(([e,a])=>{if(e){e.classList.toggle('bg-indigo-600',a);e.classList.toggle('text-white',a);}});
            if (!finderRangeInteraction) syncFinderInputs();
        }

        function initFinderRangeInteraction() {
            ['finder-price-min-range','finder-price-max-range','finder-area-min-range','finder-area-max-range'].forEach(id => {
                const el = document.getElementById(id);
                if (!el || el.dataset.v34Bound === 'true') return;
                el.dataset.v34Bound = 'true';
                el.addEventListener('pointerdown', () => { finderRangeInteraction = true; });
                el.addEventListener('focus', () => { finderRangeInteraction = true; });
                el.addEventListener('pointerup', () => { finderRangeInteraction = false; renderHöfe(); });
                el.addEventListener('change', () => { finderRangeInteraction = false; renderHöfe(); });
                el.addEventListener('blur', () => { finderRangeInteraction = false; });
            });
        }

        function setFinderFilter(key,value) { hofFinder[key]=value; renderHöfe(); }
        setTimeout(initFinderRangeInteraction, 0);
        function finderAnalysisData(){
            const list=Array.isArray(hoefeData)?hoefeData:[];
            const available=list.filter(h=>hofStatus[h.id]==='zu-verkaufen');
            const prices=list.map(h=>({h,v:parseEuroValue(h.preis)})).filter(x=>x.v>0);
            const areas=list.map(h=>({h,v:parseHaValue(h.groesse)})).filter(x=>x.v>0);
            const cheapest=prices.length?prices.reduce((a,b)=>a.v<=b.v?a:b):null;
            const expensive=prices.length?prices.reduce((a,b)=>a.v>=b.v?a:b):null;
            const smallest=areas.length?areas.reduce((a,b)=>a.v<=b.v?a:b):null;
            const largest=areas.length?areas.reduce((a,b)=>a.v>=b.v?a:b):null;
            return {list,available,cheapest,expensive,smallest,largest};
        }
        function renderFinderAnalysis(){
            if(currentAppView!=='finder')return;
            const box=document.getElementById('finder-analysis'); if(!box)return;
            const a=finderAnalysisData();
            const priceName=x=>x?`${escapeHtmlAttr(x.h.name||'Hof')} · ${formatEuro(x.v)}`:'—';
            const areaName=x=>x?`${escapeHtmlAttr(x.h.name||'Hof')} · ${x.v.toLocaleString('de-DE')} ha`:'—';
            const avgArea=a.list.length?a.list.reduce((sum,h)=>sum+parseHaValue(h.groesse),0)/a.list.length:0;
            box.innerHTML=`<div class="mb-3"><div class="text-xs uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">Automatische Hof-Analyse</div><div class="text-sm text-slate-500 dark:text-slate-400 mt-1">Die Kennzahlen werden direkt aus den aktuell hinterlegten Höfen berechnet.</div></div><div class="finder-analysis-grid"><div class="finder-analysis-item"><div class="finder-analysis-label">Preis-Cap</div><div class="finder-analysis-value">${formatEuro(getFinderCaps().priceCap)}</div><div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Teuerster Hof: ${formatEuro(a.expensive?.v || 0)}</div></div><div class="finder-analysis-item"><div class="finder-analysis-label">Größen-Cap</div><div class="finder-analysis-value">${getFinderCaps().areaCap.toLocaleString('de-DE')} ha</div><div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Größter Hof: ${a.largest ? a.largest.v.toLocaleString('de-DE') : 0} ha</div></div><div class="finder-analysis-item"><div class="finder-analysis-label">Teuerster Hof</div><div class="finder-analysis-value">${priceName(a.expensive)}</div></div><div class="finder-analysis-item"><div class="finder-analysis-label">Günstigster Hof</div><div class="finder-analysis-value">${priceName(a.cheapest)}</div></div><div class="finder-analysis-item"><div class="finder-analysis-label">Größter Hof</div><div class="finder-analysis-value">${areaName(a.largest)}</div></div><div class="finder-analysis-item"><div class="finder-analysis-label">Kleinster Hof</div><div class="finder-analysis-value">${areaName(a.smallest)}</div></div><div class="finder-analysis-item"><div class="finder-analysis-label">Zu verkaufen</div><div class="finder-analysis-value">${a.available.length} von ${a.list.length}</div></div><div class="finder-analysis-item"><div class="finder-analysis-label">Ø Hofgröße</div><div class="finder-analysis-value">${avgArea.toLocaleString('de-DE',{maximumFractionDigits:1})} ha</div></div></div>`;
        }
        function getFinderAIMatch(hof){
            let score=100,reasons=[],warnings=[];
            const price=parseEuroValue(hof.preis),area=parseHaValue(hof.groesse),type=getHofFinderType(hof);
            const animalText=String(hof.tierhaltung||'').toLowerCase().trim();
            const noAnimals=!animalText||animalText==='keine'||animalText==='-'||animalText.includes('keine tier');
            if(hofFinder.priceMax!==''){const max=Number(hofFinder.priceMax);if(price<=max)reasons.push('im Budget');else{score-=Math.min(35,Math.round(((price-max)/Math.max(max,1))*35));warnings.push('über dem Budget')}}
            if(hofFinder.priceMin!==''){const min=Number(hofFinder.priceMin);if(price>=min)reasons.push('über Mindestpreis');else score-=5}
            if(hofFinder.areaMin!==''){const min=Number(hofFinder.areaMin);if(area>=min)reasons.push('gewünschte Größe erreicht');else{score-=Math.min(25,Math.round(((min-area)/Math.max(min,1))*25));warnings.push('kleiner als gewünscht')}}
            if(hofFinder.areaMax!==''){const max=Number(hofFinder.areaMax);if(area<=max)reasons.push('unter Größenlimit');else{score-=Math.min(18,Math.round(((area-max)/Math.max(max,1))*18));warnings.push('größer als gewünscht')}}
            if(hofFinder.type){if(type===hofFinder.type){score+=4;reasons.push('Betriebsart passt')}else{score-=15;warnings.push('Betriebsart weicht ab')}}
            if(hofFinder.animal){if(hofFinder.animal==='keine'){if(noAnimals)reasons.push('keine Tierhaltung');else{score-=20;warnings.push('Tierhaltung vorhanden')}}else if(animalText.includes(hofFinder.animal.toLowerCase())){score+=6;reasons.push('Tierart passt')}else{score-=14;warnings.push('Tierart weicht ab')}}
            if(hofFinder.equipment){const text=`${hof.name||''} ${hof.beschreibung||''} ${hof.flaechen||''} ${hof.tierhaltung||''} ${hof.schwerpunkt||''} ${(hof.preise||[]).map(p=>p.bez||'').join(' ')}`.toLowerCase();if(text.includes(hofFinder.equipment.toLowerCase())){score+=6;reasons.push('Suchbegriff gefunden')}else{score-=8;warnings.push('Suchbegriff nicht erkannt')}}
            if(hofStatus[hof.id]==='zu-verkaufen')reasons.push('aktuell zu verkaufen');else score-=4;
            return {hof,score:Math.max(0,Math.min(100,Math.round(score))),reasons,warnings};
        }
        function renderFinderAIResults(matches){
            if(currentAppView!=='finder')return;
            const box=document.getElementById('finder-ai-results');if(!box)return;
            const hasCriteria=hofFinder.priceMin!==''||hofFinder.priceMax!==''||hofFinder.areaMin!==''||hofFinder.areaMax!==''||hofFinder.type||hofFinder.animal||hofFinder.equipment||hofFinder.freeOnly||hofFinder.favoritesOnly;
            if(!hasCriteria){box.innerHTML=`<div class="finder-ai-box"><div class="text-xs uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">Mini-KI</div><div class="font-black text-lg mt-1">🤖 Bereit für deine Suche</div><div class="finder-reason mt-1">Setze Kriterien. Danach bewertet die Mini-KI die passendsten Höfe und erklärt die Unterschiede.</div></div>`;return;}
            const pool=(matches&&matches.length?matches:hoefeData).map(getFinderAIMatch).sort((a,b)=>b.score-a.score).slice(0,3);
            box.innerHTML=`<div class="finder-ai-box"><div class="flex items-start justify-between gap-3"><div><div class="text-xs uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">Mini-KI</div><div class="font-black text-lg mt-1">🤖 Beste Übereinstimmungen</div></div><div class="text-xs text-slate-500 dark:text-slate-400">${matches.length} direkte Treffer</div></div><div class="space-y-3 mt-4">${pool.map((r,i)=>`<button type="button" onclick="openModal(${r.hof.id})" class="w-full text-left bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3 hover:border-indigo-400 transition"><div class="flex items-center gap-3"><div class="finder-score">${r.score}%</div><div class="min-w-0"><div class="font-black truncate">${i+1}. ${escapeHtmlAttr(r.hof.name||'Hof')}</div><div class="text-xs text-slate-500 dark:text-slate-400">${r.hof.preis||'—'} · ${parseHaValue(r.hof.groesse).toLocaleString('de-DE')} ha</div></div></div>${r.reasons.length?`<div class="finder-reason mt-2">✓ ${r.reasons.join(' · ')}</div>`:''}${r.warnings.length?`<div class="finder-reason mt-1">⚠ ${r.warnings.join(' · ')}</div>`:''}</button>`).join('')}</div></div>`;
        }

        function resetHofFinder() { hofFinder={priceMin:'',priceMax:'',areaMin:'',areaMax:'',type:'',animal:'',equipment:'',sort:'default',freeOnly:false,favoritesOnly:false}; applyFinderCaps(); syncFinderInputs(); renderHöfe(); }

        function getHofDay(){
            if(!hoefeData.length)return null;
            const d=new Date(); const key=d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();
            return hoefeData[key % hoefeData.length];
        }
        function renderHofDay(){
            const h=getHofDay(); if(!h)return;
            document.getElementById('hof-day-title').textContent=h.name;
            document.getElementById('hof-day-meta').textContent=`${h.preis} · ${h.groesse} · ${h.schwerpunkt||'Landwirtschaft'}`;
            document.getElementById('hof-day-description').textContent=h.slogan||h.beschreibung||'';
            const b=document.getElementById('hof-day-favorite'); const fav=favoriteHoefe.includes(h.id); b.textContent=fav?'♥ Gemerkt':'♡ Merken';
        }
        function openHofDay(){const h=getHofDay();if(h)openModal(h.id);}
        function toggleDayFavorite(){const h=getHofDay();if(!h)return;toggleFavorite({stopPropagation:()=>{}},h.id);renderHofDay();}
        async function syncUserPreferences(){if(!currentUserAccount||!window.hofCloudSync?.status?.().authenticated)return;try{await window.hofCloudSync.updateUserPreferences({favorites:favoriteHoefe,compare:compareHoefe});}catch(e){console.warn('Kontodaten konnten nicht gespeichert werden:',e.message);}}
        function toggleCompare(event,id){event?.stopPropagation?.();const i=compareHoefe.indexOf(id);if(i>=0)compareHoefe.splice(i,1);else{if(compareHoefe.length>=compareLimit){showAdminToast('Maximal 3 Höfe können verglichen werden.','error');return;}compareHoefe.push(id);}localStorage.setItem('ls25_compareHoefe',JSON.stringify(compareHoefe));syncUserPreferences();renderHöfe();renderComparePanel();}
        function clearHofCompare(){compareHoefe=[];localStorage.setItem('ls25_compareHoefe','[]');syncUserPreferences();renderHöfe();renderComparePanel();}
        function renderComparePanel(){
            const panel=document.getElementById('hof-compare-panel'),box=document.getElementById('hof-compare-content'); if(!panel||!box)return;
            const hs=compareHoefe.map(id=>hoefeData.find(h=>h.id===id)).filter(Boolean);
            const compareViewActive=currentAppView==='compare';
            panel.classList.toggle('hidden',!compareViewActive&&hs.length<2);
            const clearButton=document.getElementById('compare-clear-button');
            if(clearButton){clearButton.disabled=hs.length===0;clearButton.classList.toggle('opacity-50',hs.length===0);}
            if(hs.length<2){
                box.innerHTML=compareViewActive
                    ? `<div class="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-6 text-center"><div class="text-3xl mb-2">⚖️</div><h3 class="font-black text-lg">Noch keine Höfe zum Vergleichen</h3><p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Wähle auf der Hofübersicht mindestens zwei Höfe mit dem Vergleichssymbol aus.</p><button type="button" onclick="showAppView('farms')" class="mt-4 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold">🏡 Höfe auswählen</button></div>`
                    : '';
                return;
            }

            const prices=hs.map(h=>parseEuroValue(h.preis)).filter(v=>v>0);
            const areas=hs.map(h=>parseHaValue(h.groesse)).filter(v=>v>0);
            const minPrice=Math.min(...prices), maxPrice=Math.max(...prices);
            const minArea=Math.min(...areas), maxArea=Math.max(...areas);

            const requestedType = String(hofFinder.type || '').trim().toLowerCase();
            const requestedAnimal = String(hofFinder.animal || '').trim().toLowerCase();

            const scoreById=new Map();
            const compareInfoById=new Map();
            hs.forEach(h=>{
                const price=parseEuroValue(h.preis);
                const area=parseHaValue(h.groesse);
                const type=getHofFinderType(h);
                const typeLower = String(type || '').trim().toLowerCase();
                const animal=(h.tierhaltung||'').trim().toLowerCase();

                const priceSpread = Math.max(1, maxPrice-minPrice);
                const areaSpread = Math.max(1, maxArea-minArea);
                const priceScore = 35 * (1 - ((price-minPrice)/priceSpread));
                const areaScore = 30 * ((area-minArea)/areaSpread);

                // Neutral compare scoring: the requested crop or livestock focus should not
                // distort the ranking; price and area remain the pure comparison dimensions.
                const typeScore = 0;
                const animalScore = 0;
                const stallScore = 0;
                const typePenalty = 0;

                let score = Math.round(Math.min(100, Math.max(0, priceScore + areaScore + typeScore + animalScore + stallScore + typePenalty)));
                if(hofStatus[h.id]==='verkauft') score = Math.max(0, score - 15);
                scoreById.set(h.id,score);

                const reasons=[];
                if(price===minPrice) reasons.push('günstigster Preis');
                else if(price===maxPrice) reasons.push('höchster Preis');
                else reasons.push(price<maxPrice?'deutlich günstiger Preis':'höherer Preis');

                if(area===maxArea) reasons.push('größte Fläche');
                else if(area===minArea) reasons.push('kleinste Fläche');
                else reasons.push(area>minArea?'größere Fläche':'kleinere Fläche');

                if(hofStatus[h.id]==='verkauft') reasons.push('verkauft');
                if(!reasons.length) reasons.push('allgemeiner Vergleich');
                compareInfoById.set(h.id,reasons.join(' • '));
            });
            const bestScore=Math.max(...hs.map(h=>scoreById.get(h.id)));
            const bestIds=new Set(hs.filter(h=>scoreById.get(h.id)===bestScore).map(h=>h.id));
            const rows=[['Status',h=>hofStatus[h.id]==='verkauft'?'🔴 Verkauft':'🟢 Zu verkaufen'],['Preis',h=>h.preis],['Größe',h=>h.groesse],['Schwerpunkt',h=>h.schwerpunkt||'—'],['Tierhaltung',h=>h.tierhaltung||'—'],['Flächen',h=>h.flaechen||'—'],['Gesamtwertung',h=>`${scoreById.get(h.id)}/100${bestIds.has(h.id)?' ⭐ Beste Wahl':''}`],['Vergleichslogik',h=>compareInfoById.get(h.id)||'—']];
            box.innerHTML=`<div class="compare-table-wrap"><table class="compare-table"><thead><tr><th class="compare-table-label compare-metric-head">Merkmal</th>${hs.map(h=>{
                const isBest=bestIds.has(h.id);
                return `<th class="compare-table-label compare-hof-head${isBest?' compare-hof-head-best':''}"><div class="compare-title"><span class="compare-hof-title">${escapeHtmlAttr(h.name)}</span>${isBest?`<span class="compare-best-badge">⭐ Beste Wahl</span>`:`<span class="compare-rank-badge">Rang ${scoreById.get(h.id)}</span>`}</div><button type="button" onclick="toggleCompare(event,${h.id})" class="compare-remove-button">Entfernen</button></th>`;
            }).join('')}</tr></thead><tbody>${rows.map(([label,fn])=>`<tr><td class="compare-table-label compare-row-label">${label}</td>${hs.map(h=>`<td class="compare-value${bestIds.has(h.id)&&label==='Gesamtwertung'?' compare-better-value':''}${label==='Vergleichslogik'?' compare-logic-value':''}">${escapeHtmlAttr(fn(h))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
        }

        function renderHöfe() {
            renderHofDay(); renderComparePanel();
            const grid = document.getElementById('hoefe-grid');
            if(!grid)return;
            grid.innerHTML = '';

            const finderActive = currentAppView === 'finder';
            if(finderActive){ renderFinderAnalysis(); }
            const finderResult = document.getElementById('finder-result-count');
            const finderAI = document.getElementById('finder-ai-results');
            const finderAnalysis = document.getElementById('finder-analysis');
            if(!finderActive){
                if(finderResult)finderResult.textContent='';
                if(finderAI)finderAI.innerHTML='';
                if(finderAnalysis)finderAnalysis.innerHTML='';
            }

            if (currentAppView === 'favorites' && favoriteHoefe.length === 0) {
                grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
                    <div class="text-4xl mb-3">❤️</div>
                    <h3 class="text-xl font-black text-slate-900 dark:text-white">Noch keine gemerkten Höfe</h3>
                    <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Du hast noch keinen Hof mit dem Herzen markiert.</p>
                    <button type="button" onclick="showAppView('farms')" class="mt-4 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold">🏡 Höfe entdecken</button>
                </div>`;
                return;
            }

            let gefiltert = hoefeData.filter(hof => {
                if (currentAppView === 'favorites') return favoriteHoefe.includes(hof.id);
                if (currentAppView === 'finder') {
                    if (hofFinder.freeOnly && hofStatus[hof.id] !== 'zu-verkaufen') return false;
                    if (hofFinder.favoritesOnly && !favoriteHoefe.includes(hof.id)) return false;
                    const haystack = `${hof.name} ${hof.slogan} ${hof.beschreibung} ${hof.schwerpunkt || ''}`.toLowerCase();
                    if (hofSearchTerm && !haystack.includes(hofSearchTerm.toLowerCase())) return false;
                    if (!hofMatchesFinder(hof)) return false;
                    return true;
                }
                // Startseite und "Höfe" zeigen den vollständigen Katalog ohne Finder-Filter.
                return true;
            });

            const price = h => parseEuroValue(h.preis);
            const area = h => parseHaValue(h.groesse);
            if (finderActive && hofFinder.sort === 'price-asc') gefiltert.sort((a,b) => price(a)-price(b));
            if (finderActive && hofFinder.sort === 'price-desc') gefiltert.sort((a,b) => price(b)-price(a));
            if (finderActive && hofFinder.sort === 'area-asc') gefiltert.sort((a,b) => area(a)-area(b));
            if (finderActive && hofFinder.sort === 'area-desc') gefiltert.sort((a,b) => area(b)-area(a));
            if (finderActive && hofFinder.sort === 'name') gefiltert.sort((a,b) => String(a.name).localeCompare(String(b.name), 'de'));

            const result = document.getElementById('finder-result-count');
            if (finderActive && result) {
                result.textContent = `${gefiltert.length} ${gefiltert.length === 1 ? 'Hof' : 'Höfe'} passend zum Hof-Finder`;
            }
            if(finderActive){ updateFinderUI(); renderFinderAIResults(gefiltert); }

            if (gefiltert.length === 0) {
                grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">Keine Höfe mit den aktuellen Filtern gefunden.<br><button type="button" onclick="resetHofFinder()" class="mt-3 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Filter zurücksetzen</button></div>`;
                return;
            }

            gefiltert.forEach(hof => {
                const status = hofStatus[hof.id];
                const isVerkauft = status === 'verkauft';
                const kaeufer = hofKaeufer[hof.id];
                const card = document.createElement('div');
                card.className = `hof-card-v31 rounded-xl shadow-sm border transition-all duration-200 p-6 flex flex-col justify-between hover:shadow-md cursor-pointer ${isVerkauft ? 'bg-red-100/80 dark:bg-red-950/20 border-red-300 dark:border-red-900/50' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`;
                card.onclick = (e) => { if (!e.target.closest('button')) openModal(hof.id); };
                card.innerHTML = `
                    <div>
                        <div class="hof-card-header-v31 mb-3">
                            <div class="hof-card-title-actions-v31">
                                <h3 class="font-black text-xl text-slate-900 dark:text-white leading-tight">${hof.name}</h3>
                                <button type="button" onclick="toggleFavorite(event, ${hof.id})" title="${favoriteHoefe.includes(hof.id)?'Favorit entfernen':'Zu Favoriten hinzufügen'}" aria-label="${favoriteHoefe.includes(hof.id)?'Favorit entfernen':'Zu Favoriten hinzufügen'}" class="favorite-btn ${favoriteHoefe.includes(hof.id)?'favorite-active':''} min-w-10 min-h-10 px-2 text-2xl inline-flex items-center justify-center shrink-0">${favoriteHoefe.includes(hof.id)?'♥':'♡'}</button>
                                <button type="button" onclick="toggleCompare(event, ${hof.id})" title="Hof vergleichen" aria-label="Hof vergleichen" class="px-2 min-w-10 min-h-10 rounded-lg text-lg hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0 ${compareHoefe.includes(hof.id)?'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30':''}">${compareHoefe.includes(hof.id)?'✓':'⚖️'}</button>
                            </div>
                            <div class="hof-card-status-v31">${isAdmin ? `<button onclick="toggleStatus(event, ${hof.id})" class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition shadow-sm cursor-pointer whitespace-nowrap ${isVerkauft ? 'badge-verkauft hover:bg-red-700' : 'badge-zu-verkaufen hover:bg-emerald-600'}">${isVerkauft ? 'Verkauft' : 'Zu verkaufen'}</button>` : `<span class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap ${isVerkauft ? 'badge-verkauft' : 'badge-zu-verkaufen'}">${isVerkauft ? 'Verkauft' : 'Zu verkaufen'}</span>`}</div>
                        </div>
                        <p class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold italic mb-3">"${hof.slogan}"</p>
                        <div class="flex flex-wrap gap-1.5 mb-3"><span class="px-2 py-1 rounded-full text-[11px] font-bold bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300">${getHofFinderType(hof)}</span>${hof.bilder?.length ? `<span class="px-2 py-1 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">📷 ${hof.bilder.length} Bilder</span>` : ''}${hof.tierhaltung && hof.tierhaltung !== 'Keine' ? `<span class="px-2 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">🐄 ${hof.tierhaltung}</span>` : ''}</div>
                        ${isVerkauft && kaeufer ? `<div class="mb-4 bg-red-200/90 dark:bg-red-950/40 border border-red-300 dark:border-red-900/50 px-3 py-2 rounded-lg flex items-center justify-between text-xs"><span class="text-red-900 dark:text-red-300 font-bold">👤 Käufer:</span><span class="font-black text-red-950 dark:text-red-100">${kaeufer}</span></div>` : ''}
                        <p class="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed line-clamp-2">${hof.beschreibung}</p>
                        <div class="border-t border-slate-200 dark:border-slate-800/80 pt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                            <div class="flex justify-between items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800/50"><span class="text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1.5">🏠 Hofgröße:</span><span class="font-semibold text-right">${hof.groesse}</span></div>
                            <div class="flex justify-between items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800/50"><span class="text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1.5">🌾 Flächen:</span><span class="font-semibold text-right">${hof.flaechen}</span></div>
                            <div class="flex justify-between items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800/50"><span class="text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1.5">🐄 Tierhaltung:</span><span class="font-semibold text-right">${hof.tierhaltung}</span></div>
                            <div class="flex justify-between items-center gap-2"><span class="text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1.5">🚜 Schwerpunkt:</span><span class="font-semibold text-right">${hof.schwerpunkt}</span></div>
                        </div>
                    </div>
                    <div class="border-t-2 border-b-4 border-double border-slate-300 dark:border-slate-700 mt-6 pt-2 pb-2 flex justify-between items-center"><span class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Gesamtpreis</span><span class="text-lg font-black text-slate-900 dark:text-white">${hof.preis}</span></div>`;
                grid.appendChild(card);
            });
        }

        let currentGalleryIndex = 0;

        function renderGallery(hof) {
            const container = document.getElementById('modal-image-container');
            container.innerHTML = '';
            const images = hof.bilder || [];

            if (!images.length) {
                container.classList.remove('hidden');
                container.innerHTML = `<div class="hof-gallery-empty">📷<br><span class="ml-2">Für diesen Hof sind noch keine Bilder hinterlegt.</span></div>`;
                return;
            }

            currentGalleryIndex = Math.min(currentGalleryIndex, images.length - 1);
            container.classList.remove('hidden');

            const gallery = document.createElement('div');
            gallery.className = 'hof-gallery';

            const main = document.createElement('div');
            main.className = 'hof-gallery-main';

            const mainImg = document.createElement('img');
            mainImg.alt = `${hof.name} – Bild ${currentGalleryIndex + 1}`;
            mainImg.src = images[currentGalleryIndex];
            main.appendChild(mainImg);

            if (images.length > 1) {
                const prev = document.createElement('button');
                prev.className = 'hof-gallery-arrow prev';
                prev.type = 'button';
                prev.setAttribute('aria-label', 'Vorheriges Bild');
                prev.textContent = '‹';
                prev.onclick = (e) => { e.stopPropagation(); changeGalleryImage(hof.id, -1); };
                main.appendChild(prev);

                const next = document.createElement('button');
                next.className = 'hof-gallery-arrow next';
                next.type = 'button';
                next.setAttribute('aria-label', 'Nächstes Bild');
                next.textContent = '›';
                next.onclick = (e) => { e.stopPropagation(); changeGalleryImage(hof.id, 1); };
                main.appendChild(next);

                const counter = document.createElement('div');
                counter.className = 'hof-gallery-counter';
                counter.textContent = `${currentGalleryIndex + 1} / ${images.length}`;
                main.appendChild(counter);
            }

            const thumbs = document.createElement('div');
            thumbs.className = 'hof-gallery-thumbs';

            images.forEach((src, index) => {
                const thumb = document.createElement('button');
                thumb.type = 'button';
                thumb.className = `hof-gallery-thumb ${index === currentGalleryIndex ? 'active' : ''}`;
                thumb.setAttribute('aria-label', `Bild ${index + 1} anzeigen`);
                const img = document.createElement('img');
                img.src = src;
                img.alt = `${hof.name} – Vorschau ${index + 1}`;
                thumb.appendChild(img);
                thumb.onclick = (e) => { e.stopPropagation(); currentGalleryIndex = index; renderGallery(hof); };
                thumbs.appendChild(thumb);
            });

            gallery.appendChild(main);
            gallery.appendChild(thumbs);
            container.appendChild(gallery);
        }

        function changeGalleryImage(hofId, direction) {
            const hof = hoefeData.find(h => h.id === hofId);
            if (!hof || !hof.bilder || hof.bilder.length < 2) return;
            currentGalleryIndex = (currentGalleryIndex + direction + hof.bilder.length) % hof.bilder.length;
            renderGallery(hof);
        }

        async function openModal(id, startInEditMode = false) {
            const hof = hoefeData.find(h => h.id === id);
            if (!hof) return;

            aktuellerModalHofId = id;
            currentGalleryIndex = 0;
            tempUploadedImages = (hof.bilder || []).map((url, i) => ({ id: (hof.imageIds || [])[i] || null, url, blob: null }));

            // Edit-Modus beim Öffnen zurücksetzen
            ['edit-title','edit-slogan','edit-masterdata','edit-beschreibung','edit-image-container','admin-save-btn'].forEach(el => {
                document.getElementById(el).classList.add('hidden');
            });
            ['modal-title','modal-slogan','modal-beschreibung'].forEach(el => {
                document.getElementById(el).classList.remove('hidden');
            });
            document.getElementById('admin-edit-btn').classList.toggle('hidden', !can('edit'));
            const buyerEditBtn = document.getElementById('modal-edit-kaeufer-btn');
            buyerEditBtn.classList.toggle('hidden', !(can('sales') && hofStatus[id] === 'verkauft'));
            buyerEditBtn.style.display = (can('sales') && hofStatus[id] === 'verkauft') ? 'inline-flex' : 'none';
            document.getElementById('edit-preise-container').classList.add('hidden');

            document.getElementById('modal-title').textContent = hof.name;
            document.getElementById('modal-slogan').textContent = `"${hof.slogan}"`;
            document.getElementById('quick-price').textContent = hof.preis || '—';
            document.getElementById('quick-area').textContent = hof.groesse || '—';
            document.getElementById('quick-focus').textContent = hof.schwerpunkt || '—';
            document.getElementById('quick-images').textContent = `${(hof.bilder || []).length} ${((hof.bilder || []).length === 1) ? 'Bild' : 'Bilder'}`;
            document.getElementById('modal-beschreibung').textContent = hof.beschreibung;
            document.getElementById('purchase-request-box').classList.toggle('hidden', hofStatus[id] === 'verkauft');
            document.getElementById('modal-zielgruppe').textContent = hof.zielgruppe;
            document.getElementById('modal-gesamtpreis').textContent = hof.preis;

            // Bilder aus IndexedDB als temporäre Object-URLs laden.
            if ((!hof.bilder || !hof.bilder.length) && hof.imageIds?.length) {
                const urls = [];
                for (const imageId of hof.imageIds) {
                    try { const blob = await imageDB.get(imageId); if (blob) urls.push(URL.createObjectURL(blob)); }
                    catch (e) { console.warn('Bild konnte nicht geladen werden:', imageId, e); }
                }
                hof.bilder = urls;
                tempUploadedImages = urls.map((url, i) => ({ id: hof.imageIds[i], url, blob: null }));
            }

            // Galerie
            renderGallery(hof);
            document.getElementById('quick-images').textContent = `${(hof.bilder || []).length} ${((hof.bilder || []).length === 1) ? 'Bild' : 'Bilder'}`;

            const isVerkauft = hofStatus[id] === 'verkauft';
            const kaeufer = hofKaeufer[id];
            const statusBox = document.getElementById('modal-status-box');
            const statusText = document.getElementById('modal-status-text');
            const kaeuferContainer = document.getElementById('modal-kaeufer-container');
            const kaeuferName = document.getElementById('modal-kaeufer-name');
            const editBtn = document.getElementById('modal-edit-kaeufer-btn');

            if (isVerkauft) {
                statusBox.className = "p-4 rounded-xl border bg-red-100 dark:bg-red-500/10 border-red-300 dark:border-red-500/30 flex justify-between items-center";
                statusText.textContent = "Verkauft";
                statusText.className = "font-bold text-base text-red-600 dark:text-red-500";
                if (kaeufer) {
                    kaeuferContainer.classList.remove('hidden');
                    kaeuferName.textContent = kaeufer;
                    editBtn.classList.remove('hidden');
                } else {
                    kaeuferContainer.classList.add('hidden');
                    editBtn.classList.remove('hidden');
                }
            } else {
                statusBox.className = "p-4 rounded-xl border bg-emerald-500/10 border-emerald-500/30 flex justify-between items-center";
                statusText.textContent = "Zu verkaufen";
                statusText.className = "font-bold text-base text-emerald-500";
                kaeuferContainer.classList.add('hidden');
                editBtn.classList.add('hidden');
            }

            const steckbriefBody = document.getElementById('modal-steckbrief');
            steckbriefBody.innerHTML = `
                <tr><td class="p-3 font-medium text-slate-500 dark:text-slate-400">🏠 Hofgröße</td><td class="p-3 font-semibold">${hof.groesse}</td></tr>
                <tr><td class="p-3 font-medium text-slate-500 dark:text-slate-400">🌾 Flächen</td><td class="p-3 font-semibold">${hof.flaechen}</td></tr>
                <tr><td class="p-3 font-medium text-slate-500 dark:text-slate-400">🐄 Tierhaltung</td><td class="p-3 font-semibold">${hof.tierhaltung}</td></tr>
                <tr><td class="p-3 font-medium text-slate-500 dark:text-slate-400">🚜 Schwerpunkt</td><td class="p-3 font-semibold">${hof.schwerpunkt}</td></tr>
            `;

            const profileTags = document.getElementById('modal-profile-tags');
            const profileValues = [hof.schwerpunkt, hof.tierhaltung, hof.flaechen].filter(Boolean);
            profileTags.innerHTML = profileValues.length ? profileValues.map(v => `<span class="inline-flex items-center px-2.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold">${String(v)}</span>`).join('') : '<span class="text-xs text-slate-500">Keine zusätzlichen Angaben hinterlegt.</span>';

            const preiseBody = document.getElementById('modal-preise');
            preiseBody.innerHTML = '';
            hof.preise.forEach(p => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="p-3 text-slate-500 dark:text-slate-400 font-medium">${p.pos}</td>
                    <td class="p-3 font-medium">${p.bez}</td>
                    <td class="p-3 text-right text-slate-600 dark:text-slate-300">${p.stück}</td>
                    <td class="p-3 text-right font-bold">${p.gesamt}</td>
                `;
                preiseBody.appendChild(tr);
            });

            detailModalScrollY = window.scrollY || window.pageYOffset || 0;
            document.getElementById('detail-modal').classList.remove('hidden');
            document.body.style.position = 'fixed';
            document.body.style.top = `-${detailModalScrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            if(startInEditMode) toggleEditMode();
        }

        /* --- Admin-Modus & Hof-Bearbeitung --- */
        /* --- Eigenes Admin-Menü / Login --- */
        function getCurrentAdmin() { return adminProfiles.find(p=>p.id===currentAdminId)||null; }
        function addAdminLog(action, details) { const admin=getCurrentAdmin(); adminLogs.unshift({id:Date.now()+Math.random(),username:admin?admin.username:'Unbekannt',action,details,time:new Date().toLocaleString('de-DE')}); adminLogs=adminLogs.slice(0,100); localStorage.setItem('ls25_adminLogs',JSON.stringify(adminLogs)); if(typeof sendToDiscordChannels==='function'){ sendToDiscordChannels('log',{username:'Höfe der Illschwang',embeds:[{title:'📋 Änderungs-Log',description:`**${action}**\n${details}`,footer:{text:admin?admin.username:'Unbekannt'},timestamp:new Date().toISOString()}]}).catch(()=>{}); } }
        function getCurrentRole(){ return adminUserPreview ? (observedRole || 'user') : (getCurrentAdmin()?.role || 'admin'); }
        function can(action){ const role=getCurrentRole(); if(role==='superadmin') return true; if(role==='admin') return ['edit','images','prices','sales','purchase','viewLogs'].includes(action); if(role==='editor') return ['edit','images','prices','viewLogs'].includes(action); if(role==='sales') return ['sales','purchase','viewLogs'].includes(action); return action==='view'; }
        function toggleFavorite(event,id){ event?.stopPropagation?.(); favoriteHoefe= favoriteHoefe.includes(id)?favoriteHoefe.filter(x=>x!==id):[...favoriteHoefe,id]; localStorage.setItem('ls25_favoriteHoefe',JSON.stringify(favoriteHoefe)); syncUserPreferences(); scheduleCloudSync('Favoriten geändert'); renderHöfe(); }

        function persistApplicationUnread(){
            purchaseApplicationUnread=Math.max(0,Number(purchaseApplicationUnread)||0);
            localStorage.setItem('ls25_kaufantraege_unread',String(purchaseApplicationUnread));
            localStorage.setItem('ls25_kaufantraege_seen',JSON.stringify([...purchaseApplicationSeenIds].slice(-1000)));
            updateAdminMenuUI();
        }
        function noteApplicationIds(apps,{countNew=false}={}){
            const list=Array.isArray(apps)?apps:[];
            const ids=list.map(a=>String(a?.id||'')).filter(Boolean);
            if(!purchaseApplicationSeenInitialized){
                ids.forEach(id=>purchaseApplicationSeenIds.add(id));
                purchaseApplicationSeenInitialized=true;
                persistApplicationUnread();
                return;
            }
            if(countNew && isAdmin){
                let added=0;
                for(const id of ids){ if(!purchaseApplicationSeenIds.has(id)){purchaseApplicationSeenIds.add(id); added++;} }
                if(added){ purchaseApplicationUnread+=added; persistApplicationUnread(); }
            }
            const keep=new Set(ids);
            purchaseApplicationSeenIds=new Set([...purchaseApplicationSeenIds].filter(id=>keep.has(id)));
            persistApplicationUnread();
        }
        function markApplicationsRead(){ purchaseApplicationUnread=0; persistApplicationUnread(); }

        function updateAdminMenuUI() {
            const container=document.getElementById('admin-menu-container');
            const label=document.getElementById('admin-menu-label');
            const status=document.getElementById('admin-menu-status');
            const login=document.getElementById('admin-login-action');
            const logout=document.getElementById('admin-logout-action');
            const actions=document.getElementById('admin-actions');
            const badge=document.getElementById('purchase-unread-badge');
            if(!label||!status)return;
            const admin=getCurrentAdmin();
            const accountButton=document.getElementById('user-account-button');
            const previewExit=document.getElementById('admin-preview-exit');
            if(container) container.classList.toggle('hidden',!isAdmin);
            accountButton?.classList.toggle('hidden',isAdmin||adminUserPreview);
            previewExit?.classList.toggle('hidden',!adminUserPreview);
            previewExit?.classList.toggle('flex',adminUserPreview);
            label.textContent=isAdmin&&admin?admin.username:'Admin';
            status.textContent=isAdmin&&admin?`Angemeldet als ${admin.username} · ${admin.role||'admin'}`:'Nicht angemeldet';
            status.className=isAdmin?'text-sm font-bold mt-1 text-emerald-600 dark:text-emerald-400':'text-sm font-bold mt-1';
            login?.classList.toggle('hidden',isAdmin);
            actions?.classList.toggle('hidden',!isAdmin);
            logout?.classList.toggle('hidden',!isAdmin||adminUserPreview);
            if(logout){ logout.disabled=false; logout.style.pointerEvents='auto'; }
            const profileBtn=document.querySelector('#admin-actions button[onclick="openAdminProfiles()"]');
            if(profileBtn) profileBtn.classList.toggle('hidden',getCurrentRole()!=='superadmin');
            const role=getCurrentRole();
            document.querySelectorAll('[data-admin-capability]').forEach(button=>{
                const capability=button.dataset.adminCapability;
                const allowed=capability==='superadmin'
                    ? role==='superadmin'
                    : capability==='sync'
                        ? isAdmin && (can('edit') || can('purchase'))
                        : isAdmin && can(capability);
                button.classList.toggle('hidden',!allowed);
            });
            if(badge){
                const unread=Number(purchaseApplicationUnread)||0;
                badge.textContent=unread>0?String(unread):'';
                badge.classList.toggle('hidden',unread<=0);
            }
        }
        function openUserPreviewChooser(){
            if(getCurrentRole()!=='superadmin') return;
            closeAdminMenu();
            document.getElementById('user-preview-modal')?.classList.remove('hidden');
        }
        function closeUserPreviewChooser(){document.getElementById('user-preview-modal')?.classList.add('hidden');}
        function startUserPreview(role='user'){
            if(getCurrentRole()!=='superadmin') return;
            adminUserPreview=true;
            observedRole=role;
            isAdmin=role!=='user';
            closeUserPreviewChooser();
            closeAdminMenu();
            closeModal?.();
            closeAdminProfiles?.();
            showAppView('home');
            updateUserAccountUI();
            updateAdminMenuUI();
            renderHöfe();
            startPublicCloudSync();
            showAdminToast(`Vorschau als ${role==='user'?'normaler Benutzer':role} aktiv · schreibgeschützt.`,'info');
        }
        function stopUserPreview(){
            if(!adminUserPreview) return;
            adminUserPreview=false;
            observedRole=null;
            isAdmin=true;
            showAppView('home');
            updateUserAccountUI();
            updateAdminMenuUI();
            renderHöfe();
            startPublicCloudSync();
            showAdminToast('Superadmin-Ansicht wiederhergestellt ✓','success');
        }
        function toggleAdminMenu(event) {
  if(event) event.stopPropagation();
  const panel=document.getElementById('admin-menu-panel'), button=document.getElementById('admin-menu-button'), arrow=document.getElementById('admin-menu-arrow');
  if(!panel||!button) return;
  const hidden=panel.classList.contains('hidden');
  if(hidden){
    panel.classList.remove('hidden');
    updateAdminMenuUI();
    const r=button.getBoundingClientRect();
    const w=Math.min(320,Math.max(260,window.innerWidth-32));
    const right=Math.max(8,window.innerWidth-r.right);
    panel.style.width=Math.min(320,window.innerWidth-16)+'px';
    panel.style.right=right+'px';
    panel.style.left='auto';
    const gap=8, margin=8;
    const h=Math.min(panel.scrollHeight,Math.min(window.innerHeight*0.75,620));
    let top=r.bottom+gap;
    if(top+h>window.innerHeight-margin) top=Math.max(margin,r.top-gap-h);
    panel.style.top=top+'px';
    panel.style.bottom='auto';
    arrow.style.transform='rotate(180deg)';
  } else {
    panel.classList.add('hidden');
    arrow.style.transform='rotate(0deg)';
  }
}
        function closeAdminMenu() { const panel=document.getElementById('admin-menu-panel'),arrow=document.getElementById('admin-menu-arrow'); if(panel)panel.classList.add('hidden'); if(arrow)arrow.style.transform='rotate(0deg)'; }
        function openUserAccount(mode='login'){
            userAccountModalMode=mode; const m=document.getElementById('user-account-modal'); if(!m)return;
            const isAdminMode=mode==='admin';
            document.getElementById('user-account-title').textContent=isAdminMode?'🔐 Admin anmelden':(mode==='register'?'👤 Konto erstellen':'👤 Anmelden');
            document.getElementById('user-account-submit').textContent=isAdminMode?'Admin anmelden':(mode==='register'?'Konto erstellen':'Anmelden');
            document.getElementById('user-account-switch').textContent=isAdminMode?'← Zurück zur Benutzer-Anmeldung':(mode==='register'?'Bereits ein Konto? Anmelden':'Noch kein Konto? Konto erstellen');
            document.getElementById('user-account-switch').classList.toggle('hidden',false);
            document.getElementById('user-account-hint').textContent=isAdminMode?'Admin-Zugang für die Verwaltung. Die Zugangsdaten werden sicher über das Backend geprüft.':(mode==='register'?'Das Konto ist freiwillig. Die Website funktioniert auch ohne Anmeldung.':'Das Konto ist freiwillig. Die Website funktioniert auch ohne Anmeldung.');
            const userMode=document.getElementById('user-mode-button'),adminMode=document.getElementById('admin-mode-button');
            userMode?.classList.toggle('bg-white',!isAdminMode); userMode?.classList.toggle('dark:bg-slate-700',!isAdminMode); userMode?.classList.toggle('shadow-sm',!isAdminMode);
            adminMode?.classList.toggle('bg-white',isAdminMode); adminMode?.classList.toggle('dark:bg-slate-700',isAdminMode); adminMode?.classList.toggle('shadow-sm',isAdminMode);
            userMode?.classList.toggle('text-slate-500',isAdminMode); adminMode?.classList.toggle('text-slate-500',!isAdminMode);
            document.getElementById('user-account-error').classList.add('hidden'); document.getElementById('user-account-password').value='';
            document.getElementById('user-account-username').autocomplete=isAdminMode?'username':'username';
            m.classList.remove('hidden'); setTimeout(()=>document.getElementById('user-account-username')?.focus(),40);
        }
        function closeUserAccount(){document.getElementById('user-account-modal')?.classList.add('hidden');}
        function toggleUserAccountMode(){openUserAccount(userAccountModalMode==='register'?'login':'register');}
        async function submitUserAccount(e){
            e?.preventDefault?.(); const u=document.getElementById('user-account-username').value.trim(), p=document.getElementById('user-account-password').value, err=document.getElementById('user-account-error'), b=document.getElementById('user-account-submit'); err.classList.add('hidden');
            const isAdminMode=userAccountModalMode==='admin';
            if(u.length<2){err.textContent='Benutzername: mindestens 2 Zeichen.';err.classList.remove('hidden');return;} if(p.length<8){err.textContent='Passwort: mindestens 8 Zeichen.';err.classList.remove('hidden');return;}
            try{
                b.disabled=true; b.textContent='⏳ Bitte warten …';
                if(isAdminMode){
                    const data=await window.hofCloudSync.login(u,p); const admin=data.admin||{username:u,role:'admin'};
                    window.hofCloudAdminIdentity=admin; currentUserAccount=null; adminSessionPassword='';
                    adminProfiles=[{id:admin.id||('cloud-'+admin.username),username:admin.username,role:admin.role||'admin'}]; currentAdminId=adminProfiles[0].id; isAdmin=true; adminUserPreview=false;
                    await loadAdminProfilesFromServer(); const current=adminProfiles.find(x=>x.username.toLowerCase()===String(admin.username).toLowerCase()); if(current)currentAdminId=current.id;
                    closeUserAccount(); updateAdminMenuUI(); addAdminLog('Admin eingeloggt','Anmeldung über das zentrale Backend.'); await loadCloudStateAfterLogin(); startPublicCloudSync(); renderHöfe(); if(aktuellerModalHofId)openModal(aktuellerModalHofId); showAdminToast('Backend-Login erfolgreich ✓','success');
                }else{
                    const d=userAccountModalMode==='register'?await window.hofCloudSync.userRegister(u,p):await window.hofCloudSync.userLogin(u,p);
                    isAdmin=false; currentAdminId=null; adminProfiles=[]; window.hofCloudAdminIdentity=null; currentUserAccount=d.user;
                    if(Array.isArray(d.favorites))favoriteHoefe=[...d.favorites]; if(Array.isArray(d.compare))compareHoefe=[...d.compare];
                    localStorage.setItem('ls25_favoriteHoefe',JSON.stringify(favoriteHoefe));localStorage.setItem('ls25_compareHoefe',JSON.stringify(compareHoefe)); closeUserAccount();updateUserAccountUI();renderHöfe();showAdminToast('Konto erfolgreich angemeldet ✓','success');
                }
            }catch(x){err.textContent=x.message||'Anmeldung fehlgeschlagen.';err.classList.remove('hidden');}
            finally{b.disabled=false;b.textContent=userAccountModalMode==='admin'?'Admin anmelden':(userAccountModalMode==='register'?'Konto erstellen':'Anmelden');}
        }
        async function logoutUserAccount(){await window.hofCloudSync.userLogout();currentUserAccount=null;updateUserAccountUI();renderHöfe();showAdminToast('Konto abgemeldet ✓','success');}
        function updateUserAccountUI(){const l=document.getElementById('user-account-label'),card=document.getElementById('profile-account-card');if(l)l.textContent=adminUserPreview?'👤 Benutzeransicht':(currentUserAccount?'👤 '+currentUserAccount.username:'👤 Anmelden');if(card)card.innerHTML=currentUserAccount?`<div class="flex flex-wrap items-center justify-between gap-3"><div><b>👤 ${escapeHtmlAttr(currentUserAccount.username)}</b><div id="user-account-application-summary" class="text-xs text-slate-500 mt-1">Merkliste und deine Anträge können geräteübergreifend gespeichert werden.</div></div></div><div id="user-account-application-list" class="mt-3 space-y-2"></div><button type="button" onclick="logoutUserAccount()" class="mt-3 px-3 py-2 rounded-xl bg-red-100 text-red-700 text-sm font-bold">Abmelden</button>`:`<div class="flex flex-wrap items-center justify-between gap-3"><div><b>👤 Freiwilliges Konto</b><div class="text-xs text-slate-500 mt-1">Die Website funktioniert auch ohne Konto. Mit Konto kannst du deine Merkliste und Anträge geräteübergreifend speichern.</div></div></div><button type="button" onclick="openUserAccount('register')" class="mt-3 px-3 py-2 rounded-xl bg-emerald-600 text-white text-sm font-bold">Konto erstellen</button>`; if(currentUserAccount)loadUserAccountApplications();}
        async function loadUserAccountApplications(){try{const d=await window.hofCloudSync.request('/api/user/applications',{method:'GET'});const list=document.getElementById('user-account-application-list'),summary=document.getElementById('user-account-application-summary');if(!list)return;const apps=d.applications||[];if(summary)summary.textContent=`${favoriteHoefe.length} gemerkte Höfe · ${apps.length} eigene Kaufanträge`;list.innerHTML=apps.length?apps.slice(0,5).map(a=>`<div class="flex justify-between gap-3 p-2 rounded-lg bg-white/70 dark:bg-slate-900/60 border border-emerald-100 dark:border-slate-800 text-xs"><span><b>${escapeHtmlAttr(a.hofName)}</b><br><span class="text-slate-500">${escapeHtmlAttr(a.id)}</span></span><span class="font-bold text-emerald-600">${escapeHtmlAttr(a.status||'Neu')}</span></div>`).join(''): '<div class="text-xs text-slate-500">Noch keine eigenen Kaufanträge.</div>';}catch(e){}}
        async function restoreUserAccountSession(){try{const s=window.hofCloudSync?.getSession?.();if(s?.user){currentUserAccount=s.user;updateUserAccountUI();}else if(s?.token&&!s?.admin){const d=await window.hofCloudSync.userSession();currentUserAccount=d.user;updateUserAccountUI();}}catch(e){currentUserAccount=null;updateUserAccountUI();}}

        function openAdminLogin(){ openUserAccount('admin'); }
        function closeAdminLogin(){ closeUserAccount(); }
        async function logoutAdmin(event){
            clearInterval(publicCloudSyncTimer);
            event?.preventDefault?.(); event?.stopPropagation?.();
            const admin=getCurrentAdmin();
            try{ if(window.hofCloudSync?.status?.().authenticated) await window.hofCloudSync.request('/api/auth/logout',{method:'POST'}); }catch(e){ console.warn('Cloud-Logout:',e); }
            window.hofCloudSync?.logout?.(); window.hofCloudAdminIdentity=null; adminSessionPassword='';
            isAdmin=false; adminUserPreview=false; currentAdminId=null; adminProfiles=[]; adminProfilesLoaded=false;
            closeAdminMenu(); closeAdminLogin(); closeAdminProfiles?.();
            try{ closeModal?.(); }catch(e){}
            // Nach dem Logout sofort den öffentlichen Cloud-Stand anzeigen.
            try{ await pullPublicCloudState({showToast:false}); }catch(e){}
            aktuellerModalHofId=null; renderHöfe(); updateAdminMenuUI();
            startPublicCloudSync();
            showAdminToast(admin?'Admin erfolgreich ausgeloggt ✓':'Nicht angemeldet.','success');
        }
        async function loadAdminProfilesFromServer(){
            if(!isAdmin || getCurrentRole()!=='superadmin') return;
            try{
                const data=await window.hofCloudSync.request('/api/admin/users',{method:'GET'});
                adminProfiles=(data.users||[]).map(u=>({id:String(u.id),username:String(u.username),role:u.role||'admin'}));
                adminProfilesLoaded=true;
                updateAdminMenuUI();
            }catch(e){ console.warn('Admin-Profile konnten nicht geladen werden:',e); }
        }
        function openAdminProfiles(){if(getCurrentRole()!=='superadmin')return;closeAdminMenu();resetProfileForm();renderAdminProfiles();document.getElementById('admin-profiles-modal').classList.remove('hidden');loadAdminProfilesFromServer().then(()=>renderAdminProfiles()).catch(()=>{});}
        function closeAdminProfiles(){document.getElementById('admin-profiles-modal')?.classList.add('hidden');document.getElementById('profile-role')?.removeAttribute('disabled');ownProfileEditing=false;}
        function resetProfileForm(){ownProfileEditing=false;document.getElementById('profile-role').disabled=false;adminProfileEditId=null;document.getElementById('profile-form-title').textContent='Neues Profil';document.getElementById('profile-username').value='';document.getElementById('profile-password').value='';document.getElementById('profile-role').value='admin';document.getElementById('profile-form-error').classList.add('hidden');}
        function renderAdminProfiles(){const list=document.getElementById('admin-profile-list');if(!list)return;list.innerHTML='';adminProfiles.forEach(p=>{const row=document.createElement('div');row.className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800';row.innerHTML=`<div><div class="font-bold">👤 ${escapeHtmlAttr(p.username)}</div><div class="text-xs text-slate-500 dark:text-slate-400">${p.id===currentAdminId?'Aktuell angemeldet · ':''}${escapeHtmlAttr(p.role||'viewer')}</div></div><div class="flex gap-2"><button type="button" onclick="editAdminProfile('${p.id}')" class="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-xs font-bold">Bearbeiten</button>${adminProfiles.length>1&&p.id!==currentAdminId&&getCurrentRole()==='superadmin'?`<button type="button" onclick="deleteAdminProfile('${p.id}')" class="px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs font-bold">Löschen</button>`:''}</div>`;list.appendChild(row);});}
        function editAdminProfile(id){const p=adminProfiles.find(x=>x.id===id);if(!p)return;adminProfileEditId=id;ownProfileEditing=id===currentAdminId;document.getElementById('profile-form-title').textContent=`Profil bearbeiten: ${p.username}`;document.getElementById('profile-username').value=p.username;document.getElementById('profile-password').value='';document.getElementById('profile-role').value=p.role||'admin';document.getElementById('profile-role').disabled=ownProfileEditing;document.getElementById('profile-form-error').classList.add('hidden');}
        async function saveAdminProfile(){
            if(!isAdmin||(!can('superadmin')&&!ownProfileEditing))return;
            const username=document.getElementById('profile-username').value.trim(),password=document.getElementById('profile-password').value,role=ownProfileEditing?(getCurrentAdmin()?.role||'admin'):document.getElementById('profile-role').value,err=document.getElementById('profile-form-error');
            err.classList.add('hidden');
            if(!username){err.textContent='Bitte einen Benutzernamen eingeben.';err.classList.remove('hidden');return;}
            if(!adminProfileEditId&&!password){err.textContent='Für ein neues Profil ist ein Passwort erforderlich.';err.classList.remove('hidden');return;}
            try{
                let data;
                if(adminProfileEditId){ data=await window.hofCloudSync.request('/api/admin/users/'+encodeURIComponent(adminProfileEditId),{method:'PUT',body:JSON.stringify({username,password:password||undefined,role})}); addAdminLog('Admin-Profil geändert',`${username} wurde geändert.`); }
                else { data=await window.hofCloudSync.request('/api/admin/users',{method:'POST',body:JSON.stringify({username,password,role})}); addAdminLog('Admin-Profil erstellt',`${username} wurde mit Rolle ${role} angelegt.`); }
                await loadAdminProfilesFromServer(); resetProfileForm(); renderAdminProfiles(); showAdminToast('Admin-Profil gespeichert ✓','success');
            }catch(e){err.textContent=e.message||'Profil konnte nicht gespeichert werden.';err.classList.remove('hidden');}
        }
        async function deleteAdminProfile(id){
            if(getCurrentRole()!=='superadmin'||adminProfiles.length<=1||id===currentAdminId)return;
            const p=adminProfiles.find(x=>x.id===id);if(!p||!confirm(`Admin-Profil „${p.username}“ wirklich löschen?`))return;
            try{await window.hofCloudSync.request('/api/admin/users/'+encodeURIComponent(id),{method:'DELETE'});addAdminLog('Admin-Profil gelöscht',`${p.username} wurde gelöscht.`);await loadAdminProfilesFromServer();renderAdminProfiles();showAdminToast('Admin-Profil gelöscht ✓','success');}catch(e){showAdminToast(e.message||'Profil konnte nicht gelöscht werden.','error');}
        }
        function resetAdminProfilesToCode(){showAdminToast('Admin-Profile werden jetzt sicher im Backend verwaltet.','info');loadAdminProfilesFromServer().then(renderAdminProfiles).catch(()=>{});}

        function openOwnProfile(){if(adminUserPreview)return;closeAdminMenu();const p=getCurrentAdmin();if(!p)return;ownProfileEditing=true;editAdminProfile(p.id);document.getElementById('profile-role').disabled=true;document.getElementById('admin-profiles-modal').classList.remove('hidden');}
        function openAdminLogs(){closeAdminMenu();renderAdminLogs();document.getElementById('admin-logs-modal').classList.remove('hidden');}
        function closeAdminLogs(){document.getElementById('admin-logs-modal').classList.add('hidden');}
        function renderAdminLogs(){const list=document.getElementById('admin-log-list');list.innerHTML='';if(!adminLogs.length){list.innerHTML='<div class="text-center py-10 text-slate-500">Noch keine Änderungen protokolliert.</div>';return;}adminLogs.forEach(log=>{const el=document.createElement('div');el.className='admin-log-item';el.innerHTML=`<div class="flex justify-between gap-3"><span class="font-bold">${escapeHtmlAttr(log.action)}</span><span class="text-xs text-slate-400 whitespace-nowrap">${escapeHtmlAttr(log.time)}</span></div><div class="text-sm mt-1">${escapeHtmlAttr(log.details)}</div><div class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">👤 ${escapeHtmlAttr(log.username)}</div>`;list.appendChild(el);});}
        function clearAdminLogs(){if(!isAdmin)return;adminLogs=[];localStorage.setItem('ls25_adminLogs','[]');renderAdminLogs();}

        function toggleEditMode() {
            if(adminUserPreview){showAdminToast('Die Rollen-Vorschau ist schreibgeschützt.','info');return;}
            if (!can('edit') || !aktuellerModalHofId) return;
            const hof = hoefeData.find(h => h.id === aktuellerModalHofId);
            if (!hof) return;

            document.getElementById('modal-title').classList.add('hidden');
            document.getElementById('modal-slogan').classList.add('hidden');
            document.getElementById('modal-beschreibung').classList.add('hidden');
            document.getElementById('admin-edit-btn').classList.add('hidden');

            document.getElementById('edit-title').value = hof.name;
            document.getElementById('edit-slogan').value = hof.slogan;
            document.getElementById('edit-groesse').value = hof.groesse || '';
            document.getElementById('edit-flaechen').value = hof.flaechen || '';
            document.getElementById('edit-tierhaltung').value = hof.tierhaltung || '';
            document.getElementById('edit-schwerpunkt').value = hof.schwerpunkt || '';
            document.getElementById('edit-zielgruppe').value = hof.zielgruppe || '';
            document.getElementById('edit-beschreibung').value = hof.beschreibung;
            document.getElementById('drop-zone-text').innerHTML = `${(hof.bilder || []).length} Bild(er) vorhanden. Weitere auswählen...`;
            renderEditImageManager();

            document.getElementById('edit-title').classList.remove('hidden');
            document.getElementById('edit-slogan').classList.remove('hidden');
            document.getElementById('edit-masterdata').classList.remove('hidden');
            document.getElementById('edit-beschreibung').classList.remove('hidden');
            document.getElementById('edit-image-container').classList.remove('hidden');
            document.getElementById('edit-preise-container').classList.remove('hidden');
            document.getElementById('edit-gesamtpreis').value = hof.preis || '';
            renderPriceEditRows(hof.preise || []);
            renderEditImageManager();
            document.getElementById('admin-save-btn').classList.remove('hidden');
            updateSaveButtonState();
        }

        const imageDB = {
            db: null,
            async open() {
                if (this.db) return this.db;
                return new Promise((resolve, reject) => {
                    const request = indexedDB.open('ls25_hoefe_bilder', 1);
                    request.onupgradeneeded = () => {
                        const db = request.result;
                        if (!db.objectStoreNames.contains('images')) db.createObjectStore('images', { keyPath: 'id' });
                    };
                    request.onsuccess = () => { this.db = request.result; resolve(this.db); };
                    request.onerror = () => reject(request.error || new Error('Bildspeicher konnte nicht geöffnet werden.'));
                });
            },
            async put(id, blob) {
                const db = await this.open();
                return new Promise((resolve, reject) => {
                    const tx = db.transaction('images', 'readwrite');
                    tx.objectStore('images').put({ id, blob });
                    tx.oncomplete = resolve;
                    tx.onerror = () => reject(tx.error || new Error('Bild konnte nicht gespeichert werden.'));
                });
            },
            async get(id) {
                const db = await this.open();
                return new Promise((resolve, reject) => {
                    const req = db.transaction('images', 'readonly').objectStore('images').get(id);
                    req.onsuccess = () => resolve(req.result?.blob || null);
                    req.onerror = () => reject(req.error || new Error('Bild konnte nicht gelesen werden.'));
                });
            },
            async delete(id) {
                if (!id) return;
                const db = await this.open();
                return new Promise((resolve, reject) => {
                    const tx = db.transaction('images', 'readwrite');
                    tx.objectStore('images').delete(id);
                    tx.oncomplete = resolve;
                    tx.onerror = () => reject(tx.error);
                });
            }
        };

        async function saveHofEdits() {
            if(adminUserPreview){showAdminToast('Die Rollen-Vorschau ist schreibgeschützt.','info');return;}
            if (!can('edit') || !aktuellerModalHofId) return;
            const hof = hoefeData.find(h => h.id === aktuellerModalHofId);
            if (!hof) return;

            if (pendingImageLoads > 0) {
                showAdminToast(`Bitte kurz warten – ${pendingImageLoads} Bild(er) werden noch verarbeitet.`, 'info');
                await waitForImages();
            }

            const oldData = {
                name: hof.name, slogan: hof.slogan, beschreibung: hof.beschreibung,
                bilder: [...(hof.bilder || [])], preis: hof.preis,
                preise: JSON.parse(JSON.stringify(hof.preise || []))
            };

            try {
                hof.name = document.getElementById('edit-title').value.trim() || hof.name;
                hof.slogan = document.getElementById('edit-slogan').value.trim();
                hof.groesse = document.getElementById('edit-groesse').value.trim() || hof.groesse;
                hof.flaechen = document.getElementById('edit-flaechen').value.trim() || hof.flaechen;
                hof.tierhaltung = document.getElementById('edit-tierhaltung').value.trim() || hof.tierhaltung;
                hof.schwerpunkt = document.getElementById('edit-schwerpunkt').value.trim() || hof.schwerpunkt;
                hof.zielgruppe = document.getElementById('edit-zielgruppe').value.trim() || hof.zielgruppe;
                hof.beschreibung = document.getElementById('edit-beschreibung').value.trim();
                // Bilder liegen jetzt direkt als komprimierte Data-URLs vor.
                hof.bilder = tempUploadedImages.map(item => item.dataUrl || item.url).filter(Boolean);
                delete hof.imageIds;
                hof.preis = document.getElementById('edit-gesamtpreis').value.trim();
                hof.preise = collectPriceEditRows();

                addAdminLog('Hof bearbeitet', `${hof.name}: Stammdaten, Bilder und Preise geändert.`);
                showAdminToast(`Änderungen übernommen ✓ · ${hof.bilder.length} Bild(er) sind jetzt live und werden automatisch synchronisiert.`, 'success');
                scheduleCloudSync('Hof bearbeitet');
                renderHöfe();
                openModal(aktuellerModalHofId);
            } catch (error) {
                hof.name = oldData.name; hof.slogan = oldData.slogan; hof.groesse=oldData.groesse; hof.flaechen=oldData.flaechen; hof.tierhaltung=oldData.tierhaltung; hof.schwerpunkt=oldData.schwerpunkt; hof.zielgruppe=oldData.zielgruppe; hof.beschreibung = oldData.beschreibung;
                hof.bilder = oldData.bilder; hof.preis = oldData.preis; hof.preise = oldData.preise;
                console.error(error);
                showAdminToast('Änderungen konnten nicht übernommen werden.', 'error');
            }
        }

        function waitForImages() {
            return new Promise(resolve => {
                if (pendingImageLoads === 0) return resolve();
                const check = () => pendingImageLoads === 0 ? resolve() : setTimeout(check, 50);
                check();
            });
        }

        function showAdminToast(message, type='success') {
            const old = document.getElementById('admin-toast');
            if (old) old.remove();
            const toast = document.createElement('div');
            toast.id = 'admin-toast';
            const styles = {
                success: 'bg-emerald-600 text-white',
                error: 'bg-red-600 text-white',
                info: 'bg-slate-800 text-white'
            };
            toast.className = `fixed top-5 right-5 z-[200] max-w-sm px-5 py-3 rounded-xl shadow-2xl text-sm font-bold ${styles[type] || styles.info}`;
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 4000);
        }

        function renderPriceEditRows(preise) { const list=document.getElementById('edit-preise-list'); list.innerHTML=''; preise.forEach((p,i)=>addPriceEditRow(p,i)); }
        function addPriceEditRow(price={pos:1,bez:'',stück:'',gesamt:''}, index=null) {
            const list=document.getElementById('edit-preise-list'); const rowIndex=index!==null?index:list.children.length; const row=document.createElement('div'); row.className='price-edit-grid border border-slate-200 dark:border-slate-700 rounded-xl p-2 bg-slate-50 dark:bg-slate-800/60';
            row.innerHTML=`<input data-price-pos type="number" min="1" value="${price.pos||rowIndex+1}" class="w-full px-2 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-center"><input data-price-bez type="text" value="${escapeHtmlAttr(price.bez||'')}" placeholder="Bezeichnung" class="w-full px-2 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm"><input data-price-stueck type="text" value="${escapeHtmlAttr(price.stück||'')}" placeholder="Preis Stück" class="w-full px-2 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-right"><div class="flex gap-1"><input data-price-gesamt type="text" value="${escapeHtmlAttr(price.gesamt||'')}" placeholder="Preis Gesamt" class="w-full px-2 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-right"><button type="button" onclick="this.closest('.price-edit-grid').remove()" class="px-2 rounded-lg bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-300 font-bold">✕</button></div>`; list.appendChild(row);
        }
        function collectPriceEditRows() { return [...document.querySelectorAll('#edit-preise-list .price-edit-grid')].map((row,index)=>({pos:Number(row.querySelector('[data-price-pos]').value)||index+1,bez:row.querySelector('[data-price-bez]').value.trim(),stück:row.querySelector('[data-price-stueck]').value.trim(),gesamt:row.querySelector('[data-price-gesamt]').value.trim()})).filter(p=>p.bez||p.stück||p.gesamt); }
        function escapeHtmlAttr(value) { return String(value).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

        /* --- Mehrfach-Bilder Upload (Drag & Drop) --- */
        const dropZone = document.getElementById('drop-zone');
        const fileInput = document.getElementById('file-input');
        const dropZoneText = document.getElementById('drop-zone-text');

        dropZone.addEventListener('click', () => fileInput.click());
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-900/20');
        });
        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-900/20');
        });
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-900/20');
            if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
        });
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length) handleFiles(e.target.files);
        });

        function renderEditImageManager() {
            const manager = document.getElementById('edit-image-manager');
            if (!manager) return;
            manager.innerHTML = '';
            if (!tempUploadedImages.length) {
                manager.innerHTML = '<div class="col-span-full text-xs text-slate-500 dark:text-slate-400 py-2">Noch keine Bilder. Wähle oben Bilder aus.</div>';
                return;
            }
            tempUploadedImages.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'relative aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 group';
                const img = document.createElement('img');
                img.src = item.url;
                img.alt = `Bild ${index + 1}`;
                img.className = 'w-full h-full object-cover';
                const badge = document.createElement('span');
                badge.className = 'absolute top-2 left-2 px-2 py-1 rounded-full bg-black/70 text-white text-[10px] font-bold';
                badge.textContent = `${index + 1}`;
                const del = document.createElement('button');
                del.type = 'button';
                del.className = 'absolute top-2 right-2 w-8 h-8 rounded-full bg-red-600 hover:bg-red-500 text-white font-black shadow-lg cursor-pointer';
                del.textContent = '✕';
                del.title = 'Bild entfernen';
                del.onclick = (e) => {
                    e.stopPropagation();
                    const removed = tempUploadedImages.splice(index, 1)[0];
                    if (removed?.url?.startsWith('blob:')) URL.revokeObjectURL(removed.url);
                    renderEditImageManager();
                    document.getElementById('drop-zone-text').innerHTML = `<span class="text-emerald-600 dark:text-emerald-400 font-bold">${tempUploadedImages.length} Bild(er) ausgewählt.</span>`;
                };
                card.append(img, badge, del);
                manager.appendChild(card);
            });
        }

        function handleFiles(files) {
            const validFiles = [...files].filter(file => file.type.startsWith('image/'));
            if (!validFiles.length) return;

            pendingImageLoads += validFiles.length;
            updateSaveButtonState();

            validFiles.forEach(file => {
                compressImageFile(file).then(dataUrl => {
                    const id = 'img-' + Date.now() + '-' + Math.random().toString(36).slice(2);
                    // Das komprimierte Bild liegt direkt als Data-URL in der Hof-Datenstruktur.
                    // Dadurch kann „In HTML speichern“ die Bilder wirklich in den Code schreiben.
                    tempUploadedImages.push({ id, dataUrl, url: dataUrl });
                    renderEditImageManager();
                    dropZoneText.innerHTML = `<span class="text-emerald-600 dark:text-emerald-400 font-bold">${tempUploadedImages.length} Bild(er) geladen und bereit.</span>`;
                }).catch(error => {
                    console.error('Bild konnte nicht verarbeitet werden:', error);
                    showAdminToast(`Bild „${file.name}“ konnte nicht verarbeitet werden.`, 'error');
                }).finally(() => {
                    pendingImageLoads--;
                    updateSaveButtonState();
                });
            });
        }

        function compressImageFile(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onerror = () => reject(reader.error || new Error('Datei konnte nicht gelesen werden'));
                reader.onload = () => {
                    const img = new Image();
                    img.onerror = () => reject(new Error('Bild konnte nicht geladen werden'));
                    img.onload = () => {
                        // 1800px reicht für die Galerie und hält die HTML-Datei handhabbar.
                        const maxSize = 1800;
                        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
                        const canvas = document.createElement('canvas');
                        canvas.width = Math.max(1, Math.round(img.width * scale));
                        canvas.height = Math.max(1, Math.round(img.height * scale));
                        const ctx = canvas.getContext('2d', { alpha: false });
                        if (!ctx) return reject(new Error('Canvas wird von diesem Browser nicht unterstützt.'));
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        const dataUrl = canvas.toDataURL('image/jpeg', 0.80);
                        if (!dataUrl || dataUrl.length < 100) return reject(new Error('Bild konnte nicht komprimiert werden.'));
                        resolve(dataUrl);
                    };
                    img.src = reader.result;
                };
                reader.readAsDataURL(file);
            });
        }

        function updateSaveButtonState() {
            const btn = document.getElementById('admin-save-btn');
            if (!btn) return;
            const waiting = pendingImageLoads > 0;
            btn.disabled = waiting;
            btn.classList.toggle('opacity-50', waiting);
            btn.classList.toggle('cursor-not-allowed', waiting);
            btn.textContent = waiting ? `⏳ Bilder werden verarbeitet (${pendingImageLoads})` : '💾 Speichern';
        }

        function closeModal() {
            document.getElementById('detail-modal').classList.add('hidden');
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            window.scrollTo(0, detailModalScrollY);
            aktuellerModalHofId = null;
        }

        /* --- Custom Dropdown Logik --- */
        function toggleCustomDropdown() {
            const optionsDiv = document.getElementById('custom-dropdown-options');
            const arrow = document.getElementById('custom-dropdown-arrow');
            const isHidden = optionsDiv.classList.contains('hidden');
            
            if (isHidden) {
                optionsDiv.classList.remove('hidden');
                arrow.style.transform = 'rotate(180deg)';
            } else {
                optionsDiv.classList.add('hidden');
                arrow.style.transform = 'rotate(0deg)';
            }
        }

        function selectCustomOption(val, displayText) {
            selectedCustomDropdownValue = val;
            
            const selectedSpan = document.getElementById('custom-dropdown-selected');
            selectedSpan.innerHTML = displayText;

            document.getElementById('custom-dropdown-options').classList.add('hidden');
            document.getElementById('custom-dropdown-arrow').style.transform = 'rotate(0deg)';

            const customContainer = document.getElementById('custom-input-container');
            const inputField = document.getElementById('input-modal-field');

            if (val === "__NEW__") {
                customContainer.classList.remove('hidden');
                setTimeout(() => inputField.focus(), 50);
            } else {
                customContainer.classList.add('hidden');
            }
        }

        function openInputModal(title, desc, currentValue, callback) {
            document.getElementById('input-modal-title').textContent = title;
            document.getElementById('input-modal-desc').textContent = desc;

            const optionsDiv = document.getElementById('custom-dropdown-options');
            optionsDiv.innerHTML = '';

            let foundMatch = false;

            kaeuferListe.forEach(k => {
                const parts = k.split(' | ');
                const icon = parts[0] || '🏡';
                const label = parts[1] || k;
                
                const isSel = (k === currentValue);
                if (isSel) foundMatch = true;

                const optDiv = document.createElement('div');
                optDiv.className = `custom-option ${isSel ? 'selected' : 'text-slate-800 dark:text-slate-200'}`;
                optDiv.innerHTML = `<span class="shrink-0">${icon}</span><span class="text-slate-400 font-normal">|</span><span class="truncate">${label}</span>`;
                
                const displayHTML = `<span>${icon}</span> <span class="text-slate-400 font-normal">|</span> <span>${label}</span>`;
                optDiv.onclick = () => selectCustomOption(k, displayHTML);
                optionsDiv.appendChild(optDiv);
            });

            if (!foundMatch && currentValue && currentValue !== "") {
                const optDiv = document.createElement('div');
                optDiv.className = 'custom-option selected';
                optDiv.innerHTML = `<span class="truncate">${currentValue}</span>`;
                optDiv.onclick = () => selectCustomOption(currentValue, `<span>${currentValue}</span>`);
                optionsDiv.insertBefore(optDiv, optionsDiv.firstChild);
            }

            // Hinzufügen Option
            const newOptDiv = document.createElement('div');
            newOptDiv.className = 'custom-option text-emerald-600 dark:text-emerald-400 font-bold border-t border-slate-200 dark:border-slate-700/60 mt-1 pt-2';
            newOptDiv.innerHTML = `<span class="shrink-0">➕</span> <span class="truncate">Neuen Betrieb / Käufer hinzufügen...</span>`;
            newOptDiv.onclick = () => selectCustomOption("__NEW__", `<span>➕</span> <span class="text-emerald-500 font-bold">Neuen Betrieb hinzufügen</span>`);
            optionsDiv.appendChild(newOptDiv);

            // Vorauswahl setzen
            if (currentValue && currentValue !== "") {
                const parts = currentValue.split(' | ');
                const icon = parts[0] || '🏡';
                const label = parts[1] || currentValue;
                selectCustomOption(currentValue, `<span>${icon}</span> <span class="text-slate-400 font-normal">|</span> <span>${label}</span>`);
            } else if (kaeuferListe.length > 0) {
                const first = kaeuferListe[0];
                const parts = first.split(' | ');
                const icon = parts[0] || '🏡';
                const label = parts[1] || first;
                selectCustomOption(first, `<span>${icon}</span> <span class="text-slate-400 font-normal">|</span> <span>${label}</span>`);
            }

            document.getElementById('input-modal-field').value = '';
            inputModalCallback = callback;
            document.getElementById('input-modal').classList.remove('hidden');
        }

        function closeInputModal() {
            document.getElementById('input-modal').classList.add('hidden');
            document.getElementById('custom-dropdown-options').classList.add('hidden');
            inputModalCallback = null;
        }

        function saveInputModal() {
            const inputField = document.getElementById('input-modal-field');
            let finalValue = "";

            if (selectedCustomDropdownValue === "__NEW__") {
                finalValue = inputField.value.trim();
                if (finalValue !== "" && !kaeuferListe.includes(finalValue)) {
                    kaeuferListe.push(finalValue);
                    localStorage.setItem('ls25_kaeuferListe', JSON.stringify(kaeuferListe));
                }
            } else {
                finalValue = selectedCustomDropdownValue;
            }

            if (inputModalCallback) {
                inputModalCallback(finalValue);
            }
            closeInputModal();
        }

        // Dropdown schliessen beim Klick außerhalb
        document.addEventListener('click', (e) => {
            const container = document.getElementById('custom-dropdown-container');
            if (container && !container.contains(e.target)) {
                document.getElementById('custom-dropdown-options')?.classList.add('hidden');
                document.getElementById('custom-dropdown-arrow').style.transform = 'rotate(0deg)';
            }
        });

        function toggleStatus(event, id) {
            if(adminUserPreview){event?.stopPropagation?.();showAdminToast('Die Rollen-Vorschau ist schreibgeschützt.','info');return;}
            event.stopPropagation();
            if (!can('sales')) return;
            if (hofStatus[id] === 'zu-verkaufen') {
                openInputModal("Hof verkaufen", "Wähle den Käufer oder erstelle einen neuen:", "", (kaeuferName) => {
                    if (kaeuferName && kaeuferName.trim() !== "") {
                        hofKaeufer[id] = kaeuferName.trim();
                    } else {
                        hofKaeufer[id] = "Unbekannt";
                    }
                    hofStatus[id] = 'verkauft';
                    localStorage.setItem('ls25_hofStatus', JSON.stringify(hofStatus));
                    localStorage.setItem('ls25_hofKaeufer', JSON.stringify(hofKaeufer));
                    scheduleCloudSync('Verkaufsstatus geändert');
                    addAdminLog('Verkaufsstatus geändert', `${hoefeData.find(h => h.id === id)?.name || 'Hof'} wurde an ${hofKaeufer[id]} verkauft.`);
                     sendToDiscordChannels('status',{username:'Höfe der Illschwang',embeds:[{title:'🚜 Hof verkauft',description:`**${hoefeData.find(h=>h.id===id)?.name||'Hof'}** wurde verkauft.\nKäufer: ${hofKaeufer[id]}`,timestamp:new Date().toISOString()}]}).catch(()=>{});
                    renderHöfe();
                });
            } else {
                hofStatus[id] = 'zu-verkaufen';
                delete hofKaeufer[id];
                localStorage.setItem('ls25_hofStatus', JSON.stringify(hofStatus));
                localStorage.setItem('ls25_hofKaeufer', JSON.stringify(hofKaeufer));
                scheduleCloudSync('Verkaufsstatus geändert');
                addAdminLog('Verkaufsstatus geändert', `${hoefeData.find(h => h.id === id)?.name || 'Hof'} ist wieder zu verkaufen.`);
                 sendToDiscordChannels('status',{username:'Höfe der Illschwang',embeds:[{title:'🔄 Hof wieder verfügbar',description:`**${hoefeData.find(h=>h.id===id)?.name||'Hof'}** ist wieder zu verkaufen.`,timestamp:new Date().toISOString()}]}).catch(()=>{});
                renderHöfe();
            }
        }

        function editKaeuferFromModal() {
            if (!can('sales') || !aktuellerModalHofId) return;
            const currentVal = hofKaeufer[aktuellerModalHofId] || "";
            openInputModal("Käufer bearbeiten", "Neuen Käufer aus der Liste wählen oder eintragen:", currentVal, (neuerKaeufer) => {
                if (neuerKaeufer !== null) {
                    hofKaeufer[aktuellerModalHofId] = neuerKaeufer.trim() !== "" ? neuerKaeufer.trim() : "Unbekannt";
                    localStorage.setItem('ls25_hofKaeufer', JSON.stringify(hofKaeufer));
                    addAdminLog('Käufer geändert', `${hoefeData.find(h => h.id === aktuellerModalHofId)?.name || 'Hof'}: Käufer auf ${hofKaeufer[aktuellerModalHofId]} gesetzt.`);
                    renderHöfe();
                    openModal(aktuellerModalHofId);
                }
            });
        }

        function openPurchaseModal() {
            const hof = hoefeData.find(h => h.id === aktuellerModalHofId);
            if (!hof || hofStatus[hof.id] === 'verkauft') return;
            purchaseModalHofId = hof.id;
            document.getElementById('purchase-modal-hof').textContent = hof.name + ' · ' + hof.preis;
            document.getElementById('purchase-name').value = '';
            document.getElementById('purchase-contact').value = '';
            document.getElementById('purchase-message').value = '';
            document.getElementById('purchase-own-farm-new').value = '';
            populatePurchaseOwnFarmOptions();
            document.getElementById('purchase-form-error').classList.add('hidden');
            document.getElementById('purchase-modal').classList.remove('hidden');
        }

        async function loadBusinessList(){
            try{
                const cfg=window.hofCloudSync?.getConfig?.()||{};
                const base=cfg.apiBase||((location.protocol==='http:'||location.protocol==='https:')?location.origin:'http://localhost:3000');
                const response=await fetch(base+'/api/public/businesses',{cache:'no-store'});
                const data=await response.json();
                if(response.ok && Array.isArray(data.businesses)) businessList=data.businesses;
            }catch(e){ console.warn('Betriebsliste konnte nicht geladen werden:',e); }
            return businessList;
        }

        async function populatePurchaseOwnFarmOptions() {
            const select=document.getElementById('purchase-own-farm');
            if(!select) return;
            await loadBusinessList();
            const options=['<option value="">— Betrieb auswählen —</option>'];
            businessList.forEach(b=>{
                options.push(`<option value="business:${escapeHtmlAttr(String(b.id))}">${escapeHtmlAttr(b.name)}</option>`);
            });
            options.push('<option value="new">➕ Mein Betrieb ist noch nicht vorhanden</option>');
            select.innerHTML=options.join('');
            togglePurchaseOwnFarm();
        }
        function togglePurchaseOwnFarm() {
            const select=document.getElementById('purchase-own-farm');
            const wrap=document.getElementById('purchase-own-farm-new-wrap');
            if(!select || !wrap) return;
            wrap.classList.toggle('hidden',select.value!=='new');
            if(select.value==='new') setTimeout(()=>document.getElementById('purchase-own-farm-new')?.focus(),30);
        }

        function closePurchaseModal() {
            document.getElementById('purchase-modal').classList.add('hidden');
            purchaseModalHofId = null;
        }

        async function submitPurchaseApplication() {
            const hof = hoefeData.find(h => h.id === purchaseModalHofId);
            const name = document.getElementById('purchase-name').value.trim();
            const ownFarmSelect = document.getElementById('purchase-own-farm');
            const ownFarmNew = document.getElementById('purchase-own-farm-new').value.trim();
            const ownFarmValue = ownFarmSelect?.value || '';
            const contact = document.getElementById('purchase-contact').value.trim();
            const message = document.getElementById('purchase-message').value.trim();
            const error = document.getElementById('purchase-form-error');
            if (!hof || hofStatus[hof.id] === 'verkauft') return;
            if (!name || !contact) {
                error.textContent = 'Bitte Name und Kontaktinfos ausfüllen.';
                error.classList.remove('hidden');
                return;
            }
            if(ownFarmValue==='new' && !ownFarmNew){
                error.textContent = 'Bitte einen Namen für deinen neuen Hof eintragen.';
                error.classList.remove('hidden');
                return;
            }
            const businessId=ownFarmValue.startsWith('business:') ? Number(ownFarmValue.slice(9)) : null;
            const business=Number.isFinite(businessId) ? businessList.find(b=>Number(b.id)===businessId) : null;
            let applicantFarmId=null;
            const applicantFarmName=ownFarmValue==='new' ? ownFarmNew : (business?.name||'');
            const application = {
                id: 'KA-' + Date.now().toString(36).toUpperCase(),
                hofId: hof.id,
                hofName: hof.name,
                preis: hof.preis,
                name,
                applicantFarmId,
                applicantFarmName,
                applicantFarmNew: ownFarmValue==='new',
                contact,
                message,
                time: new Date().toLocaleString('de-DE'),
                status: 'Neu'
            };
            const cloudConfigured=!!window.hofCloudSync?.status?.().cloudConfigured;
            if(cloudConfigured){
                const submitButton=document.querySelector('#purchase-modal button[onclick*="submitPurchaseApplication"]');
                if(submitButton){submitButton.disabled=true;submitButton.dataset.originalText=submitButton.textContent;submitButton.textContent='Wird gesendet…';submitButton.classList.add('opacity-70');}
                try{
                    const result=await window.hofCloudSync.submitPublicApplication({hofId:hof.id,name,contact,message,applicantFarmId,applicantFarmName,applicantFarmNew:ownFarmValue==='new'});
                    if(result?.application){
                        application.id=result.application.id;
                        application.time=result.application.time;
                        application.status=result.application.status||'Neu';
                    }
                    purchaseApplications.unshift(application);
                    purchaseApplicationSeenIds.add(String(application.id));
                    localStorage.setItem('ls25_kaufantraege', JSON.stringify(purchaseApplications));
                    if(isAdmin) purchaseApplicationUnread++;
                    persistApplicationUnread();
                    addAdminLog('Kaufantrag eingegangen', `${application.hofName}: ${application.name} (${application.id}).`);
                }catch(e){
                    showAdminToast('Antrag konnte nicht an den Server gesendet werden: '+(e.message||'Unbekannter Fehler'),'error');
                    if(submitButton){submitButton.disabled=false;submitButton.textContent=submitButton.dataset.originalText||'Antrag senden';submitButton.classList.remove('opacity-70');}
                    return;
                }
            }else{
                purchaseApplications.unshift(application);
                purchaseApplicationSeenIds.add(String(application.id));
                localStorage.setItem('ls25_kaufantraege', JSON.stringify(purchaseApplications));
                if(isAdmin) purchaseApplicationUnread++;
                persistApplicationUnread();
                addAdminLog('Kaufantrag lokal gespeichert', `${application.hofName}: ${application.name} (${application.id}).`);
            }

            if(typeof submitButton!=='undefined' && submitButton){submitButton.disabled=false;submitButton.textContent=submitButton.dataset.originalText||'Antrag senden';submitButton.classList.remove('opacity-70');}
            closePurchaseModal();
            const discordLink=getDiscordChannelLink('purchase');
            showAdminToast(`Kaufantrag ${application.id} wurde gespeichert ✓`, 'success');
            if(discordLink){
                setTimeout(()=>{
                    const open=document.createElement('button');
                    open.className='fixed bottom-5 right-5 z-[200] px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-2xl';
                    open.textContent='💬 Discord-Kanal öffnen';
                    open.onclick=()=>window.open(discordLink,'_blank','noopener');
                    document.body.appendChild(open);
                    setTimeout(()=>open.remove(),8000);
                },350);
            }

            // Discord-Versand für öffentliche Anträge erfolgt serverseitig.
        }

        function openTechnicalSettings(){
            if(adminUserPreview || !isAdmin || !(can('edit') || can('purchase'))) return;
            closeAdminMenu();
            document.getElementById('technical-admin-modal')?.classList.remove('hidden');
        }
        function closeTechnicalSettings(){document.getElementById('technical-admin-modal')?.classList.add('hidden');}
        async function openDiscordSettings() {
            if (adminUserPreview || getCurrentRole()!=='superadmin') return;
            closeTechnicalSettings();
            closeAdminMenu();
            document.getElementById('discord-settings-modal').classList.remove('hidden');
            document.getElementById('discord-settings-status').classList.add('hidden');
            try{
                const data=await window.hofCloudSync.request('/api/admin/discord');
                const cfg=data.settings||{};
                document.getElementById('discord-bot-token').value='';
                document.getElementById('discord-application-channel-id').value=cfg.applicationChannelId||'1547013483046899754';
                document.getElementById('discord-updates-channel-id').value=cfg.updatesChannelId||'1547013483046899755';
                document.getElementById('discord-bot-enabled').checked=!!cfg.botEnabled;
                updateDiscordBotStatus(data);
                if(cfg.hasBotToken) document.getElementById('discord-bot-token').placeholder='Token ist gespeichert · leer lassen, um ihn beizubehalten';
            }catch(e){
                updateDiscordBotStatus({botConnected:false,botStatus:{state:'error',message:'Einstellungen konnten nicht geladen werden: '+e.message}});
            }
        }
        function updateDiscordBotStatus(data){
            const status=data?.botStatus||{};
            const el=document.getElementById('discord-bot-status');
            const detail=document.getElementById('discord-bot-status-detail');
            const connected=!!data?.botConnected || status.state==='connected';
            const map={connected:'🟢 Discord-Bot verbunden',connecting:'🟡 Discord-Bot verbindet sich …',error:'🔴 Discord-Bot nicht verbunden',disabled:'⚪ Discord-Bot deaktiviert'};
            const hasKnownState=Object.prototype.hasOwnProperty.call(map,status.state);
            el.textContent=connected?'🟢 Discord-Bot verbunden':(hasKnownState?map[status.state]:'🔴 Discord-Bot-Status nicht verfügbar');
            detail.textContent=status.message||(hasKnownState?'':'Der Server liefert keinen Bot-Status. Prüfe, ob wirklich v69/server.js läuft.');
        }
        function closeDiscordSettings() {
            document.getElementById('discord-settings-modal').classList.add('hidden');
        }
        async function saveDiscordSettings() {
            if (getCurrentRole()!=='superadmin') return;
            const botToken=document.getElementById('discord-bot-token').value.trim();
            const botEnabled=document.getElementById('discord-bot-enabled').checked;
            const applicationChannelId=document.getElementById('discord-application-channel-id').value.trim();
            const updatesChannelId=document.getElementById('discord-updates-channel-id').value.trim();
            if(!/^\d{15,25}$/.test(applicationChannelId)||!/^\d{15,25}$/.test(updatesChannelId)){ showAdminToast('Bitte beide Discord-Kanal-IDs prüfen.','error'); return; }
            const payload={botEnabled,applicationChannelId,updatesChannelId};
            if(botToken) payload.botToken=botToken;
            const status=document.getElementById('discord-bot-status');
            const detail=document.getElementById('discord-bot-status-detail');
            status.textContent=botEnabled?'🟡 Discord-Bot wird verbunden …':'⚪ Discord-Bot wird deaktiviert …';
            detail.textContent='Bitte kurz warten …';
            try{
                const data=await window.hofCloudSync.request('/api/admin/discord',{method:'PUT',body:JSON.stringify(payload)});
                document.getElementById('discord-bot-token').value='';
                updateDiscordBotStatus(data);
                addAdminLog('Discord-Bot-Einstellungen geändert',botEnabled?'Discord-Bot aktiviert.':'Discord-Bot deaktiviert.');
                showAdminToast(botEnabled?'Discord-Bot erfolgreich verbunden ✓':'Discord-Bot deaktiviert ✓','success');
                if(data.botConnected) setTimeout(()=>closeDiscordSettings(),500);
            }catch(e){
                let msg=e.message||'Discord-Bot konnte nicht verbunden werden.';
                if(e.response?.botStatus) updateDiscordBotStatus(e.response);
                else { status.textContent='🔴 Discord-Bot nicht verbunden'; detail.textContent=msg; }
                showAdminToast(msg,'error');
            }
        }
        async function testDiscordBot() {
            if(getCurrentRole()!=='superadmin') return;
            try{
                const data=await window.hofCloudSync.request('/api/admin/discord/test',{method:'POST'});
                const status=document.getElementById('discord-settings-status');
                status.textContent='✓ '+(data.message||'Test erfolgreich.');
                status.className='text-sm font-semibold text-emerald-600 dark:text-emerald-400';
                status.classList.remove('hidden');
            }catch(e){
                const status=document.getElementById('discord-settings-status');
                status.textContent='✕ '+(e.message||'Bot-Test fehlgeschlagen.');
                status.className='text-sm font-semibold text-red-600 dark:text-red-400';
                status.classList.remove('hidden');
            }
        }
        function getDiscordChannelLink(eventType){ return ''; }

        function openApplicationTracker(){document.getElementById('application-tracker-modal').classList.remove('hidden');document.getElementById('tracker-result').innerHTML='';setTimeout(()=>document.getElementById('tracker-id')?.focus(),50);}
        function closeApplicationTracker(){document.getElementById('application-tracker-modal').classList.add('hidden');}
        function trackApplication(){
            const id=document.getElementById('tracker-id').value.trim().toUpperCase(); const a=purchaseApplications.find(x=>String(x.id).toUpperCase()===id); const box=document.getElementById('tracker-result');
            if(!a){box.innerHTML='<div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 font-semibold">Antrag nicht gefunden. Bitte prüfe die Antragsnummer.</div>';return;}
            const statuses=['Neu','In Bearbeitung','Angenommen','Abgelehnt']; const current=statuses.includes(a.status)?statuses.indexOf(a.status):0;
            if(a.status==='Abgelehnt'){box.innerHTML=`<div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800"><div class="font-black text-red-700 dark:text-red-300">❌ Antrag abgelehnt</div><div class="text-sm mt-1">${escapeHtmlAttr(a.hofName)} · ${escapeHtmlAttr(a.id)}</div></div>`;return;}
            box.innerHTML=`<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700"><div class="flex justify-between gap-3"><div><div class="font-black text-lg">${escapeHtmlAttr(a.hofName)}</div><div class="text-xs text-slate-500 mt-1">${escapeHtmlAttr(a.id)} · ${escapeHtmlAttr(a.name)}</div></div><span class="font-black text-emerald-600 dark:text-emerald-400">${escapeHtmlAttr(a.status||'Neu')}</span></div><div class="status-track mt-5">${statuses.map((st,i)=>`<div class="status-step ${i<=current?'done':''} ${i===current?'current':''}"><div class="status-dot">${i<=current?'✓':i+1}</div><div class="text-[11px] font-bold text-slate-500 dark:text-slate-400">${st}</div></div>`).join('')}</div></div>`;
        }

        function openPurchaseApplications() {
            if (!isAdmin) return;
            closeAdminMenu();
            renderPurchaseApplications();
            markApplicationsRead();
            document.getElementById('purchase-applications-modal').classList.remove('hidden');
        }

        function closePurchaseApplications() { document.getElementById('purchase-applications-modal').classList.add('hidden'); }

        function renderPurchaseApplications() {
            const list = document.getElementById('purchase-application-list');
            const canManagePurchases=can('purchase')&&!adminUserPreview;
            const visibleApplications=purchaseApplications.filter(a=>!hiddenPurchaseApplicationIds.has(String(a.id)));
            if (!visibleApplications.length) {
                list.innerHTML = '<div class="text-center py-12 text-slate-500 dark:text-slate-400">Noch keine Kaufanträge vorhanden.</div>';
                return;
            }
            list.innerHTML = '';
            visibleApplications.forEach(a => {
                const el = document.createElement('div');
                el.className = 'border border-slate-200 dark:border-slate-700 rounded-xl p-4 bg-slate-50 dark:bg-slate-800/60';
                el.innerHTML = `<div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3"><div><div class="text-xs font-bold text-emerald-600 dark:text-emerald-400">${escapeHtmlAttr(a.id)} · ${escapeHtmlAttr(a.status||'Neu')}</div><h4 class="font-black text-lg mt-1">${escapeHtmlAttr(a.hofName)}</h4><div class="text-sm text-slate-500 dark:text-slate-400 mt-1">${escapeHtmlAttr(a.preis)} · ${escapeHtmlAttr(a.time)}</div></div><div class="flex gap-2">${canManagePurchases?`<select onchange="setPurchaseStatus('${a.id}',this.value)" class="px-2 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-xs font-bold"><option ${a.status==='Neu'?'selected':''}>Neu</option><option ${a.status==='In Bearbeitung'?'selected':''}>In Bearbeitung</option><option ${a.status==='Angenommen'?'selected':''}>Angenommen</option><option ${a.status==='Abgelehnt'?'selected':''}>Abgelehnt</option></select>`:`<span class="text-xs font-semibold text-slate-500">Nur Ansicht</span>`}${canManagePurchases&&(a.status==='Angenommen'||a.status==='Abgelehnt')?`<button onclick="deletePurchaseApplication('${a.id}')" class="self-start px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs font-bold">Aus meiner Ansicht entfernen</button>`:''}</div></div><div class="grid sm:grid-cols-2 gap-3 mt-4 text-sm"><div><span class="text-xs font-bold uppercase text-slate-400">Name</span><div class="font-semibold mt-1">${escapeHtmlAttr(a.name)}</div></div><div><span class="text-xs font-bold uppercase text-slate-400">Eigener Hof</span><div class="font-semibold mt-1">${a.applicantFarmName ? escapeHtmlAttr(a.applicantFarmName)+(a.applicantFarmNew?' · 🆕 neu':'') : '—'}</div></div><div><span class="text-xs font-bold uppercase text-slate-400">Kontaktinfos</span><div class="font-semibold mt-1 break-words">${escapeHtmlAttr(a.contact)}</div></div></div>${a.message ? `<div class="mt-4"><span class="text-xs font-bold uppercase text-slate-400">Nachricht</span><p class="text-sm mt-1 whitespace-pre-wrap">${escapeHtmlAttr(a.message)}</p></div>` : ''}`;
                list.appendChild(el);
            });
        }

        async function setPurchaseStatus(id,status){
            if(adminUserPreview){showAdminToast('Die Rollen-Vorschau ist schreibgeschützt.','info');return;}
            if(!isAdmin || !can('purchase')) return;
            const a=purchaseApplications.find(x=>x.id===id);
            if(!a) return;
            const oldStatus=a.status||'Neu';
            const allowed=['Neu','In Bearbeitung','Angenommen','Abgelehnt'];
            if(!allowed.includes(status) || status===oldStatus) return;

            // Statusänderungen werden ausschließlich serverseitig verarbeitet.
            // So kann ein späterer Cloud-Sync keinen alten Käufer/Status zurückschreiben.
            try{
                if(!window.hofCloudSync?.request) throw new Error('Cloud-Server nicht verfügbar.');
                const result=await window.hofCloudSync.request('/api/admin/applications/'+encodeURIComponent(id)+'/status',{
                    method:'PUT',
                    body:JSON.stringify({status})
                });

                if(result?.application){
                    Object.assign(a,result.application);
                } else {
                    a.status=status;
                }
                if(result?.soldHof){
                    hofStatus[result.soldHof.id]='verkauft';
                    hofKaeufer[result.soldHof.id]=result.soldHof.buyer;
                    localStorage.setItem('ls25_hofStatus',JSON.stringify(hofStatus));
                    localStorage.setItem('ls25_hofKaeufer',JSON.stringify(hofKaeufer));
                    addAdminLog('Kaufantrag angenommen',`${a.id}: ${result.soldHof.name} wurde automatisch an ${result.soldHof.buyer} verkauft.`);
                } else {
                    addAdminLog('Kaufantragstatus geändert',`${a.id}: ${oldStatus} → ${status}`);
                }
                localStorage.setItem('ls25_kaufantraege',JSON.stringify(purchaseApplications));
                if(status!=='Neu') purchaseApplicationUnread=Math.max(0,purchaseApplicationUnread-1);
                persistApplicationUnread();
                renderPurchaseApplications();
                renderHöfe();
                if(typeof renderAdminDashboard==='function') renderAdminDashboard();
                showAdminToast(`Antrag ${status} ✓`,'success');
            }catch(e){
                console.error('Kaufantragstatus konnte nicht gespeichert werden:',e);
                showAdminToast('Status konnte nicht gespeichert werden: '+(e.message||'Unbekannter Fehler'),'error');
            }
        }
        async function deletePurchaseApplication(id) {
            if (!isAdmin || !can('purchase')) return;
            const a=purchaseApplications.find(x=>String(x.id)===String(id));
            if(!a || (a.status!=='Angenommen' && a.status!=='Abgelehnt')) return;
            const ok=await showConfirmDialog('Aus meiner Ansicht entfernen',`Möchtest du den abgeschlossenen Antrag für „${escapeHtmlAttr(a.hofName)}“ nur aus deiner Ansicht entfernen?`,'Entfernen',true);
            if(!ok) return;
            hiddenPurchaseApplicationIds.add(String(id));
            localStorage.setItem('ls25_kaufantraege_hidden',JSON.stringify([...hiddenPurchaseApplicationIds]));
            renderPurchaseApplications();
            showAdminToast('Nur aus deiner Ansicht entfernt ✓','success');
        }

        async function clearPurchaseApplications() {
            const finished=purchaseApplications.filter(a=>(a.status==='Angenommen'||a.status==='Abgelehnt')&&!hiddenPurchaseApplicationIds.has(String(a.id)));
            if (!isAdmin || !can('purchase') || !finished.length) return;
            const ok=await showConfirmDialog('Abgeschlossene Anträge ausblenden',`Möchtest du ${finished.length} abgeschlossene Anträge nur aus deiner Ansicht entfernen?`,'Ausblenden',true);
            if(!ok) return;
            finished.forEach(a=>hiddenPurchaseApplicationIds.add(String(a.id)));
            localStorage.setItem('ls25_kaufantraege_hidden',JSON.stringify([...hiddenPurchaseApplicationIds]));
            renderPurchaseApplications();
            showAdminToast('Abgeschlossene Anträge ausgeblendet ✓','success');
        }

        function showConfirmDialog(title,message,confirmText='Bestätigen',danger=false){
            return new Promise(resolve=>{
                document.getElementById('app-confirm-dialog')?.remove();
                const wrap=document.createElement('div'); wrap.id='app-confirm-dialog'; wrap.className='fixed inset-0 z-[10050] flex items-center justify-center p-4';
                wrap.innerHTML=`<div class="app-confirm-backdrop absolute inset-0"></div><div class="app-confirm-card relative w-full max-w-md rounded-2xl p-5 shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900" role="dialog" aria-modal="true"><div class="text-2xl mb-2">${danger?'⚠️':'❓'}</div><h3 class="text-lg font-black">${escapeHtmlAttr(title)}</h3><p class="mt-2 text-sm text-slate-600 dark:text-slate-300">${message}</p><div class="flex justify-end gap-2 mt-5"><button type="button" data-cancel class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 font-semibold">Abbrechen</button><button type="button" data-ok class="px-4 py-2 rounded-xl font-bold ${danger?'bg-red-600 text-white':'bg-emerald-600 text-white'}">${escapeHtmlAttr(confirmText)}</button></div></div>`;
                document.body.appendChild(wrap);
                const close=v=>{wrap.remove();resolve(v);};
                wrap.querySelector('[data-cancel]').onclick=()=>close(false);
                wrap.querySelector('[data-ok]').onclick=()=>close(true);
                wrap.querySelector('.app-confirm-backdrop').onclick=()=>close(false);
                wrap.querySelector('[data-ok]').focus();
            });
        }

        function openAdminDashboard(){if(!isAdmin)return;closeAdminMenu();renderAdminDashboard();document.getElementById('admin-dashboard-modal').classList.remove('hidden');}
        function closeAdminDashboard(){document.getElementById('admin-dashboard-modal').classList.add('hidden');}
        function renderAdminDashboard(){const total=hoefeData.length,forSale=hoefeData.filter(h=>hofStatus[h.id]==='zu-verkaufen').length,sold=hoefeData.filter(h=>hofStatus[h.id]==='verkauft').length,apps=purchaseApplications.filter(a=>!['Angenommen','Abgelehnt'].includes(a.status||'Neu')).length;document.getElementById('dashboard-stats').innerHTML=[['🏡','Höfe',total],['🟢','Zu verkaufen',forSale],['🔴','Verkauft',sold],['📨','Offene Anträge',apps]].map(x=>`<div class="admin-stat-card"><div class="text-2xl">${x[0]}</div><div class="text-xs uppercase text-slate-500 mt-2">${x[1]}</div><div class="text-2xl font-black mt-1">${x[2]}</div></div>`).join('');document.getElementById('dashboard-activity').innerHTML=adminLogs.slice(0,6).map(l=>`<div class="border-b border-slate-200 dark:border-slate-700 pb-2"><b>${escapeHtmlAttr(l.username)}</b> · ${escapeHtmlAttr(l.action)}<div class="text-xs text-slate-500">${escapeHtmlAttr(l.time)}</div></div>`).join('')||'<span class="text-slate-500">Keine Aktivitäten.</span>';document.getElementById('dashboard-applications').innerHTML=purchaseApplications.slice(0,5).map(a=>`<div class="flex justify-between gap-2"><span><b>${escapeHtmlAttr(a.hofName)}</b><br><span class="text-xs text-slate-500">${escapeHtmlAttr(a.applicantFarmName||a.name||'—')}</span><span class="text-xs text-slate-400">${escapeHtmlAttr(a.name||'—')}</span></span><span class="text-xs font-bold">${escapeHtmlAttr(a.status||'Neu')}</span></div>`).join('')||'<span class="text-slate-500">Keine Anträge.</span>'; }
        async function openBusinessManagement(){
            if(!can('edit')) return;
            closeAdminMenu();
            document.getElementById('business-management-modal').classList.remove('hidden');
            await loadBusinessManagement();
        }
        function closeBusinessManagement(){document.getElementById('business-management-modal')?.classList.add('hidden');}
        async function loadBusinessManagement(){
            const list=document.getElementById('business-management-list'),err=document.getElementById('business-management-error');
            if(!list)return; err?.classList.add('hidden');
            try{
                const data=await window.hofCloudSync.request('/api/admin/businesses',{method:'GET'});
                businessList=Array.isArray(data.businesses)?data.businesses:[];
                list.innerHTML='';
                businessList.forEach(b=>{
                    const row=document.createElement('div'); row.className='p-3 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-between gap-3';
                    row.innerHTML=`<div class="font-bold truncate">🏢 ${escapeHtmlAttr(b.name)}</div><div class="flex gap-2 shrink-0"><button type="button" onclick="renameBusinessName(${Number(b.id)})" class="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-xs font-bold">Bearbeiten</button><button type="button" onclick="deleteBusinessName(${Number(b.id)})" class="px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs font-bold">Löschen</button></div>`;
                    list.appendChild(row);
                });
                await populatePurchaseOwnFarmOptions();
            }catch(e){if(err){err.textContent=e.message||'Betriebsliste konnte nicht geladen werden.';err.classList.remove('hidden');}}
        }
        async function addBusinessName(){
            if(adminUserPreview) return;
            if(!can('edit')) return;
            const input=document.getElementById('business-new-name'),name=input?.value.trim(),err=document.getElementById('business-management-error');
            if(!name)return; err?.classList.add('hidden');
            try{await window.hofCloudSync.request('/api/admin/businesses',{method:'POST',body:JSON.stringify({name})}); input.value=''; addAdminLog('Betrieb angelegt',name); await loadBusinessManagement(); showAdminToast('Betrieb hinzugefügt ✓','success');}
            catch(e){if(err){err.textContent=e.message||'Betrieb konnte nicht hinzugefügt werden.';err.classList.remove('hidden');}}
        }
        async function renameBusinessName(id){
            if(adminUserPreview) return;
            if(!can('edit')) return;
            const b=businessList.find(x=>Number(x.id)===Number(id)); if(!b)return;
            const name=prompt('Neuer Betriebsname:',b.name)?.trim(); if(!name||name===b.name)return;
            try{await window.hofCloudSync.request('/api/admin/businesses/'+id,{method:'PUT',body:JSON.stringify({name})}); addAdminLog('Betrieb geändert',`${b.name} → ${name}`); await loadBusinessManagement(); showAdminToast('Betrieb geändert ✓','success');}
            catch(e){showAdminToast(e.message||'Betrieb konnte nicht geändert werden.','error');}
        }
        async function deleteBusinessName(id){
            if(adminUserPreview) return;
            if(!can('edit')) return;
            const b=businessList.find(x=>Number(x.id)===Number(id)); if(!b||!confirm(`„${b.name}“ wirklich aus der Betriebsliste löschen?`))return;
            try{await window.hofCloudSync.request('/api/admin/businesses/'+id,{method:'DELETE'}); addAdminLog('Betrieb gelöscht',b.name); await loadBusinessManagement(); showAdminToast('Betrieb gelöscht ✓','success');}
            catch(e){showAdminToast(e.message||'Betrieb konnte nicht gelöscht werden.','error');}
        }

        function openHofManagement(){if(!can('edit'))return;closeAdminMenu();renderHofManagement();document.getElementById('hof-management-modal').classList.remove('hidden');}
        function closeHofManagement(){document.getElementById('hof-management-modal').classList.add('hidden');}
        function renderHofManagement(){const list=document.getElementById('hof-management-list');list.innerHTML='';hoefeData.forEach(h=>{const row=document.createElement('div');row.className='p-3 rounded-xl bg-slate-100 dark:bg-slate-800 flex flex-col sm:flex-row justify-between gap-2';row.innerHTML=`<div><b>${escapeHtmlAttr(h.name)}</b><div class="text-xs text-slate-500">${escapeHtmlAttr(h.preis||'')}</div></div><div class="flex gap-2"><button onclick="openModal(${h.id},true);closeHofManagement()" class="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-xs font-bold">Bearbeiten</button><button onclick="duplicateHof(${h.id})" class="px-3 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs font-bold">Duplizieren</button><button onclick="deleteHof(${h.id})" class="px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-300 text-xs font-bold">Löschen</button></div>`;list.appendChild(row);});}
        function createNewHof(){if(adminUserPreview||!can('edit'))return;const id=Date.now();const hof={id,name:'Neuer Hof',slogan:'',beschreibung:'Beschreibung des Hofes.',zielgruppe:'',groesse:'',flaechen:'',tierhaltung:'',schwerpunkt:'',preis:'0 €',preise:[],bilder:[],imageIds:[]};customAddedHoefe.push(hof);localStorage.setItem('ls25_customAddedHoefe',JSON.stringify(customAddedHoefe));hofStatus[id]='zu-verkaufen';localStorage.setItem('ls25_hofStatus',JSON.stringify(hofStatus));hoefeData.push(hof);scheduleCloudSync('Hof erstellt');addAdminLog('Hof erstellt',hof.name);renderHofManagement();openModal(id);}
        function duplicateHof(id){if(adminUserPreview||!can('edit'))return;const src=hoefeData.find(h=>h.id===id);if(!src)return;const copy=JSON.parse(JSON.stringify(src));copy.id=Date.now();copy.name=src.name+' – Kopie';copy.imageIds=[];copy.bilder=[];customAddedHoefe.push(copy);localStorage.setItem('ls25_customAddedHoefe',JSON.stringify(customAddedHoefe));hofStatus[copy.id]='zu-verkaufen';localStorage.setItem('ls25_hofStatus',JSON.stringify(hofStatus));hoefeData.push(copy);scheduleCloudSync('Hof dupliziert');addAdminLog('Hof dupliziert',`${src.name} → ${copy.name}`);renderHofManagement();renderHöfe();}
        function deleteHof(id){if(adminUserPreview||!can('edit'))return;const h=hoefeData.find(x=>x.id===id);if(!h||!confirm(`„${h.name}“ wirklich löschen?`))return;hoefeData=hoefeData.filter(x=>x.id!==id);customAddedHoefe=customAddedHoefe.filter(x=>x.id!==id);if(!deletedHofIds.includes(id))deletedHofIds.push(id);localStorage.setItem('ls25_customAddedHoefe',JSON.stringify(customAddedHoefe));localStorage.setItem('ls25_deletedHofIds',JSON.stringify(deletedHofIds));scheduleCloudSync('Hof gelöscht');addAdminLog('Hof gelöscht',h.name);renderHofManagement();renderHöfe();}

        function filterHöfe(typ) {
            aktuellerFilter = typ;
            favoritesOnly = false;
            updateFavoritesButton();
            ['alle', 'zu-verkaufen', 'verkauft'].forEach(t => {
                const btn = document.getElementById(`btn-${t}`);
                if (t === typ) {
                    btn.className = "px-4 py-2 rounded-lg text-sm font-medium bg-emerald-600 text-white transition shadow-sm cursor-pointer";
                } else {
                    btn.className = "px-4 py-2 rounded-lg text-sm font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition cursor-pointer";
                }
            });
            renderHöfe();
        }

        function updateFavoritesButton(){
            const btn = document.getElementById('favorites-filter-btn');
            if(!btn) return;
            const count = favoriteHoefe.filter(id => hoefeData.some(h => h.id === id)).length;
            btn.textContent = `${favoritesOnly ? '♥' : '♡'} Favoriten${count ? ` (${count})` : ''}`;
            btn.classList.toggle('bg-amber-400', favoritesOnly);
            btn.classList.toggle('text-slate-900', favoritesOnly);
        }

        let cloudSyncTimer=null;
        let cloudAutoAuthInProgress=false;
        let cloudAuthModalOpen=false;
        let cloudAuthNoticeShown=false;
        async function scheduleCloudSync(reason='Änderung'){
            if(!isAdmin || !(can('edit') || can('sales') || can('purchase')) || !window.hofCloudSync?.status?.().cloudConfigured) return;
            clearTimeout(cloudSyncTimer);
            cloudSyncTimer=setTimeout(async()=>{
                let lastError=null;
                for(let attempt=1; attempt<=3; attempt++){
                    try{
                        if(!window.hofCloudSync.status().authenticated){
                            const connected=await ensureCloudAuthentication({silent:true, reason});
                            if(!connected) return;
                        }
                        await window.hofCloudSync.push();
                        showAdminToast('Änderung automatisch synchronisiert ✓','success');
                        return;
                    }catch(e){
                        lastError=e;
                        console.warn(`Cloud-Sync fehlgeschlagen (Versuch ${attempt}/3):`,e);
                        await new Promise(r=>setTimeout(r,500*attempt));
                    }
                }
                window.syncFoundation?.markError?.(lastError?.message||'Unbekannter Fehler');
                showAdminToast('Automatische Synchronisation fehlgeschlagen: '+(lastError?.message||'Unbekannter Fehler'),'error');
            },250);
        }
        function applyCloudState(payload){
            const state=payload?.state||payload;
            if(!state || typeof state!=='object') return false;
            if(Array.isArray(state.hoefe)) hoefeData=JSON.parse(JSON.stringify(state.hoefe));
            if(state.status && typeof state.status==='object') hofStatus=JSON.parse(JSON.stringify(state.status));
            if(state.kaeufer && typeof state.kaeufer==='object') hofKaeufer=JSON.parse(JSON.stringify(state.kaeufer));
            if(Array.isArray(state.applications)){ const incomingApplications=JSON.parse(JSON.stringify(state.applications)); noteApplicationIds(incomingApplications,{countNew:true}); purchaseApplications=incomingApplications; }
            if(isAdmin){
                if(Array.isArray(state.favorites)) favoriteHoefe=[...state.favorites];
                if(Array.isArray(state.compare)) compareHoefe=[...state.compare];
                if(state.discord && typeof state.discord==='object'){
                    discordSettings=JSON.parse(JSON.stringify(state.discord.settings||discordSettings));
                }
            }
            localStorage.setItem('ls25_hofStatus',JSON.stringify(hofStatus));
            localStorage.setItem('ls25_hofKaeufer',JSON.stringify(hofKaeufer));
            localStorage.setItem('ls25_favoriteHoefe',JSON.stringify(favoriteHoefe));
            localStorage.setItem('ls25_compareHoefe',JSON.stringify(compareHoefe));
            localStorage.setItem('ls25_kaufantraege',JSON.stringify(purchaseApplications));
            return true;
        }
        async function loadCloudStateAfterLogin(){
            const result=await window.hofCloudSync.pull();
            if(result?.state){
                applyCloudState(result);
                showAdminToast('Cloud-Daten geladen ✓','success');
            }else{
                await window.hofCloudSync.push();
                showAdminToast('Lokale Daten erstmals in die Cloud gespeichert ✓','success');
            }
        }
        function openCloudAuthModal(options={}){
            const modal=document.getElementById('cloud-auth-modal');
            if(!modal)return;
            cloudAuthModalOpen=true;
            const cfg=window.hofCloudSync?.getConfig?.()||{};
            const current=getCurrentAdmin?.();
            document.getElementById('cloud-auth-api').value=cfg.apiBase||location.origin;
            document.getElementById('cloud-auth-user').value=current?.username||window.hofCloudAdminIdentity?.username||'';
            document.getElementById('cloud-auth-password').value='';
            document.getElementById('cloud-auth-error').classList.add('hidden');
            document.getElementById('cloud-auth-title').textContent=options.settings?'🔌 Backend-Verbindung':'☁️ Backend verbinden';
            document.getElementById('cloud-auth-hint').textContent=options.settings
                ? 'Die Backend-Adresse wird hier gespeichert. Für die Synchronisation nutzt die Website danach automatisch den aktuell angemeldeten Admin.'
                : 'Die Website versucht zuerst automatisch die Zugangsdaten des aktuell angemeldeten Admins zu verwenden. Nur wenn das nicht klappt, brauchst du hier einmalig die Backend-Zugangsdaten.';
            document.getElementById('cloud-auth-submit').textContent=options.settings?'Speichern & verbinden':'Verbinden';
            modal.classList.remove('hidden'); modal.classList.add('flex');
            setTimeout(()=>document.getElementById('cloud-auth-api')?.focus(),50);
        }
        function closeCloudAuthModal(){
            const modal=document.getElementById('cloud-auth-modal');
            if(modal){modal.classList.add('hidden');modal.classList.remove('flex');}
            cloudAuthModalOpen=false;
        }
        async function submitCloudAuth(event){
            event?.preventDefault?.();
            const api=document.getElementById('cloud-auth-api')?.value.trim().replace(/\/$/,'');
            const user=document.getElementById('cloud-auth-user')?.value.trim();
            const enteredPassword=document.getElementById('cloud-auth-password')?.value||'';
            const password=enteredPassword;
            const err=document.getElementById('cloud-auth-error');
            const button=document.getElementById('cloud-auth-submit');
            err.classList.add('hidden');
            if(!api){err.textContent='Bitte eine Backend-Adresse eingeben.';err.classList.remove('hidden');return;}
            window.hofCloudSync.setApiBase(api);
            try{
                await window.hofCloudSync.health();
                if(!user || !password){
                    err.textContent='Das Backend ist erreichbar. Für die erste Cloud-Anmeldung wird der aktuelle Admin-Login benötigt.';
                    err.classList.remove('hidden');
                    return;
                }
                button.disabled=true; button.textContent='⏳ Verbinde …';
                const data=await window.hofCloudSync.login(user,password);
                window.hofCloudAdminIdentity=data.admin||{username:user,role:'superadmin'};
                let profile=adminProfiles.find(p=>p.username.toLowerCase()===user.toLowerCase());
                if(!profile){profile={id:'cloud-admin',username:user,role:window.hofCloudAdminIdentity.role||'superadmin'};adminProfiles.push(profile);}
                currentAdminId=profile.id; isAdmin=true; updateAdminMenuUI();
                await loadAdminProfilesFromServer();
                const loaded=adminProfiles.find(p=>p.username.toLowerCase()===user.toLowerCase());
                if(loaded) currentAdminId=loaded.id;
                updateAdminMenuUI();
                closeCloudAuthModal();
                showAdminToast('Backend verbunden ✓','success');
                await loadCloudStateAfterLogin();
            }catch(e){
                err.textContent='Backend-Verbindung fehlgeschlagen: '+e.message;
                err.classList.remove('hidden');
            }finally{button.disabled=false;button.textContent='Verbinden';}
        }
        async function ensureCloudAuthentication(options={}){
            const cloud=window.hofCloudSync;
            if(!cloud) throw new Error('Cloud-Modul wurde nicht geladen.');
            const s=cloud.status();
            if(!s.cloudConfigured) return false;
            if(s.authenticated) return true;
            if(options.silent) return false;
            openCloudAuthModal({settings:false});
            return false;
        }
        let publicCloudSyncTimer=null;
        let publicCloudPullInProgress=false;
        let publicCloudTimerMode='public';
        let adminCloudPullInProgress=false;
        async function pullAdminCloudState(options={}){
            const cloud=window.hofCloudSync;
            if(!isAdmin || !cloud?.status?.().authenticated || adminCloudPullInProgress) return false;
            adminCloudPullInProgress=true;
            try{
                const result=await cloud.pull();
                if(result?.state){
                    applyCloudState(result);
                    renderHöfe();
                    try{renderFinder?.();}catch(e){}
                    try{updateDashboard?.();}catch(e){}
                    try{ if(document.getElementById('purchase-applications-modal') && !document.getElementById('purchase-applications-modal').classList.contains('hidden')) renderPurchaseApplications(); }catch(e){}
                    return true;
                }
            }catch(e){ console.warn('Admin-Cloud-Pull fehlgeschlagen:',e); }
            finally{ adminCloudPullInProgress=false; }
            return false;
        }
        async function pullPublicCloudState(options={}){
            const cloud=window.hofCloudSync;
            if(!cloud?.status?.().cloudConfigured || publicCloudPullInProgress) return false;
            publicCloudPullInProgress=true;
            try{
                // Öffentliche Daten immer frisch vom Server holen, niemals aus dem HTTP-Cache.
                const result=await cloud.request('/api/public/state',{method:'GET',cache:'no-store',headers:{'Cache-Control':'no-cache'}});
                if(result?.state){
                    applyCloudState(result);
                    renderHöfe();
                    try{ renderFinder?.(); }catch(e){}
                    try{ updateDashboard?.(); }catch(e){}
                    if(options.showToast && typeof showAdminToast==='function') showAdminToast('Aktuelle Hofdaten geladen ✓','success');
                    return true;
                }
            }catch(e){
                console.warn('Öffentlicher Cloud-Pull fehlgeschlagen:',e);
            }finally{ publicCloudPullInProgress=false; }
            return false;
        }
        function startPublicCloudSync(){
            clearInterval(publicCloudSyncTimer);
            const cloud=window.hofCloudSync;
            if(!cloud?.status?.().cloudConfigured) return;
            if(isAdmin && cloud.status().authenticated){
                publicCloudTimerMode='admin';
                pullAdminCloudState();
            }else{
                publicCloudTimerMode='public';
                pullPublicCloudState();
            }
            publicCloudSyncTimer=setInterval(()=>{
                if(isAdmin) pullAdminCloudState({showToast:false});
                else pullPublicCloudState();
            },3000);
        }
        document.addEventListener('visibilitychange',()=>{
            if(document.visibilityState==='visible'){
                if(!isAdmin) pullPublicCloudState({showToast:false});
                else if(window.hofCloudSync?.status?.().authenticated) pullAdminCloudState({showToast:false}).catch(()=>{});
            }
        });
        window.addEventListener('focus',()=>{ if(!isAdmin) pullPublicCloudState({showToast:false}); else pullAdminCloudState({showToast:false}); });

        async function syncCloudNow(){
            if(adminUserPreview){showAdminToast('Die Rollen-Vorschau ist schreibgeschützt.','info');return;}
            if(!isAdmin || !(can('edit') || can('purchase'))){showAdminToast('Für die Synchronisation fehlen die nötigen Berechtigungen.','error');return;}
            closeTechnicalSettings();
            try{
                const connected=await ensureCloudAuthentication({silent:false});
                if(!connected)return;
                const result=await window.hofCloudSync.syncNow();
                if(result.state==='synced') showAdminToast('Cloud-Synchronisation erfolgreich ✓','success');
                else showAdminToast('Cloud-Synchronisation fehlgeschlagen: '+result.message,'error');
            }catch(e){ showAdminToast('Cloud-Synchronisation fehlgeschlagen: '+e.message,'error'); }
        }
        async function openCloudSettings(){
            if(adminUserPreview || getCurrentRole()!=='superadmin'){showAdminToast('Nur ein Superadmin darf die Backend-Verbindung ändern.','error');return;}
            closeTechnicalSettings();
            openCloudAuthModal({settings:true});
        }
        async function refreshCloudStatus(){
            try{
                const s=window.hofCloudSync?.status?.();
                const el=document.getElementById('admin-menu-status');
                if(el && !isAdmin) el.textContent=s?.cloudConfigured?(s.authenticated?'☁️ Cloud verbunden':'☁️ Backend eingerichtet'):'Nicht angemeldet';
            }catch(e){}
        }

        // Eine einzige Startfunktion: erst wenn alle Variablen/Funktionen existieren,
        // wird die Oberfläche gerendert. Dadurch kann der erste Seitenaufruf nicht
        // mehr wegen eines frühen renderHöfe()-Aufrufs bei 0 Höfen landen.
        async function restoreAdminSession(){
            try{
                const cloud=window.hofCloudSync;
                const existing=cloud?.getSession?.();
                if(existing?.user) return false;
                if(!cloud?.status?.().cloudConfigured || !cloud.status().authenticated) return false;
                const data=await cloud.request('/api/auth/session',{method:'GET'});
                const admin=data.admin;
                if(!admin) throw new Error('Ungültige Sitzung.');
                window.hofCloudAdminIdentity=admin;
                adminProfiles=[{id:String(admin.id),username:admin.username,role:admin.role||'admin'}];
                currentAdminId=String(admin.id); isAdmin=true; adminUserPreview=false;
                await loadAdminProfilesFromServer();
                const current=adminProfiles.find(p=>String(p.id)===String(admin.id));
                if(current) currentAdminId=current.id;
                return true;
            }catch(e){
                window.hofCloudSync?.logout?.();
                isAdmin=false; currentAdminId=null; adminProfiles=[];
                return false;
            }
        }

        function initializePage(){
            try { updateThemeButtonUI(); } catch(e){ console.warn('Theme-UI:', e); }
            try { updateAdminMenuUI(); } catch(e){ console.warn('Admin-UI:', e); }
            try { updateFavoritesButton(); } catch(e){ console.warn('Favoriten-UI:', e); }
            try { updateUserAccountUI(); } catch(e){ console.warn('Account-UI:', e); }
            try { refreshCloudStatus(); } catch(e){}
            renderHöfe();
        }

        document.addEventListener('click', (e) => {
            const adminContainer = document.getElementById('admin-menu-container');
            if (adminContainer && !adminContainer.contains(e.target)) closeAdminMenu();
        });

        // Dialog-QOL: Modal-Fenster werden nicht mehr durch einen Klick außerhalb geschlossen.
        // Das verhindert, dass Textmarkieren/Draggen oder ein versehentlicher Klick den Dialog schließt.
        // Schließen erfolgt bewusst über X/Abbrechen/Schließen oder ESC.
        const dialogIds = [
            'cloud-auth-modal','user-account-modal','admin-profiles-modal',
            'admin-logs-modal','purchase-modal','application-tracker-modal','purchase-applications-modal',
            'discord-settings-modal','technical-admin-modal','user-preview-modal','admin-dashboard-modal','hof-management-modal','business-management-modal'
        ];
        dialogIds.forEach(id => {
            const dialog = document.getElementById(id);
            if (dialog) dialog.addEventListener('click', e => e.stopPropagation());
        });

        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape') return;
            const closers = [
                ['business-management-modal','closeBusinessManagement'],
                ['hof-management-modal','closeHofManagement'],
                ['admin-dashboard-modal','closeAdminDashboard'],
                ['discord-settings-modal','closeDiscordSettings'],
                ['technical-admin-modal','closeTechnicalSettings'],
                ['user-preview-modal','closeUserPreviewChooser'],
                ['purchase-applications-modal','closePurchaseApplications'],
                ['application-tracker-modal','closeApplicationTracker'],
                ['purchase-modal','closePurchaseModal'],
                ['admin-logs-modal','closeAdminLogs'],
                ['admin-profiles-modal','closeAdminProfiles'],
                
                ['user-account-modal','closeUserAccount'],
                ['cloud-auth-modal','closeCloudAuthModal'],
                ['detail-modal','closeModal']
            ];
            for (const [id, fn] of closers) {
                const el = document.getElementById(id);
                if (el && !el.classList.contains('hidden')) {
                    e.preventDefault();
                    if (typeof window[fn] === 'function') window[fn]();
                    break;
                }
            }
        });

        async function initializeImageStorage() {
            // Optionaler Bildspeicher darf den ersten Seitenaufbau niemals blockieren.
            try { await imageDB.open(); } catch (e) { console.warn('Optionaler Bildspeicher nicht verfügbar:', e); }
        }

        // Erst nach dem vollständigen Parsen/Initialisieren rendern.
        async function bootPage(){
            let restoredAdmin=false;
            try{ restoredAdmin=await restoreAdminSession(); }catch(e){ console.warn('Session-Wiederherstellung:',e); }
            if(!restoredAdmin){ try{ await restoreUserAccountSession(); }catch(e){ console.warn('Benutzerkonto-Wiederherstellung:',e); } }

            // Erst den zentralen Zustand laden, danach erstmals rendern. So kann
            // ein neuer Browser nicht kurzzeitig den lokalen Standardzustand zeigen.
            try{
                if(restoredAdmin && window.hofCloudSync?.status?.().authenticated){
                    const result=await window.hofCloudSync.pull();
                    if(result?.state) applyCloudState(result);
                }else{
                    await pullPublicCloudState();
                }
            }catch(e){ console.warn('Cloud-Startsync fehlgeschlagen:',e); }

            initializePage();

            startPublicCloudSync();
        }
        // Der Cloud-Adapter wird weiter unten definiert. Deshalb darf bootPage()
        // hier noch NICHT gestartet werden: sonst ist window.hofCloudSync beim
        // ersten Start noch undefined und der Public-Sync wird übersprungen.
        initializeImageStorage();

(function(){
  function keepAdminMenuInViewport(){
    const panel=document.getElementById('admin-menu-panel');
    const button=document.getElementById('admin-menu-button');
    if(!panel||panel.classList.contains('hidden')||!button)return;
    const r=button.getBoundingClientRect(), margin=8, gap=8;
    const maxH=Math.min(window.innerHeight-2*margin,620);
    panel.style.maxHeight=maxH+'px';
    const h=Math.min(panel.scrollHeight,maxH);
    const w=Math.min(320,window.innerWidth-16);
    panel.style.width=w+'px';
    panel.style.right=Math.max(8,window.innerWidth-r.right)+'px';
    panel.style.left='auto';
    let top=r.bottom+gap;
    if(top+h>window.innerHeight-margin) top=Math.max(margin,r.top-gap-h);
    panel.style.top=top+'px';
    panel.style.bottom='auto';
  }
  window.addEventListener('resize',keepAdminMenuInViewport);
  window.addEventListener('scroll',keepAdminMenuInViewport,true);
  document.addEventListener('DOMContentLoaded',keepAdminMenuInViewport);
  document.addEventListener('click',function(e){
    const panel=document.getElementById('admin-menu-panel'),button=document.getElementById('admin-menu-button');
    if(panel&&!panel.classList.contains('hidden')&&!panel.contains(e.target)&&!button?.contains(e.target)){
      panel.classList.add('hidden');
      const arrow=document.getElementById('admin-menu-arrow'); if(arrow)arrow.style.transform='rotate(0deg)';
    }
  });
})();

const APP_VIEWS = {home:'home',farms:'farms',finder:'finder',map:'map',favorites:'favorites',compare:'compare',applications:'applications',profile:'profile'};
let currentAppView = localStorage.getItem('ls25_app_view') || 'home';
let viewTransitionTimer = null;
function updateFilterButtonsV31(){
  ['alle','zu-verkaufen','verkauft'].forEach(t=>{
    const btn=document.getElementById(`btn-${t}`);
    if(!btn)return;
    btn.className=t===aktuellerFilter
      ? 'px-4 py-2 rounded-lg text-sm font-medium bg-emerald-600 text-white transition shadow-sm cursor-pointer'
      : 'px-4 py-2 rounded-lg text-sm font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition cursor-pointer';
  });
}
function showAppView(view){
  const day=document.getElementById('hof-day-section');
  const compare=document.getElementById('hof-compare-panel');
  const finder=document.getElementById('hof-finder-panel');
  const grid=document.getElementById('hoefe-grid');
  const profile=document.getElementById('view-profile');
    const applications=document.getElementById('view-applications');
  if(!grid)return;
  if(view==='map') view='farms';

  const previousView=currentAppView;
  currentAppView=view;

  // Jede Ansicht bekommt eine eindeutig definierte Sichtbarkeit.
  // Nicht nur Tailwinds .hidden verwenden: display:none wird zusätzlich inline gesetzt,
  // damit kein alter Zustand des Finders oder eine CSS-Regel ihn wieder sichtbar macht.
    const sections=[day,compare,finder,grid,profile,applications].filter(Boolean);
  sections.forEach(el=>{
    el.classList.add('hidden');
    el.classList.remove('app-view-enter');
    el.style.display='none';
  });

  const show=(el)=>{
    if(!el)return;
    el.classList.remove('hidden');
    el.style.display='';
  };

  if(view==='home'){
    show(day); show(grid);
  } else if(view==='farms'){
    show(grid);
  } else if(view==='finder'){
    if(finder){
      finder.dataset.open='true';
      show(finder);
      initFinderRangeInteraction();
    }
    show(grid);
  } else if(view==='favorites'){
    show(grid);
  } else if(view==='compare'){
    show(compare);
  } else if(view==='applications'){
        show(applications);
  } else if(view==='profile'){
    show(profile);
    updateMotionToggleUI();
  } else {
    currentAppView='home';
    show(day); show(grid);
  }

  // Ein Finder darf niemals als geöffneter Zustand in eine andere Ansicht mitgenommen werden.
  if(view!=='finder' && finder){
    finder.dataset.open='false';
    finder.classList.add('hidden');
    finder.style.display='none';
  }
    if(view!=='applications' && typeof closeApplicationTracker==='function') closeApplicationTracker();

  document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===currentAppView));
  document.querySelectorAll('.app-nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===currentAppView));
  localStorage.setItem('ls25_app_view',currentAppView);

  // Ansichten sind unabhängig voneinander: Finder-Kriterien wirken ausschließlich im Finder.
  aktuellerFilter='alle';
  favoritesOnly=(currentAppView==='favorites');
  if(currentAppView!=='finder'){
    hofFinder.freeOnly=false;
    hofFinder.favoritesOnly=false;
    hofSearchTerm='';
  }
  updateFilterButtonsV31?.();
  updateFavoritesButton?.();
  updateFinderUI?.();
  renderHofDay?.();
  renderHöfe?.();

  // Eine einzige, sichtbare Animation beim echten Bereichswechsel.
  clearTimeout(viewTransitionTimer);
  document.body.classList.remove('view-transitioning');
  document.querySelectorAll('.app-view-enter').forEach(el=>el.classList.remove('app-view-enter'));
  if(isMotionEnabled() && previousView!==currentAppView){
    void document.body.offsetWidth;
    const visible=[day,compare,finder,grid,profile].filter(el=>el && el.style.display!=='none');
    visible.forEach(el=>el.classList.add('app-view-enter'));
    document.body.classList.add('view-transitioning');
    viewTransitionTimer=setTimeout(()=>{
      visible.forEach(el=>el.classList.remove('app-view-enter'));
      document.body.classList.remove('view-transitioning');
    },520);
  }
  window.scrollTo({top:0,behavior:'smooth'});
}
function isMotionEnabled(){ return localStorage.getItem('ls25_motion_enabled') !== 'false'; }
function updateMotionToggleUI(){
  const btn=document.getElementById('profile-motion-toggle');
  const text=document.getElementById('profile-motion-text');
  const enabled=isMotionEnabled();
  if(btn)btn.setAttribute('aria-pressed',enabled?'true':'false');
  if(text)text.textContent=enabled?'Animationen: Ein':'Animationen: Aus';
}
function toggleMotion(){
  localStorage.setItem('ls25_motion_enabled',isMotionEnabled()?'false':'true');
  updateMotionToggleUI();
}

function toggleMobileSidebar(force){
  const menu=document.getElementById('mobile-menu'); if(!menu)return;
  const open=force===undefined?!menu.classList.contains('open'):!!force;
  menu.classList.toggle('open',open); menu.setAttribute('aria-hidden',open?'false':'true');
  document.body.classList.toggle('overflow-hidden',open);
}
function openAdminFromNavigation(){
  if(typeof isAdmin!=='undefined'&&isAdmin){if(typeof toggleAdminMenu==='function')toggleAdminMenu();}
  else if(typeof toggleAdminMenu==='function')toggleAdminMenu();
}
(function(){
  const oldUpdate=window.updateAdminMenuUI;
  window.updateAdminMenuUI=function(){
    if(typeof oldUpdate==='function')oldUpdate();
    const a=document.getElementById('mobile-admin-nav');
    if(a)a.classList.toggle('hidden',!(typeof isAdmin!=='undefined'&&isAdmin));
  };
  document.addEventListener('DOMContentLoaded',()=>{
    const savedRaw=localStorage.getItem('ls25_app_view')||'home';
    const saved=savedRaw==='map'?'farms':savedRaw;
    showAppView(saved);
    if(typeof updateAdminMenuUI==='function')updateAdminMenuUI();
  });
})();

/* v30: robuste Grundlage für späteres Backend/Sync */
(function(){
  const SYNC_META_KEY='ls25_sync_meta';
  const DEVICE_KEY='ls25_device_id';
  const QUEUE_KEY='ls25_sync_queue';
  const now=()=>new Date().toISOString();
  function getDeviceId(){
    let id=localStorage.getItem(DEVICE_KEY);
    if(!id){ id='dev_'+crypto.randomUUID(); localStorage.setItem(DEVICE_KEY,id); }
    return id;
  }
  function readMeta(){
    try{return JSON.parse(localStorage.getItem(SYNC_META_KEY)||'{}')||{};}catch{return {};}
  }
  function writeMeta(patch){localStorage.setItem(SYNC_META_KEY,JSON.stringify({...readMeta(),...patch}));}
  function readQueue(){try{return JSON.parse(localStorage.getItem(QUEUE_KEY)||'[]')||[];}catch{return [];}}
  function writeQueue(q){localStorage.setItem(QUEUE_KEY,JSON.stringify(q));}
  window.syncFoundation={
    version:1,
    getDeviceId,
    status(){return {...readMeta(),deviceId:getDeviceId(),pending:readQueue().length};},
    enqueue(type,payload){
      const q=readQueue();
      q.push({id:crypto.randomUUID(),deviceId:getDeviceId(),type,payload,createdAt:now(),attempts:0});
      writeQueue(q);
      writeMeta({lastLocalChangeAt:now(),state:'local-only'});
      return q[q.length-1];
    },
    queue(){return readQueue();},
    markSynced(){writeQueue([]);writeMeta({lastSyncedAt:now(),state:'synced'});},
    markError(message){writeMeta({state:'error',lastError:String(message||'Unbekannter Fehler')});}
  };
  writeMeta({schemaVersion:1,initializedAt:readMeta().initializedAt||now(),deviceId:getDeviceId(),state:readMeta().state||'local-only'});
  window.addEventListener('storage',e=>{
    if([SYNC_META_KEY,QUEUE_KEY].includes(e.key)) window.dispatchEvent(new CustomEvent('ls25:sync-state-changed'));
  });
})();

(function(){
  const originalShowAppView=window.showAppView;
  if(typeof originalShowAppView==='function') window.showAppView=function(view){
    if(view==='map') view='farms';
    return originalShowAppView(view);
  };
  try{localStorage.setItem('ls25_app_view', localStorage.getItem('ls25_app_view')==='map'?'farms':(localStorage.getItem('ls25_app_view')||'home'));}catch(e){}
})();

/* v39: Backend-/Cloud-Adapter. Noch kein Online-Server nötig.
   Sobald HOF_API_BASE gesetzt ist, kann dieselbe Website eine zentrale API verwenden. */
(function(){
  const CONFIG_KEY='ls25_cloud_config';
  const TOKEN_KEY='ls25_cloud_session';
  const now=()=>new Date().toISOString();
  const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)||'') ?? fallback;}catch{return fallback;}};
  const write=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
  function getConfig(){
    const cfg=read(CONFIG_KEY,{});
    let base=String(cfg.apiBase||'').replace(/\/$/,'');
    // Auch eine lokal geöffnete HTML-Datei soll den lokalen Server finden.
    // Bei http(s) bleibt die aktuelle Origin die bevorzugte Adresse.
    if(!base && location.protocol==='file:') base='http://localhost:3000';
    const sameOrigin=(location.protocol==='http:'||location.protocol==='https:');
    return {apiBase:base,enabled:!!base||sameOrigin,configuredAt:cfg.configuredAt||null};
  }
  function setApiBase(url){
    const clean=String(url||'').trim().replace(/\/$/,'');
    write(CONFIG_KEY,{apiBase:clean,configuredAt:clean?now():null});
    return getConfig();
  }
  function getSession(){return read(TOKEN_KEY,null);}
  function setSession(session){ if(session) write(TOKEN_KEY,session); else localStorage.removeItem(TOKEN_KEY); }
  async function request(path,options={}){
    const cfg=getConfig();
    if(!cfg.enabled) throw new Error('Kein Cloud-Server konfiguriert.');
    const session=getSession();
    const headers={'Content-Type':'application/json',...(options.headers||{})};
    if(session?.token) headers.Authorization=`Bearer ${session.token}`;
    const target=(cfg.apiBase||'')+path; const res=await fetch(target,{...options,headers});
    const text=await res.text();
    let data=null; try{data=text?JSON.parse(text):null;}catch{data=text;}
    if(!res.ok){
      const error=new Error(data?.message||`Serverfehler (${res.status})`);
      error.status=res.status; error.response=data;
      throw error;
    }
    return data;
  }
  async function login(username,password){
    const data=await request('/api/auth/login',{method:'POST',body:JSON.stringify({username,password})});
    if(!data?.token) throw new Error('Der Server hat kein Sitzungstoken geliefert.');
    setSession({token:data.token,admin:data.admin||null,createdAt:now()});
    return data;
  }
  async function userLogin(username,password){ const data=await request('/api/user/login',{method:'POST',body:JSON.stringify({username,password})}); setSession({token:data.token,user:data.user||null,createdAt:now()}); return data; }
  async function userRegister(username,password){ const data=await request('/api/user/register',{method:'POST',body:JSON.stringify({username,password})}); setSession({token:data.token,user:data.user||null,createdAt:now()}); return data; }
  async function userLogout(){ try{await request('/api/user/logout',{method:'POST'});}catch(e){} setSession(null); }
  async function userSession(){ return request('/api/user/session',{method:'GET'}); }
  async function updateUserPreferences(payload){ return request('/api/user/preferences',{method:'PUT',body:JSON.stringify(payload||{})}); }
  function logout(){setSession(null);}
  function localSnapshot(){
    return {
      version:1,
      capturedAt:now(),
      deviceId:window.syncFoundation?.getDeviceId?.()||null,
      hoefe:typeof hoefeData!=='undefined'?hoefeData:null,
      status:typeof hofStatus!=='undefined'?hofStatus:null,
      kaeufer:typeof hofKaeufer!=='undefined'?hofKaeufer:null,
      favorites:typeof favoriteHoefe!=='undefined'?favoriteHoefe:[],
      compare:typeof compareHoefe!=='undefined'?compareHoefe:[],
      applications:typeof purchaseApplications!=='undefined'?purchaseApplications:[],
      discord:{
        settings:typeof discordSettings!=='undefined'?discordSettings:{},
        channels:typeof discordChannels!=='undefined'?discordChannels:[]
      }
    };
  }
  async function submitPublicApplication(payload){
    const cfg=getConfig();
    if(!cfg.enabled) throw new Error('Kein Cloud-Server konfiguriert.');
    const response=await fetch((cfg.apiBase||'')+'/api/public/applications',{
      method:'POST',headers:{'Content-Type':'application/json',...(window.hofCloudSync?.getSession?.()?.token?{Authorization:`Bearer ${window.hofCloudSync.getSession().token}`}:{})},body:JSON.stringify(payload||{})
    });
    const text=await response.text(); let data=null; try{data=text?JSON.parse(text):null;}catch{data=text;}
    if(!response.ok) throw new Error(data?.message||`Serverfehler (${response.status})`);
    return data;
  }
  async function pull(){
    const data=await request('/api/state',{method:'GET'});
    if(window.syncFoundation) window.syncFoundation.markSynced();
    return data;
  }
  async function push(){
    const snapshot=localSnapshot();
    const data=await request('/api/state',{method:'PUT',body:JSON.stringify(snapshot)});
    if(window.syncFoundation) window.syncFoundation.markSynced();
    return data;
  }
  async function health(){return request('/api/health',{method:'GET'});}
  async function syncNow(){
    const cfg=getConfig();
    if(!cfg.enabled) return {state:'local-only',message:'Noch kein Cloud-Server konfiguriert.'};
    try{
      const result=await push();
      if(window.syncFoundation) window.syncFoundation.markSynced();
      return {state:'synced',result};
    }catch(error){
      if(window.syncFoundation) window.syncFoundation.markError(error.message);
      return {state:'error',message:error.message};
    }
  }
  window.hofCloudSync={
    version:1,
    getConfig,setApiBase,getSession,setSession,login,logout,userLogin,userRegister,userLogout,userSession,updateUserPreferences,request,
    localSnapshot,pull,push,health,syncNow,submitPublicApplication,
    status(){
      const cfg=getConfig(),session=getSession(),local=window.syncFoundation?.status?.()||{};
      return {...local,cloudConfigured:cfg.enabled,apiBase:cfg.apiBase,authenticated:!!session?.token};
    }
  };
  window.dispatchEvent(new CustomEvent('ls25:sync-state-changed'));
})();

(function(){
  function refresh(){
    const s=window.hofCloudSync?.status?.();
    const btn=document.getElementById('admin-menu-status');
    if(!btn||!s)return;
    if(s.cloudConfigured && !s.authenticated){ btn.title='Server erreichbar; Cloud-Anmeldung noch nicht verbunden.'; }
  }
  document.addEventListener('DOMContentLoaded',()=>setTimeout(refresh,0));
})();

(function(){
  function update(){
    const s=window.hofCloudSync?.status?.();
    const el=document.getElementById('admin-menu-status');
    if(!el||!s)return;
    const cloud=s.cloudConfigured ? (s.authenticated ? '☁️ Cloud verbunden' : '☁️ Server eingerichtet') : '💾 Lokal · Cloud später';
    const pending=s.pending?` · ${s.pending} offen`:'';
    el.textContent=cloud+pending;
  }
  window.addEventListener('ls25:sync-state-changed',update);
  window.addEventListener('storage',update);
  document.addEventListener('DOMContentLoaded',()=>setTimeout(update,0));
})();

// Boot bewusst ganz ans Dateiende: Alle Funktionen inkl. Cloud-Adapter
// existieren jetzt bereits, bevor der erste öffentliche Cloud-Pull startet.
(function(){
  function start(){
    if (window.__hoefeDerIllschwangBootStarted) return;
    window.__hoefeDerIllschwangBootStarted = true;
    bootPage();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, {once:true});
  } else {
    start();
  }
})();
