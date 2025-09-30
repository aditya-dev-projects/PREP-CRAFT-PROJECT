import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
     <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 6.2: Create React App and Project Structure</h1> */}

      <p className="mb-4 text-muted-foreground">
        While you can technically add React to any webpage with a simple script tag, modern React development relies on a powerful set of build tools. These tools handle complex tasks like bundling your code, transpiling modern JavaScript, and optimizing for production. Tools like **Create React App (CRA)** and the more modern **Vite** provide a pre-configured setup, allowing you to start building your application without worrying about the complex configuration.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Code Factory 🏭
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of a build tool as a factory assembly line for your code. You write your code in a modern, developer-friendly way (using JSX, ES6+ features, and multiple files). The build tool then takes all these raw materials and assembles them into a final product: a small set of highly optimized, static HTML, CSS, and JavaScript files that any web browser can understand.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. What is Create React App (CRA)? */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. What is Create React App (CRA)?
      </h2>
      <p className="mb-2 text-muted-foreground">
        Create React App was the original, official command-line tool from Facebook for creating React projects. For years, it was the standard way to start a new application. It pre-configures everything you need, including a development server, a build process, and a testing environment, with zero configuration required from the developer.
      </p>

      <hr className="my-6 border-border" />

      {/* 3. Introducing Vite: The Modern Alternative */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Introducing Vite: The Modern & Faster Alternative
      </h2>
       <p className="mb-2 text-muted-foreground">
        While CRA is still functional, the modern and officially recommended tool for starting a new React project is **Vite** (pronounced "veet," French for "fast"). Vite serves the same purpose as CRA but uses modern browser features to provide a significantly faster development experience.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Why Vite is Preferred Now:</p>
          <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>Instant Server Start:</strong> Vite's development server starts almost instantly, regardless of your project's size.</li>
            <li><strong>Hot Module Replacement (HMR):</strong> When you change your code, only that specific module is updated in the browser, without losing your application's state. This is much faster than the full-page reloads common with older tools.</li>
          </ul>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 4. Creating a New React App with Vite */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Creating a New React App with Vite
      </h2>
       <p className="mb-2 text-muted-foreground">
        To create a new project, you run a single command in your terminal.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'# Run this command in your terminal'}<br/>
             {'npm create vite@latest'}<br/><br/>
             {'# It will then ask you for a project name and to choose a framework.'}<br/>
             {'# Select "React" and then "TypeScript" or "JavaScript".'}
          </code></pre>
          <p className="font-semibold text-secondary-foreground mt-4">Next Steps:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'# Navigate into your new project folder'}<br/>
            {'cd your-project-name'}<br/><br/>
            {'# Install the necessary dependencies'}<br/>
            {'npm install'}
          </code></pre>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 5. The package.json File */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The `package.json` File: Your Project's ID Card
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is one of the most important files in any modern JavaScript project. It contains all the metadata about your project.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>`dependencies`</strong>: A list of all the third-party packages your application needs to run in production (e.g., `react`, `react-dom`).</li>
            <li><strong>`devDependencies`</strong>: A list of packages needed only for development (e.g., `vite`, `typescript`).</li>
            {/* FIX: Escaped the angle brackets to be valid JSX */}
            <li><strong>`scripts`</strong>: Defines command-line shortcuts that you can run with `npm run {'<script-name>'}`.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 6. The Project Structure */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Understanding the Project Structure
      </h2>
      <p className="mb-2 text-muted-foreground">
        A new Vite project has a clean and simple folder structure.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>`node_modules/`</strong>: Where all your installed dependencies are stored. You should never edit this folder.</li>
            <li><strong>`public/`</strong>: For static assets like images or fonts that don't need to be processed by the build tool.</li>
            <li><strong>`src/`</strong>: This is where you will spend 99% of your time. It contains all your source code—your React components, CSS files, and other logic.</li>
            <li><strong>`src/main.tsx` (or `.jsx`)</strong>: The entry point of your application. This is where your root React component is rendered into the HTML.</li>
            <li><strong>`index.html`</strong>: The single HTML page of your application. The build tool will automatically inject your JavaScript into this file.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. Running the Development Server */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Running the Development Server
      </h2>
      <p className="mb-2 text-muted-foreground">
        The `package.json` file created by Vite includes a `dev` script. To start your local development server, run:
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'npm run dev'}
          </code></pre>
           <p className="mt-2 text-muted-foreground">This command starts the Vite server, opens your application in a new browser tab, and watches your files for changes, providing a live, fast-reloading development experience.</p>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy for Project Setup
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Use Vite for New Projects:</strong> For any new React project, Vite is the recommended and superior choice over the older Create React App.</li>
        <li><strong>Understand the `src` Folder:</strong> This is your workspace. All the components you create will live inside this folder. It's a common practice to create a `components` subfolder inside `src` to keep your code organized.</li>
        <li><strong>Trust `npm install`:</strong> When you download a project from GitHub, it won't have the `node_modules` folder. The first thing you must do is run `npm install` to download all the necessary dependencies listed in `package.json`.</li>
        {/* FIX: Escaped the <div> tag to be valid JSX */}
        <li><strong>`index.html` is the Anchor:</strong> Remember that even in a complex React app, there is still only one `index.html` file. React takes over a single `&lt;div&gt;` (usually with an id of "root") inside this file and renders the entire application within it.</li>
       </ol>
    </div>
  );
};


export default TopicPage;
