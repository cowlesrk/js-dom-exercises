
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

// const toggleList = document.getElementById('toggleList');
// const listDiv = document.querySelector(".list");
// const descriptionInput = document.querySelector("input.description");
// const decriptionP = document.querySelector("p.description");
// const descriptionButton = document.querySelector("button.description");
// const addItemInput = document.querySelector("input.addItemInput");
// const addItemButton = document.querySelector("button.addItemButton");

// toggleList.addEventListener("click", () => {
// 	if (listDiv.style.display == "none") {
// 		toggleList.textContent = "Hide List";
// 		listDiv.style.display = "block";
// 	} else {
// 		toggleList.textContent = "Show List";
// 		listDiv.style.display = "none";
// 	}
// });

// descriptionButton.addEventListener("click", () => {
// 	decriptionP.innerHTML = descriptionInput.value + ":";
// 	descriptionInput.value = "";
// });


// addItemButton.addEventListener("click", () => {
// 	let ul = document.getElementsByTagName("ul")[0];
// 	let li = document.createElement("li");
// 	li.textContent = addItemInput.value;
// 	ul.appendChild(li);
// 	addItemInput.value = "";
// });





// Created new p element and added className, apphend newParagrah element to the content DIV element
// ------------------------------------------------------------------------

// const contentDiv = document.getElementById("content");
// let newParagraph = document.createElement("p");
// newParagraph.className = "panel";
// contentDiv.appendChild(newParagraph);



// Added button to remove the last item in the list
// ------------------------------------------------------------------------

// const toggleList = document.getElementById('toggleList');
// const listDiv = document.querySelector(".list");
// const descriptionInput = document.querySelector("input.description");
// const decriptionP = document.querySelector("p.description");
// const descriptionButton = document.querySelector("button.description");
// const addItemInput = document.querySelector("input.addItemInput");
// const addItemButton = document.querySelector("button.addItemButton");
// const removeItemButton = document.querySelector("button.removeItemButton");

// toggleList.addEventListener("click", () => {
// 	if (listDiv.style.display == "none") {
// 		toggleList.textContent = "Hide List";
// 		listDiv.style.display = "block";
// 	} else {
// 		toggleList.textContent = "Show List";
// 		listDiv.style.display = "none";
// 	}
// });

// descriptionButton.addEventListener("click", () => {
// 	decriptionP.innerHTML = descriptionInput.value + ":";
// 	descriptionInput.value = "";
// });


// addItemButton.addEventListener("click", () => {
// 	let ul = document.getElementsByTagName("ul")[0];
// 	let li = document.createElement("li");
// 	li.textContent = addItemInput.value;
// 	ul.appendChild(li);
// 	addItemInput.value = "";
// });

// removeItemButton.addEventListener("click", () => {
// 	let ul = document.getElementsByTagName("ul")[0];
// 	let li = document.querySelector("li:last-child");
// 	ul.removeChild(li);
// });



// Select first item in list, then remove list item element stored in firstListItem
// ------------------------------------------------------------------------

// let myList = document.querySelector("ul");
// let firstListItem = document.querySelector("#first");

// myList.removeChild(firstListItem);



// Place the new element p as the last child of the element stored in the div constant
// ------------------------------------------------------------------------

// const div = document.querySelector("div#feedback");
// const p = document.createElement("p");
// div.appendChild(p);



// Functions as Parameters
// ------------------------------------------------------------------------

 // window.setTimeout((something) => {
 // 	console.log(something);
 // }, 3000, "Greetings, everyone!");



// Listening for Events with addEventListener()
// Capitalizing an item when you mouse over
// ------------------------------------------------------------------------

// const toggleList = document.getElementById('toggleList');
// const listDiv = document.querySelector(".list");
// const descriptionInput = document.querySelector("input.description");
// const decriptionP = document.querySelector("p.description");
// const descriptionButton = document.querySelector("button.description");
// const addItemInput = document.querySelector("input.addItemInput");
// const addItemButton = document.querySelector("button.addItemButton");
// const removeItemButton = document.querySelector("button.removeItemButton");
// const listItems = document.getElementsByTagName("li");

// for (let i = 0; i < listItems.length; i += 1) {
// 	listItems[i].addEventListener("mouseover", () => {
// 		listItems[i].textContent = listItems[i].textContent.toUpperCase();
// 	});

// 	listItems[i].addEventListener("mouseout", () => {
// 		listItems[i].textContent = listItems[i].textContent.toLowerCase();
// 	});
// };

// toggleList.addEventListener("click", () => {
// 	if (listDiv.style.display == "none") {
// 		toggleList.textContent = "Hide List";
// 		listDiv.style.display = "block";
// 	} else {
// 		toggleList.textContent = "Show List";
// 		listDiv.style.display = "none";
// 	}
// });


// descriptionButton.addEventListener("click", () => {
// 	decriptionP.innerHTML = descriptionInput.value + ":";
// 	descriptionInput.value = "";
// });


// addItemButton.addEventListener("click", () => {
// 	let ul = document.getElementsByTagName("ul")[0];
// 	let li = document.createElement("li");
// 	li.textContent = addItemInput.value;
// 	ul.appendChild(li);
// 	addItemInput.value = "";
// });

// removeItemButton.addEventListener("click", () => {
// 	let ul = document.getElementsByTagName("ul")[0];
// 	let li = document.querySelector("li:last-child");
// 	ul.removeChild(li);
// });



// Event Bubbling and Delegation
// Added event listener to parent element and let it handle events on its children
// ------------------------------------------------------------------------

// const toggleList = document.getElementById('toggleList');
// const listDiv = document.querySelector(".list");
// const descriptionInput = document.querySelector("input.description");
// const decriptionP = document.querySelector("p.description");
// const descriptionButton = document.querySelector("button.description");
// const addItemInput = document.querySelector("input.addItemInput");
// const addItemButton = document.querySelector("button.addItemButton");
// const removeItemButton = document.querySelector("button.removeItemButton");


// listDiv.addEventListener("mouseover", (event) => {
// 	if (event.target.tagName == "LI") {
// 		event.target.textContent = event.target.textContent.toUpperCase();
// 	}
// });

// listDiv.addEventListener("mouseout", (event) => {
// 	if (event.target.tagName == "LI") {
// 		event.target.textContent = event.target.textContent.toLowerCase();
// 	}
// });


// toggleList.addEventListener("click", () => {
// 	if (listDiv.style.display == "none") {
// 		toggleList.textContent = "Hide List";
// 		listDiv.style.display = "block";
// 	} else {
// 		toggleList.textContent = "Show List";
// 		listDiv.style.display = "none";
// 	}
// });


// descriptionButton.addEventListener("click", () => {
// 	decriptionP.innerHTML = descriptionInput.value + ":";
// 	descriptionInput.value = "";
// });


// addItemButton.addEventListener("click", () => {
// 	let ul = document.getElementsByTagName("ul")[0];
// 	let li = document.createElement("li");
// 	li.textContent = addItemInput.value;
// 	ul.appendChild(li);
// 	addItemInput.value = "";
// });

// removeItemButton.addEventListener("click", () => {
// 	let ul = document.getElementsByTagName("ul")[0];
// 	let li = document.querySelector("li:last-child");
// 	ul.removeChild(li);
// });



// Using parentNode to Traverse Up the DOM
// Remove list item when clicking a button
// ------------------------------------------------------------------------

// const toggleList = document.getElementById('toggleList');
// const listDiv = document.querySelector(".list");
// const descriptionInput = document.querySelector("input.description");
// const decriptionP = document.querySelector("p.description");
// const descriptionButton = document.querySelector("button.description");
// const listUl = listDiv.querySelector("ul");
// const addItemInput = document.querySelector("input.addItemInput");
// const addItemButton = document.querySelector("button.addItemButton");

// listUl.addEventListener("click", (event) => {
// 	if (event.target.tagName == "BUTTON") {
// 		let li = event.target.parentNode;
// 		let ul = li.parentNode;
// 		ul.removeChild(li);
// 	}
// });

// toggleList.addEventListener("click", () => {
// 	if (listDiv.style.display == "none") {
// 		toggleList.textContent = "Hide List";
// 		listDiv.style.display = "block";
// 	} else {
// 		toggleList.textContent = "Show List";
// 		listDiv.style.display = "none";
// 	}
// });

// descriptionButton.addEventListener("click", () => {
// 	decriptionP.innerHTML = descriptionInput.value + ":";
// 	descriptionInput.value = "";
// });

// addItemButton.addEventListener("click", () => {
// 	let ul = document.getElementsByTagName("ul")[0];
// 	let li = document.createElement("li");
// 	li.textContent = addItemInput.value;
// 	ul.appendChild(li);
// 	addItemInput.value = "";
// });



// Using previousElementSibling and insertBefore
// Move list item up when Up button is clicked

// Using nextElementSibling
// Move list item down when Down button is clicked
// ------------------------------------------------------------------------

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector("input.description");
const decriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const listUl = listDiv.querySelector("ul");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");

listUl.addEventListener("click", (event) => {
	if (event.target.tagName == "BUTTON") {
		if (event.target.className == "remove") {
			let li = event.target.parentNode;
			let ul = li.parentNode;
			ul.removeChild(li);
		}
		if (event.target.className == "up") {
			let li = event.target.parentNode;
			let prevLi = li.previousElementSibling;
			let ul = li.parentNode;
			if (prevLi) {
			ul.insertBefore(li, prevLi);
			}
			
		}
		if (event.target.className == "down") {
			let li = event.target.parentNode;
			let nextLi = li.nextElementSibling;
			let ul = li.parentNode;
			if (nextLi) {
			ul.insertBefore(nextLi, li);
			}
			
		}
	}
});

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
	descriptionInput.value = "";
});

addItemButton.addEventListener("click", () => {
	let ul = document.getElementsByTagName("ul")[0];
	let li = document.createElement("li");
	li.textContent = addItemInput.value;
	ul.appendChild(li);
	addItemInput.value = "";
});























