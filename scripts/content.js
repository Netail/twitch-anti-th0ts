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
    "xoaeriel"
];

const keywords = [
    "18+",
    "+18",
    "sexy",
    "🔞",
    "twerk"
];

const queries = [
    '.shelf-card__impression-wrapper',
    '[data-target="directory-game__card_container"]',
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
        window.document.querySelectorAll(`a[href="/${user}"].preview-card-image-link`).forEach(el => purgeEl(el));
    });

    keywords.forEach(keyword => {
        window.document.querySelectorAll(`h3[title*="${keyword}" i]`).forEach(el => {
            console.log(el)
            purgeEl(el);
        })
    })
}

const purgeEl = (el) => {
    queries.forEach(query => {
        const closest = el.closest(query);

        if (closest) {
            closest.remove();
        }
    });
}
