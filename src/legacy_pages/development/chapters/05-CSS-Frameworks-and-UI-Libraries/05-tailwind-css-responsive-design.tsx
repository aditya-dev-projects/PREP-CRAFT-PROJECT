import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
     <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 5.5: Tailwind CSS Responsive Design</h1> */}

      <p className="mb-4 text-muted-foreground">
        Responsive design is not an afterthought in Tailwind CSS; it's a core feature built into the framework's DNA. Tailwind uses a powerful and intuitive **mobile-first** approach that makes creating complex, adaptive layouts remarkably simple. Instead of writing separate CSS rules inside media queries, you apply responsive variants directly in your HTML.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Mobile-First by Default 📱
      </h2>
      <p className="mb-2 text-muted-foreground">
        The fundamental principle of Tailwind's responsive system is to design for the smallest screen first and then "fan out" for larger screens. Any utility class you apply without a prefix (e.g., `p-4`, `text-center`) will apply to **all screen sizes**, starting from the smallest mobile view.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-muted-foreground">
            You then use responsive prefixes to override or add styles only at specific screen widths (breakpoints). This results in cleaner, more predictable styling.
          </p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Responsive Prefixes (Breakpoints) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Responsive Prefixes (Breakpoints)
      </h2>
       <p className="mb-2 text-muted-foreground">
        Tailwind comes with a set of default breakpoints that cover common device sizes. You apply a utility at a specific breakpoint by adding the prefix to the class name.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-secondary-foreground font-semibold">Default Breakpoints:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li><strong>`sm:`</strong> (min-width: 640px) - Targets small tablets and up.</li>
            <li><strong>`md:`</strong> (min-width: 768px) - Targets tablets and up.</li>
            <li><strong>`lg:`</strong> (min-width: 1024px) - Targets laptops and desktops.</li>
            <li><strong>`xl:`</strong> (min-width: 1280px) - Targets large desktops.</li>
            <li><strong>`2xl:`</strong> (min-width: 1536px) - Targets extra-large desktops.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Applying Prefixes in Practice */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Applying Prefixes in Practice
      </h2>
       <p className="mb-2 text-muted-foreground">
        The syntax is `[breakpoint]:[utility-class]`. This applies the utility class only when the screen width is greater than or equal to the breakpoint's value.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example: A Responsive Card</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<div class="bg-white p-4 md:p-8 lg:flex lg:items-center">'}\n  {/* ... content ... */}\n{'</div>'}
          </code></pre>
          <p className="text-sm text-muted-foreground mt-2"><strong>What this code does:</strong></p>
          <ul className="list-disc ml-6 mt-2 text-muted-foreground text-sm">
            <li><strong>On all screens (mobile-first):</strong> The `div` has a white background and small padding (`p-4`).</li>
            <li><strong>On medium screens and up (`md:`):</strong> The padding increases to `p-8`.</li>
            <li><strong>On large screens and up (`lg:`):</strong> The layout changes to a flex container (`flex`) and items are centered vertically (`items-center`).</li>
          </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Responsive Grid Layouts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Responsive Grid Layouts
      </h2>
      <p className="mb-2 text-muted-foreground">
        Responsive prefixes are most powerfully used with grid utilities to create adaptive layouts.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<!-- A grid that changes columns based on screen size -->\n<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n  <div>04</div>\n</div>'}
          </code></pre>
          <p className="text-sm text-muted-foreground mt-2">This creates a single column on mobile, two columns on small tablets, and four columns on laptops and desktops.</p>
      </div>

       <hr className="my-6 border-border" />
       
       {/* 5. Hiding and Showing Elements */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Hiding and Showing Elements Responsively
      </h2>
      <p className="mb-2 text-muted-foreground">
        You can show or hide elements at different breakpoints using the `hidden` and `block`/`flex`/`grid` utilities.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<!-- Only visible on medium screens and up -->\n<div class="hidden md:block">...</div>\n\n<!-- Visible on mobile, but hidden on medium screens and up -->\n<div class="block md:hidden">...</div>'}
          </code></pre>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 6. Combining with State Variants */}
       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Combining Responsive and State Variants
      </h2>
      <p className="mb-2 text-muted-foreground">
        You can chain responsive prefixes with state variants like `hover:`. The responsive prefix always comes first.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-secondary-foreground font-semibold">Syntax: `[breakpoint]:[state]:[utility-class]`</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<button class="bg-blue-500 md:hover:bg-red-500 ...">\n  Hover me\n</button>'}
          </code></pre>
          <p className="text-sm text-muted-foreground mt-2">This button has a blue background on all screens, but on medium screens and up, the background turns red on hover.</p>
      </div>
      
       <hr className="my-6 border-border" />

        {/* 7. Customizing Breakpoints */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Customizing Your Breakpoints
      </h2>
      <p className="mb-2 text-muted-foreground">
        If the default breakpoints don't fit your design, you can easily customize them in your `tailwind.config.js` file.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'// tailwind.config.js\nmodule.exports = {\n  theme: {\n    screens: {\n      \'tablet\': \'640px\',\n      \'laptop\': \'1024px\',\n      \'desktop\': \'1280px\',\n    },\n  },\n}'}
          </code></pre>
          <p className="text-sm text-muted-foreground mt-2">This completely replaces the default breakpoints. Now you would use classes like `laptop:text-lg`.</p>
      </div>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy for Responsive Design
      </h2>
       <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Always Start Mobile-First:</strong> Write the HTML and the base utility classes as if you are only targeting a small mobile screen.</li>
        <li><strong>Add Breakpoints Incrementally:</strong> Widen your browser window. When the layout starts to look awkward, that's when you should add a breakpoint prefix (`sm:`, `md:`, etc.) to adjust the styles for that screen size and larger.</li>
        <li><strong>Use Flexbox and Grid:</strong> These layout modules are inherently responsive and work perfectly with Tailwind's breakpoint system.</li>
        <li><strong>Keep it Simple:</strong> A good responsive design doesn't need completely different layouts for every screen size. Often, small changes like adjusting the number of grid columns or the flex direction are all that's needed.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
