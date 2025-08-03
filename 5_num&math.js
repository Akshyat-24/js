// let x = new Number(13423);

// console.log(x);

// console.log(x.toString().length);
// // now its a string
// // to fixed

// console.log(x.toFixed(2)); // to show value after the decimal


// // set preceision .. ( IMP ) rounds off the value till the limit

// let n = 12.79545

// console.log(n.toPrecision(3));// Till 7( round off) means 12.9 beacsue at back is 9 -->9

// let num = 123.79545

// console.log(num.toPrecision(3));// Till 3( round off) means 124 because at back is 7 --> 9





// ++++++++++++++++++++++++++++++++++++++  MATH +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // all in +ve
console.log(Math.round(4.6));  // 5
console.log(Math.ceil(4.1)); /// top value always //5
console.log(Math.floor(4.8)); // down value // 4


console.log(Math.random());            // random value bw 0 ----- 1
console.log(Math.random() * 10);      // 0 ------ +ve
console.log(Math.random()*10 +1);  // always +ve >0
const max = 20;
const min = 10;
console.log(Math.floor( Math.random()* (max  - min +1) )+ min ); // min value 10 without decimal 
console.log();

