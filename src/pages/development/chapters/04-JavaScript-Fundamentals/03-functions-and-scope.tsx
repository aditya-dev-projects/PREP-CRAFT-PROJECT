import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 4.3: Functions and Scope</h1> */}

      <p className="mb-4 text-muted-foreground">
        Functions are one of the most fundamental building blocks in JavaScript. They are reusable blocks of code that you can define once and run many times. **Scope** is the concept that determines the accessibility (visibility) of these functions and the variables they use. Understanding how functions and scope work together is absolutely essential for writing clean, organized, and bug-free code.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A Reusable Recipe 📜
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of a function like a recipe for baking a cake. The recipe defines a set of steps to follow.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Defining the function</strong> is like writing down the recipe.</li>
            <li><strong>Calling the function</strong> is like actually following the recipe to bake a cake.</li>
            <li><strong>Parameters (or arguments)</strong> are the ingredients you provide to the recipe (e.g., the amount of flour or sugar).</li>
            <li>The <strong>`return` value</strong> is the finished cake.</li>
        </ul>
        <p className="mt-2 text-muted-foreground">The great thing about having a recipe is that you can bake a cake whenever you want without having to rethink the steps every single time. This is the power of functions: **reusability**. </p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Defining and Calling Functions */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Defining and Calling Functions
      </h2>
       <p className="mb-2 text-muted-foreground">
        There are several ways to define a function in JavaScript.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <h4 className="font-bold text-secondary-foreground">Function Declaration</h4>
           <p className="text-sm text-muted-foreground mt-1">This is the classic way to define a named function.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'// Defining the function with two parameters: num1 and num2'}<br/>
              {'function add(num1, num2) {'}<br/>
              {'  return num1 + num2;'}<br/>
              {'}'}<br/><br/>
              {'// Calling the function with two arguments: 5 and 10'}<br/>
              {'const result = add(5, 10); // result is 15'}
          </code></pre>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <h4 className="font-bold text-secondary-foreground">Function Expression</h4>
           <p className="text-sm text-muted-foreground mt-1">Here, the function is created and assigned to a variable. The function itself can be anonymous (it doesn't have a name).</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'const multiply = function(num1, num2) {'}<br/>
              {'  return num1 * num2;'}<br/>
              {'};'}<br/><br/>
              {'const product = multiply(4, 7); // product is 28'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Arrow Functions (ES6) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Arrow Functions (ES6): A Modern, Concise Syntax
      </h2>
       <p className="mb-2 text-muted-foreground">
        ES6 introduced arrow functions, which provide a shorter syntax for writing function expressions. They are now the most common way to write functions in modern JavaScript.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'// The same multiply function as an arrow function'}<br/>
             {'const multiply = (num1, num2) => {'}<br/>
             {'  return num1 * num2;'}<br/>
             {'};'}<br/><br/>
             {'// For single-line functions, it gets even shorter with an implicit return'}<br/>
             {'const subtract = (num1, num2) => num1 - num2;'}<br/><br/>
             {'const difference = subtract(10, 3); // difference is 7'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. The `return` Keyword */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The `return` Keyword
      </h2>
      <p className="mb-2 text-muted-foreground">
        The `return` statement ends the function's execution and specifies a value to be returned to where the function was called. A function without a `return` statement implicitly returns `undefined`.
      </p>
      
      <hr className="my-6 border-border" />
       
       {/* 5. Understanding Scope */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Understanding Scope: Where Variables Live
      </h2>
      <p className="mb-2 text-muted-foreground">
        Scope determines the accessibility of variables. JavaScript has three main types of scope.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Global Scope:</strong> Variables declared outside of any function are in the global scope. They can be accessed from anywhere in your code. It's best practice to minimize the use of global variables.</li>
            <li><strong>Function Scope:</strong> Variables declared inside a function (with `var`, `let`, or `const`) are only accessible within that function. They cannot be accessed from outside.</li>
            <li><strong>Block Scope:</strong> Variables declared with `let` and `const` inside a block (any code within `{'{...}'}`, like in an `if` statement or a `for` loop) are only accessible within that block. This is a key feature of modern JavaScript that helps prevent bugs.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 6. Scope Example */}
       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Scope Example in Practice
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'const globalVar = "I am global"; // Global Scope'}<br/><br/>
            {'function myFunction() {'}<br/>
            {'  const functionVar = "I am in a function"; // Function Scope'}<br/>
            {'  console.log(globalVar); // "I am global" - Can access global variables'}<br/><br/>
            {'  if (true) {'}<br/>
            {'    let blockVar = "I am in a block"; // Block Scope'}<br/>
            {'    console.log(blockVar); // "I am in a block"'}<br/>
            {'  }'}<br/><br/>
            {'  // console.log(blockVar); // This would cause an error!'}<br/>
            {'}'}<br/><br/>
            {'myFunction();'}<br/>
            {'// console.log(functionVar); // This would also cause an error!'}
        </code></pre>
      </div>
      
       <hr className="my-6 border-border" />

        {/* 7. Hoisting */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Hoisting: A Quick Look
      </h2>
      <p className="mb-2 text-muted-foreground">
        Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution. However, how it works differs between `var` and `let`/`const`.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Function declarations are fully hoisted, meaning you can call a function before you define it.</li>
            <li>Variables declared with `var` are hoisted, but only their declaration, not their initialization. This can lead to unexpected `undefined` values.</li>
            <li>Variables declared with `let` and `const` are hoisted to the top of their block but are not initialized. Accessing them before the declaration results in a `ReferenceError`. This is much safer behavior.</li>
          </ul>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy Summary for Functions & Scope
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Write Small, Single-Purpose Functions:</strong> A good function does one thing and does it well. This makes your code easier to read, test, and debug.</li>
        {/* FIX: Escaped the "=>" sequence to be valid in JSX */}
        <li><strong>Prefer Arrow Functions:</strong> Use the modern arrow function syntax (`{'= >'}`) for its conciseness and predictable behavior.</li>
        <li><strong>Use `const` and `let`:</strong> Always declare variables within the scope they are needed. Avoid `var` to prevent scope-related bugs.</li>
        <li><strong>Minimize Global Variables:</strong> Keep your global scope as clean as possible to avoid naming conflicts and make your code more modular.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
