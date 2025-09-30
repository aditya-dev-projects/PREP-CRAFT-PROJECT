import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
<div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 5.3: Tailwind CSS Setup & Configuration</h1> */}

      <p className="mb-4 text-muted-foreground">
        Tailwind CSS is a <strong>utility-first</strong> CSS framework that provides low-level utility classes to build completely custom designs without writing a single line of your own CSS. Unlike component-based frameworks like Bootstrap, Tailwind doesn't give you pre-built components. Instead, it gives you the building blocks to create your own. This chapter covers the essential setup and configuration process to get started.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A Smarter Stylesheet 💡
      </h2>
      <p className="mb-2 text-muted-foreground">
        The core idea behind Tailwind is to stop the context-switching between your HTML and your CSS files. You build your design directly in your HTML by composing utility classes. However, to keep your final CSS file small and optimized, Tailwind works with a build process.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The Workflow:</h4>
        <ol className="list-decimal ml-6 mt-2 space-y-2 text-muted-foreground">
            <li>You add Tailwind's utility classes to your HTML (e.g., `&lt;div class="bg-blue-500 text-white p-4"&gt;`).</li>
            <li>During development, a build tool (like the Tailwind CLI) watches your files for changes.</li>
            <li>When you build for production, Tailwind scans all your files, finds every class you've used, and generates a static CSS file containing <strong>only the styles you need</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 2. Why a Build Step is Necessary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Why a Build Step is Necessary
      </h2>
      <p className="mb-2 text-muted-foreground">
        Unlike Bootstrap, you can't just link to a Tailwind CSS CDN file for a full project. The default, unconfigured file containing every possible utility class would be enormous. The build step is essential for <strong>performance</strong> by purging all unused styles.
      </p>

      <hr className="my-6 border-border" />

      {/* 3. Setting Up with the Tailwind CLI */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Setting Up a Project with the Tailwind CLI
      </h2>
       <p className="mb-2 text-muted-foreground">The Tailwind CLI is the simplest way to get started with a plain HTML project.</p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
            <li><strong>Install Tailwind CSS:</strong>
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>npm install -D tailwindcss</code></pre>
            </li>
            <li><strong>Create Configuration File:</strong>
                 <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>npx tailwindcss init</code></pre>
            </li>
            <li><strong>Configure Template Paths in `tailwind.config.js`:</strong>
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{`content: ["./src/**/*.{html,js}"],`}</code></pre>
            </li>
            <li><strong>Create Your Main CSS File (e.g., `src/input.css`):</strong>
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'@tailwind base;\n@tailwind components;\n@tailwind utilities;'}</code></pre>
            </li>
            <li><strong>Start the Build Process:</strong>
                 <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch</code></pre>
            </li>
            <li><strong>Link in Your HTML:</strong>
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'<link href="/dist/output.css" rel="stylesheet">'}</code></pre>
            </li>
          </ol>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 4. Integrating with Frontend Frameworks */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Integrating with Frontend Frameworks
      </h2>
      <p className="mb-2 text-muted-foreground">Modern frameworks like React or Vue have official integration guides. The process for a React (Vite) project involves configuring the `content` path to scan `.jsx` and `.tsx` files and adding the Tailwind directives to your main `index.css` file.</p>

      <hr className="my-6 border-border" />

      {/* 5. The tailwind.config.js File */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The `tailwind.config.js` File
      </h2>
      <p className="mb-2 text-muted-foreground">This file is the heart of your Tailwind project. It allows you to customize and extend the framework.</p>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
        <li><strong>`content`:</strong> The most important property for production builds, defining which files to scan.</li>
        <li><strong>`theme`:</strong> Where you customize the default design system (colors, fonts, spacing).</li>
        <li><strong>`plugins`:</strong> To add new utilities, often from official or third-party plugins.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 6. Customizing Your Theme */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Customizing Your Theme
      </h2>
      <p className="mb-2 text-muted-foreground">One of Tailwind's greatest strengths is its customizability. Use the `theme.extend` object to add your own values.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        'brand-blue': '#1DA1F2',\n      },\n      fontFamily: {\n        'sans': ['Inter', 'sans-serif'],\n      },\n    },\n  },\n}`}
          </code></pre>
          <p className="mt-2 text-muted-foreground">Now you can use classes like `bg-brand-blue` or `font-sans` directly in your HTML.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. Just-In-Time (JIT) Mode */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Understanding Just-In-Time (JIT) Mode
      </h2>
      <p className="mb-2 text-muted-foreground">Modern Tailwind uses a JIT compiler by default, which generates styles on-demand as you write them. This leads to lightning-fast build times and enables powerful features like arbitrary values (e.g., `top-[117px]`).</p>
      
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy Summary for Setup
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Always Use a Build Tool:</strong> Do not use the CDN link for any serious project. The power of Tailwind lies in its ability to purge unused styles.</li>
        <li><strong>Configure `content` Correctly:</strong> Ensure your `tailwind.config.js` `content` array points to all files where you use Tailwind classes.</li>
        <li><strong>Use the Official Guide:</strong> Always refer to the official Tailwind CSS documentation for the most up-to-date installation guide for your specific framework.</li>
        <li><strong>Use the VS Code Extension:</strong> Install the official "Tailwind CSS IntelliSense" extension for indispensable features like autocompletion and class previews.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
