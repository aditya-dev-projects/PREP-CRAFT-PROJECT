import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
     <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 21: Responsive Design & Media Queries</h1> */}

      <p className="mb-4 text-muted-foreground">
        In the modern web, users access websites on a vast range of devices with different screen sizes, from small mobile phones to massive desktop monitors. Responsive Web Design is the practice of building a website so that its layout and content automatically adapt to provide an optimal viewing experience on any device. The primary tool we use to achieve this in CSS is the **Media Query**.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: One Website, Many Screens 📱💻🖥️
      </h2>
      <p className="mb-2 text-muted-foreground">
        The core idea of responsive design is that you don't build separate websites for mobile and desktop. Instead, you build **one flexible website** whose layout changes based on the properties of the user's device, most commonly the width of the screen.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Analogy: A Liquid in a Container</h4>
        <p className="mt-2 text-muted-foreground">
            Think of your website's content as a liquid. A responsive design ensures that this liquid can be poured into any container (a phone, a tablet, a desktop) and it will adapt its shape to fit perfectly, without spilling or leaving empty space.
        </p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The Viewport Meta Tag */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Viewport Meta Tag: The First Step
      </h2>
      <p className="mb-2 text-muted-foreground">
        Before writing any responsive styles, you must include the viewport meta tag in the `&lt;head&gt;` of your HTML document. Without this tag, mobile browsers will try to render the page as if it were on a desktop, resulting in a zoomed-out, unreadable site.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-secondary-foreground font-semibold">The Essential Tag:</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'<meta name="viewport" content="width=device-width, initial-scale=1.0">'}
        </code></pre>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>`width=device-width`</strong>: Tells the browser to set the width of the page to the width of the device's screen.</li>
            <li><strong>`initial-scale=1.0`</strong>: Sets the initial zoom level to 100% when the page is first loaded.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Media Queries */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Media Queries: CSS with Superpowers
      </h2>
       <p className="mb-2 text-muted-foreground">
        A media query is a feature in CSS that allows you to apply a block of styles only when a specific condition is met. The most common condition is the screen width. This is the cornerstone of responsive design.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">The Syntax:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {`@media (condition) {`}<br/>
              {'  /* CSS rules to apply if the condition is true */'}<br/>
              {'}'}
          </code></pre>
          <h4 className="font-bold text-secondary-foreground mt-4">Common Conditions (Breakpoints):</h4>
          <ul className="list-disc ml-6 mt-2 text-muted-foreground">
              <li><strong>`min-width`</strong>: Applies styles for screens that are **wider than or equal to** a certain width. (Used for mobile-first design).</li>
              <li><strong>`max-width`</strong>: Applies styles for screens that are **narrower than or equal to** a certain width. (Used for desktop-first design).</li>
          </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. The Mobile-First Approach */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The Mobile-First Approach (Best Practice)
      </h2>
      <p className="mb-2 text-muted-foreground">
        The modern best practice is to design and write your CSS for the smallest screen (mobile) first, and then use `min-width` media queries to add complexity for larger screens. This approach often leads to cleaner code and better performance on mobile devices.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example: A Responsive Grid Layout</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {`/* Default (Mobile) styles: single column layout */`}<br/>
              {`.grid-container {`}<br/>
              {'  display: grid;'}<br/>
              {'  grid-template-columns: 1fr;'}<br/>
              {'  gap: 1rem;'}<br/>
              {'}'}<br/><br/>
              {`/* Tablet styles: two-column layout */`}<br/>
              {`@media (min-width: 768px) {`}<br/>
              {'  .grid-container {'}<br/>
              {'    grid-template-columns: 1fr 1fr;'}<br/>
              {'  }'}<br/>
              {'}'}<br/><br/>
              {`/* Desktop styles: three-column layout */`}<br/>
              {`@media (min-width: 1024px) {`}<br/>
              {'  .grid-container {'}<br/>
              {'    grid-template-columns: 1fr 1fr 1fr;'}<br/>
              {'  }'}<br/>
              {'}'}
          </code></pre>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Responsive Patterns */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Responsive Patterns & Units
      </h2>
       <p className="mb-2 text-muted-foreground">
        To build responsive layouts, you need to use flexible units and patterns.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Flexible Layouts:</strong> Use Flexbox and Grid. These layout systems are inherently flexible and are designed for building responsive interfaces.</li>
        <li><strong>Fluid Images:</strong> Ensure images never overflow their containers by using the following rule:
            <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{`img {\n  max-width: 100%;\n  height: auto;\n}`}</code></pre>
        </li>
        <li><strong>Relative Units:</strong> Prefer relative units over fixed units.
            <ul className="list-circle ml-6 mt-2">
                <li>Use `%` for widths.</li>
                <li>Use `rem` and `em` for `font-size`, `padding`, and `margin` to create scalable typography and spacing.</li>
                <li>Use `vw` (viewport width) and `vh` (viewport height) for dimensions relative to the screen size.</li>
            </ul>
        </li>
       </ul>
    </div>
  );
};

export default TopicPage;
