// No Parameter No Return Type
function printName(){
    console.log("My name is Rajan");
}

// function that add 2 numbers
// a and b are parameters
// Parameter No Return Type

function add(a, b){
   let sum = a + b;
   console.log(`The sum is ${sum}`);
}
// Parameter Return Type
// function that takes p / t / r as parameter and return simple interest
function sum(num1, num2){
    return num1 + num2;
}

function voterAge(){
    return 20
}
// 50 and 40 are arguments
//add(50,40)
// add(5,4)
//sum(5,4)

// let total = sum(50,4);
// total += 4;
// console.log("The total is " + total);

let personAge = 19;

if(personAge >= voterAge()){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}


