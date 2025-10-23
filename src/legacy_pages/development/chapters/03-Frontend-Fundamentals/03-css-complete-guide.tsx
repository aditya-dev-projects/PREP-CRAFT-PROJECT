import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development: CSS - The Complete Guide</h1> */}

      <p className="mb-4 text-muted-foreground">
        CSS, or <strong>Cascading Style Sheets</strong>, is the language used to control the <strong>presentation, formatting, and layout</strong> of web pages. If HTML provides the raw structure (the skeleton), CSS is what brings it to life with style, color, and arrangement (the appearance).
      </p>

      <hr className="my-6 border-border" />

      {/* 1. Core Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">1. The Core Concept: The CSS Rule</h2>
      <p className="mb-2">A CSS rule consists of a <strong>selector</strong> and a <strong>declaration block</strong>.</p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="text-sm"><code>
              {'Selector { Property: Value; }'}<br/><br/>
              {'/* Example: Targets all <h1> elements */'}<br/>
              {'h1 {'}<br/>
              {'  color: red;'}<br/>
              {'  font-size: 24px;'}<br/>
              {'}'}
          </code></pre>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 2. How to Add CSS */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">2. How to Add CSS to a Webpage</h2>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
          {/* FIX: Escaped HTML tags in text content */}
          <li><strong>External Stylesheet (Best Practice):</strong> In a separate `.css` file, linked via `&lt;link rel="stylesheet" href="styles.css"&gt;` in the HTML `&lt;head&gt;`.</li>
          <li><strong>Internal Stylesheet:</strong> Inside a `&lt;style&gt;` tag within the HTML `&lt;head&gt;`.</li>
          <li><strong>Inline Styles:</strong> Using the `style` attribute directly on an HTML element. Generally avoided.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 3. CSS Selectors */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">3. CSS Selectors: The Art of Targeting</h2>
      <div className="overflow-x-auto p-4 bg-muted rounded-lg border border-border">
        <table className="w-full text-left">
            <thead>
                <tr className="border-b border-border"><th className="py-2">Category</th><th className="py-2">Selector</th><th className="py-2">Example</th><th className="py-2">What it Selects</th></tr>
            </thead>
            <tbody className="text-muted-foreground">
                {/* FIX: Escaped HTML tags and special characters in text content */}
                <tr className="border-b border-border"><td className="py-2"><strong>Basic</strong></td><td className="py-2">Class</td><td className="py-2 font-mono">.note</td><td className="py-2">All elements with `class="note"`.</td></tr>
                <tr className="border-b border-border"><td className="py-2"></td><td className="py-2">ID</td><td className="py-2 font-mono">#header</td><td className="py-2">The single element with `id="header"`.</td></tr>
                <tr className="border-b border-border"><td className="py-2"><strong>Combinator</strong></td><td className="py-2">Child</td><td className="py-2 font-mono">ul {'>'} li</td><td className="py-2">`&lt;li&gt;` elements that are direct children of a `&lt;ul&gt;`.</td></tr>
                <tr className="border-b border-border"><td className="py-2"></td><td className="py-2">Adjacent Sibling</td><td className="py-2 font-mono">h1 + p</td><td className="py-2">The first `&lt;p&gt;` immediately after an `&lt;h1&gt;`.</td></tr>
                <tr className="border-b border-border"><td className="py-2"><strong>Pseudo-class</strong></td><td className="py-2">Hover</td><td className="py-2 font-mono">a:hover</td><td className="py-2">A link when the user's mouse is over it.</td></tr>
                <tr><td className="py-2"><strong>Pseudo-element</strong></td><td className="py-2">Before</td><td className="py-2 font-mono">p::before</td><td className="py-2">Creates a pseudo-element before the content of a `&lt;p&gt;`.</td></tr>
            </tbody>
        </table>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. The CSS Box Model */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">4. The CSS Box Model</h2>
      <p className="mb-2">Every HTML element is a rectangular box. The Box Model describes the layers of this box: <strong>Content, Padding, Border, and Margin</strong>.</p>
      <div className="p-4 bg-muted rounded-lg border border-border">
          <pre className="text-sm"><code>
              {'.my-box {'}<br/>
              {'  width: 200px;      /* Width of the content */'}<br/>
              {'  padding: 20px;     /* Space inside the border */'}<br/>
              {'  border: 2px solid black;'}<br/>
              {'  margin: 30px;      /* Space outside the border */'}<br/>
              {'}'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Common Properties */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">5. Common CSS Properties</h2>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
        <li><strong>Text & Font:</strong> `color`, `font-family`, `font-size`, `font-weight`, `text-align`.</li>
        <li><strong>Background:</strong> `background-color`, `background-image`.</li>
        <li><strong>Sizing & Spacing:</strong> `width`, `height`, `margin`, `padding`.</li>
      </ul>

      <hr className="my-6 border-border" />
      
      {/* 6. Modern CSS Layouts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">6. Modern CSS Layouts: Flexbox & Grid</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-muted rounded-lg border border-border">
            <h4 className="font-bold">Flexbox (1D Layout)</h4>
            <p className="text-sm mt-1">For aligning items in a row or column.</p>
            <pre className="text-sm mt-2"><code>{'.container {\n  display: flex;\n  justify-content: space-around;\n}'}</code></pre>
        </div>
        <div className="p-4 bg-muted rounded-lg border border-border">
            <h4 className="font-bold">Grid (2D Layout)</h4>
            <p className="text-sm mt-1">For creating complex row and column grids.</p>
            <pre className="text-sm mt-2"><code>{'.grid-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}'}</code></pre>
        </div>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. Responsive Design */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">7. Responsive Design with Media Queries</h2>
      <p className="mb-2">Media Queries apply CSS rules based on screen size, making your site look good on all devices.</p>
      <div className="p-4 bg-muted rounded-lg border border-border">
        <pre className="text-sm"><code>
            {'/* Default styles for mobile */ \n.container {\n  width: 90%;\n}\n\n/* Styles for screens 768px or wider */ \n@media (min-width: 768px) {\n  .container {\n    width: 700px;\n  }\n}'}
        </code></pre>
      </div>

    </div>
  );
};


export default TopicPage;
