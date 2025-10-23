import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 6: Code Editors & Extensions</h1> */}

      <p className="mb-4 text-muted-foreground">
        A code editor is a developer's most important tool. While you can write code in any plain text editor, a modern code editor acts as an intelligent assistant, providing features that dramatically increase speed, reduce errors, and improve code quality. This chapter focuses on the industry-standard editor, VS Code, and the essential extensions that turn it into a powerhouse for web development.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Developer's Cockpit 
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of your code editor as the cockpit of an airplane. A pilot could technically fly with just a stick and rudder, but a modern cockpit provides instruments, navigation, and automated checks that make the process safer and more efficient. Similarly, a good code editor provides you with the tools to navigate complex codebases, automate repetitive tasks, and catch errors before they happen.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Why Not a Simple Text Editor?</h4>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li><strong>Syntax Highlighting:</strong> Colors your code based on its syntax, making it much easier to read and understand.</li>
            <li><strong>Code Completion:</strong> Suggests code as you type, saving you from typos and memorizing every function name.</li>
            <li><strong>Debugging Tools:</strong> Help you find and fix errors in your code step-by-step.</li>
            <li><strong>Integration:</strong> Seamlessly works with other tools like Git and the command line.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The Industry Standard: Visual Studio Code */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Industry Standard: Visual Studio Code (VS Code)
      </h2>
      <p className="mb-2 text-muted-foreground">
        Developed by Microsoft, <strong>Visual Studio Code</strong> has become the de facto code editor for web developers. It's free, open-source, fast, and incredibly powerful, thanks to its extensive library of extensions. It strikes the perfect balance between a lightweight editor and a full-fledged Integrated Development Environment (IDE).
      </p>

      <hr className="my-6 border-border" />

      {/* 3. Essential Built-in Features */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Essential Built-in Features of VS Code
      </h2>
       <p className="mb-2 text-muted-foreground">
        Understanding these core features will significantly speed up your workflow.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>IntelliSense:</strong> An advanced code completion feature that provides smart suggestions for variables, functions, and imported modules as you type.</li>
            <li><strong>Integrated Terminal:</strong> You can open a command line terminal directly within the editor. This is incredibly convenient for running commands like `npm install` or `git commit` without leaving your editor.</li>
            <li><strong>Source Control Integration:</strong> VS Code has built-in support for Git, allowing you to see your changes, stage files, and commit them with a user-friendly interface.</li>
            <li><strong>Debugging Console:</strong> Lets you run your code step-by-step, inspect variables, and find bugs directly within the editor.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Must-Have VS Code Extensions */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Must-Have VS Code Extensions for Web Developers
      </h2>
      <p className="mb-2 text-muted-foreground">
        Extensions are add-ons that enhance VS Code's functionality. The following are considered essential for modern web development.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li>
                <strong>Prettier - Code Formatter:</strong> Automatically formats your code to a consistent style every time you save. This eliminates all arguments about code style and makes your code base incredibly clean and readable.
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-xs"><code>
{`// Before Prettier: inconsistent spacing and lines
const add =( a,b )=> { return a+b }

// After Prettier: clean and consistent
const add = (a, b) => {
  return a + b;
};`}
                </code></pre>
            </li>
            <li><strong>ESLint:</strong> A "linter" that analyzes your JavaScript code to find problematic patterns, potential bugs, and code that doesn't adhere to style guidelines. It underlines errors in red as you type.</li>
            <li><strong>Live Server:</strong> A simple development server that automatically reloads your webpage in the browser whenever you save changes to your HTML, CSS, or JS files. This is a huge time-saver for frontend development.</li>
            <li><strong>Auto Rename Tag:</strong> When you rename an HTML opening tag, this extension automatically renames the corresponding closing tag for you.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Customization */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Customizing Your Environment
      </h2>
       <p className="mb-2 text-muted-foreground">
        A key part of a good development environment is making it comfortable for you. VS Code is highly customizable.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Themes:</strong> You can change the entire color scheme of the editor to suit your preference. Popular themes include "Dracula Official", "Monokai", and "GitHub Theme".</li>
            <li><strong>`settings.json`:</strong> VS Code allows you to configure hundreds of settings through a simple JSON file, from font size to the behavior of extensions like Prettier.</li>
        </ul>
       </div>
    </div>
  );
};

export default TopicPage;
