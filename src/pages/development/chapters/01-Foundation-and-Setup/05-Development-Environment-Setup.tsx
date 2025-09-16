import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 5: Development Environment Setup</h1> */}

      <p className="mb-4 text-muted-foreground">
        Setting up a proper development environment is the first practical step for any aspiring web developer. A good setup is like a well-organized workshop; it makes your work more efficient, less error-prone, and easier to manage. This chapter covers the essential tools you'll need to install and configure on your computer.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Your Digital Workshop 
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of your computer as a digital workshop. To build a high-quality product (a website or application), you need a specific set of professional tools. Each tool has a distinct purpose: one for writing and editing your plans (code), one for managing your materials (packages), one for tracking your progress (version control), and one for inspecting the final product (browser).
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Code Editor:</strong> To write and edit code.</li>
            <li><strong>Runtime & Package Manager:</strong> To run code and manage third-party libraries.</li>
            <li><strong>Version Control:</strong> To save and manage changes to your code.</li>
            <li><strong>Browser with Dev Tools:</strong> To test and debug your application.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The Code Editor */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Code Editor: Visual Studio Code (VS Code)
      </h2>
      <p className="mb-2 text-muted-foreground">
        While you could write code in a simple text editor, a dedicated code editor provides features that dramatically boost productivity. The industry standard is <strong>Visual Studio Code</strong>, a free and powerful editor from Microsoft.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Key Features:</strong> Syntax highlighting, code completion (IntelliSense), an integrated terminal, and a massive library of extensions.</li>
            <li><strong>Essential Extensions:</strong>
                <ul className="list-circle ml-6 mt-2">
                    <li><strong>Prettier:</strong> An automatic code formatter that keeps your code clean and consistent.</li>
                    <li><strong>ESLint:</strong> A tool that analyzes your code to find and fix problems.</li>
                    <li><strong>Live Server:</strong> Automatically reloads your webpage in the browser whenever you save a file.</li>
                </ul>
            </li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Runtime Environment */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Runtime Environment: Node.js and npm
      </h2>
       <p className="mb-2 text-muted-foreground">
        To build modern web applications, you need Node.js and its package manager, npm.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Node.js:</strong> It's a JavaScript runtime environment that allows you to run JavaScript code <strong>outside of a web browser</strong>. It's essential for running your backend server and for many frontend build tools.</li>
            <li><strong>npm (Node Package Manager):</strong> This is the world's largest software registry. It's a command-line tool that comes bundled with Node.js and allows you to install and manage third-party packages (reusable code libraries) like React or Express.</li>
        </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Common npm commands:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# Check versions'}<br/>
              {'node -v'}<br/>
              {'npm -v'}<br/><br/>
              {'# Initialize a new project'}<br/>
              {'npm init -y'}<br/><br/>
              {'# Install a package (e.g., React)'}<br/>
              {'npm install react'}
          </code></pre>
      </div>


      <hr className="my-6 border-border" />

      {/* 4. Version Control */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Version Control: Git and GitHub
      </h2>
      <p className="mb-2 text-muted-foreground">
        Version control is a system that records changes to your files over time so you can recall specific versions later. It's like a "save game" feature for your code.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Git:</strong> The most popular version control system. It runs locally on your computer and tracks your changes.</li>
            <li><strong>GitHub:</strong> A web-based platform for hosting your Git repositories. It allows you to store your code remotely (as a backup) and collaborate with other developers.</li>
        </ul>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Basic Git workflow:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# Clone a repository from GitHub'}<br/>
              {'git clone <repository_url>'}<br/><br/>
              {'# Stage your changes'}<br/>
              {'git add .'}<br/><br/>
              {'# Commit (save) your changes with a message'}<br/>
              {'git commit -m "Add new login feature"'}<br/><br/>
              {'# Push your changes back to GitHub'}<br/>
              {'git push'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Browser & Dev Tools */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The Browser & Developer Tools
      </h2>
       <p className="mb-2 text-muted-foreground">
        The web browser is your primary tool for testing and debugging the frontend. Modern browsers like Chrome, Firefox, and Edge come with powerful, built-in "Developer Tools".
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Inspector (or Elements) Tab:</strong> Lets you see and edit the HTML and CSS of your page live.</li>
            <li><strong>Console Tab:</strong> Shows errors, warnings, and any messages you log from your JavaScript code. This is your best friend for debugging.</li>
            <li><strong>Network Tab:</strong> Shows all the requests your page makes to the server, allowing you to inspect API calls and check loading performance.</li>
        </ul>
       </div>
    </div>
  );
};

export default TopicPage;
