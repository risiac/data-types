/* write a function that accepts a string. The function should return a boolean
indicating whether the string contains two of the same character consecutively.
If the value passed into the function is not a string, return null. */

function hasDoubleLetter(letter) {
    if (typeof letter !== "string") {
        return null;
    }

    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === letter[i + 1]) {
            return true;
        }
    }
    return false;
};

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('jumper')); // false
console.log(hasDoubleLetter(18)); // null




/* write a function that takes in a string and returns the first vowel that appears
sequentially in the string. If the string does not contain a vowel, return null; */

let firstVowel = function(word) {

    for (let i = 0; i < word.length; i++) {
        let vowel = word[i];
        if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
            return vowel;
        }
    }
    return null;
};
console.log(firstVowel('battery')); // 'a'


/* write a function that takes in a string and returns the last vowel that appears
sequentialy in the string. Note that the string may contain capitalization. */

const vowels = ["a", "e", "i", "o", "u"];

let lastVowel = function(str) {

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        if (vowels.includes(char.toLowerCase())) {
            return char;
        }
    }
    return null;
}

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null



/* write a function that takes in an array of numbers as an arg. The function should return
the smallest number of the array. If the array is empty, the function should return null. */

let miniValue = function(values) {
    let min = null;

    for (let i = 0; i < values.length; i++) {
        let nums = values[i];
        if (nums < min || min === null) {
            min = nums;

        }
    }
    return min;
};


console.log(miniValue([4, 6, 3, 5, 2, 4])); // 2
console.log(miniValue([-2, -3, -7, 3])); // -7
console.log(miniValue([])); // null


/* write a function that accpets an array as an arg. The function should return the average
of all vlaues in the array. If the array is empty, it should return null. */

let avgVal = function(arr) {
    let sum = 0;

    if (arr.length === 0) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        let numbers = arr[i];
        sum += numbers;

    }
    return sum / arr.length;
};

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null



/* write a function that takes in an array of numbers as an arg. The function should return the largest number of the array.
If the array is empty, the function should return null. */

let maxValue = function(values) {
    let max = null;

    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        if (value > max || values === null) {
            max = value;
        }
    }
    return max;
}
console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null


/* write a function that accepts a word as an argument. The function should return a new word where all letters
that come after the last vowel(including de vowel itself) are repeated at the end of the word. If the value passed in
is not a string, return null. */

let reverb = function(word) {
    if (typeof word !== "string") {
        return null;
    }
    let vowels = "aeiouAEIOU";
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word + word.slice(i);
        }
    }
    return word;
}
console.log(reverb('running')); // runninging
console.log(reverb('DISH')); // DISHISH
console.log(reverb(197393)); // null