let x = " heyy"
let y = "Akshyat"
// ` Backtick  s`
console.log(`${x} my name is ${y}`);       // String Interpolation -Injecting variables or expressions directly 
    
// Methods of strings only imp one ( There are many)

// length , chartat , replace , indexof , trim , substring ( +ve values ) , slice ( -ve values can also be there )


let  user = "AkshyatorPeralta"

console.log(user.substring( 0,7 ));

//slice
const anotherstring =  user.slice( -2 , -1);
console.log(anotherstring);
// To get a portion of the string using negative indices, you need to ensure the end index is also negative or positve but  greater than the start index, or that the positive end index is a valid target after the negative start.




//trim

const newstringone = "     heyyyy man      ";

const anotherstringone = newstringone.trim();
console.log(newstringone);
console.log(anotherstringone); /// removes all the side spaces
  // include ( to check if present)

  console.log( newstringone.includes('man'))


  //split ( It splits a string into an array of substrings based on a given separator.)

  let suii = " sdfjlksdfj-dksdfd-sdfnlksdfjk-dflksdlk";

  console.log(suii.split('-'));
  // in the bracket you can write space or any thing that is int the string like htere was ( - )




  //String Interpolation


  const h = " Akshyat "
  const w = " kumar "

  console.log(`My Name is ${h} ${w}`);
  

