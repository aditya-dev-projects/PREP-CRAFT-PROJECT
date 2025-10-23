import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 4.9: Error Handling and Debugging</h1> */}

      <p className="mb-4 text-muted-foreground">
        No developer, no matter how experienced, writes perfect code all the time. Errors (or "bugs") are a natural and unavoidable part of software development. **Error Handling** is the practice of anticipating and managing errors gracefully so they don't crash your application. **Debugging** is the art of systematically finding and fixing the root cause of these errors.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Being a Code Detective 🕵️‍♀️
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of an error as a clue. Your application is behaving unexpectedly, and it's your job as a detective to follow the clues to find the culprit. A good developer doesn't just fix the immediate problem; they understand why it happened and put measures in place to prevent it from happening again.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Error Handling</strong> is your "contingency plan" for when things go wrong.</li>
            <li><strong>Debugging</strong> is the "investigation process" you use to figure out what went wrong.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Types of Errors in JavaScript */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Types of Errors in JavaScript
      </h2>
       <p className="mb-2 text-muted-foreground">
        Errors generally fall into three categories.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Syntax Errors:</strong> These are "grammar" mistakes in your code. The browser's JavaScript engine cannot parse the code at all. These are often caught by your code editor and will prevent the script from running. (e.g., a missing parenthesis or curly brace).</li>
            <li><strong>Runtime Errors (or Exceptions):</strong> These errors occur *while* the code is running. The syntax is correct, but the program encounters an impossible situation. (e.g., trying to call a method on a `null` variable).</li>
            <li><strong>Logical Errors:</strong> These are the trickiest. The code runs without crashing, but it produces the wrong result. The logic of the program is flawed. (e.g., using `+` instead of `-` in a calculation).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The `try...catch` Statement */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The `try...catch` Statement: Handling Runtime Errors
      </h2>
       <p className="mb-2 text-muted-foreground">
        The `try...catch` statement is JavaScript's primary mechanism for error handling. It allows you to "try" a block of code that might fail, and "catch" any errors that occur without crashing the entire application.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'try {'}<br/>
             {'  // Code that might throw an error'}<br/>
             {'  const user = null;'}<br/>
             {'  console.log(user.name); // This will throw a TypeError'}<br/>
             {'} catch (error) {'}<br/>
             {'  // This block runs ONLY if an error occurred in the try block'}<br/>
             {'  console.error("An error occurred:", error.message);'}<br/>
             {'}'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 4. The `finally` Block */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The `finally` Block
      </h2>
       <p className="mb-2 text-muted-foreground">
        An optional `finally` block can be added after `try...catch`. The code inside `finally` will execute **regardless** of whether an error was thrown or not. It's often used for cleanup tasks, like closing a network connection or resetting a state.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'try {'}<br/>
             {'  // Risky code'}<br/>
             {'} catch (error) {'}<br/>
             {'  // Handle error'}<br/>
             {'} finally {'}<br/>
             {'  console.log("This will always run.");'}<br/>
             {'}'}
          </code></pre>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 5. The `throw` Statement */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The `throw` Statement: Creating Your Own Errors
      </h2>
       <p className="mb-2 text-muted-foreground">
        The `throw` statement allows you to create your own custom errors. This is useful for enforcing rules in your functions.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'function divide(a, b) {'}<br/>
            {'  if (b === 0) {'}<br/>
            {'    throw new Error("Cannot divide by zero!");'}<br/>
            {'  }'}<br/>
            {'  return a / b;'}<br/>
            {'}'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 6. Debugging with `console.log()` */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Debugging with `console.log()`
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the most fundamental debugging technique. By printing the values of variables at different stages of your code's execution, you can trace the flow of data and pinpoint where things start to go wrong.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'function calculateTotal(price, quantity) {'}<br/>
            {'  console.log("Price is:", price);'}<br/>
            {'  console.log("Quantity is:", quantity);'}<br/>
            {'  const total = price * quantity;'}<br/>
            {'  console.log("Total is:", total);'}<br/>
            {'  return total;'}<br/>
            {'}'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. Debugging with Browser DevTools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Debugging with Browser DevTools
      </h2>
      <p className="mb-2 text-muted-foreground">
        For more complex bugs, the browser's debugger is an incredibly powerful tool. It allows you to set **breakpoints** in your code. A breakpoint is a point where the browser will pause the execution of your JavaScript, allowing you to:
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Inspect the values of all variables at that exact moment in time.</li>
              <li>"Step through" your code line by line to watch how it executes.</li>
              <li>See the "call stack" to understand how your functions are being called.</li>
          </ul>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy for Error Handling & Debugging
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Anticipate Errors:</strong> When dealing with external data (like user input or API responses), always assume it might be in the wrong format. Wrap this logic in a `try...catch` block.</li>
        <li><strong>Fail Loudly During Development:</strong> Let your application crash during development if an unexpected error occurs. This makes bugs immediately obvious. Use `try...catch` to provide a good user experience in production.</li>
        <li><strong>Isolate the Problem:</strong> When you encounter a bug, try to reproduce it with the smallest amount of code possible. This helps you narrow down the source of the problem.</li>
        <li><strong>Read the Error Message:</strong> The error message in the console is the most valuable clue. Read it carefully. It will often tell you the type of error and the exact line number where it occurred.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
