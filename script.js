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
const decimalButton = document.querySelector(".decimal"); // decimal button

let currentString = "";
let operatorString;
let secondNumber;
let decimalString = ".";

// click handlers for number buttons

for (let i = 0; i < numButton.length; i++) {
  numButton[i].addEventListener("click", (e) => {
    if(currentString.charAt(0) === '0' && e.target.value === "0" && decimalString === "") {
      // if first character in string is 0: do nothing
      
    } else if (e.target.value != operatorString || decimalString) {
      currentString += e.target.value;
      display.innerHTML = currentString;
      const lastChar = currentString[currentString.length - 1];// store current input string and its last character in variables
      
    } else if (currentString.length === 1 && decimalString != "") {
      currentString = e.target.value + decimalString;
      display.innerHTML = currentString;
    }
    else { display.innerHTML = "Enter a number";}
  });
}
  
// Click handler for Operator buttons:

for (let i = 0; i < operatorButton.length; i++) {
  operatorButton[i].addEventListener("click", (e) => {
    // store current input string and its last character in variables
    operatorString = e.target.value;
    const lastChar = operatorString[operatorString.length - 1];
    secondNumber = currentString;
    currentString = "";
  });
}

// Click handlers for Decimal button:

decimalButton.addEventListener("click", (e) => {
  decimalString = e.target.value;
  
  if(!currentString.includes('.')) {
    currentString += '.'
  } else{
    return currentString;
   }
  
});



// Click handler for "=" button:

equalsBtn.addEventListener("click", (e) => {
  // Display string we'll be processing: e.g 5+33-12/10
  
  // const inputString = display.innerHTML;
  let sum = 0;
  if (operatorString === "+") {
    sum = parseFloat(currentString) + parseFloat(secondNumber);
    
  } else if (operatorString === "-") {
    sum = parseFloat(secondNumber) - parseFloat(currentString);
    
  } else if (operatorString === "×") {
    sum = parseFloat(secondNumber) * parseFloat(currentString);
    
  } else if (operatorString === "÷") {
    sum = parseFloat(secondNumber) / parseFloat(currentString);
    
  } else {
    display.innerHTML = "ERROR";
  }
  
  currentString = sum;
  display.innerHTML = sum;
});

// Event Listener for clear button:

clear.addEventListener("click", (e) => {
  display.innerHTML = "";
  currentString = "";
  operatorString = "";
  secondNumber = "";
});
























