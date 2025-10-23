import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 4.6: DOM Manipulation and Events</h1> */}

      <p className="mb-4 text-muted-foreground">
        This is where JavaScript connects with the webpage. **DOM Manipulation** is the process of using JavaScript to dynamically change the content, structure, and style of an HTML document. **Events** are the actions that a user performs on a webpage, like clicks and key presses. Learning to manipulate the DOM in response to events is the core skill required to build any interactive website.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Live Blueprint of Your Page 📄
      </h2>
      <p className="mb-2 text-muted-foreground">
        When a browser loads an HTML document, it creates a "model" of that page in memory. This model is called the **Document Object Model (DOM)**. It's not the static HTML file; it's a live, dynamic representation that JavaScript can interact with.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Analogy: A Marionette Puppet</h4>
        <p className="mt-2 text-muted-foreground">
          Think of your HTML structure as a marionette puppet. JavaScript is the puppeteer who holds the strings. By pulling and manipulating the strings (interacting with the DOM), JavaScript can make the puppet (the webpage) move, change, and react.
        </p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. What is the DOM? */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. What is the DOM? A Tree of Nodes
      </h2>
      <p className="mb-2 text-muted-foreground">
        The DOM represents the HTML document as a tree-like structure of **nodes**. Every element, attribute, and piece of text in your HTML is a node in this tree. The top-level node is the `document` object, which is the entry point for all DOM manipulation.
      </p>

      <hr className="my-6 border-border" />

      {/* 3. Selecting Elements */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Selecting Elements: Grabbing Your Puppet's Strings
      </h2>
       <p className="mb-2 text-muted-foreground">
        Before you can change an element, you first need to select it from the DOM and store it in a variable.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>`document.getElementById('id')`</strong>: Selects a single element by its unique ID. It's very fast and reliable.</li>
            <li><strong>`document.querySelector('selector')`</strong>: The modern, all-purpose selector. It selects the **first** element that matches a given CSS selector (e.g., `#myId`, `.myClass`, `p`).</li>
            <li><strong>`document.querySelectorAll('selector')`</strong>: Selects **all** elements that match a given CSS selector and returns them in a collection called a NodeList.</li>
          </ul>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'// HTML: <h1 id="main-title" class="heading">Hello</h1>'}<br/><br/>
              {'const title = document.getElementById("main-title");'}<br/>
              {'const heading = document.querySelector(".heading"); // Selects the same h1'}<br/>
              {'const allParagraphs = document.querySelectorAll("p");'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Manipulating Elements */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Manipulating Elements: Changing the Page
      </h2>
      <p className="mb-2 text-muted-foreground">
        Once you have selected an element, you can change its content, style, and attributes.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
              <li><strong>Changing Content:</strong> Use `.textContent` to change only the text, or `.innerHTML` to change the text and any HTML tags inside it.</li>
              <li><strong>Changing Styles:</strong> Access the `.style` property. Note that CSS properties with hyphens (e.g., `background-color`) become camelCase in JavaScript (e.g., `backgroundColor`).</li>
              <li><strong>Changing Attributes:</strong> Use `.setAttribute('attribute', 'value')` and `.removeAttribute('attribute')`.</li>
          </ul>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'const heading = document.querySelector("h1");'}<br/><br/>
              {'heading.textContent = "Goodbye!"; // Changes the text'}<br/>
              {'heading.style.color = "red"; // Makes the text red'}<br/>
              {'heading.setAttribute("class", "new-class"); // Changes the class attribute'}
          </code></pre>
      </div>
      
      <hr className="my-6 border-border" />
       
       {/* 5. Creating and Adding Elements */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Creating and Adding New Elements
      </h2>
      <p className="mb-2 text-muted-foreground">
        You can also create new HTML elements from scratch and add them to the page.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground space-y-2">
            <li><strong>`document.createElement('tagName')`</strong>: Creates a new element.</li>
            <li><strong>`element.append(child)` or `element.appendChild(child)`</strong>: Adds the new element as a child of an existing element.</li>
        </ol>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'// 1. Select the parent element (e.g., the body)'}<br/>
            {'const body = document.querySelector("body");'}<br/><br/>
            {'// 2. Create a new element'}<br/>
            {'const newParagraph = document.createElement("p");'}<br/><br/>
            {'// 3. Add content to it'}<br/>
            {'newParagraph.textContent = "This was added by JavaScript!";'}<br/><br/>
            {'// 4. Append it to the page'}<br/>
            {'body.append(newParagraph);'}
        </code></pre>
      </div>

      <hr className="my-6 border-border" />
      
       {/* 6. Events and Event Listeners */}
       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Events and Event Listeners
      </h2>
      <p className="mb-2 text-muted-foreground">
        An **event** is an action that occurs on the webpage, like a user clicking a button or pressing a key. An **event listener** is a function that "listens" for a specific event to happen on an element and then runs a block of code in response.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-secondary-foreground font-semibold">The `.addEventListener()` Method:</p>
        <p className="text-sm mt-1 text-muted-foreground">This is the modern way to handle events. It takes two main arguments: the name of the event (as a string), and a callback function to run when the event occurs.</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'// HTML: <button id="my-button">Click Me</button>'}<br/><br/>
            {'const button = document.getElementById("my-button");'}<br/><br/>
            {'button.addEventListener("click", function() {'}<br/>
            {'  alert("Button was clicked!");'}<br/>
            {'});'}
        </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. The Event Object */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. The Event Object
      </h2>
      <p className="mb-2 text-muted-foreground">
        When an event occurs, the browser automatically passes a special **event object** as an argument to the listener function. This object contains useful information about the event.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li><strong>`event.target`</strong>: A reference to the element that the event originally occurred on.</li>
              <li><strong>`event.preventDefault()`</strong>: A method that stops the browser's default behavior for an event (e.g., preventing a form from submitting or a link from navigating).</li>
          </ul>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'const form = document.querySelector("form");'}<br/><br/>
              {'form.addEventListener("submit", function(event) {'}<br/>
              {'  event.preventDefault(); // Stop the page from reloading'}<br/>
              {'  console.log("Form submitted!");'}<br/>
              {'});'}
          </code></pre>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy Summary for DOM Manipulation
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Select First, Then Manipulate:</strong> Always store your selected elements in variables (`const`) at the top of your script for easy access and better performance.</li>
        <li><strong>Use `querySelector` and `querySelectorAll`:</strong> These are the most versatile selectors. Get comfortable with using CSS selectors to target elements.</li>
        <li><strong>Use `.textContent` for Security:</strong> When you are only changing text, prefer `.textContent` over `.innerHTML`. This prevents security risks like Cross-Site Scripting (XSS) attacks.</li>
        <li><strong>Separate Concerns:</strong> It's often better to add or remove a CSS class with JavaScript rather than changing many individual inline styles. Let your CSS file handle the styling.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
