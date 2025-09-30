import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
      <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 4.1: JavaScript Basics (Variables, Data Types, Operators)</h1> */}

      <p className="mb-4 text-muted-foreground">
        JavaScript (JS) is the programming language that brings websites to life. While HTML provides the structure and CSS provides the style, JavaScript adds <strong>interactivity and dynamic functionality</strong>. From simple animations to complex web applications, JavaScript is the engine that powers the modern, interactive web. This chapter covers the absolute fundamentals: how to store information, the different types of data, and how to perform operations on that data.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Brain of the Webpage 🧠
      </h2>
      <p className="mb-2 text-muted-foreground">
        If HTML is the skeleton and CSS is the appearance, JavaScript is the brain and nervous system. It's a scripting language that allows you to manipulate the content and styles of a webpage in response to user actions. It runs directly in the user's web browser, which is why it's known as a "client-side" language.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. How to Add JavaScript to a Webpage */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. How to Add JavaScript to a Webpage
      </h2>
      <p className="mb-2 text-muted-foreground">
        You add JavaScript to an HTML file using the `&lt;script&gt;` tag. There are two primary ways to do this.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Internal JavaScript</h4>
            <p className="text-sm text-muted-foreground mt-1">You can write your JS code directly inside `&lt;script&gt;` tags, usually placed right before the closing `&lt;/body&gt;` tag.</p>
            <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'<body>\n  <!-- ... html content ... -->\n  <script>\n    alert("Hello, World!");\n  </script>\n</body>'}</code></pre>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">External JavaScript (Best Practice)</h4>
            <p className="text-sm text-muted-foreground mt-1">For cleaner code, you write your JS in a separate `.js` file and link to it using the `src` attribute.</p>
            <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'<!-- In your HTML file -->\n<script src="myscripts.js"></script>'}</code></pre>
        </div>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Variables: Storing Information */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Variables: `let`, `const`, and `var`
      </h2>
      <p className="mb-2 text-muted-foreground">
        A variable is a container for storing a piece of data. In modern JavaScript, we have three keywords to declare them.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li>
                <strong>`let`</strong>: Used for variables whose value might change later. Think of it as a regular box whose contents you can swap.
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>let userAge = 25;<br/>userAge = 26; // This is allowed</code></pre>
            </li>
            <li>
                <strong>`const`</strong>: Used for variables whose value will **not** change (a constant). Think of it as a sealed, transparent box; you can see what's inside, but you can't change it. This is the preferred way to declare variables.
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>const birthYear = 1998;<br/>// birthYear = 1999; // This would cause an error</code></pre>
            </li>
            <li>
                <strong>`var`</strong>: The old way of declaring variables. It has quirky behavior related to scope and is generally avoided in modern JavaScript.
            </li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Primitive Data Types */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Primitive Data Types
      </h2>
       <p className="mb-2 text-muted-foreground">
        These are the most basic data types in JavaScript.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ul className="list-disc ml-6 space-y-3 text-muted-foreground mt-2">
            <li><strong>String:</strong> A sequence of characters used for text. You can use single quotes (`'...'`), double quotes (`"..."`), or backticks (`` `...` ``). Backticks are special because they allow you to embed variables directly.
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>const name = 'Alice';<br/>const greeting = `Hello, ${'{name}'}!`; // Becomes "Hello, Alice!"</code></pre>
            </li>
            <li><strong>Number:</strong> Represents both integers (e.g., 100) and floating-point numbers (e.g., 99.99).</li>
            <li><strong>Boolean:</strong> Can only have two values: `true` or `false`. Used for making decisions.</li>
            <li><strong>`null`:</strong> Represents the intentional absence of any object value. It's a value you, the programmer, assign to mean "nothing."</li>
            <li><strong>`undefined`:</strong> A variable that has been declared but has not yet been assigned a value.</li>
          </ul>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 5. Non-Primitive Data Types */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Non-Primitive Data Types (Objects & Arrays)
      </h2>
       <p className="mb-2 text-muted-foreground">
        These are more complex data structures used to store collections of data.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground mt-2">
            <li><strong>Object:</strong> A collection of key-value pairs used to group related data.
               <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
                    {`const person = {\n  firstName: "John",\n  age: 30,\n  isStudent: false\n};`}
                </code></pre>
            </li>
             <li><strong>Array:</strong> A special type of object used to store an ordered list of values.
               <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{`const colors = ["red", "green", "blue"];`}</code></pre>
            </li>
          </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 6. Arithmetic & Assignment Operators */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Arithmetic & Assignment Operators
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Arithmetic Operators</h4>
        <ul className="list-disc ml-6 space-y-2 mt-2 text-muted-foreground">
            <li>`+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Division)</li>
            <li>`%` (Modulo): Returns the remainder of a division. `10 % 3` is `1`.</li>
            <li>`**` (Exponentiation): `2 ** 3` is `8`.</li>
        </ul>
        <h4 className="font-bold text-secondary-foreground mt-4">Assignment Operators</h4>
        <ul className="list-disc ml-6 space-y-2 mt-2 text-muted-foreground">
            <li>`=` (Assignment): `let x = 10;`</li>
            <li>`+=` (Add and assign): `x += 5;` is the same as `x = x + 5;`.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 7. Comparison & Logical Operators */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Comparison & Logical Operators
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Comparison Operators</h4>
        <ul className="list-disc ml-6 space-y-2 mt-2 text-muted-foreground">
            <li>`==` (Loose Equality): Checks for equality of value only, after converting types. Avoid this. (`5 == "5"` is `true`).</li>
            <li>`===` (Strict Equality): Checks for equality of both value AND type. **This is the best practice.** (`5 === "5"` is `false`).</li>
            <li>`!=` (Not equal) and `!==` (Strictly not equal).</li>
            <li>`{'>'}` (Greater than), `{'<'}` (Less than), `{'>='}` (Greater than or equal to), `{'<='}` (Less than or equal to).</li>
        </ul>
         <h4 className="font-bold text-secondary-foreground mt-4">Logical Operators</h4>
        <ul className="list-disc ml-6 space-y-2 mt-2 text-muted-foreground">
            <li>`&&` (AND): Returns `true` only if both conditions are true.</li>
            <li>`||` (OR): Returns `true` if at least one condition is true.</li>
            <li>`!` (NOT): Inverts a boolean value (`!true` becomes `false`).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy Summary for Beginners
      </h2>
       <p className="mb-2 text-muted-foreground">
        Starting with JavaScript basics sets a strong foundation for everything else.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Use `const` by Default:</strong> Always declare your variables with `const`. If you realize later that you need to reassign the variable, you can easily change it to `let`.</li>
        <li><strong>Use Strict Equality (`===`):</strong> Always use the strict equality operator (`===`) for comparisons to avoid unexpected bugs from type coercion.</li>
        <li><strong>Use the Console Liberally:</strong> The browser's developer console is your best friend. Use `console.log()` to check the values of your variables and understand how your code is executing.</li>
        <li><strong>Naming Conventions:</strong> Use `camelCase` for variable names (e.g., `firstName`, `userIsLoggedIn`). This is the standard convention and makes your code easier to read.</li>
       </ol>
    </div>
  );
};
  
  

export default TopicPage;
// Make notes for this JavaScript Basics (Variables, Data Types, Operators) in same way and give same react code for this and dont include quiz component in the code and add notes line by line