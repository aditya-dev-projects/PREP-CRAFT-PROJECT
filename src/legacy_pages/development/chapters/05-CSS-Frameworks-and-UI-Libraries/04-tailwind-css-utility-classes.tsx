import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 5.4: Tailwind CSS Utility Classes</h1> */}

      <p className="mb-4 text-muted-foreground">
        The heart and soul of Tailwind CSS is its extensive set of **utility classes**. Unlike traditional CSS where you write styles in a separate file, Tailwind allows you to apply pre-existing classes directly within your HTML. Each class is small, single-purpose, and named intuitively, enabling you to build complex and fully custom designs without ever leaving your HTML file.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Composable Building Blocks 🧱
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of utility classes as tiny, reusable building blocks, like individual LEGO bricks. A class like `.btn` in Bootstrap is a pre-assembled component (a finished LEGO car). In Tailwind, you don't get the car; you get the individual bricks (`bg-blue-500`, `text-white`, `px-4`, `py-2`, `rounded`) and you assemble the car yourself exactly how you want it.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-muted-foreground">
            This approach provides maximum flexibility and prevents the "sameness" of component-based frameworks, ensuring your designs are unique.
          </p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Common Utility Categories */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Common Utility Categories
      </h2>
       <p className="mb-2 text-muted-foreground">
        Tailwind's utility classes cover almost every CSS property you'll ever need. Here are some of the most fundamental categories.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Sizing:</strong> Control width and height (`w-full`, `h-screen`, `w-1/2`).</li>
            <li><strong>Spacing:</strong> Set margin and padding (`m-4`, `p-8`, `mt-2`, `px-6`).</li>
            <li><strong>Flexbox & Grid:</strong> Create modern layouts (`flex`, `grid`, `grid-cols-3`, `gap-4`).</li>
            <li><strong>Typography:</strong> Style text (`text-lg`, `font-bold`, `text-center`, `text-red-500`).</li>
            <li><strong>Backgrounds & Borders:</strong> Control appearance (`bg-gray-800`, `border`, `rounded-lg`).</li>
            <li><strong>Shadows & Effects:</strong> Add depth and effects (`shadow-md`, `opacity-75`).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Intuitive Naming Convention */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Intuitive Naming Convention
      </h2>
       <p className="mb-2 text-muted-foreground">
        Tailwind's classes are not random; they follow a consistent and predictable pattern that maps directly to the underlying CSS properties.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-sm text-muted-foreground mt-1"><strong>Pattern:</strong> `[property]-[value]`</p>
          <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li>`p-4` translates to `padding: 1rem;`</li>
            <li>`text-center` translates to `text-align: center;`</li>
            <li>`font-bold` translates to `font-weight: 700;`</li>
            <li>`bg-red-500` translates to a specific red background color.</li>
          </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example: Building a Simple Button</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">\n  Click me\n</button>'}
          </code></pre>
          <p className="text-sm text-muted-foreground mt-2">By reading the classes, you can tell exactly what the button will look like without ever touching a CSS file.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Spacing Utilities */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Spacing Utilities (Margin & Padding)
      </h2>
      <p className="mb-2 text-muted-foreground">
        Tailwind uses a numeric scale for spacing, where `1` unit is typically `0.25rem` (or `4px`).
      </p>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
        <li>`p` for padding, `m` for margin.</li>
        <li>`t` for top, `b` for bottom, `l` for left, `r` for right.</li>
        <li>`x` for the x-axis (left and right).</li>
        <li>`y` for the y-axis (top and bottom).</li>
        <li><strong>Examples:</strong> `pt-4` (padding-top), `mx-auto` (centers an element horizontally), `my-6` (margin-top and margin-bottom).</li>
      </ul>

       <hr className="my-6 border-border" />
       
       {/* 5. Flexbox Utilities */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Flexbox Utilities
      </h2>
      <p className="mb-2 text-muted-foreground">
        Creating flexbox layouts is incredibly intuitive with Tailwind.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<!-- A centered container -->\n<div class="flex justify-center items-center h-screen">\n  <p>Centered Content</p>\n</div>'}
          </code></pre>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground mt-4">
            <li><strong>`flex`</strong>: Turns an element into a flex container.</li>
            <li><strong>`flex-row` / `flex-col`</strong>: Sets the flex direction.</li>
            {/* FIX: Replaced `{value}` with a string literal to prevent JSX from interpreting it as a variable. */}
            <li><strong>`justify-{'{value}'}`</strong>: Controls horizontal alignment (e.g., `justify-center`, `justify-between`).</li>
            <li><strong>`items-{'{value}'}`</strong>: Controls vertical alignment (e.g., `items-center`, `items-start`).</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 6. State Variants */}
       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. State Variants (Hover, Focus, etc.)
      </h2>
      <p className="mb-2 text-muted-foreground">
        Tailwind makes it easy to apply styles based on an element's state by using variant prefixes.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-secondary-foreground font-semibold">Syntax: `[variant]:[utility-class]`</p>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground mt-2">
            <li><strong>`hover:`</strong>: Applies when the user's mouse is over the element.</li>
            <li><strong>`focus:`</strong>: Applies when an element (like an input) is focused.</li>
            <li><strong>`active:`</strong>: Applies when an element is being clicked.</li>
            <li><strong>`disabled:`</strong>: Applies when an element (like a button) is disabled.</li>
        </ul>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<button class="bg-blue-500 hover:bg-blue-700 text-white ...">\n  Hover me\n</button>'}
          </code></pre>
      </div>
      
       <hr className="my-6 border-border" />

        {/* 7. Responsive Design Prefixes */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Responsive Design Prefixes
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is one of Tailwind's most powerful features. You can apply a utility class only at a specific breakpoint by adding a responsive prefix.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-secondary-foreground font-semibold">Default Breakpoints:</p>
         <ul className="list-disc ml-6 space-y-1 text-muted-foreground mt-2">
            <li><strong>`sm:`</strong> (min-width: 640px)</li>
            <li><strong>`md:`</strong> (min-width: 768px)</li>
            <li><strong>`lg:`</strong> (min-width: 1024px)</li>
         </ul>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'<!-- Stacks on mobile, two columns on medium screens and up -->\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...</div>'}
          </code></pre>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy for Using Utility Classes
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Build with Utilities First:</strong> Try to build your entire design using only utility classes. This keeps your styling consistent and contained within your HTML.</li>
        <li><strong>Don't Prematurely Abstract:</strong> It's okay to have a long list of classes on an element. Only when you find yourself repeating the exact same long list on multiple identical components should you consider extracting them into a custom class or component.</li>
        <li><strong>Use IntelliSense:</strong> Install the official "Tailwind CSS IntelliSense" extension for VS Code. It's essential for autocompleting class names and seeing a preview of the CSS.</li>
        <li><strong>Think Mobile-First:</strong> Apply your base styles for mobile, then use responsive prefixes like `md:` and `lg:` to add or change styles for larger screens.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
