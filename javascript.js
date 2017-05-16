
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



// Changing heading text
// ------------------------------------------------------------------------

// let myHeading = document.querySelector('h1');
// myHeading.textContent = "This is a new heading";



// Changing the list description with user input
// ------------------------------------------------------------------------

// const input = document.querySelector("input");
// const p = document.querySelector("p.description");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
// 	p.textContent = input.value + ":";
// });

// p.title = "List description"



// Replacing list text with innerHTML
// ------------------------------------------------------------------------

// let ul = document.querySelector('ul');
// ul.innerHTML = "<li>red cabbage</li>"



// Changing text attribute to a checkbox
// ------------------------------------------------------------------------

// const input = document.querySelector('input');
// input.type = "checkbox";



// Changing styles of the paragraph element
// ------------------------------------------------------------------------

// const p = document.querySelector("p.description");

// p.style.color = "darkblue";
// p.style.backgroundColor = "lightblue";



// Created a button that will toggle between showing and hiding the list
// ------------------------------------------------------------------------

// const toggleList = document.getElementById('toggleList');
// const listDiv = document.querySelector(".list");
// const input = document.querySelector("input.description");
// const p = document.querySelector("p.description");
// const button = document.querySelector("button.description");

// toggleList.addEventListener("click", () => {
// 	if (listDiv.style.display == "none") {
// 		toggleList.textContent = "Hide List";
// 		listDiv.style.display = "block";
// 	} else {
// 		toggleList.textContent = "Show List";
// 		listDiv.style.display = "none";
// 	}
// });

// button.addEventListener("click", () => {
// 	p.textContent = input.value + ":";
// });



// Creating new elements: Let users add items to a list
// ------------------------------------------------------------------------

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector("input.description");
const decriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("input.addItemButton");

toggleList.addEventListener("click", () => {
	if (listDiv.style.display == "none") {
		toggleList.textContent = "Hide List";
		listDiv.style.display = "block";
	} else {
		toggleList.textContent = "Show List";
		listDiv.style.display = "none";
	}
});

descriptionButton.addEventListener("click", () => {
	decriptionP.innerHTML = descriptionInput.value + ":";
});


addItemButton.addEventListener("click", () => {
	let ul = document.getElementsByTagName("ul")[0];
	let li = document.createElement("li");
	li.textContent = addItemInput.value;
	ul.appendChild(li);
	addItemInput.value = "";
});


























































