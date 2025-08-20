export let codeSnippet = [
  {
    title: 'Find Maximum Number in Array',
    description:
      'Demonstrates four different ways to find the maximum value in a JavaScript array: Math.max, arrow function, reduce, and for loop.',
    code: 'let arr = [1, 4, 64, 3, 2, 7];\nfunction findMaxNumber(arr) {\n  //Normal Func\n  return Math.max(...arr);\n}\nconst a = (arr) => Math.max(...arr); //Arrow function\n\nfunction findMaxNumberByDefault(arr) {\n  //Normal Func\n  return arr.reduce((current, max) => (current > max ? current : max));\n}\n\nfunction forloopMethod(arr) {\n  let max = arr[0];\n  for (const num of arr) {\n    if (num > max) {\n      max = num;\n    }\n  }\n  return max;\n}\nconsole.log(findMaxNumber(arr));\nconsole.log(a(arr));\nconsole.log(findMaxNumberByDefault(arr));\nconsole.log(forloopMethod(arr));',
  },
  {
    title: 'Check Palindrome String',
    description:
      'Checks if a given string is a palindrome using both arrow function and for loop.',
    code: 'let text = "madam";\nlet textTwo = "david";\nconst b = (str) => str === str.split("").reverse().join("");\nconsole.log(b(text));\n\nfunction palindrome(string) {\n  let length = string.length;\n  for (let i = 0; i < length - 1; i++) {\n    if (string[i] !== string[length - 1 - i]) {\n      return false;\n    }\n  }\n  return true;\n}\nconsole.log(palindrome(text));',
  },
  {
    title: 'Find Even Numbers in Array',
    description:
      'Returns a new array with only the even numbers using filter and for loop.',
    code: 'function findEvenNumberInArray(array) {\n  return array.filter((num) => num % 2 === 0);\n}\n\nconst findbyDefault = (arr) => {\n  let evenArray = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] % 2 === 0) {\n      evenArray.push(arr[i]);\n    }\n  }\n  return evenArray;\n};\nconsole.log(findbyDefault(arr));\nconsole.log(findEvenNumberInArray(arr));',
  },
  {
    title: 'Calculate Factorial',
    description: 'Calculates the factorial of a given number using recursion.',
    code: 'const factorial = (n) => {\n  if (n < 0) return "Not defined for negative numbers";\n  return n === 0 || n === 1 ? 1 : n * factorial(n - 1);\n};\nconsole.log(factorial(3));',
  },
  {
    title: 'Check Prime Number',
    description:
      'Checks if a given number is prime using a for loop and Math.sqrt.',
    code: 'const prime = (n) => {\n  if (n <= 1) return false; // 0 and 1 are not prime\n  for (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) {\n      return false;\n    }\n  }\n  return true;\n};\nconsole.log(prime(88));',
  },
  {
    title: 'Reverse a String',
    description: 'Reverses a string using split/reverse/join and a for loop.',
    code: `const string = 'AEIOU';
let reverse = string.split('').reverse().join('');
console.log(reverse);
let reversed = '';
for (let i = string.length - 1; i >= 0; i--) {
  reversed = reversed + string[i];
}
console.log(reversed)`,
  },
  {
    title: 'Find Longest Word in Sentence',
    description:
      'Finds the longest word in a sentence using split and for loop.',
    code: `const sentence = 'Happy Monday Boys'
let words = sentence.split(' ');
let maxLen = ''
for (w of words) {
  if (w.length > maxLen.length) {
    maxLen = w;
  }
}
console.log(maxLen);`,
  },
  {
    title: 'Get String Length',
    description: 'Get the length of a string.',
    code: `let len = string.length;
console.log(len)`,
  },
  {
    title: 'Palindrome Check',
    description:
      'Checks if a string is a palindrome by comparing characters from both ends.',
    code: `function palindrome(str) {
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true
}
console.log(palindrome(string.toLowerCase()))`,
  },
  {
    title: 'Remove Duplicates from Array',
    description:
      'Removes duplicate values from an array using Set and for loop.',
    code: `const inputArray = [4, 2, 7, 4, 9, 2, 1, 7, 6, 4];
console.log([...new Set(inputArray)])
let finalarr = [];
for (num of inputArray) {
  if (!finalarr.includes(num)) {
    finalarr.push(num);
  }
}
console.log(finalarr)`,
  },
  {
    title: 'Count Vowels in String',
    description: 'Counts the number of vowels in a string.',
    code: `function vowels(str){
  let count = 0;
  const vowel = ['a','e','i','o','u','d'];
  for(s of str.toLowerCase()){
    if(vowel.includes(s)){
      count ++;
    }
  }
  return count;
}
console.log(vowels(string))`,
  },
  {
    title: 'Find Maximum in Array',
    description: 'Finds the maximum value in an array using a for loop.',
    code: `let max = -inputArray[0];
for(num of inputArray){
  if(num > max){
    max = num;
  }
}
console.log(max)`,
  },
  {
    title: 'Prime Number Check',
    description: 'Checks if a number is prime using a for loop and Math.sqrt.',
    code: `let nums = 7;
function prime(num){
if (num == 0 || num == 1) return "not A prime"
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num % i== 0){
      return "Not a prime"
    }
  }
  return "PRIME Da"
}
console.log(prime(nums));`,
  },
  {
    title: 'Factorial Calculation',
    description: 'Calculates the factorial of a number using recursion.',
    code: `let fact= (n)=>{
  if(n == 0 || n == 1){
    return 1
  }
  return n * fact(n-1);
}
console.log(fact(4))`,
  },
  {
    title: 'Remove Spaces from String',
    description:
      'Removes all spaces from a string using replace and split/join.',
    code: `const text = "The End s"
let removeSpace = text.replace(/ /g,'')
console.log(removeSpace)
console.log(text.split(' ').join(''))`,
  },
  {
    title: 'Mask Card Number',
    description: 'Masks a card number after the last dash with asterisks.',
    code: `let str = '1212-2323-2323-2323-232323232-342343'
let card = (str) => {
  let finalCard = ''
  let lastIndex = str.lastIndexOf('-');
  for(let i=0 ; i <= str.length ; i++){
    if(i <= lastIndex){
      finalCard = finalCard + str[i];
    }
    else {
      finalCard = finalCard + '*';
    }
  }
  return finalCard
}
console.log(card(str))`,
  },
  {
    title: 'Find Longest Word in Sentence',
    description:
      'Finds the longest word in a sentence using split and for loop.',
    code: "const sentence = 'Happy Monday Boys'\nlet words = sentence.split(' ');\nlet maxLen = ''\nfor (w of words) {\n  if (w.length > maxLen.length) {\n    maxLen = w;\n  }\n}\nconsole.log(maxLen);",
  },
  {
    title: 'Palindrome Check (Half Loop)',
    description:
      'Checks if a string is a palindrome by comparing characters from both ends.',
    code: "let palindromeString = \"madam\";\nconst findPalindromeOrNot = (str)=>{\n    for(let i=0; i < str.length/2; i++){\n        if(str[i] !== str[str.length - 1 - i]){\n            return 'Not a Palindrome'\n        }\n    }\n    return 'Palindrome'\n}\nconsole.log(findPalindromeOrNot(palindromeString.trim()));",
  },
];
