// Check whether a number is positive, negatice or zero
//
//use comparision operators

let x = 5;
if (x > 0) {
    console.log('number is positive')
} else if (x == 0) {
    console.log('number is zero')
} else if (x < 0) {
    console.log('number is negtive')
}


//check whether a number is even or odd
//if the number is divisble by 2 and remainder is 0 
//then it is called even
// for division use %  and comparision operation (equal) ===
//5/2 === 0 ; here we are comparing. so use the ===


 let number = 5;
if (number % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}



//find the largets of two numbers
// lets take two values. store the values
let a = 2500
let b = 1000 

if (a>b) {
    console.log ("largest")
} else {
    console.log ('smallest') 
}

//findthe largest of three numbers
//if we have more than two number, use logical operators && 
let c = 200
let d = 50
let e = 100

if (c > d && d > e) {
    console.log('e is the largest number')
} else if (c < d && d > e) {
    console.log("d is the larget number")
} else 
    {console.log('c is the largest number')}


//check whether a person is eligible to vote

//lets assume the person age 20

let age = 15
if (age >= 18) {
    console.log('eligible to vote')
} else {
    console.log('not eligible to vote')
} 


//check whether a year is a leaf year
// 
// so the leaf year comes every 4 years 
// year/4 equal to zero then it is leaf year or it is not leaf year

let year = 2021
if (year%4 ===0) {
    console.log('leaf year')
} else {
    console.log('not leaf year')
}
