/* write a function that takes in both a word and an array
of words as arguments and returns a boolean that returns true
if that string is located inside of the array, or false if it does not.
*/


function wordWithinArray(array, word) {
    let wordWithin = array.indexOf(word);
    if (wordWithin >= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple"));


/* write a function that takes in an array of numbers and returns
the sum of the first and the last element if there is an even number
of elements in the array. If there is an odd number of elements in the array, then
the function should return the difference between the first and last elements of the array. */

function firstAndLast(first) {
    if (first.length % 2 === 0) {
        let sum = first[0] + first[(first.length - 1)];
        return sum;
    } else {
        sum = first[0] - first[(first.length - 1)];
        return sum;
    }
}

console.log(firstAndLast([1, 2, 3, 4])); // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5])); // 17
console.log(firstAndLast([12])); // 0
console.log(firstAndLast([7, 11, 3]));


/* write a function that takes in two arrays of numbers and returns
the two arrays into a single array. */

function combineArray(array1, array2) {
    let arrayConcat = array1.concat(array2);
    return arrayConcat;
}
console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7])); // => [17, 5, 6, 7]


/* write a function that accepts an array of numbers as an argument.
The function should return a boolean indicating whether or not the array
contains three consecutive numbers in consecutive increasing irder, like 7,8,9. */

function threeIncreasing(nums) {
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) {
            return true;
        }
    }
    return false;
}
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // true
console.log(threeIncreasing([2, 7, 8, 9])); // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));


/* write a function that accepts an array and a target value as args.
The function should return a boolean indicating whether the target is found in the array. */

function myIncludes(arr, target) {
    if (arr.indexOf(target) !== -1) {
        return true;
    }
    return false;
}
console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false



/* write a function that takes in an array of numbers and returns
the total sum of all the numbers. */

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        sum += num;
    }
    return sum;
}
console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30


/* write a function that takes in a array of numbers. The function
should return the total product of multiplying all numbers of the array together.
You can assume that nums will not be an empty array. */

function productWithReduce(nums) {
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        product *= num;
    }
    return product;
}
console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12


/* write a function that takes an array of numbers and returns a new array
where every element of the original array is multiplied by 2. */

function doubler(numbers) {
    let doubleNums = [];
    for (let i = 0; i < numbers.length; i++) {
        let double = 2 * numbers[i];
        // juntando os dois arrays.
        doubleNums = doubleNums.concat(double);
    }
    return doubleNums;
}
console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]