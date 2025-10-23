import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 5.1: Introduction to CSS Frameworks</h1> */}

      <p className="mb-4 text-muted-foreground">
        Writing CSS from scratch for every project is time-consuming and can lead to repetitive and inconsistent code. A <strong>CSS Framework</strong> is a pre-written library of CSS code that provides a foundational structure, including a layout grid, pre-styled components, and consistent design patterns. Using a framework dramatically speeds up development and helps you build professional-looking, responsive websites with less effort.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A "Starter Kit" for Your House 🏠
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of building a house. You could go to the forest, chop down trees, and make your own lumber (writing CSS from scratch). Or, you could go to a hardware store and buy a pre-fabricated "starter kit" that includes pre-cut lumber, standard-sized doors, and windows (using a CSS Framework).
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-muted-foreground">
            A CSS framework gives you all the common, reusable parts you need, allowing you to focus on the unique aspects of your design rather than reinventing the wheel every time.
          </p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Why Use a CSS Framework? */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Why Use a CSS Framework? The Main Benefits
      </h2>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Speed:</strong> This is the biggest advantage. You can build a fully responsive, professional-looking layout in a fraction of the time it would take to write all the CSS manually.</li>
            <li><strong>Consistency:</strong> Frameworks provide a consistent design system for buttons, forms, and other components, ensuring a uniform look and feel across your entire website.</li>
            <li><strong>Responsiveness:</strong> Modern frameworks are built with a "mobile-first" approach, making it incredibly easy to create layouts that work perfectly on all screen sizes using a pre-built grid system.</li>
            <li><strong>Browser Compatibility:</strong> The framework's code has already been tested across different browsers, saving you the headache of fixing many common compatibility issues.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Component-Based Frameworks */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Component-Based Frameworks (e.g., Bootstrap)
      </h2>
       <p className="mb-2 text-muted-foreground">
        This is the traditional approach to CSS frameworks. They provide fully styled, ready-to-use components. Your job is to assemble these components to build your user interface.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example: Building a card with Bootstrap</p>
           <p className="text-sm text-muted-foreground mt-1">You use pre-defined classes like `.card`, `.card-body`, and `.btn` to construct the component.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'<div class="card" style="width: 18rem;">'}<br/>
              {'  <div class="card-body">'}<br/>
              {'    <h5 class="card-title">Card Title</h5>'}<br/>
              {'    <p class="card-text">Some quick example text.</p>'}<br/>
              {'    <a href="#" class="btn btn-primary">Go somewhere</a>'}<br/>
              {'  </div>'}<br/>
              {'</div>'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Utility-First Frameworks */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Utility-First Frameworks (e.g., Tailwind CSS)
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is a more modern approach. Instead of pre-built components, a utility-first framework gives you a large set of low-level utility classes. Each class does one specific job. You build custom designs by composing these utilities directly in your HTML.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example: Building the same card with Tailwind CSS</p>
           <p className="text-sm text-muted-foreground mt-1">You combine utility classes like `p-6` (padding), `rounded-lg` (border-radius), `shadow-md` (box-shadow), and `bg-white` (background-color) to create a custom look.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">'}<br/>
              {'  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Card Title</h5>'}<br/>
              {'  <p class="mb-3 font-normal text-gray-700">Some quick example text.</p>'}<br/>
              {'  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">Go somewhere</a>'}<br/>
              {'</div>'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. UI Libraries */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. What is a UI Library? (e.g., Material-UI)
      </h2>
      <p className="mb-2 text-muted-foreground">
        UI libraries are collections of pre-built components specifically for a JavaScript framework like React. They provide not just the styles, but also the functionality.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            {/* FIX: Replaced <Button /> with `&lt;Button /&gt;` to render as text */}
            <li><strong>Key Difference:</strong> A CSS framework provides CSS classes for your HTML. A UI library provides fully functional React components (e.g., `&lt;Button /&gt;`, `&lt;Card /&gt;`) that you import and use in your application.</li>
            <li><strong>Design Systems:</strong> Many UI libraries, like Material-UI (MUI), are based on established design systems (in this case, Google's Material Design), ensuring a high-quality, consistent, and accessible user experience.</li>
          </ul>
      </div>
       
      <hr className="my-6 border-border" />

       {/* 6. Trade-offs and Considerations */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Trade-offs and Considerations
      </h2>
       <p className="mb-2 text-muted-foreground">
        While powerful, frameworks come with some trade-offs to consider.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>File Size:</strong> Frameworks can add a significant amount of CSS to your project, which can affect loading times. (Though modern tools can remove unused styles).</li>
            <li><strong>Learning Curve:</strong> Each framework has its own class names, grid system, and conventions that you need to learn.</li>
            <li><strong>Customization Overhead:</strong> Overriding the default styles of a component-based framework like Bootstrap can sometimes be more work than writing the CSS from scratch.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 7. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Key Strategy: Choosing the Right Tool
      </h2>
       <p className="mb-2 text-muted-foreground">
        The choice of a framework depends on the project's needs.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Choose Bootstrap when:</strong> You need to build a standard-looking website (like an admin dashboard) very quickly and are not concerned with a highly custom design.</li>
        <li><strong>Choose Tailwind CSS when:</strong> You are building a custom, unique design from scratch and want full control over the look and feel of your website without writing lots of custom CSS files.</li>
        <li><strong>Choose a UI Library (like MUI) when:</strong> You are working within a specific JavaScript framework (like React) and want ready-made, interactive components that follow a consistent design system.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
