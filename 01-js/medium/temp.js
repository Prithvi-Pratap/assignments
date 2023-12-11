let vowels='aeiou'.split('');
let str="hello World";
str= str.toLocaleLowerCase();
  let count=0;
  str=str.toLowerCase();
  for(let i=0;i<str.length-1;i++){
    if(vowels.includes(str[i])) console.log(str.charAt(i));
  }
  console.log(str)