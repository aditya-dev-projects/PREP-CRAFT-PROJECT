import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 19: CSS Layout (Flexbox & Grid)</h1> */}

      <p className="mb-4 text-muted-foreground">
        For many years, creating complex webpage layouts was a difficult task that often involved hacks and workarounds. Modern CSS has solved this with two incredibly powerful layout systems: <strong>Flexbox</strong> and <strong>Grid</strong>. Mastering these two tools is the key to building any modern, responsive web layout with ease and precision.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Container & Items 📦
      </h2>
      <p className="mb-2 text-muted-foreground">
        Both Flexbox and Grid work on the same principle: you define a parent element as a special layout **container**, and its direct children automatically become layout **items**. You apply the layout rules to the container, which then intelligently arranges the items inside it. You are no longer manually positioning every single element.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Flexbox:</strong> Best for one-dimensional layouts (arranging items in either a single row or a single column).</li>
            <li><strong>Grid:</strong> Best for two-dimensional layouts (arranging items in a grid of both rows and columns simultaneously).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Flexbox (Flexible Box Layout) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Flexbox (Flexible Box Layout)
      </h2>
      <p className="mb-2 text-muted-foreground">
        Flexbox is designed to provide a more efficient way to align and distribute space among items in a container, even when their size is unknown.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-secondary-foreground font-semibold">How it Works:</p>
        <p className="text-sm text-muted-foreground mt-1">To start using Flexbox, you simply declare `display: flex;` on the parent container.</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'.container {'}<br/>
            {'  display: flex;'}<br/>
            {'}'}
        </code></pre>
        <h4 className="font-bold text-secondary-foreground mt-4">Key Flex Container Properties:</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground mt-2">
            <li><strong>`flex-direction`</strong>: Defines the main axis. `row` (default) or `column`.</li>
            <li><strong>`justify-content`</strong>: Aligns items along the main axis (horizontally if `row`). Values include `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.</li>
            <li><strong>`align-items`</strong>: Aligns items along the cross axis (vertically if `row`). Values include `flex-start`, `flex-end`, `center`, `stretch`.</li>
            <li><strong>`flex-wrap`</strong>: Allows items to wrap onto a new line if they run out of space. Default is `nowrap`.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. CSS Grid */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. CSS Grid
      </h2>
       <p className="mb-2 text-muted-foreground">
        Grid is a two-dimensional layout system that gives you control over both rows and columns. It is the most powerful layout system in CSS.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">How it Works:</p>
           <p className="text-sm text-muted-foreground mt-1">You define a container as a grid with `display: grid;` and then specify the structure of its columns and rows.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'.container {'}<br/>
              {'  display: grid;'}<br/>
              {'  grid-template-columns: 1fr 1fr 1fr; /* Three equal-width columns */'}<br/>
              {'  grid-template-rows: 100px 200px; /* Two rows with specific heights */'}<br/>
              {'  gap: 1rem; /* Space between grid items */'}<br/>
              {'}'}
          </code></pre>
          <p className="mt-2 text-muted-foreground">The `fr` unit is a fractional unit that represents a fraction of the available space in the grid container.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Flexbox vs. Grid */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Flexbox vs. Grid: When to Use Which?
      </h2>
      <p className="mb-2 text-muted-foreground">
        While they can sometimes achieve similar results, they are designed for different use cases.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Use Flexbox for:</h4>
            <p className="text-sm text-muted-foreground mt-1">Arranging items in a single line, like navigation bars, button groups, or aligning items within a card.</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Use Grid for:</h4>
            <p className="text-sm text-muted-foreground mt-1">The overall page layout. Creating complex, two-dimensional grids for your main content, sidebars, and footers.</p>
        </div>
      </div>
      <p className="mt-4 text-primary font-semibold">Best Practice: You don't have to choose! The most powerful layouts are built by using both Flexbox and Grid together. Use Grid for the main page structure and Flexbox for aligning the items inside the grid cells.</p>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary for Layouts
      </h2>
       <p className="mb-2 text-muted-foreground">
        Modern CSS layout is about thinking in terms of containers and items.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Identify the Layout Dimension:</strong> Is the layout you need primarily one-dimensional (a row/column) or two-dimensional (a grid)? This will help you choose between Flexbox and Grid.</li>
        <li><strong>Start with the Parent:</strong> Always apply the main layout properties (`display: flex` or `display: grid`) to the container element.</li>
        <li><strong>Use `gap` for Spacing:</strong> For both Flexbox and Grid, the `gap` property is the modern and easy way to create space between items, replacing older methods like using margins.</li>
        <li><strong>Build Responsively:</strong> Use responsive units like percentages, `vw`, or the `fr` unit in Grid. Combine these with media queries to change layout properties (like `flex-direction` or `grid-template-columns`) on different screen sizes.</li>
       </ol>
    </div>
  );
};

export default TopicPage;


