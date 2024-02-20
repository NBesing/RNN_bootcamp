// TASK 1: How to completely remove an index in array where the value has simply been deleted
// TASK 2: Implement loops using the 'do-while'
// TASK 3: Update the global SUM variable to have value 4000

//alert('I am in the Javascript section')

//1.Variables, equations, expressions

let a;
let b;
let sum;

a = 6;
b = 4;
let z = 10;

sum = a + b;
let diff = a - b;
console.log("The sum of a and b is " + sum);
console.log(diff);

//2. Conditions
//2a. if statements

if (a > b) {
  console.log("A is greater than b");
} else if (a < b) {
  console.log("B is greater than a");
} else {
  console.log("They two numbers should be equal");
}

//2b. switch statements

let name = "Naura";
switch (name) {
  case "Naura":
    console.log("Hello Naura!");
    break;
  case "Noela":
    console.log("Hello SHEYRHON!");
    break;
  case "Slay King":
    console.log("Hello SHEYRHON!");
    break;
  case "Naura":
    console.log("Hello SHEYRHON!");
    break;
  case "Theola":
    console.log("Hello NAURA!");
    break;
}

//3.Data types
let age = 22;
let participantName = "Jennifer";

//arrays
let namesOfParticipants = ["Ferdinand", "Orock", "Alan", "Naura"];
console.log(namesOfParticipants[1]);
namesOfParticipants[2] = "Alain";
namesOfParticipants[4] = "Mildred";
namesOfParticipants[5] = "Sheyrhon";
delete namesOfParticipants[5];

//TASK 1:Deleting an index from an array

namesOfParticipant.splice(1, 1); //==>splice first value is the index and 
console.log(namesOfParticipants);
delete namesOfParticipants[];



//objects

let participant = {
  name: "Sheyrhon",
  age: 20,
  school: "FET-UB",
  expectation: "Get a job",
};

participant.expectation = "Get money";
participant.gender = "F";

//4. Loops
//for loop
//for(initialization; conditions; increment/decrement){}

let j = 1;

for (let i=0; i<10; i++) {
  console.log("My i value is " + i);
  let j = 2;
  j = 20;

  console.log(j);
}

// for (i = 0; i < namesOfParticipants.length; i++) {
//   console.log("I am showing participant " + namesOfParticipants[i]);
// }

// while-loop
let i = 0;
while (i < namesOfParticipants.length) {
  console.log("I am a participant in a while loop " + namesOfParticipants[i]);
  i++;
}


// TASK 2: do...while
do {
  console.log("I am a participant in a while loop " +namesOfParticipants[i]);
  i++;
} while (i < namesOfParticipants.length);

//   5.Functions

function sum_two_numbers(a,b){
    if(typeof a !='number'){
    alert('A is not a number');
    return;
    }
    if(typeof b !='number'){
    alert('B is not a number');
    return;
    }
    let sum=a+b;
    return sum;
    
}

sum_value=sum_two_numbers(4,8);
console.log('The value returned from the sum function is ' +sum_value)
