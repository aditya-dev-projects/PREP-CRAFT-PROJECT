import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 6.1: Introduction to React and Virtual DOM</h1> */}

      <p className="mb-4 text-muted-foreground">
        React is the most popular JavaScript **library** for building modern, fast, and interactive user interfaces (UIs). Developed and maintained by Facebook, it allows developers to create complex applications by breaking them down into small, reusable pieces. This chapter introduces the core philosophy behind React and its most innovative feature: the **Virtual DOM**.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Building UIs with Lego Blocks ™️
      </h2>
      <p className="mb-2 text-muted-foreground">
        The fundamental idea behind React is the **component architecture**. Instead of thinking of a webpage as one giant HTML file, React encourages you to break your UI down into small, self-contained, and reusable pieces called **components**.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Analogy: Building with Lego Blocks</h4>
        <p className="mt-2 text-muted-foreground">
          You don't build a Lego castle by carving it from a single block of plastic. You build it by assembling many small, standard bricks. In React, each part of your UI—a button, a form, a navigation bar—is a "Lego block" or a component. You build these individual components in isolation and then compose them to create your entire application.
        </p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Why React? The Problems it Solves */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Why React? The Problems it Solves
      </h2>
       <p className="mb-2 text-muted-foreground">
        Before frameworks like React, building complex single-page applications (SPAs) was challenging.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Disorganized Code:</strong> Vanilla JavaScript and jQuery could become a tangled mess of code ("spaghetti code") as applications grew, making them hard to maintain and debug. React's component model enforces organization.</li>
            <li><strong>Inefficient DOM Updates:</strong> Directly manipulating the real DOM is slow. If you have a list of 100 items and one changes, vanilla JS might re-render the entire list, which is very inefficient. React solves this with the Virtual DOM.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Component Architecture */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Component Architecture in Detail
      </h2>
       <p className="mb-2 text-muted-foreground">
        A React component is a JavaScript function that returns a piece of UI (using a syntax called JSX). Components can be nested and reused throughout an application.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example: Composing Components</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'// Button.jsx (a simple component)'}<br/>
             {'function Button() { return <button>Click Me</button>; }'}<br/><br/>
             {'// App.jsx (a parent component that uses the Button)'}<br/>
             {'function App() {'}<br/>
             {'  return ('}<br/>
             {'    <div>'}<br/>
             {'      <h1>Welcome!</h1>'}<br/>
             {'      <Button /> {/* Reusing the Button component */}'}<br/>
             {'    </div>'}<br/>
             {'  );'}<br/>
             {'}'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 4. Declarative vs. Imperative */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Declarative vs. Imperative Programming
      </h2>
       <p className="mb-2 text-muted-foreground">
        This is a key philosophical difference that makes React so powerful.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Imperative (The "How")</h4>
            <p className="text-sm text-muted-foreground mt-1">With vanilla JS, you give step-by-step instructions: "Find this element, create a new element, set its text, add a class, and append it here." You manage every step of the DOM manipulation.</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Declarative (The "What")</h4>
            <p className="text-sm text-muted-foreground mt-1">With React, you simply **declare** what the UI should look like for a given state. You tell React, "When the user is logged in, the UI should look like this." React handles the "how" of updating the DOM efficiently for you.</p>
        </div>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 5. The Problem with the Real DOM */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The Problem with the Real DOM
      </h2>
      <p className="mb-2 text-muted-foreground">
        The Document Object Model (DOM) is a tree-like structure of the HTML page. Interacting with it directly is computationally expensive. Every time you change an element, the browser has to recalculate the layout and repaint the screen, which can be very slow if you're making many changes.
      </p>

      <hr className="my-6 border-border" />
      
      {/* 6. The Virtual DOM (VDOM) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. The Virtual DOM (VDOM): React's Secret Weapon
      </h2>
      <p className="mb-2 text-muted-foreground">
        React solves the performance problem of the real DOM by using a **Virtual DOM**. The Virtual DOM is a lightweight, in-memory copy of the real DOM. It's just a JavaScript object that represents the structure of your UI.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-muted-foreground">Manipulating this JavaScript object is incredibly fast because it doesn't involve the browser's rendering engine.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. How the Virtual DOM Works */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. How the Virtual DOM Works: Diffing & Reconciliation
      </h2>
      <p className="mb-2 text-muted-foreground">
        The process of updating the UI in React follows a simple, three-step process called **reconciliation**.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
            <li><strong>Step 1: State Change:</strong> When the state of your application changes (e.g., a user types in an input field), React creates a new Virtual DOM tree.</li>
            <li><strong>Step 2: Diffing:</strong> React then compares this new Virtual DOM tree with a snapshot of the previous one. This comparison process is called "diffing." It efficiently finds the exact differences between the two trees.</li>
            <li><strong>Step 3: Reconciliation (Patching):</strong> React then takes these minimal changes and updates only those specific parts of the **real DOM**. It doesn't re-render the entire page, just the elements that actually changed. This is why React is so fast.</li>
        </ol>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy Summary for Beginners
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Think in Components:</strong> Start breaking down every UI you see into small, reusable components. This is the fundamental mindset of a React developer.</li>
        <li><strong>Embrace the Declarative Approach:</strong> Don't think about how to change the DOM. Instead, think about how the UI should look for a given set of data (state). Let React handle the rest.</li>
        <li><strong>Trust the Virtual DOM:</strong> You no longer need to manually select and manipulate DOM elements like you do in vanilla JavaScript. React's Virtual DOM handles all the heavy lifting for you, ensuring your application is performant.</li>
       </ol>
    </div>
  );
};


export default TopicPage;
