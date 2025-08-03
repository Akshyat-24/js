"use strict "; // treat all JS code as newer version ( classes , modules .. )

// alert( 3+3) //  we are using nodejs not browser

// console.log(12 * 2);

// console.log("Akshyat's Birthday");

// console.log()





// -----------------------------------------------------------------------------------------------------------------


// PRIMITIVE DATATYPES
// String , Number , Boolean  , null , undefined , Symbol ( uinque) , BigInt


 // js is dynamically typed  means dont need to declare the type of variable ( let ... )

// REFERENCE ( NON PRimitve ...)
// Array , Object  , Function







// Primitve datatype stores in stack memory ....
let youtbname = " SyntaXakshyat";
let myname = youtbname

myname = " heyyy"
console.log( youtbname );
console.log( myname );









 // object Non Primitive datatype store is HEAP memory ..
let user1= {

    Id : 2423423 ,
   Pass : "heheh"
}

let user2 = user1
user2.Id = 1548548

// it dont have any copy only reference it changes orignial
console.log(user1.Id);
console.log(user2.Id);
