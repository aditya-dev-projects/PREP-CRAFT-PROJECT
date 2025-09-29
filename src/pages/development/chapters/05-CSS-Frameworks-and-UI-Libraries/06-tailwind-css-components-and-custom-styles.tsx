import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 5.6: Tailwind CSS Components & Custom Styles</h1> */}

      <p className="mb-4 text-muted-foreground">
        While Tailwind's utility-first approach is incredibly powerful for building custom designs, you will often find yourself reusing the same combination of utilities for common elements like buttons, cards, and form inputs. To avoid repeating long strings of classes, Tailwind provides several strategies for abstracting these patterns into reusable **components** and custom classes.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Don't Repeat Yourself (DRY)  DRY
      </h2>
      <p className="mb-2 text-muted-foreground">
        The main goal of creating components is to follow the "Don't Repeat Yourself" principle. If you need to update a button's style, you should only have to do it in one place, not on every single button in your application.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-muted-foreground">
            Tailwind's philosophy is to **avoid premature abstraction**. You should only start creating a component class when you are sure you will be reusing that exact combination of styles multiple times.
          </p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The @apply Directive */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The `@apply` Directive: Creating Custom Classes
      </h2>
       <p className="mb-2 text-muted-foreground">
        The `@apply` directive is Tailwind's primary tool for extracting utility patterns into your own custom CSS classes. You use it inside your main CSS file to compose a new class from existing utilities.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example: Creating a custom button class</p>
           <p className="text-sm text-muted-foreground mt-1">Instead of repeating the same classes on every button...</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'<!-- In your HTML -->\n<button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">...</button>\n<button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">...</button>'}
          </code></pre>
           <p className="text-sm text-muted-foreground mt-4">You can create a `.btn-primary` class in your CSS file:</p>
            <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'/* In your main CSS file (e.g., input.css) */\n.btn-primary {\n  @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700;\n}'}
          </code></pre>
           <p className="text-sm text-muted-foreground mt-4">Now your HTML is much cleaner:</p>
            <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<button class="btn-primary">...</button>\n<button class="btn-primary">...</button>'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Using Components in Frameworks */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Using Components in JavaScript Frameworks
      </h2>
       <p className="mb-2 text-muted-foreground">
        When working with a framework like React or Vue, creating a reusable component is often a better approach than using `@apply`. You create a dedicated component file that encapsulates both the structure and the styling.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example: A React Button Component</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'// Button.jsx\nconst Button = ({ children }) => {\n  return (\n    <button className="py-2 px-4 bg-blue-500 ...">\n      {children}\n    </button>\n  );\n}\n\n// In another file\nimport Button from \'./Button\';\n\n<Button>Click Me</Button>'}
          </code></pre>
          <p className="text-sm text-muted-foreground mt-2">This is the preferred modern approach as it keeps all the logic and styling for a component in one self-contained file.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Arbitrary Values */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. One-Off Styles with Arbitrary Values
      </h2>
      <p className="mb-2 text-muted-foreground">
        Sometimes you need a very specific style that isn't part of Tailwind's default design system (e.g., a specific pixel value). Instead of creating a whole new custom class for it, you can use square bracket notation to generate a utility class on the fly.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<!-- A div with a very specific top margin -->\n<div class="mt-[117px]">...</div>\n\n<!-- A div with a custom hex color -->\n<div class="bg-[#bada55]">...</div>'}
          </code></pre>
      </div>

       <hr className="my-6 border-border" />
       
       {/* 5. Customizing CSS */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Adding Custom Base Styles
      </h2>
      <p className="mb-2 text-muted-foreground">
        If you need to add your own base styles (for example, for a default heading style), you can add them to your main CSS file by wrapping them in a `@layer` directive.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'/* In your main CSS file */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  h1 {\n    @apply text-2xl font-bold;\n  }\n  p {\n    @apply mb-4;\n  }\n}'}
          </code></pre>
      </div>
      
      <hr className="my-6 border-border" />
      
       {/* 6. Extending Tailwind with Plugins */}
       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Extending Tailwind with Plugins
      </h2>
      <p className="mb-2 text-muted-foreground">
        Plugins are JavaScript packages that add new styles and variants to Tailwind. This is the best way to add complex, reusable component styles to your project.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-secondary-foreground font-semibold">Example: Official Forms Plugin</p>
         <p className="text-sm text-muted-foreground mt-1">Tailwind's official forms plugin (`@tailwindcss/forms`) provides a set of sensible default styles for form elements, which are notoriously hard to style consistently.</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'// tailwind.config.js\nmodule.exports = {\n  // ...\n  plugins: [\n    require(\'@tailwindcss/forms\'),\n  ],\n}'}
          </code></pre>
      </div>
      
       <hr className="my-6 border-border" />

        {/* 7. Best Practices */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Best Practices: When to Abstract?
      </h2>
      <p className="mb-2 text-muted-foreground">
        The key to using Tailwind effectively is knowing when to keep utilities in your HTML and when to abstract them.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Keep Utilities in HTML for Layouts:</strong> For general page and component layouts (flex, grid, spacing), it's best to keep the utility classes directly in the HTML. These are usually unique and don't need abstraction.</li>
            <li><strong>Abstract for Repeated Components:</strong> When you have a complex, repeated component with many utilities (like a specific button or card style), that is the perfect time to extract the classes into a reusable component or an `@apply` directive.</li>
            <li><strong>Use Framework Components for Logic:</strong> If a component has complex state or logic (like a dropdown menu), it's always better to create a JavaScript component (e.g., in React) rather than just a CSS class.</li>
        </ul>
      </div>
    </div>
  );
};
export default TopicPage;
