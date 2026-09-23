/* operators---symbols used to perform actions with variables

1)Artgematic operators
2)Assignment operators
3)comparison operators
4)logical operators
5)string operators
6)ternary operators
7)increament/decrement operator

*/
// 1) Arthemtic operatots: +, -, * (multiply), / (remainder), % (percentage)
// and ** (power symbol) 
// lets do atthematic operations on the variables

let A = 100;
let B = 25;

console.log (A+B)
console.log (A-B)
console.log (A*B)
console.log (A/B) // 100/25 --- remainder is 0 
console.log (A%B)
console.log (A**B)

//Assignment operators --- to assign the value for the variable
//and update the value of the variables
// = , +=, -=, *=, /=, %=, **=

let a = 5 // here we are assigning the value to the variable using equal sign
//if we wnat to increment the value to 20, then 
a+=2 // this means a = a+20
console.log(a) // output 7; this is the value of a now
a-=2
console.log(a) // output 5: 7-2 =5; the value of a is updated 
a*=2
console.log(a) //  now 5*2 =10, now a value is 10
a/=2
console.log(a) // 10/2 =5; now the value of a =5
a%=2
console.log(a) //5/2, remainder is 1, now a value =1
a**=2
console.log(a) // 1 power 2, the value of a =1


//comparision operators: compare the two values or variables and return
// true and false

// ==  equal value
// === equal value and type

let tuition = 1000
let tuition1 = 1000
console.log(tuition==tuition1) // output would be true

let pay = 5000
let pay1 ='5000'
console.log (pay==pay1) // output would be true, becasue 
// string will be converted to number at run tume 
//datatype of pay = number
//datatype of pay1 = string. this datatype will conver to 
// number at runtime 

// ==== equal value and type

let sal = 10000
let sal1 = 10000
console.log(sal===sal1) // output would be true

let payment = 20000
let payment1 = "20000" 
// payment datatype = number
//payment1 datatype = string. it compare the data type now
console.log(payment===payment1) //output would be false

// !=   this is used to not equal

let tab = 2000
let tab1 = 2000
console.log(tab!=tab1) // output will be false

let paper = 1000
let paper1 = 5000
console.log(paper!=paper1) // it would be true

let table = 500
let table1 = '700'
console.log(table!=table1) // it would be true

//!==  not equal or data type

let pen = 20
let pen1 = 50
console.log(pen!==pen1) // true

let clip = 100
let clip1 = '200'
console.log(clip!==clip1) //true
// here datatype clip = numner clip1 = string. 

let age = 50

console.log (age>=20) // true 
console.log (age===50) //ture 
console.log(age<=60) // true


//logical operators ---
// &&, if all conditions are true then only it is true
// otherwise it is false
//  || ---pipe symbol: one of them is true it is true
// ! -- negating the output. if it is true. it will print 
//output false

console.log (100>20 && 20>10) // output true
console.log (100<50 && 200>100) // outpit false

console.log (100>200 || 200>10) //output true

console.log (!(100>10)) // output fasle
// condtion is true but we are negating the false output


//string operator--- used 

console.log (10+2) // output 12
console.log ("Ram"+2) // output Ram2
console.log ("10"-2) // output 8 
// string will convert the number at the time of running 
console.log ('Ram'-2) //output NaN. STRING will try to convert number
//but it is not number

//increment and decrement operators
//pre increment, post increament
//pre decrement, post decrement  
//++  ---- increament by 1
// --   ---- decrement by 1

let num1 = 6 
console.log(++num1) // if we keep ++ before the variable 
//it is called pre-increment.  // this one output is 7 
console.log(num1) // output 7

let num2 = 5
console.log (num2++) // if we keep ++ after the variable 
//it is called post increament // output 5
console.log(num2) // output 6