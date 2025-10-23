import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
      <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 25: Control Structures (Conditionals & Loops)</h1> */}

      <p className="mb-4 text-muted-foreground">
        Control Structures are the decision-making parts of a programming language. They allow your code to take different paths and perform repetitive tasks based on specific conditions. If variables are the nouns of JavaScript, control structures are the verbs and conjunctions that create intelligent, dynamic behavior. Mastering conditionals and loops is the key to moving from writing static scripts to building dynamic applications.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Giving Your Code a Brain 🧠
      </h2>
      <p className="mb-2 text-muted-foreground">
        By default, code runs from top to bottom, one line at a time. Control structures break this linear flow, allowing your program to think and act.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The Two Main Abilities:</h4>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li><strong>Making Decisions (Conditionals):</strong> This is the ability to choose a path based on whether a condition is `true` or `false`. (e.g., "<strong>If</strong> the user is logged in, show the dashboard. <strong>Else</strong>, show the login page.")</li>
            <li><strong>Repeating Actions (Loops):</strong> This is the ability to execute a block of code multiple times. (e.g., "<strong>For</strong> each item in a shopping cart, display its price.")</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Conditionals */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Conditionals: The `if...else` Statement
      </h2>
      <p className="mb-2 text-muted-foreground">
        The `if...else` statement is the primary tool for decision-making in JavaScript. It executes a block of code if a specified condition is true, and another block if it is false.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>`if`</strong>: Runs the code block only if its condition is `true`.</li>
            <li><strong>`else if`</strong>: If the first `if` condition is `false`, this checks a new condition. You can have multiple `else if` blocks.</li>
            <li><strong>`else`</strong>: If all preceding `if` and `else if` conditions are `false`, this code block will run.</li>
        </ul>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`const hour = 14;`}<br/><br/>
            {`if (hour < 12) {`}<br/>
            {'  console.log("Good morning!");'}<br/>
            {`} else if (hour < 18) {`}<br/>
            {'  console.log("Good afternoon!"); // This block will run'}<br/>
            {`} else {`}<br/>
            {'  console.log("Good evening!");'}<br/>
            {'}'}
        </code></pre>
      </div>
      
      <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary-foreground">Truthy and Falsy Values</h3>
      <p className="mb-2 text-muted-foreground">In JavaScript, conditions don't have to be strictly `true` or `false`. All values have an inherent "truthiness". When a non-boolean value is used in a condition, JavaScript converts it to a boolean. It's crucial to know which values are "falsy".</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">There are only a few falsy values in JavaScript:</p>
          <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li>`false`</li>
            <li>`0` (the number zero)</li>
            <li>`""` (an empty string)</li>
            <li>`null`</li>
            <li>`undefined`</li>
            <li>`NaN` (Not a Number)</li>
          </ul>
          <p className="mt-2 text-muted-foreground"><strong>Everything else is truthy.</strong> This includes non-empty strings (`"hello"`), numbers other than zero (`-1`, `10`), arrays (`[]`), and objects (`{}`).</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Ternary Operator */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Ternary Operator: A Conditional Shortcut
      </h2>
       <p className="mb-2 text-muted-foreground">
        The ternary operator is a clean, one-line shortcut for a simple `if...else` statement. It's often used for assigning a value to a variable based on a condition.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <h4 className="font-bold text-secondary-foreground">Syntax:</h4>
          <p className="text-muted-foreground mt-2 font-mono">`condition ? valueIfTrue : valueIfFalse;`</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
                {`const age = 20;`}<br/>
                {`const canVote = age >= 18 ? "Yes" : "No";`}<br/><br/>
                {'console.log(canVote); // "Yes"'}
            </code></pre>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 4. The `switch` Statement */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The `switch` Statement
      </h2>
      <p className="mb-2 text-muted-foreground">The `switch` statement is a cleaner alternative to a long `if...else if...else` chain when you are checking a single variable against multiple possible values.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          {/* FIX: Replaced single quotes with double quotes inside the comment to prevent JSX string termination error. */}
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`const day = new Date().getDay(); // Returns a number from 0 (Sun) to 6 (Sat)`}<br/><br/>
            {`switch (day) {`}<br/>
            {'  case 0:'}<br/>
            {'    console.log("It is Sunday!");'}<br/>
            {'    break; // The "break" keyword exits the switch statement'}<br/>
            {'  case 6:'}<br/>
            {'    console.log("It is Saturday!");'}<br/>
            {'    break;'}<br/>
            {'  default: // The "default" case runs if no other case matches'}<br/>
            {'    console.log("It is a weekday.");'}<br/>
            {'}'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Loops */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Loops: Repeating Actions
      </h2>
      <p className="mb-2 text-muted-foreground">
        Loops are used to execute the same block of code over and over again until a certain condition is met.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The `for` Loop:</h4>
        <p className="text-sm text-muted-foreground mt-1">Ideal when you know **how many times** you want the loop to run.</p>
        <p className="text-muted-foreground mt-2">It has three parts: <strong>initialization</strong>, <strong>condition</strong>, and <strong>increment</strong>.</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`for (let i = 0; i < 5; i++) {`}<br/>
            {'  console.log("The number is " + i);'}<br/>
            {'}'}<br/>
            {'// Prints numbers 0, 1, 2, 3, 4'}
        </code></pre>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The `while` Loop:</h4>
        <p className="text-sm text-muted-foreground mt-1">Best when you want a loop to run as long as a condition is `true`, but you don't know the exact number of iterations.</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`let i = 0;`}<br/>
            {`while (i < 5) {`}<br/>
            {'  console.log("The number is " + i);'}<br/>
            {'  i++;'}<br/>
            {'}'}
        </code></pre>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Looping Over Arrays: The Modern Way</h4>
        <p className="text-sm text-muted-foreground mt-1">For iterating over arrays, modern JavaScript provides cleaner syntax than a classic `for` loop.</p>
         <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`const fruits = ["Apple", "Banana", "Cherry"];`}<br/><br/>
            {`// Using for...of (gets the value)`}<br/>
            {`for (const fruit of fruits) {`}<br/>
            {'  console.log(fruit);'}<br/>
            {'}'}
        </code></pre>
      </div>
       
      <hr className="my-6 border-border" />
      
      {/* 6. Loop Control */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Loop Control: Breaking and Skipping
      </h2>
      <p className="mb-2 text-muted-foreground">Sometimes you need to alter the flow of a loop from within the loop itself.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">The `break` Statement</h4>
            <p className="text-sm text-muted-foreground mt-1">The `break` statement **exits the loop immediately**, regardless of the loop's condition.</p>
            <pre className="text-sm mt-2"><code>{`for (let i = 0; i < 10; i++) {\n  if (i === 5) { break; }\n  console.log(i);\n}\n// Prints 0, 1, 2, 3, 4`}</code></pre>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">The `continue` Statement</h4>
            <p className="text-sm text-muted-foreground mt-1">The `continue` statement **skips the current iteration** and proceeds to the next one.</p>
            <pre className="text-sm mt-2"><code>{`for (let i = 0; i < 5; i++) {\n  if (i === 2) { continue; }\n  console.log(i);\n}\n// Prints 0, 1, 3, 4`}</code></pre>
        </div>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Key Strategy Summary for Control Structures
      </h2>
       <p className="mb-2 text-muted-foreground">
        Using control structures effectively is the key to writing functional programs.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Choose the Right Conditional:</strong> Use `if...else` for complex logic, `switch` for checking a variable against multiple fixed values, and the ternary operator for simple, one-line assignments.</li>
        <li><strong>Prefer Modern Loops for Arrays:</strong> When iterating over arrays, prefer `for...of` as it's cleaner and less error-prone than a traditional `for` loop.</li>
        <li><strong>Use `while` for Unknown Counts:</strong> If your loop depends on an external factor (like waiting for user input), a `while` loop is more appropriate.</li>
        <li><strong>Avoid Infinite Loops:</strong> When using a `while` loop, always make sure there is a condition inside the loop that will eventually make the loop condition `false`. Forgetting to include an increment (`i++`) is a very common mistake that will crash your program.</li>
       </ol>
    </div>
  );
};
export default TopicPage;
