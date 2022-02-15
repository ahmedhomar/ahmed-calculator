// variables
const inputButtons = document.getElementsByClassName("input-buttons");
const display = getElementById("result");
// functions:

const onInputButtonClick = (event) => {
  const num = event.target.innerText;
  console.log(`You pressed ${num}`);
};

// To display the value
const displayFunc = () => {
  document.getElementById("result").value;
};
//Evaluate and give result
const solve = () => {
  let x = document.getElementById("result").value;
  let y = document.getElementById("result").value;
};

//To clear the display
const clr = () => {
  document.getElementById("result").value = "";
};

// logic
for (let index = 0; index < inputButtons.length; index++) {
  inputButtons[index].addEventListener("click", onInputButtonClick);
}
