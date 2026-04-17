// List of common th0ts, filter these always out
// Twitch just ban these people already, they keep on testing your ToS
const USERS = [
    "bellaramatv",
    "laurasommaruga",
    "lilaclove",
    "victoria",
    "cinderella_tv_",
    "effieluxury",
    "rhinospiritx",
    "cinderella_tv_",
    "playirresponsibly",
    "leynainu",
    "onuri",
    "jenfoxxx",
    "tiffy",
    "firedancer",
    "inzemm",
    "rhinospiritx",
    "sharonqueen",
    "milf_888",
    "novaruu",
    "badvenus",
    "thenicolet",
    "yogatv",
    "thehotgirlstv",
    "blondiebunnyxo",
    "yogakaren",
    "momoflose",
    "elrincondelplacer",
    "xoaeriel",
    "taylor_jevaux",
    "mira",
    "spoopykitt",
    "olesyaliberman",
    "lyasyaa",
    "evaanna",
    "blueecheetah",
    "karna",
    "bikiniasmr",
    "erykahotgirl",
    "xxlobo1",
    "missdevon8",
    "stephanieannlouise",
    "adison_briana",
    "amorandijack",
    "jennifer_moyer",
    "alisaa_lux",
    "nylahwhiskers",
    "xxlauoanxx",
    "jessicalocaa",
    "muscledreamvalley",
    "parkwon115",
    "meowko",
    "asianbunnyx",
    "foxyc1eopatra",
    "kaellyn",
    "velvet_7",
    "ladigabster",
    "katealienqueen",
    "victoridayneko",
    "bubibellum",
    "devonjenelle",
    "xtasiaego",
    "littleaznchat",
    "bps1016",
    "kristinadaniellexo",
    "riskyfnbr_",
    "girl_neekol",
    "ramibyc",
    "corvifeon_wetness",
    "thenotreal_skybri",
    "beju_xx",
    "morgpie",
    "faith",
    "britneyambertv",
    "miashanti",
    "faith",
    "lilianasana",
    "sammysweetly",
    "twitchyogachannel",
    "sparklyboo69",
    "mistressmorticia2",
    "yuliattv",
    "Wyanot",
    "youritalianwaifu",
    "kristenlanae",
    "dylan41bryan60",
    "z7wwpien",
    "lilithmochii",
    "azuregodess",
    "littlem1chael",
    "seoi1016",
    "princessmariaaaaa",
    "castaway",
    "aryssa614",
    "azra",
    "eliza1muse",
    "olga_mur_msk",
    "bigbittygothic"
];

// Dynamic querying th0ts based on stream title
const KEYWORDS = [
    "18+",
    "+18",
    "sexy",
    "🔞",
    "🍑",
    "💦",
    "👅",
    "twerk",
    "phub",
    "bikini",
    "lingerie",
    "milf",
    "!of",
    "hot"
];

const CONTAINER_QUERIES = [
    // Homepage container selector
    '[data-test-selector="shelf-card-selector"]',
    // Category container
    'article[class^="Layout-"]',
];

chrome.runtime.onMessage.addListener(
    (request, _sender, _sendResponse) => {
        if (request.type === "purge")
            purgeTwitchers();
    }
);

const purgeTwitchers = () => {
    USERS.forEach(user => {
        window.document.querySelectorAll(`a[href="/${user}"][data-a-target="preview-card-image-link"]`).forEach(el => purgeEl(el));
    });

    KEYWORDS.forEach(keyword => {
        window.document.querySelectorAll(`h4[title*="${keyword}" i]`).forEach(el => {
            purgeEl(el);
        });
    });
}

const purgeEl = (el) => {
    CONTAINER_QUERIES.forEach(query => {
        const closest = el.closest(query);

        if (closest) {
            // ? DEBUG style
            // closest.style.outline = '3px dashed red';
            closest.style.filter = 'blur(4px)';

            const images = closest.querySelectorAll('img');
            images.forEach(img => img.style.filter = 'blur(32px)');
        }
    });
}
