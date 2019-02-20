// To test run the code open each of the files, copy and paste it into google chrome console and press enter.

// Please be kindly noted that because I am currently more familiar with Javascript 
// so I do all the code in Javascript. 
// I think the more important think is the logic, 
// if I pass the test I am sure I can catch up with Java later. 

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