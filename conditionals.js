/*
conditional statememts used to make decisions 
based on the decisions, execute different blocks of code
based on the true condition

1)if/else ===== if condition, nested if, if/else  
2) switch
3) Ternary    

if (condiiton) {

}  
*/



let age = 20
if (age > 15) { //true so it excecute this block
    console.log('eligible for voting')
    console.log('visit counter 10')
    console.log('vote and return to the reception')
}
console.log('program end')

let age1 = 50
if (age > 55) {
    console.log('not eligible for voting')
}
console.log('program end ')

// if the code is only one line. when we use if condition, 
// we do not need to write in the block 

if (10 == 10)
    console.log('both values are equal')




// now let see if /else condition 

//if (condition){

// } else {

//}
let womenAge = 25;

if (womenAge > 18) {
    console.log('she is eligible to work')

} else {
    console.log('she is underqualified for work')
}
console.log('program end')


let bookPrice = 200
if (bookPrice > 200) {
    console.log('do not add to the cart')
} else {
    console.log('add to the cart')
}
console.log('program end')

//now is if else if condition --- if followed by if else 
//if we have multiple conditions
// in this condition also only one of the true condition block will be
//executed. rest of the blocks will not execute     

//if (condition){
//
//  } else if (conidition){
//
//  } else if (condition) {
//
//  } else if (conition) {
//
//   } else {
//   }


let marks = 100;
if (marks > 100) {
    console.log('print extending')
} else if (marks >= 100) {
    console.log('print proficient')
} else if (marks > 90) {
    console.log('print good')
} else {
    CSSConditionRule.log('print pass')
}
console.log('progema end')

// like if else ---- if else if also only one of the condtion is 
//executed  


// switch

let day = 5

switch (day) {
    case 1:
        console.log('monday')

    case 2:
        console.log('tuesday')

    case 3:
        console.log('wednesday')

    case 4:
        console.log('thursday')

    case 5:

        console.log('friday')
        break;
    case 6:

        console.log('saturday')

}