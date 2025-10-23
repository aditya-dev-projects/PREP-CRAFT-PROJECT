import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-4 md:p-6 lg:p-8 max-w-5xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Chapter 6.3: JSX Syntax and Components</h1> */}

      <p className="mb-4 text-muted-foreground">
        At the heart of React development are two core concepts: **JSX** and **Components**. JSX is a special syntax that allows us to write HTML-like code directly within our JavaScript, and Components are the reusable building blocks we create with JSX. Understanding how to write JSX and structure your application into components is the most fundamental skill in React.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-primary-foreground">
        1. The Core Concept: HTML-in-JavaScript 📝
      </h2>
      <p className="mb-2 text-muted-foreground">
        The main idea behind JSX is to bring your markup (HTML) and your logic (JavaScript) together in the same place. Traditionally, they were kept in separate files. React's approach recognizes that a piece of UI's logic is inherently coupled with its markup. By combining them, it's easier to build, understand, and maintain self-contained UI components.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. What is JSX? */}
      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-primary-foreground">
        2. What is JSX? (JavaScript XML)
      </h2>
       <p className="mb-2 text-muted-foreground">
        JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks very similar to HTML. It is **not** HTML, but it allows us to write markup inside our JavaScript files. This code is then "transpiled" (converted) by a tool like Vite or Babel into regular `React.createElement()` function calls that the browser can understand.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">With JSX (what you write)</h4>
            <pre className="mt-2 p-3 bg-black rounded-md text-white text-sm overflow-x-auto"><code>{`const element = <h1 className="greeting">Hello!</h1>;`}</code></pre>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Without JSX (what it becomes)</h4>
            <pre className="mt-2 p-3 bg-black rounded-md text-white text-sm overflow-x-auto"><code>{`const element = React.createElement('h1', {className: 'greeting'}, 'Hello!');`}</code></pre>
        </div>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 3. The Rules of JSX */}
      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-primary-foreground">
        3. The Rules of JSX
      </h2>
       <p className="mb-2 text-muted-foreground">
        JSX is strict and has a few important rules you must follow.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Return a Single Root Element:</strong> A component can only return one top-level element. If you need to return multiple elements, you must wrap them in a parent `&lt;div&gt;` or a fragment (`&lt;&gt;...&lt;/&gt;`).</li>
            <li><strong>Use `className` instead of `class`:</strong> Since `class` is a reserved keyword in JavaScript, JSX uses `className` to add CSS classes.</li>
            <li><strong>Use camelCase for Attributes:</strong> Most HTML attributes that contain a hyphen (like `onclick` or `tab-index`) are written in camelCase in JSX (e.g., `onClick`, `tabIndex`).</li>
            <li><strong>All Tags Must Be Closed:</strong> Every tag, including self-closing tags like `&lt;img&gt;` or `&lt;br&gt;`, must be explicitly closed (e.g., `&lt;img src="..." /&gt;`, `&lt;br /&gt;`).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Embedding JavaScript in JSX */}
      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-primary-foreground">
        4. Embedding JavaScript in JSX with Curly Braces `{}`
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the most powerful feature of JSX. You can embed any valid JavaScript **expression** directly inside your markup by wrapping it in curly braces.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-3 bg-black rounded-md text-white text-sm overflow-x-auto"><code>
             {'const user = { name: "Alice", age: 25 };'}<br/><br/>
             {'function formatName(user) {'}<br/>
             {'  return user.name.toUpperCase();'}<br/>
             {'}'}<br/><br/>
             {'const element = ('}<br/>
             {'  <div>'}<br/>
             {'    <h1>Hello, {formatName(user)}!</h1> {/* Function call */'}<br/>
             {'    <p>Your age is {user.age}.</p> {/* Variable access */'}<br/>
             {'    <p>Next year you will be {user.age + 1}.</p> {/* Math operation */'}<br/>
             {'  </div>'}<br/>
             {');'}
          </code></pre>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. What are React Components? */}
      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-primary-foreground">
        5. What are React Components?
      </h2>
      <p className="mb-2 text-muted-foreground">
        A component is a self-contained, reusable piece of the UI. In modern React, a component is simply a JavaScript function that returns JSX.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Functions as Components:</strong> They are just functions that return the UI's description.</li>
            <li><strong>PascalCase Naming:</strong> Component names **must** start with a capital letter (e.g., `MyButton`, not `myButton`). This is how React distinguishes them from regular HTML tags.</li>
            <li><strong>Reusability:</strong> The primary benefit. You can define a component once and use it hundreds of times.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 6. Creating Your First Component */}
      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-primary-foreground">
        6. Creating Your First Component
      </h2>
      <p className="mb-2 text-muted-foreground">
        Let's create a simple `Welcome` component. In your `src` folder, you might create a file called `Welcome.jsx`.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-3 bg-black rounded-md text-white text-sm overflow-x-auto"><code>
              {'// src/Welcome.jsx'}<br/>
              {'import React from "react";'}<br/><br/>
              {'function Welcome() {'}<br/>
              {'  return <h1>Hello from the Welcome component!</h1>;'}<br/>
              {'}'}<br/><br/>
              {'export default Welcome;'}
          </code></pre>
      </div>
      
       <hr className="my-6 border-border" />

      {/* 7. Nesting and Reusing Components */}
       <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-primary-foreground">
        7. Nesting and Reusing Components
      </h2>
      <p className="mb-2 text-muted-foreground">
        The real power of components comes from composing them. You can use your custom components inside other components, just like you use standard HTML tags.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-3 bg-black rounded-md text-white text-sm overflow-x-auto"><code>
              {'// src/App.jsx'}<br/>
              {'import Welcome from "./Welcome"; // Import the component'}<br/><br/>
              {'function App() {'}<br/>
              {'  return ('}<br/>
              {'    <div>'}<br/>
              {'      <Welcome /> {/* Use the component */'}<br/>
              {'      <p>This is my main application.</p>'}<br/>
              {'      <Welcome /> {/* Reuse it again! */'}<br/>
              {'    </div>'}<br/>
              {'  );'}<br/>
              {'}'}<br/><br/>
              {'export default App;'}
          </code></pre>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-primary-foreground">
        8. Key Strategy for JSX & Components
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Adhere to the Rules:</strong> Always remember to return a single root element, use `className`, and close all your tags. Linters in your code editor will help you with this.</li>
        <li><strong>Keep Components Small and Focused:</strong> A good component should do one thing well. If a component is becoming too large or complex, it's a sign that you should break it down into smaller, more manageable components.</li>
        <li><strong>Use PascalCase for Component Files and Functions:</strong> Name both your component file (e.g., `MyButton.jsx`) and the function itself (`function MyButton()`) with PascalCase for consistency.</li>
        <li><strong>Embrace Reusability:</strong> Actively look for opportunities to turn repeated UI patterns into reusable components. This is the cornerstone of building a maintainable React application.</li>
       </ol>
    </div>
  );
};


export default TopicPage;
