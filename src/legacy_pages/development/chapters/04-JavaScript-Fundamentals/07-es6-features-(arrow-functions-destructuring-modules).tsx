import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 4.7: ES6+ Features (Modern JavaScript)</h1> */}

      <p className="mb-4 text-muted-foreground">
        ECMAScript is the official standard that JavaScript is based on. In 2015, a major update called **ECMAScript 2015 (or ES6)** was released, and it fundamentally changed how we write modern JavaScript. ES6 and subsequent yearly updates introduced a host of new features and syntactic sugar that make the language more powerful, readable, and efficient. Mastering these features is essential for working with modern frameworks like React.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A Language Upgrade ✨
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of ES6 as a major software upgrade for the JavaScript language. It didn't remove the old features, but it added better, safer, and more concise ways to accomplish common tasks. The goal of these new features is to help developers write cleaner, more maintainable code.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. Block-Scoped Variables: let and const */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Block-Scoped Variables: `let` and `const`
      </h2>
      <p className="mb-2 text-muted-foreground">
        Before ES6, `var` was the only way to declare variables. `var` is function-scoped, which could lead to confusing bugs. ES6 introduced `let` and `const`, which are **block-scoped**. This means they only exist within the closest set of curly braces `{}`, which is much more predictable.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">This is the modern standard and `var` should no longer be used.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Arrow Functions */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Arrow Functions
      </h2>
       <p className="mb-2 text-muted-foreground">
        Arrow functions provide a more concise syntax for writing function expressions. They are especially useful for simple, one-line functions.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'// Traditional Function Expression'}<br/>
             {'const add = function(a, b) {'}<br/>
             {'  return a + b;'}<br/>
             {'};'}<br/><br/>
             {'// Arrow Function with implicit return'}<br/>
             {'const addArrow = (a, b) => a + b;'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 4. Template Literals */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Template Literals (Template Strings)
      </h2>
       <p className="mb-2 text-muted-foreground">
        Template literals provide an easier way to create strings, especially strings that contain variables. They are enclosed in backticks (`` ` ``) instead of single or double quotes.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
           <p className="text-sm text-muted-foreground mt-1">They allow for embedded expressions using the `${'{expression}'}` syntax.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'const name = "Alice";'}<br/>
             {'const score = 95;'}<br/><br/>
             {'// Old way with concatenation'}<br/>
             {'const messageOld = "Hello, " + name + "! Your score is " + score + ".";'}<br/><br/>
             {'// New way with template literals'}<br/>
             {'const messageNew = `Hello, ${name}! Your score is ${score}.`;'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Destructuring Assignment */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Destructuring Assignment
      </h2>
      <p className="mb-2 text-muted-foreground">
        Destructuring is a powerful syntax that allows you to "unpack" values from arrays or properties from objects into distinct variables.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Array Destructuring</h4>
            <pre className="text-xs mt-2"><code>{'const fruits = ["Apple", "Banana"];\nconst [a, b] = fruits;\n// a is "Apple", b is "Banana"'}</code></pre>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Object Destructuring</h4>
            <pre className="text-xs mt-2"><code>{'const person = { name: "John", age: 30 };\nconst { name, age } = person;\n// name is "John", age is 30'}</code></pre>
        </div>
      </div>
      
      <hr className="my-6 border-border" />
      
       {/* 6. Spread and Rest Operators */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Spread and Rest Operators (`...`)
      </h2>
      <p className="mb-2 text-muted-foreground">
        The three dots (`...`) can be used for two different but related purposes.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Spread Operator:</strong> "Spreads" the elements of an array or the properties of an object into a new array or object. It's great for making copies or combining arrays/objects.
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'const arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // arr2 is [1, 2, 3, 4]'}</code></pre>
            </li>
            <li><strong>Rest Parameter:</strong> Collects multiple arguments of a function into a single array.
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'function sum(...numbers) {\n  return numbers.reduce((acc, curr) => acc + curr, 0);\n}\nsum(1, 2, 3, 4); // returns 10'}</code></pre>
            </li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. Modules (Import/Export) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Modules (`import` and `export`)
      </h2>
      <p className="mb-2 text-muted-foreground">
        Modules allow you to split your JavaScript code into separate, reusable files. You can `export` functions, variables, or classes from one file and `import` them into another. This is the foundation of modern application architecture.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'// 📁 utils.js'}<br/>
            {'export const PI = 3.14;'}<br/>
            {'export function add(a, b) { return a + b; }'}<br/><br/>
            {'// 📁 main.js'}<br/>
            {'import { PI, add } from "./utils.js";'}<br/>
            {'console.log(add(5, 10)); // 15'}
          </code></pre>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy for Using Modern JavaScript
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Embrace `const` and `let`:</strong> Completely stop using `var` to avoid scope-related issues.</li>
        <li><strong>Use Arrow Functions:</strong> They are more concise and have more predictable behavior with the `this` keyword, which is very important in frameworks like React.</li>
        <li><strong>Leverage Destructuring:</strong> Use destructuring to write cleaner, more readable code when working with objects and arrays, especially when passing props in React.</li>
        <li><strong>Organize Code with Modules:</strong> From the very beginning of a project, get into the habit of splitting your code into logical, reusable modules.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
