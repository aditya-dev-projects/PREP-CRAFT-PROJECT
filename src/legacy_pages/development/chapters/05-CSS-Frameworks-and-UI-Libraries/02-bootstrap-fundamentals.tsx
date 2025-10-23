import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
<div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 5.2: Bootstrap Fundamentals</h1> */}

      <p className="mb-4 text-muted-foreground">
        Bootstrap is the world's most popular CSS framework for developing responsive, mobile-first websites. It is a <strong>component-based framework</strong>, meaning it provides a large library of pre-styled, ready-to-use components like buttons, navbars, cards, and forms. This allows for incredibly rapid development, especially for projects that require a clean, standard interface without extensive custom design.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A Pre-built Toolkit 🧰
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of Bootstrap as a comprehensive toolkit for a web developer. Instead of building every UI element from scratch, you simply pick a pre-made component from the toolkit and place it in your HTML. You use Bootstrap's pre-defined CSS classes to apply styles and structure. The primary goal of Bootstrap is to let you build functional, good-looking websites quickly without having to be a design expert.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. Setting Up Bootstrap */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Setting Up Bootstrap: The CDN Method
      </h2>
       <p className="mb-2 text-muted-foreground">
        The quickest way to start using Bootstrap is by linking to its files via a Content Delivery Network (CDN). This means you don't have to download any files. You just add a link to your HTML `&lt;head&gt;`.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Add this to your HTML `&lt;head&gt;`:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'<!-- Bootstrap CSS -->\n<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">'}
          </code></pre>
           <p className="text-secondary-foreground font-semibold mt-4">And this before your closing `&lt;/body&gt;` tag:</p>
           <p className="text-sm text-muted-foreground mt-1">This adds the JavaScript needed for interactive components like dropdowns and modals.</p>
           <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'<!-- Bootstrap JS -->\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Bootstrap Grid System */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Grid System: The Foundation of Layout
      </h2>
       <p className="mb-2 text-muted-foreground">
        The Bootstrap grid system is the most important part of the framework. It's a powerful, mobile-first flexbox grid used to build layouts of all shapes and sizes. It is based on a **12-column** layout.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <h4 className="font-bold text-secondary-foreground">How it Works:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li>Content is placed in **containers** (`.container` or `.container-fluid`).</li>
            <li>Rows (`.row`) are wrappers for columns.</li>
            <li>Columns (`.col-*`) are where your content goes. You can have up to 12 columns per row.</li>
            <li>You specify how many of the 12 available columns a `&lt;div&gt;` should span at different screen sizes using responsive breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`).</li>
          </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example: A responsive three-column layout</p>
           <p className="text-sm text-muted-foreground mt-1">This layout will stack on small screens (by default), be two columns on medium screens (`.col-md-6`), and three columns on large screens (`.col-lg-4`).</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
             {'<div class="container">\n  <div class="row">\n    <div class="col-md-6 col-lg-4">Column A</div>\n    <div class="col-md-6 col-lg-4">Column B</div>\n    <div class="col-md-12 col-lg-4">Column C</div>\n  </div>\n</div>'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Common Bootstrap Components */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Core Components: Buttons, Cards, and Navbars
      </h2>
      <p className="mb-2 text-muted-foreground">
        Bootstrap comes with dozens of pre-styled components. You just need to use the correct HTML structure and classes.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Buttons:</strong> Use the `.btn` class, plus a contextual color class like `.btn-primary` or `.btn-success`.</li>
            <li><strong>Cards:</strong> A flexible content container for showing things like blog posts or products, built with `.card`, `.card-body`, `.card-title`, etc.</li>
            <li><strong>Navbars:</strong> A powerful and responsive navigation header with support for branding, navigation links, and a collapsible menu for mobile devices.</li>
            <li><strong>Alerts:</strong> Contextual feedback messages for user actions (e.g., `.alert-danger` for an error).</li>
        </ul>
      </div>

       <hr className="my-6 border-border" />
       
       {/* 5. Utility Classes */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Bootstrap Utility Classes
      </h2>
      <p className="mb-2 text-muted-foreground">
        While component-focused, Bootstrap also provides a rich set of utility classes for quick adjustments without writing custom CSS.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Spacing:</strong> Use margin (`m-`, `mt-`, `mx-`) and padding (`p-`, `pt-`, `px-`) utilities with a scale from 0-5 (e.g., `mt-3` for margin-top).</li>
            <li><strong>Colors:</strong> Set text and background colors with classes like `text-primary`, `bg-dark`, `text-white`.</li>
            <li><strong>Flexbox:</strong> Easily create flex containers and control alignment with classes like `.d-flex`, `.justify-content-center`, `.align-items-center`.</li>
            <li><strong>Borders & Display:</strong> Control borders, shadows, and the display property (`.d-none`, `.d-block`).</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />
      
      {/* 6. JavaScript Components */}
       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. JavaScript-Powered Components
      </h2>
      <p className="mb-2 text-muted-foreground">
        Many Bootstrap components require the JavaScript bundle to function. These provide interactivity.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Modals:</strong> Pop-up dialogs that appear over the page content.</li>
            <li><strong>Dropdowns:</strong> Toggleable menus for displaying lists of links or actions.</li>
            <li><strong>Carousels:</strong> A slideshow component for cycling through images or text.</li>
            <li><strong>Tooltips & Popovers:</strong> Small informational overlays that appear on hover or click.</li>
        </ul>
      </div>
      
       <hr className="my-6 border-border" />

        {/* 7. Customizing Bootstrap */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Customizing Bootstrap
      </h2>
      <p className="mb-2 text-muted-foreground">
        While you can override Bootstrap's styles with your own CSS file, the professional way to customize it is by using its built-in Sass variables. This requires a build step. By changing variables like `$primary` or `$font-family-sans-serif` before compiling, you can create a custom version of the framework that uses your own brand colors and fonts.
      </p>
       
      <hr className="my-6 border-border" />

      {/* 8. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Key Strategy for Using Bootstrap
      </h2>
       <p className="mb-2 text-muted-foreground">
        Bootstrap is most effective when used for its intended purpose: rapid development of standard interfaces.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Don't Fight the Framework:</strong> Use Bootstrap's components and grid as intended. Heavily overriding its core styles is a sign that a utility-first framework like Tailwind CSS would have been a better choice.</li>
        <li><strong>Master the Grid:</strong> The 12-column responsive grid is its most powerful feature. Understanding the breakpoints (`sm`, `md`, `lg`, `xl`) is key to building good layouts.</li>
        <li><strong>Use the Official Documentation:</strong> The Bootstrap documentation is excellent. Always have it open to copy-paste the correct markup for components.</li>
        <li><strong>Know When to Use It:</strong> Bootstrap is perfect for admin panels, internal tools, and simple marketing sites where a unique, custom design is not a primary goal.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
