const users = [
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
    "parkwon115"
];

const keywords = [
    "18+",
    "+18",
    "sexy",
    "🔞",
    "🍑",
    "💦",
    "twerk",
    "phub",
    "bikini",
    "lingerie"
];

const queries = [
    '.shelf-card__impression-wrapper',
    '[data-a-target^="card-"]',
];

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.type === "purge")
            purgeTwitchers();
    }
);

const purgeTwitchers = () => {
    console.log('Purging th0ts!');

    users.forEach(user => {
        window.document.querySelectorAll(`a[href="/${user}"][data-a-target="preview-card-image-link"]`).forEach(el => purgeEl(el));
    });

    keywords.forEach(keyword => {
        window.document.querySelectorAll(`h3[title*="${keyword}" i]`).forEach(el => {
            purgeEl(el);
        })
    });
}

const purgeEl = (el) => {
    queries.forEach(query => {
        const closest = el.closest(query);

        if (closest) {
            closest.remove();
        }
    });
}
