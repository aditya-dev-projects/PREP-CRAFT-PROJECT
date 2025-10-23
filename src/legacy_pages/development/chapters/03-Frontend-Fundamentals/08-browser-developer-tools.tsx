import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 23: Browser Developer Tools</h1> */}

      <p className="mb-4 text-muted-foreground">
        Browser Developer Tools (or "DevTools") are a suite of powerful tools built directly into modern web browsers like Chrome, Firefox, and Edge. For a web developer, they are an indispensable part of the daily workflow, used for debugging, testing, and optimizing websites and applications. Mastering the DevTools is like a mechanic learning to use a car's diagnostic scanner—it gives you a direct view into the inner workings of your application.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Your Website's X-Ray Machine 🩺
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of DevTools as an X-ray machine for your webpage. While a user only sees the final, rendered page, DevTools allow you to look "under the skin" to see the underlying HTML structure, the applied CSS styles, the running JavaScript, and the network requests happening in the background. It provides a live, interactive environment to inspect and manipulate your code directly in the browser.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">How to Open DevTools:</h4>
        <p className="mt-2 text-muted-foreground">You can open them in any browser by right-clicking on the webpage and selecting <strong>"Inspect"</strong>, or by using a keyboard shortcut (<strong>F12</strong> on Windows/Linux, <strong>Cmd+Option+I</strong> on macOS).</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The Elements Tab */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Elements Tab: Live HTML & CSS Editing
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is often the first tab you'll use. It shows you the live DOM (Document Object Model)—the tree-like structure of your HTML.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Inspect HTML:</strong> You can see the final HTML structure as the browser has rendered it, which is useful for debugging issues caused by JavaScript.</li>
            <li><strong>Manipulate CSS:</strong> In the "Styles" pane, you can see all the CSS rules being applied to a selected element. You can also temporarily add, remove, or change CSS properties to see how they affect the layout in real-time. This is perfect for testing out style changes before writing them in your code editor.</li>
            <li><strong>Check the Box Model:</strong> It provides a visual diagram of the selected element's Box Model, showing its exact margin, border, padding, and content dimensions.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Console Tab */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Console Tab: Your JavaScript Playground
      </h2>
       <p className="mb-2 text-muted-foreground">
        The Console is your best friend for debugging JavaScript. It's an interactive command line where you can execute JavaScript code and see output from your scripts.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Key Uses:</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground mt-2">
            <li><strong>Viewing Errors:</strong> If there is a JavaScript error on your page, the Console will display a detailed message explaining what went wrong and on which line of code.</li>
            <li><strong>Logging Messages:</strong> You can use the `console.log()` command in your JavaScript code to print out the values of variables or messages to the console, helping you trace the flow of your program.</li>
            <li><strong>Interactive Testing:</strong> You can type JavaScript code directly into the console to test functions, interact with the DOM, and inspect variables.</li>
        </ul>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`// In your JavaScript file:`}<br/>
            {`const user = { name: "Alice", id: 1 };`}<br/>
            {`console.log("User object:", user); // This will appear in the Console tab`}
        </code></pre>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. The Network Tab */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The Network Tab: Monitoring Web Requests
      </h2>
      <p className="mb-2 text-muted-foreground">
        The Network tab records every single request your browser makes to load the webpage. This includes the main HTML file, CSS stylesheets, JavaScript files, images, and API calls.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Why it's Useful:</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground mt-2">
            <li><strong>Performance Analysis:</strong> You can see how long each file takes to load, helping you identify large images or slow API requests that are slowing down your site.</li>
            <li><strong>Debugging API Calls:</strong> For applications that fetch data from a server, you can inspect the details of each API request, including the data sent and the response received.</li>
            <li><strong>Filtering Requests:</strong> You can filter the requests to see only specific types, like images or API calls (Fetch/XHR).</li>
        </ul>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary for Using DevTools
      </h2>
       <p className="mb-2 text-muted-foreground">
        Integrating DevTools into your workflow will make you a much more efficient developer.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Have it Open Always:</strong> Get into the habit of opening the DevTools as soon as you start working on a webpage.</li>
        <li><strong>Prototype CSS in the Browser:</strong> Instead of making a small CSS change in your editor, saving, and reloading, make the change directly in the Elements tab. Once you are happy with the result, copy the final styles back to your CSS file.</li>
        <li><strong>Use `console.log()` Generously:</strong> When you're unsure about the value of a variable or whether a piece of code is running, add a `console.log()` to check. It's the most basic but powerful debugging technique.</li>
        <li><strong>Toggle Device Mode:</strong> Use the device toolbar in DevTools to simulate how your website looks on different phones and tablets. This is essential for responsive design.</li>
       </ol>
    </div>
  );
};


export default TopicPage;
