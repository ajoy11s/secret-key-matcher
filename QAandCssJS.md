
1. <h2>What is ES6 and what are the new features introduced in ES6?</h2>
 Answer: ES6 is the 6th version of the ECMAScript programming language, It’s also known as ECMAScript2015 or ECMAScript6.ES6 is the six version of JavaScript and was released on 2015.
ES6 New features:
•	Let and Const – JavaScript variable declarations. let block scope for variables. const  that cannot be reassigned value.
•	Classes – Classes is the Object-Oriented Model for JavaScript.
•	Destructuring, Rest and spread operators, template literals, Modules

2. What is Event Bubble and Event Delegation in JS?
Event Bubble: Event Bubbling means that the event propagates from the target element where the user clicked.By default, all events bubble.
<div>
  <span>
    <button>Click Me!</button>
  </span>
</div>
Here we have a <div> which is a parent of a <span> which in turn is a parent of the <button> element.
Due to event bubbling, when the button receives an event, say click, that event bubbles up the tree, so <span> and <div> will respectively receive the event also.

Event Delegation: Event delegation, instead of handling the click event on the <button>, you can handle it on the <div>.
The idea is that you "delegate" the handling of an event to a different element (in this case, the div, which is a parent element) instead of the actual element (the button) that received the event.
const div = document.getElementsByTagName("div")[0]
div.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log("button was clicked")
  }
}


3. What is the difference between localstorage , session storage and cookies.
Local Storage: If we want some data in the browser, we often use local storage objects. 
Session Storage: Session storage is used if the user closes that particular tab or season then we want to delete the data.
Cookies: Cookies are used if we want to keep them on the server.

4.In CSS what is the difference between display inline , display inline block and display block?
Display Inline (display:inline): Displays as element as an inline elements. Any heights and width properties will have no effect.
.inline-element {
  display: inline;
  width: 500px; /*  won't have any effect */
  height: 500px; /*  won't have any effect */
}

Display Inline Block (display:inline-block): Displays an element as an inline-block element. We can set any height and width values.
.inline-block-element {
  display: inline-block;
  width: 500px; /* it will work */
  height: 800px; /* it will work */
}

Display Block (display:block): Displays an element as an  block element. We can set any height and width values.It starts on a new line and take up the whole width and we can set width and height values.
5. What are new features in CSS3?
CSS3 features:
•	New Selectors, Shadows Effect, Rounded Corners, Gradients, Opacity, Transitions, Transformations, Animations, Multi Column layout, Flexbox, CSS Grids, @font face.
•	CSS Variables: CSS variables are declared using -- prefix.
•	Functions: calc(), min(),max(),clamp(),lang(),not(),cubic-bezier(),rotate(),scale(),skew(),translate() etc ,


