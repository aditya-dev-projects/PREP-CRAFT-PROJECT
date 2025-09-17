import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 16: HTML5 Essentials & Semantic Elements</h1> */}

      <p className="mb-4 text-muted-foreground">
        HTML5 is the modern standard for HTML. While building on the core principles of earlier versions, it introduced powerful new features and, most importantly, a set of <strong>semantic elements</strong>. These elements provide a more meaningful structure to web pages, revolutionizing how we write HTML for better accessibility, SEO, and code readability.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A More Meaningful Skeleton 🧠
      </h2>
      {/* FIX: Changed the surrounding <p> to a <div> to allow for valid nesting of code examples. */}
      <div className="mb-2 text-muted-foreground">
        Before HTML5, web layouts were often built using many generic `&lt;div&gt;` elements with IDs or classes to describe their purpose (e.g., `&lt;div id="header"&gt;`). This worked, but it had no meaning to the browser or search engines.
      </div>
      <p className="mb-2 text-muted-foreground">
        HTML5 introduced new tags that describe the <strong>purpose</strong> of the content they hold.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Analogy: Building a House</h4>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li><strong>Old HTML (`div` soup):</strong> Like building a house entirely out of identical, generic bricks. You can label them ("this is a bedroom brick"), but the brick itself has no inherent meaning.</li>
            <li><strong>HTML5 Semantics:</strong> Like having specialized parts: a "door frame" element, a "window" element, a "roof" element. The structure itself is now descriptive and meaningful.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Key Semantic Elements */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Key Semantic Elements Explained
      </h2>
      <p className="mb-2 text-muted-foreground">
        These elements are designed to structure the main sections of a webpage.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>`&lt;header&gt;`</strong>: Represents the introductory content for a page or section. Typically contains the logo, site title, and main navigation.</li>
            <li><strong>`&lt;nav&gt;`</strong>: Specifically for major navigation links (e.g., the main menu).</li>
            <li><strong>`&lt;main&gt;`</strong>: Contains the dominant, unique content of the document. There should only be one `&lt;main&gt;` element per page.</li>
            <li><strong>`&lt;article&gt;`</strong>: For self-contained, independent content that could be distributed on its own, like a blog post, news story, or forum post.</li>
            <li><strong>`&lt;section&gt;`</strong>: A thematic grouping of content, typically with a heading. It's a way to break up a long article into logical parts.</li>
            <li><strong>`&lt;aside&gt;`</strong>: For content that is tangentially related to the main content, like a sidebar, author bio, or related links.</li>
            <li><strong>`&lt;footer&gt;`</strong>: Represents the footer for a page or section. Usually contains copyright information, contact details, and footer navigation.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. A Practical Example */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. A Practical Example: Before and After
      </h2>
       <p className="mb-2 text-muted-foreground">
        Here’s how a simple blog layout would be structured, comparing the old "div-based" method to the modern semantic HTML5 method.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">The Old Way (Non-Semantic)</h4>
            <pre className="mt-2 p-2 bg-black rounded-md text-white text-xs"><code>
                {'<div id="header">'}<br/>
                {'  <h1>My Blog</h1>'}<br/>
                {'</div>'}<br/>
                {'<div id="main-content">'}<br/>
                {'  <div class="post">'}<br/>
                {'    <h2>Post Title</h2>'}<br/>
                {'    <p>Content...</p>'}<br/>
                {'  </div>'}<br/>
                {'</div>'}<br/>
                {'<div id="footer">'}<br/>
                {'  <p>Copyright</p>'}<br/>
                {'</div>'}
            </code></pre>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">The HTML5 Way (Semantic)</h4>
             <pre className="mt-2 p-2 bg-black rounded-md text-white text-xs"><code>
                {'<header>'}<br/>
                {'  <h1>My Blog</h1>'}<br/>
                {'</header>'}<br/>
                {'<main>'}<br/>
                {'  <article>'}<br/>
                {'    <h2>Post Title</h2>'}<br/>
                {'    <p>Content...</p>'}<br/>
                {'  </article>'}<br/>
                {'</main>'}<br/>
                {'<footer>'}<br/>
                {'  <p>Copyright</p>'}<br/>
                {'</footer>'}
            </code></pre>
        </div>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Other Important HTML5 Features */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Other Important HTML5 Features
      </h2>
      <p className="mb-2 text-muted-foreground">
        HTML5 also introduced new features that reduce the reliance on external plugins like Flash.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>`&lt;video&gt;` and `&lt;audio&gt;` Tags:</strong> Natively embed video and audio files directly into your webpage without needing a plugin.</li>
            <li><strong>New Form Input Types:</strong> HTML5 added more specific input types that provide better user experiences and validation, especially on mobile devices. Examples include `type="email"`, `type="date"`, `type="number"`, and `type="tel"`.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Why Semantics Matter */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Why Semantics Matter: The "So What?"
      </h2>
       <p className="mb-2 text-muted-foreground">
        Using semantic elements is a best practice for three critical reasons.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Accessibility (a11y):</strong> Screen reader software used by visually impaired users relies on semantic tags to understand the page structure and navigate it efficiently. A `&lt;nav&gt;` element tells the user, "this is the main navigation," which is much more helpful than a generic `&lt;div&gt;`.</li>
        <li><strong>SEO (Search Engine Optimization):</strong> Search engines like Google analyze the structure of your page to understand its content. Using an `&lt;h1&gt;` for your main title and `&lt;article&gt;` for your content helps search engines rank your page more accurately.</li>
        <li><strong>Code Readability & Maintainability:</strong> Semantic HTML is easier for other developers (and your future self) to read and understand. It clearly communicates the intended structure of the page, making the code easier to maintain and update.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
