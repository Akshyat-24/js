const accountId = 2178485;
let  accountemail = " akshyat234@gmail.com " // scope problem resolved {} This is scope 
var accountpassword = " 24323434" // scope problem there so use let
accountcity = " Japiur "; // Global var if we dont use let var  .... but does not work in use strict mode.
// accountId = " 132133";

let accountstate ;

// console.log(accountcity) 
console.table([ accountstate , accountcity , accountpassword , accountcity])



let y =30;
if( true){
    let y = 40
    console.log(y);
    
}
 console.log(y);//Variables declared with let are block-scoped. The let y = 40; inside the if block creates a new, separate variable y that only exists within that block.