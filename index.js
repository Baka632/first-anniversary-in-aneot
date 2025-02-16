const base_path = "assets/avatars/";
const alternate_avatars = {
    "mirror": ["mirror.jpg", "mirror-ghost-terrach.jpeg"],
    "guang-ying-he-rong-yao": ["guang-ying-he-rong-yao.jpeg", "guang-ying-he-rong-yao-qq.png"],
    "hei-zi": ["hei-zi.jpeg", "hei-zi-qq.png"],
    "icywind": ["icywind.png", "icywind-qq.png"],
    "r3tr0": ["r3tr0.png", "r3tr0-github.jpeg"],
    "wei-xue-ba-ma-ke": ["wei-xue-ba-ma-ke.png", "wei-xue-ba-ma-ke-terrach.jpeg"]
};

for (const id in alternate_avatars) {
    const candidates = alternate_avatars[id];
    const img = document.getElementById(id);

    const index = getRandomIntInclusive(0, 1);
    img.src = `${base_path}${candidates[index]}`;
}

const all_avatars_tile = document.getElementsByClassName("metro-tile");
for (const element of all_avatars_tile) {
    const predicate = getRandomIntInclusive(0, 1);

    if (predicate == 1)
    {
        element.classList.add("large-tile");
    }
}

// Source: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
