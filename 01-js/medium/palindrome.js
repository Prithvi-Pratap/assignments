/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// approach: 1.convert to lower case
//           2.remove all non-alphanumeric characters
//           3.split to use reverse function
//           4.join after reversing

function isPalindrome(str) {
  let cleanStr=str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
  let revStr=cleanStr.split('').reverse().join('');
  return cleanStr==revStr;
}

module.exports = isPalindrome;
