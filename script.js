// How a calculator works
// 1. Get the equation
// 2. Break it down using "bodmas"
// 3. Calculate it
// 4. Return the solution

// variables
const numButton = document.querySelectorAll(".num-btn"); // number buttons
const operatorButton = document.querySelectorAll(".operator-btn"); // operator buttons
const display = document.getElementById("result"); // input/output
const clear = document.getElementById("AC"); // clear button
const equalsBtn = document.getElementById("equals"); // equals button
const decimalButton = document.querySelectorAll(".decimal"); // decimal button

let currentString;
let operatorString;
let secondNumber;
// Functions

// click handlers for number buttons

for (let i = 0; i < numButton.length; i++) {
  numButton[i].addEventListener("click", (e) => {
    // store current input string and its last character in variables
    // check to see if display is empty - if it is then set currentString to displayValue, else chain numbers
    currentString = e.target.value;
    display.innerHTML = currentString;
    const lastChar = currentString[currentString.length - 1];
    console.log(currentString);

    // if last character entered is an operator => replace it with the currently pressed one
  });
}

for (let i = 0; i < operatorButton.length; i++) {
  operatorButton[i].addEventListener("click", (e) => {
    // store current input string and its last character in variables
    operatorString = e.target.value;
    const lastChar = operatorString[operatorString.length - 1];
    secondNumber = currentString;
    currentString = "";

    // if last character entered is an operator => replace it with the currently pressed one
  });
}

decimalButton.addEventListener("click", (e) =>






// if (lastChar === "+" ||lastChar === "-" ||lastChar === "×" ||lastChar === "÷") {

//   //Take the current string, remove the last character and add the new character.

//   const newString = currentString.substring(0, currentString.length - 1) + e.target.value;
//   display.innerHTML = newString;
// } else if (currentString.length == 0) {
//   // if first button pressed is an operator => do nothing.
//  console.log("Please enter a number");
// } else {
//   // else add the operator pressed to the input

//   display.innerHTML += e.target.value;
// }

// Event Listener for "=" button:
equalsBtn.addEventListener("click", (e) => {
  // Display string we'll be processing: e.g 5+33-12/10
  console.log(currentString, secondNumber, operatorString);
  // const inputString = display.innerHTML;
  let sum = 0;
  if (operatorString === "+") {
    sum = parseFloat(currentString) + parseFloat(secondNumber);
    console.log(sum);
  } else if (operatorString === "-") {
    sum = parseFloat(secondNumber) - parseFloat(currentString);
    console.log(sum);
  } else if (operatorString === "×") {
    sum = parseFloat(secondNumber) * parseFloat(currentString);
    console.log(sum);
  } else if (operatorString === "÷") {
    sum = parseFloat(secondNumber) / parseFloat(currentString);
    console.log(sum);
  } else {
    display.innerHTML = "ERROR";
  }
  console.log(sum, currentString, secondNumber);
  currentString = sum;
  display.innerHTML = sum;

  //Split the input string into an array of numbers: ["5", "33", "12", "10"]
});
// const numbers = inputString.split(/\+|\-|\×|\÷/g); //It splits the input string into an array of numbers.

// // Create an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
// // Replace all the numbers and dot with empty string and then split

// const operators = inputString.replace(/[0-9]|\./g, "").split(""); //It removes all numbers and decimals from the input string and splits the remaining characters into an array.

// console.log(inputString);
// console.log(operators);
// console.log(numbers);
// console.log("----------------------------");

// now we need to loop through the array and doing one operation at a time.
// /, then *, then - and then +
// the final element remaining in the array will be the output

// let divide = operators.indexOf("÷");
// while (divide != -1) {
//   numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
//   operators.splice(divide, 1);
//   divide = operators.indexOf("÷");
// }

/*
  1. Loop runs as long as the index of the operator “÷” is not -1.
  2. The splice method removes the two numbers at the index of the operator “÷” and replace them with the result of the division.
  3. The operators array will be updated to remove the operator “÷”.
  4. The divide variable will be updated to the index of the next operator in the operators array.
  */
//   let multiply = operators.indexOf("×");
//   while (multiply != -1) {
//     numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
//     operators.splice(multiply, 1);
//     multiply = operators.indexOf("×");
//   }

//   let subtract = operators.indexOf("-");
//   while (subtract != -1) {
//     numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
//     operators.splice(subtract, 1);
//     subtract = operators.indexOf("-");
//   }
//   let add = operators.indexOf("+");
//   while (add != -1) {
//     // parseFloat => parses a string into a floating point number: used here to avoid string concatenation
//     numbers.splice(
//       add,
//       2,
//       parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
//     );
//     operators.splice(add, 1);
//     add = operators.indexOf("+");
//   }

//   display.innerHTML = numbers[0]; // displays the output
// });

// Pressing AC...

clear.addEventListener("click", (e) => {
  display.innerHTML = "";
  currentString = "";
  operatorString = "";
  secondNumber = "";
});

// const keys = [
//   "×",
//   "÷",
//   "+",
//   "-",
//   "9",
//   "8",
//   "7",
//   "6",
//   "5",
//   "4",
//   "3",
//   "2",
//   "1",
//   "0",
//   ".",
//   "AC",
// ];
// const operations = ["×", "÷", "+", "-"];

// functions:

// const updateDisplay = (userInput) => {
//   document.getElementById("result").innerText = userInput;
// };

// // To display the value
// const onInputButtonClick = (event) => {
//   num = event.target.value;
//   // C;
//   // alert("it's working");
//   console.log(num);
//   updateDisplay(num);
// };

// //Evaluate and give result
// const solve = () => {
//   let x = document.getElementById("result").value;
//   let y = document.getElementById("result").value;
// };

// //To clear the display

// const clearAll = () => {
//   document.getElementById("result").value = "";
// };

// logic

// operatorButton.addEventListener("click", solve);

// clear.addEventListener("click", clearAll)
