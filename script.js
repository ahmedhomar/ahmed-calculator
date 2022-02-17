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
outputDisplayed = false; //track what output is displayed

let num;

// click handlers for number buttons

for (let i = 0; i < numButton.length; i++) {
  numButton[i].addEventListener("click", displayFunc {
// store current input string and its last character in variables 
  const currentString = display.innerHTML;
  const lastChar = currentString[currentString.length - 1];

  // if result is not diplayed => keep adding

    if (outputDisplayed === false) {
      display.innerHTML += e.target.innerHTML;
    } else if (outputDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      // if result is currently displayed and user pressed an operator: keep adding to the string for next operation
      outputDisplayed = false;
      display.innerHTML += e.target.innerHTML;
    } else {
      // result is currently displayed & user pressed a number => clear input and add new input for new operation.
      outputDisplayed = false;
      display.innerHTML = "";
      display.innerHTML += e.target.innerHTML;

    }

  });
}








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



// operatorButton.addEventListener("click", solve);

// clear.addEventListener("click", clearAll);
