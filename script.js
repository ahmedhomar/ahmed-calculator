// How a calculator works
// 1. Get the equation
// 2. Break it down using "bodmas"
// 3. Calculate it
// 4. Return the solution

// variables
const numButton = document.querySelectorAll(".num-btn"); // number buttons
const operatorButton = document.querySelectorAll(".operator-btn");// operator buttons
const display = document.getElementById("result");// input/output 
const clear = document.getElementById("AC");// clear button
const equalsBtn = document.getElementById("equals");// equals button

let num;

const keys = [
  "×",
  "÷",
  "+",
  "-",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "AC"
];
const operations = ["×", "÷", "+", "-"];

console.log(numButton);

// functions:

const updateDisplay = (userInput) => {
  document.getElementById("result").innerText = userInput;
}

// To display the value
const onInputButtonClick = (event) => {
  num = event.target.value; 
  // C;
  // alert("it's working");
  console.log(num);
  updateDisplay(num)
};


//Evaluate and give result
const solve = () => {
  let x = document.getElementById("result").value;
  let y = document.getElementById("result").value;
};

//To clear the display

const clearAll = () => {
  document.getElementById("result").value = "";
};

// logic

for (let index = 0; index < numButton.length; index++) {
  numButton[index].addEventListener("click", displayFunc);
}

// operatorButton.addEventListener("click", solve);

// clear.addEventListener("click", clearAll);
