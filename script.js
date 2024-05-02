//print odd numbers
(function() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log("Odd numbers:", oddNumbers);
})();
// Convert all the strings to title caps in a string array:
(function() {
    const strings = ["hello", "world", "javascript"];
    const titleCaps = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log("Title caps:", titleCaps);
})();
//Sum of all numbers in an array
(function() {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of numbers:", sum);
})();
//Return all the prime numbers in an array:
(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };
    const primeNumbers = numbers.filter(isPrime);
    console.log("Prime numbers:", primeNumbers);
})();
// Return all the palindromes in an array:
(function() {
    const strings = ["madam", "hello", "racecar", "world"];
    const isPalindrome = str => str === str.split('').reverse().join('');
    const palindromes = strings.filter(isPalindrome);
    console.log("Palindromes:", palindromes);
})();

// arrow function

//Print odd numbers in an array:
(() => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log("Odd numbers:", oddNumbers);
})();

//Convert all the strings to title caps in a string array:
(() => {
    const strings = ["hello", "world", "javascript"];
    const titleCaps = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log("Title caps:", titleCaps);
})();
//Sum of all numbers in an array:
(() => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of numbers:", sum);
})();
//Return all the prime numbers in an array:
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };
    const primeNumbers = numbers.filter(isPrime);
    console.log("Prime numbers:", primeNumbers);
})();
//Return all the palindromes in an array:
(() => {
    const strings = ["madam", "hello", "racecar", "world"];
    const isPalindrome = str => str === str.split('').reverse().join('');
    const palindromes = strings.filter(isPalindrome);
    console.log("Palindromes:", palindromes);
})();

