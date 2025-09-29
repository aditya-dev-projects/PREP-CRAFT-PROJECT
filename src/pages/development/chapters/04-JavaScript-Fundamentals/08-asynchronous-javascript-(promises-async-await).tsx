import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 4.8: Asynchronous JavaScript (Promises, Async/Await)</h1> */}

      <p className="mb-4 text-muted-foreground">
        By default, JavaScript is a **synchronous**, single-threaded language, meaning it executes one line of code at a time, in order. However, many web operations, like fetching data from a server or waiting for a timer, can take time. **Asynchronous JavaScript** is the mechanism that allows the browser to perform these long-running tasks without freezing the entire webpage, ensuring a smooth user experience.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Restaurant Kitchen 👨‍🍳
      </h2>
      <p className="mb-2 text-muted-foreground">
        Imagine a chef in a kitchen.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Synchronous Work:</strong> If the chef worked synchronously, they would take one order, cook it, serve it, and only then start taking the next order. The entire kitchen would freeze, waiting for one dish to be completed.</li>
            <li><strong>Asynchronous Work:</strong> A real chef works asynchronously. They take an order, put a steak on the grill (a long-running task), and while it's cooking, they can chop vegetables for the next order. They don't block their workflow; they start a task and get notified when it's done. This is how asynchronous JavaScript works.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The Old Way: Callbacks and "Callback Hell" */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Old Way: Callbacks and "Callback Hell"
      </h2>
      <p className="mb-2 text-muted-foreground">
        Originally, asynchronous operations were handled with **callback functions**. A callback is a function that you pass as an argument to another function, which is then executed once the main task is complete. While functional, nesting multiple callbacks leads to a messy, hard-to-read structure known as "Callback Hell" or the "Pyramid of Doom."
      </p>

      <hr className="my-6 border-border" />

      {/* 3. The Modern Solution: Promises */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Modern Solution: Promises
      </h2>
       <p className="mb-2 text-muted-foreground">
        A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation. It's a placeholder for a future value.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <h4 className="font-bold text-secondary-foreground">A Promise has three states:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li><strong>Pending:</strong> The initial state; the operation has not yet completed.</li>
            <li><strong>Fulfilled (or Resolved):</strong> The operation completed successfully, and the promise now has a resulting value.</li>
            <li><strong>Rejected:</strong> The operation failed, and the promise has a reason for the failure (an error).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 4. Consuming Promises: .then() and .catch() */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Consuming Promises: `.then()` and `.catch()`
      </h2>
       <p className="mb-2 text-muted-foreground">
        Once you have a promise, you can attach callbacks to it to handle the outcome.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>`.then(onFulfilled)`:</strong> Takes a function that will be executed if the promise is fulfilled. The result of the promise is passed as an argument to this function.</li>
            <li><strong>`.catch(onRejected)`:</strong> Takes a function that will be executed if the promise is rejected. The error is passed as an argument.</li>
        </ul>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'fetch("https://api.example.com/data")'}<br/>
            {'  .then(response => {'}<br/>
            {'    // This runs if the network request is successful'}<br/>
            {'    return response.json();'}<br/>
            {'  })'}<br/>
            {'  .catch(error => {'}<br/>
            {'    // This runs if there is a network failure'}<br/>
            {'    console.error("Fetch failed:", error);'}<br/>
            {'  });'}
        </code></pre>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 5. Chaining Promises */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Chaining Promises
      </h2>
       <p className="mb-2 text-muted-foreground">
        The `.then()` method itself returns a promise, which allows you to chain multiple asynchronous operations together in a clean, sequential manner, avoiding callback hell.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'fetch("https://api.example.com/user/1")'}<br/>
            {'  .then(response => response.json())      // First operation'}<br/>
            {'  .then(user => {'}<br/>
            {'    console.log("User name:", user.name); // Second operation'}<br/>
            {'  })'}<br/>
            {'  .catch(error => {'}<br/>
            {'    console.error("Something went wrong:", error);'}<br/>
            {'  });'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 6. Async/Await: Modern Syntactic Sugar */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. `async`/`await`: Modern Syntactic Sugar
      </h2>
      <p className="mb-2 text-muted-foreground">
        ES2017 introduced `async` and `await` keywords, which provide a much cleaner and more readable syntax for working with promises. It makes your asynchronous code look synchronous.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>`async` function:</strong> The `async` keyword before a function declaration makes it automatically return a promise.</li>
            <li><strong>`await` operator:</strong> The `await` keyword can only be used inside an `async` function. It pauses the function's execution and waits for a promise to resolve before continuing.</li>
        </ul>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'const fetchUser = async () => {'}<br/>
            {'  const response = await fetch("https://api.example.com/user/1");'}<br/>
            {'  const user = await response.json();'}<br/>
            {'  console.log(user.name);'}<br/>
            {'};'}
        </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. Error Handling with try...catch */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Error Handling with `try...catch` in Async Functions
      </h2>
      <p className="mb-2 text-muted-foreground">
        When using `async/await`, you don't use the `.catch()` method. Instead, you use a standard `try...catch` block to handle any errors from awaited promises.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'const fetchUser = async () => {'}<br/>
            {'  try {'}<br/>
            {'    const response = await fetch("https://api.example.com/user/1");'}<br/>
            {'    const user = await response.json();'}<br/>
            {'    console.log(user.name);'}<br/>
            {'  } catch (error) {'}<br/>
            {'    console.error("Failed to fetch user:", error);'}<br/>
            {'  }'}<br/>
            {'};'}
          </code></pre>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy for Asynchronous JavaScript
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Embrace `async/await`:</strong> For all new code, prefer the `async/await` syntax over `.then()` chains. It is much cleaner, easier to read, and simpler to debug.</li>
        <li><strong>Always Handle Errors:</strong> Asynchronous operations can fail for many reasons (e.g., network issues). Always include error handling, either with a `.catch()` block for promises or a `try...catch` block for `async/await`.</li>
        <li><strong>Understand What `await` Does:</strong> Remember that `await` literally pauses your function. This is incredibly powerful for writing sequential logic but be mindful not to block code unnecessarily.</li>
        <li><strong>Use `Promise.all` for Concurrent Operations:</strong> If you need to run multiple asynchronous operations at the same time and wait for all of them to finish, use `Promise.all()`. This is much more efficient than awaiting them one by one.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
