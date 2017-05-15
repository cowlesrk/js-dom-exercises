
// Change heading color to red when heading is clicked
// ------------------------------------------------------------------------

// const myHeading = document.getElementById('myHeading');
// myHeading.addEventListener('click', () => {
// 	myHeading.style.color = 'red';
// });



// Change heading color to red when button is clicked
// ------------------------------------------------------------------------

// const myHeading = document.getElementById('myHeading');
// const myButton = document.getElementById('myButton');

// myButton.addEventListener('click', () => {
// 	myHeading.style.color = 'red';
// });



// Change heading color to whatever user puts in text input box
// ------------------------------------------------------------------------

// const myHeading = document.getElementsByTagName("h1")[0];
// const myButton = document.getElementById("myButton");
// const myTextInput = document.getElementById("myTextInput");

// myButton.addEventListener("click", () => {
// 	myHeading.style.color = myTextInput.value;
// });



// Turning a paragraph blue
// ------------------------------------------------------------------------

// const myParagraph = document.getElementsByTagName('p');
// myParagraph[0].style.color = 'blue';



// Turning 3rd item in a list purple
// ------------------------------------------------------------------------

// const myList = document.getElementsByTagName("li");
// myList[2].style.color = "purple";

// for (let i = 0; i < myList.length; i += 1) {
// 	myList[i].style.color = "purple";
// }



// Turning all items in a list purple
// ------------------------------------------------------------------------

// const myList = document.getElementsByTagName("li");

// for (let i = 0; i < myList.length; i += 1) {
// 	myList[i].style.color = "purple";
// }



// Turning all items in a list purple EXCEPT items that have class "error-not-purple" (turn red)
// ------------------------------------------------------------------------

// const myList = document.getElementsByTagName("li");

// for (let i = 0; i < myList.length; i += 1) {
// 	myList[i].style.color = "purple";
// }

// const errorNotPurple = document.getElementsByClassName("error-not-purple");

// for (let i = 0; i < errorNotPurple.length; i += 1) {
// 	errorNotPurple[i].style.color = "red";
// }



// Same as above, but with querySelector
// ------------------------------------------------------------------------

// const myList = document.getElementsByTagName("li");

// for (let i = 0; i < myList.length; i += 1) {
// 	myList[i].style.color = "purple";
// }

// const errorNotPurple = document.querySelectorAll(".error-not-purple");

// for (let i = 0; i < errorNotPurple.length; i += 1) {
// 	errorNotPurple[i].style.color = "red";
// }



// Make all even items have a light grey background
// ------------------------------------------------------------------------

// const myList = document.getElementsByTagName("li");

// for (let i = 0; i < myList.length; i += 1) {
// 	myList[i].style.color = "purple";
// }

// const errorNotPurple = document.querySelectorAll(".error-not-purple");

// for (let i = 0; i < errorNotPurple.length; i += 1) {
// 	errorNotPurple[i].style.color = "red";
// }

// const evens = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < evens.length; i += 1) {
// 	evens[i].style.backgroundColor = "lightgray";
// }



// Cycle through list with ID of "rainbow" with each color (red, orange, etc)
// ------------------------------------------------------------------------

// let listItems = document.querySelectorAll("#rainbow li");
// const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

// for(var i = 0; i < colors.length; i ++) {
//   listItems[i].style.color = colors[i];    
// }



// Cycle through list with ID of "rainbow" with each color (red, orange, etc)
// ------------------------------------------------------------------------


const input = document.querySelector("input");
const p = document.querySelector("p.description");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	p.textContent = input.value + ":";
});

p.title = "List description"