import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 22: CSS Preprocessors (Sass/SCSS)</h1> */}

      <p className="mb-4 text-muted-foreground">
        As websites grow larger and more complex, managing plain CSS can become difficult and repetitive. A CSS preprocessor is a scripting language that extends the default capabilities of CSS, allowing you to use features like variables, nesting, and functions. You write styles in the preprocessor's syntax, and it then compiles that code into regular, browser-compliant CSS.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: CSS on Steroids 💪
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of a CSS preprocessor as a more advanced, "smarter" version of CSS. It gives you access to programming-like features that help you write more organized, reusable, and maintainable styles. The most popular and widely-used CSS preprocessor is **Sass (Syntactically Awesome Style Sheets)**.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The Workflow:</h4>
        <ol className="list-decimal ml-6 mt-2 space-y-2 text-muted-foreground">
            <li>You write your styles in a `.scss` file using Sass syntax.</li>
            <li>A compiler (a tool in your development setup) processes this file.</li>
            <li>The compiler translates your advanced syntax into a normal `.css` file that a web browser can understand.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Why Use a Preprocessor? */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Why Use a Preprocessor? The Main Benefits
      </h2>
      <p className="mb-2 text-muted-foreground">
        Sass introduces several game-changing features that are not available in standard CSS.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Variables:</strong> Store reusable values like brand colors or font sizes. If you need to change a color, you only have to change it in one place.</li>
            <li><strong>Nesting:</strong> Nest your CSS rules in a way that follows the same visual hierarchy as your HTML, making your code cleaner and more intuitive.</li>
            <li><strong>Mixins:</strong> Reusable blocks of styles that you can include anywhere, like functions.</li>
            <li><strong>Partials & Imports:</strong> Break your CSS into smaller, manageable files and then import them all into a single main file.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Variables and Nesting */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Variables and Nesting in Action
      </h2>
       <p className="mb-2 text-muted-foreground">
        These two features are the easiest to understand and provide the most immediate benefits.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Plain CSS (Repetitive)</h4>
            <pre className="mt-2 p-2 bg-black rounded-md text-white text-xs"><code>
                {`nav { \n  background-color: #333; \n}\nnav ul { \n  margin: 0; \n}\nnav li { \n  display: inline-block; \n}\nnav a { \n  color: #04AA6D; \n}\nnav a:hover { \n  color: #059862; \n}`}
            </code></pre>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">SCSS (Clean and Nested)</h4>
             <pre className="mt-2 p-2 bg-black rounded-md text-white text-xs"><code>
                {`$primary-color: #04AA6D;\n$dark-grey: #333;\n\nnav { \n  background-color: $dark-grey;\n\n  ul { \n    margin: 0;\n  }\n\n  li { \n    display: inline-block;\n  }\n\n  a { \n    color: $primary-color;\n\n    &:hover { \n      color: darken($primary-color, 5%);\n    }\n  }\n}`}
            </code></pre>
        </div>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Mixins and Partials */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Mixins and Partials for Reusability
      </h2>
      <p className="mb-2 text-muted-foreground">
        These features help you keep your code DRY (Don't Repeat Yourself) and organized.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Mixins (Reusable Style Blocks)</h4>
        <p className="text-sm text-muted-foreground mt-1">A mixin lets you define a block of styles that can be reused throughout your code. You can even pass in arguments.</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`@mixin flex-center($direction) { \n  display: flex; \n  justify-content: center; \n  align-items: center; \n  flex-direction: $direction; \n} \n\n.my-container { \n  @include flex-center(row); \n}`}
        </code></pre>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Partials and `@import`</h4>
        <p className="text-sm text-muted-foreground mt-1">You can split your CSS into smaller files called partials. Partial filenames start with an underscore (e.g., `_buttons.scss`). You then use the `@import` rule to combine them into a main `styles.scss` file.</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`// main.scss\n@import 'variables';\n@import 'buttons';\n@import 'layout';`}
        </code></pre>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary for Using Preprocessors
      </h2>
       <p className="mb-2 text-muted-foreground">
        Using a preprocessor like Sass is a modern standard for any medium to large-scale project.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Set Up a Compiler:</strong> Your development environment needs a tool to compile your `.scss` files into `.css`. Many modern build tools (like Vite or Create React App) come with this built-in.</li>
        <li><strong>Use Variables for Everything Reusable:</strong> Define all your colors, font sizes, and spacing units as variables in a central file (`_variables.scss`). This makes rebranding or theming your site incredibly easy.</li>
        <li><strong>Nest Wisely:</strong> Nesting is powerful, but don't nest too deeply (more than 3-4 levels). Overly nested rules can create CSS that is too specific and hard to override.</li>
        <li><strong>Leverage Mixins for Repeated Patterns:</strong> If you find yourself writing the same group of properties over and over (like for flexbox alignment or button styles), create a mixin for it.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
