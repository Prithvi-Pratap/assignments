/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!=str2.length) return false;

  //remove all whitespace/linebreaks , convert  to lowercase for case insensitivity , split string into array coz sort function works on array, after sorting join  the  array 
  str1=str1.replace(/\s/g,'').toLowerCase().split('').sort().join('');
  str2=str2.replace(/\s/g,'').toLowerCase().split('').sort().join('');

  
  return (str1==str2);

}

module.exports = isAnagram;






//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


/*
//check anagram without using any built-in functions
function isAnagram(str1,str2) {

  // Function to remove spaces from a string
  function removeSpaces(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== ' ') {
        result += input[i];
      }
    }
    return result;
  }
  
  // Function to convert a string to lowercase
  function toLowerCase(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      // Check if the character is an uppercase letter
      if (input[i] >= 'A' && input[i] <= 'Z') {
        // Convert to lowercase by adding the ASCII difference
        result += String.fromCharCode(input[i].charCodeAt(0) + 32);
      } else {
        result += input[i];
      }
    }
    return result;
  }
  
  // Function to check if two strings are anagrams
  function checkAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    str1 = toLowerCase(removeSpaces(str1));
    str2 = toLowerCase(removeSpaces(str2));
    
    // Check if the lengths are the same
    if (str1.length !== str2.length) {
      return false;
    }
    
    // Check if each character in str1 has a corresponding character in str2
    for (let i = 0; i < str1.length; i++) {
      let found = false;
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    }
    
    return true;
  }
  
  // Call the function to check anagrams and return the result
  return checkAnagrams(str1, str2);
  
}

  */