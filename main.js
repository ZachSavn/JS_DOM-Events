console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

let node2s = document.getElementsByClassName("node2");//returns HTMLCollection
node2s[0].textContent = "I used the getElementsByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

let h3s = document.getElementsByTagName("h3");//returns HTMLCollection
for (let ele of h3s){
    ele.innerHTML ="I used the getElementByTagName('h3') method to access all of these"
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

let parent = document.getElementById("parent")

let p = document.createElement("p")//creates p element
let a = document.createElement("a")//creates a element

p.textContent = "I am a <p> tag";

a.textContent = "Visit Us";
a.href = "https://truecoders.io/";

parent.appendChild(p);//puts created p to DOM doc

setTimeout(() => {
    parent.insertBefore(a , p);
},2000);//sets 2 seconds

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let parent3 = document.getElementById("exercise-container3");
let N1 = document.getElementById("N1");

let input = document.createElement("input");
input.value = "Replaced N1";

parent3.replaceChild(input, N1);

input.focus();
// TODO: Remove the "New Child Node"
setTimeout(() => {
    parent3.removeChild(input);
},5000);

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
// let interval = setInterval(move, 10);



// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
