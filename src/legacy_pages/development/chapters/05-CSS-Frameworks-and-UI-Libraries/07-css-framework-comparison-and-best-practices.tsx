import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 5.7: CSS Framework Comparison & Best Practices</h1> */}

      <p className="mb-4 text-muted-foreground">
        Choosing a CSS framework is a significant decision at the start of a project. The two dominant players in the field, Bootstrap and Tailwind CSS, represent two very different philosophies. This chapter provides a direct comparison to help you understand their strengths and weaknesses, along with a summary of best practices for working with any CSS framework.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Spectrum of Abstraction 🎨
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of CSS frameworks on a spectrum. On one end, you have high-level abstraction with pre-built components. On the other end, you have low-level abstraction with tiny, single-purpose utilities.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Bootstrap (High Abstraction):</strong> Gives you a finished component, like a `.card`. It's easy to use but harder to change its fundamental appearance.</li>
            <li><strong>Tailwind CSS (Low Abstraction):</strong> Gives you the building blocks (`p-4`, `shadow-md`, `rounded-lg`) to build your own custom card from scratch. It's more work initially but offers complete creative freedom.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Head-to-Head Comparison */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Head-to-Head Comparison: Bootstrap vs. Tailwind CSS
      </h2>
      <div className="overflow-x-auto p-4 bg-muted rounded-lg border border-border">
        <table className="w-full text-left">
            <thead>
                <tr className="border-b border-border">
                    <th className="py-2 font-bold text-secondary-foreground">Aspect</th>
                    <th className="py-2 font-bold text-secondary-foreground">Bootstrap</th>
                    <th className="py-2 font-bold text-secondary-foreground">Tailwind CSS</th>
                </tr>
            </thead>
            <tbody className="text-muted-foreground text-sm">
                <tr className="border-b border-border">
                    <td className="py-2"><strong>Philosophy</strong></td>
                    <td className="py-2">Component-Based</td>
                    <td className="py-2">Utility-First</td>
                </tr>
                <tr className="border-b border-border">
                    <td className="py-2"><strong>Speed of Development</strong></td>
                    <td className="py-2">Extremely fast for standard layouts and prototypes.</td>
                    <td className="py-2">Slightly slower initially, but faster for custom designs in the long run.</td>
                </tr>
                 <tr className="border-b border-border">
                    <td className="py-2"><strong>Customization</strong></td>
                    <td className="py-2">More difficult. Often requires overriding existing styles, which can be messy.</td>
                    <td className="py-2">Infinitely customizable by nature. You never have to fight the framework.</td>
                </tr>
                 <tr>
                    <td className="py-2"><strong>Final Look</strong></td>
                    <td className="py-2">Can lead to websites looking generic or "bootstrappy."</td>
                    <td className="py-2">Allows for completely unique and bespoke designs.</td>
                </tr>
            </tbody>
        </table>
       </div>

      <hr className="my-6 border-border" />

      {/* 3. Performance Considerations */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Performance Considerations
      </h2>
       <p className="mb-2 text-muted-foreground">
        In a modern development environment, the performance difference is minimal, but the approach is different.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Bootstrap:</strong> You link to a single, pre-compiled CSS file. This file contains styles for all components, whether you use them or not.</li>
            <li><strong>Tailwind CSS:</strong> Requires a build step that scans your files and generates a CSS file containing **only the utilities you have used**. This process, called "purging," results in a highly optimized and very small final CSS file.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. The Rise of UI Libraries */}
       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The Rise of UI Libraries (MUI, Chakra UI, etc.)
      </h2>
      <p className="mb-2 text-muted-foreground">
        When working with JavaScript frameworks like React, dedicated UI libraries offer a third option. They combine the best of both worlds.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Pre-built Components:</strong> Like Bootstrap, they provide ready-made, accessible, and interactive components.</li>
            <li><strong>High Customizability:</strong> Like Tailwind, they are often built with a "style props" system or integrate with utility-first approaches, allowing for deep customization without writing custom CSS files.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 5. Best Practice: Mobile-First */}
       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Best Practice: Always Work Mobile-First
      </h2>
      <p className="mb-2 text-muted-foreground">
        Regardless of the framework you choose, the modern standard is to design and build for the smallest screen first.
      </p>
       <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
          <p>This means your base styles should target mobile devices, and you should use responsive prefixes or media query mixins to add complexity for larger screens. This approach leads to simpler, more performant CSS.</p>
      </div>
      
       <hr className="my-6 border-border" />
       
        {/* 6. Best Practice: Don't Fight the Framework */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. Best Practice: Don't Fight the Framework
      </h2>
      <p className="mb-2 text-muted-foreground">
        The biggest mistake developers make is choosing a framework and then immediately trying to force it to behave in a way it wasn't designed for.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>If you are using Bootstrap, embrace its components. If you find yourself writing dozens of CSS rules to override the default look of a Bootstrap card, you probably should have used Tailwind.</li>
            <li>If you are using Tailwind, embrace utility classes. If you are creating custom CSS classes for everything, you are missing the point of the utility-first workflow.</li>
        </ul>
      </div>
      
       <hr className="my-6 border-border" />
       
        {/* 7. Best Practice: Customization via Configuration */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Best Practice: Customize via Configuration
      </h2>
      <p className="mb-2 text-muted-foreground">
        Both Bootstrap (using Sass variables) and Tailwind (using `tailwind.config.js`) are designed to be customized at a foundational level.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-muted-foreground">Instead of overriding a framework's primary color in your own CSS file, change the primary color variable in the framework's configuration. This ensures that all components that use that primary color will automatically update, maintaining consistency throughout your project.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 8. Final Recommendation */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        8. Final Recommendation
      </h2>
       <p className="mb-2 text-muted-foreground">
        For modern web development, especially when aiming for custom designs, **Tailwind CSS has become the industry favorite**. Its utility-first approach offers unparalleled flexibility and results in highly maintainable and performant codebases. However, for rapid prototyping or building standard internal tools, Bootstrap remains an excellent and highly productive choice.
      </p>
    </div>
  );
};


export default TopicPage;
