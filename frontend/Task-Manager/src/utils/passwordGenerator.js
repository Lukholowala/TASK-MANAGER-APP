const UINT32_RANGE = 0x100000000;
const MAX_UINT32 = UINT32_RANGE - 1;

const CHARACTER_SETS = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!@#$%^&*()-_=+[]{};:,.?",
];

export const getSecureRandomInt = (max) => {
    if (!Number.isInteger(max) || max < 0 || max > MAX_UINT32) {
        throw new RangeError("max must be an integer between 0 and 2^32 - 1");
    }

    if (!globalThis.crypto?.getRandomValues) {
        throw new Error("A secure random number generator is not available");
    }

    const range = max + 1;
    const limit = Math.floor(UINT32_RANGE / range) * range;
    const randomValue = new Uint32Array(1);

    do {
        globalThis.crypto.getRandomValues(randomValue);
    } while (randomValue[0] >= limit);

    return randomValue[0] % range;
};

export const generatePassword = (length = 16) => {
    if (!Number.isSafeInteger(length) || length < CHARACTER_SETS.length || length > 128) {
        throw new RangeError("Password length must be an integer between 4 and 128");
    }

    const characters = CHARACTER_SETS.map((characterSet) => (
        characterSet[getSecureRandomInt(characterSet.length - 1)]
    ));
    const allCharacters = CHARACTER_SETS.join("");

    while (characters.length < length) {
        characters.push(allCharacters[getSecureRandomInt(allCharacters.length - 1)]);
    }

    for (let index = characters.length - 1; index > 0; index -= 1) {
        const swapIndex = getSecureRandomInt(index);
        [characters[index], characters[swapIndex]] = [characters[swapIndex], characters[index]];
    }

    return characters.join("");
};
