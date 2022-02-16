// variables
const numButton = document.getElementsByClassName("num-button");
const operatorButton = document.getElementsByClassName("operator-button");
const display = document.querySelector("#result");
const clear = document.querySelector("#AC");

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
const operations = ["*", "÷", "+", "-"];

// functions:

const onInputButtonClick = (event) => {
  const num = event.target.innerText;
  console.log(`You pressed ${num}`);
};

// To display the value
const displayFunc = () => {
  document.getElementById("result").value;
  alert("it's working");
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

operatorButton.addEventListener("click", solve);

clear.addEventListener("click", clearAll);
