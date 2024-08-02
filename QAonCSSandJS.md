<h2>1. What is ES6 and what are the new features introduced in ES6?</h2> 
<p>ES6 is the 6th version of the ECMAScript programming language, It’s also known as ECMAScript2015 or ECMAScript6.
ES6 is the six version of JavaScript and was released on 2015.</p>
<u><b>ES6 New features:</b></u>
<br/>
<ul>
    <li>Let and Const – JavaScript variable declarations. let block scope for variables. const that cannot be reassigned value.</li>
    <li>Classes – Classes is the Object-Oriented Model for JavaScript.</li>
    <li>Destructuring, Rest and spread operators, template literals, Modules</li>
</ul>


<h2>2. What is Event Bubble and Event Delegation in JS?</h2>
<u><b>Event Bubble:</b></u>
<p>Event Bubbling means that the event propagates from the target element where the user clicked.By default, all events bubble.Lets say, we have a div which is a parent of a span which in turn is a parent of the button element. Due to event bubbling, when
    the button receives an event, say click, that event bubbles up the tree, so span and div will respectively receive the event also.</p>
<u><b>Event Delegation:</b></u>
<p>Lets say,div is a parent of child one paragraph and sub child button then  event delegation, instead of handling the click event on the button, we can handle it on the div. The idea is that we "delegate" the handling of an event to a different element (in this case, the div, which is a parent element) instead of the actual element
    (the button) that received the event.</p>


<h2>3. What is the difference between localstorage , session storage and cookies?</h2>
<u><b>Local Storage:</b></u>
<p>If we want some data in the browser, we often use local storage objects.</p>
<u><b>Session Storage:</b></u>
<p>Session storage is used if the user closes that particular tab or season then we want to delete the data.</P>
<u><b>Cookies:</b></u>.
<p>Cookies are used if we want to keep them on the server.</p>

<h2>4.In CSS what is the difference between display inline , display inline block and display block?</h2>
<u><b>Display Inline (display:inline):</b></u>
<p>Displays as element as an inline elements. Any heights and width properties will have no effect.</p>
<p>.inline-element { display: inline; width: 500px; height: 500px; }
    <b>/*  won't have any effect width and height for display: inline */</b></p>
<u><b>Display Inline Block (display:inline-block):</b></u>
<p>Displays an element as an inline-block element. We can set any height and width values.</p>
<p>.inline-block-element { display: inline-block; width: 500px; height: 800px; }
    <b>/* height and width will work for display: inline-block */</b></p>
<u><b>Display Block (display:block):</b></u>
<p>Displays an element as an block element. We can set any height and width values.It starts on a new line and take up the whole width and we can set width and height values.</p>

<h2>5.What are new features in CSS3?</h2>
<u><b>CSS3 features:</b></u>
<ul>
    <li>New Selectors, Shadows Effect, Rounded Corners, Gradients, Opacity, Transitions, Transformations, Animations, Multi Column layout, Flexbox, CSS Grids, @font face.</li>
    <li>CSS Variables: CSS variables are declared using -- prefix.</li>
    <li>Functions: calc(), min(),max(),clamp(),lang(),not(),cubic-bezier(),rotate(),scale(),skew(),translate() etc.</li>
</ul>