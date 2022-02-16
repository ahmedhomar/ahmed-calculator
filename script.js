// variables
const numButton = document.getElementsByClassName("num-btn");
const operatorButton = document.getElementsByClassName("operator-btn");
const display = document.querySelector("#result");
const clear = document.querySelector("#AC");
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
];
const operations = ["×", "÷", "+", "-"];

console.log(numButton);

// functions:

const onInputButtonClick = (event) => {
  num = event.target.innerText;
  console.log(`You pressed ${num}`);
};

const updateDisplay = (userInput) => {
  document.getElementById("result").innerText = userInput;
}

// To display the value
const displayFunc = (event) => {
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
