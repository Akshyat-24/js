let Datee = new Date()
console.log(Datee.toString());
console.log(Datee.toISOString());
console.log(Datee.toJSON());
console.log(Datee.toDateString());
console.log(Datee.toLocaleString());
console.log(Datee.toLocaleDateString());


console.log(typeof Datee); // object ( Remember)

// ----------------------------------------------Create Date-----------------------------------------------------

let createddate = new Date(2007 , 3 , 24)    // MY birthday date but month 3 ---> April  0 index based question

console.log(createddate.toString());

let createdatetime = new Date(2007 , 3 , 24 , 5 , 30)  // 5 , 30 are time hour , min , second 
console.log(createdatetime.toLocaleString());


console.log(createdatetime.getMonth()); // same for get day , year .......


// ----------------------------------------------Time stamp------------------------------------------------------


let timestamp =  Date.now();

console.log(timestamp);
console.log(createdatetime.getTime());

// to get time in seconds /1000

console.log(Math.floor(Date.now()/1000));


// Main Method to remeber which is customizable


console.log(createddate.toLocaleString('default', { calendar : " long" }))