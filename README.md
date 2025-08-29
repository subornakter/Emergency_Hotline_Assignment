

#### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?



- **getElementById(id):** Selects one element by its id. Returns a single element or null.

    example:
    const Button = document.getElementById("main-btn");

- **getElementsByClassName(className):** Selects all elements with the given class name. Returns a live HTMLCollection.

    example:
    const items = document.getElementsByClassName("list-item");
    for (let item of items) {
    console.log(item.innerText);
    }

- **querySelector:** Selects the first element that matches a CSS selector. Returns a single element or null.

    example:
    const firstCopy = document.querySelector(".copy-btn");

- **querySelectorAll:** Selects all elements matching a CSS selector. Returns a static NodeList.

    example:
    const items = document.querySelectorAll(".list-item");


#### 2.How do you create and insert a new element into the DOM?

**Create the element:**
Use document.createElement() with the tag name.
const newDiv = document.createElement('div');

**Insert into DOM:**
Once the element is created, it needs to be attached to an existing parent element within the DOM tree. appendChild() using to inserted into DOM.
 const parentElement = document.getElementById('container');
parentElement.appendChild(newDiv);

#### 3.What is Event Bubbling and how does it work?

Event bubbling means when an event happens on an element (like clicking a button), it doesn’t stop there.
The event moves up to its parent, then grandparent, and so on until it reaches the top (document).

event bubbles up like (child -> parent -> document).

#### 4.What is Event Delegation in JavaScript? Why is it useful?
Instead of adding listeners to many child elements, add one listener to their parent.

**useful:**
Event delegation is useful because it improves performance(Only one event listener instead of hundreds/Thousands), handles dynamic elements & reduces code.

#### 5.What is the difference between preventDefault() and stopPropagation() methods?

**preventDefault():** Stops the browser’s default action.

Example: document.getElementById("add-money-btn").addEventListener('click', function(e) {
  e.preventDefault(); 
});

**stopPropagation():** Stops the event from bubbling up to parent elements.

Example: document.querySelector('button').addEventListener('click', function(e) {
  e.stopPropagation(); 
});


