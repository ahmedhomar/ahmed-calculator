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


// Functions

// click handlers for number buttons

for (let i = 0; i < numButton.length; i++) {
  numButton[i].addEventListener("click", (e) => {
    // store current input string and its last character in variables
    const currentString = display.innerHTML;
    const lastChar = currentString[currentString.length - 1];
    console.log("working");
   

     if (lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷" )
     {
     
       // if the last character is an operator

    } else {
      // display input
     
      
      display.innerHTML += e.target.innerHTML;
    }
    
  });
}
for (let i = 0; i < numButton.length; i++) {
  numButton[i].addEventListener("click", ((e) => {

    // store current input string and its last character in variables
  const currentString = display.innerHTML;
  const lastChar = currentString[currentString.length - 1];

  // if last character entered is an operator => replace it with the currently pressed one

    if (lastChar === "+" ||lastChar === "-" ||lastChar === "×" ||lastChar === "÷") {
      const newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      display.innerHTML = newString;
    } else if (currentString.length == 0) {
      // if first button pressed is an operator => do nothing.
     console.log("Please enter a number");
    } else {
      // else add the operator pressed to the input

      display.innerHTML += e.target.innerHTML;
    }

  }));


// Upon clicking "=" button:
 equalsBtn.addEventListener("click", () => {

  // Display string we'll be processing: e.g 5+33-12/10
  
  const inputString = display.innerHTML;

  //Split the input string into an array of numbers: ["5", "33", "12", "10"]
  
  const numbers = inputString.split(/\+|\-|\×|\÷/g);

  // Create an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // Replace all the numbers and dot with empty string and then split
  const operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");
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

// clear.addEventListener("click", clearAll);
