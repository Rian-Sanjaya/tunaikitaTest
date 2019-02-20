const commonPrefix = (strings) => {
    if (!strings || !strings.length) return '';
    const obj = {};
    let maxChar = ''
    strings.forEach( str => {
        char = str[0];
        obj[char] = (obj[char] || 0) + 1;
        if (obj[char] > 1 && (maxChar === '' || obj[char] > obj[maxChar])) {
            maxChar = char;
        }
    });

    return maxChar;
}

const maxChar = commonPrefix(["people","pen","put"]);
const maxChar2 = commonPrefix(["apple","run","people"]);

console.log(maxChar);
console.log(maxChar2);