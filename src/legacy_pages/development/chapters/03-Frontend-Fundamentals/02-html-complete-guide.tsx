import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development: HTML - The Complete Guide</h1> */}

      <p className="mb-4 text-muted-foreground">
        HTML, or <strong>HyperText Markup Language</strong>, is the universal language for creating the structure and content of web pages. It is the absolute foundation of everything you see on the web. This guide will cover all the essential elements you need to build a well-structured webpage, from the absolute basics to modern best practices.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. Core Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. Core Concepts: Elements, Tags & Attributes
      </h2>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
        <li><strong>Tag:</strong> A keyword in angle brackets like `&lt;p&gt;`. Most tags come in pairs: an <strong>opening tag</strong> (`&lt;p&gt;`) and a <strong>closing tag</strong> (`&lt;/p&gt;`).</li>
        <li><strong>Element:</strong> The complete unit, consisting of the opening tag, the content inside, and the closing tag. For example: `&lt;p&gt;This is some text.&lt;/p&gt;`.</li>
        <li><strong>Attribute:</strong> Provides extra information about an element and is always placed in the opening tag. They come in `name="value"` pairs. For example: `&lt;img src="photo.jpg"&gt;`.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 2. Basic Document Structure */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Basic HTML Document Structure
      </h2>
      <p className="mb-2 text-muted-foreground">Every HTML file must have this standard boilerplate structure to be valid.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <pre className="text-sm"><code>
              {'<!DOCTYPE html>'}<br/>
              {'<html lang="en">'}<br/>
              {'<head>'}<br/>
              {'    <meta charset="UTF-8">'}<br/>
              {'    <meta name="viewport" content="width=device-width, initial-scale=1.0">'}<br/>
              {'    <title>My First Webpage</title>'}<br/>
              {'</head>'}<br/>
              {'<body>'}<br/>
              {'    <!-- All visible content goes here -->'}<br/>
              {'</body>'}<br/>
              {'</html>'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Text Formatting */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Text Formatting: Structuring Your Content
      </h2>
      <div className="overflow-x-auto p-4 bg-muted rounded-lg border border-border">
        <table className="w-full text-left">
            <thead>
                <tr className="border-b border-border"><th className="py-2">Tag</th><th className="py-2">Description</th><th className="py-2">Example</th></tr>
            </thead>
            <tbody className="text-muted-foreground">
                <tr className="border-b border-border"><td className="py-2"><strong>`&lt;h1&gt;` to `&lt;h6&gt;`</strong></td><td className="py-2">Heading tags. `&lt;h1&gt;` is the main title.</td><td className="py-2 font-mono">`&lt;h1&gt;Main Title&lt;/h1&gt;`</td></tr>
                <tr className="border-b border-border"><td className="py-2"><strong>`&lt;p&gt;`</strong></td><td className="py-2">Paragraph tag for blocks of text.</td><td className="py-2 font-mono">`&lt;p&gt;A paragraph.&lt;/p&gt;`</td></tr>
                <tr className="border-b border-border"><td className="py-2"><strong>`&lt;br&gt;`</strong></td><td className="py-2">A self-closing tag for a line break.</td><td className="py-2 font-mono">`Some text.&lt;br&gt;New line.`</td></tr>
                <tr className="border-b border-border"><td className="py-2"><strong>`&lt;hr&gt;`</strong></td><td className="py-2">A self-closing tag for a horizontal rule.</td><td className="py-2 font-mono">`&lt;p&gt;Sec 1&lt;/p&gt;&lt;hr&gt;&lt;p&gt;Sec 2&lt;/p&gt;`</td></tr>
                <tr className="border-b border-border"><td className="py-2"><strong>`&lt;strong&gt;`</strong></td><td className="py-2">Indicates important text (renders as bold).</td><td className="py-2 font-mono">`&lt;strong&gt;Warning&lt;/strong&gt;`</td></tr>
                <tr><td className="py-2"><strong>`&lt;a&gt;`</strong></td><td className="py-2">Anchor tag for hyperlinks.</td><td className="py-2 font-mono">`&lt;a href="#"&gt;Click me&lt;/a&gt;`</td></tr>
            </tbody>
        </table>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 4. Lists & 5. Images */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary-foreground">4. Lists</h2>
             <div className="p-4 bg-muted rounded-lg border border-border">
                 <p className="font-bold">Unordered List</p>
                 <pre className="text-sm mt-1"><code>{'<ul>\n  <li>Apples</li>\n  <li>Oranges</li>\n</ul>'}</code></pre>
                 <p className="font-bold mt-4">Ordered List</p>
                 <pre className="text-sm mt-1"><code>{'<ol>\n  <li>First Step</li>\n  <li>Second Step</li>\n</ol>'}</code></pre>
            </div>
        </div>
        <div>
            <h2 className="text-2xl font-semibold mb-2 text-primary-foreground">5. Images</h2>
             <div className="p-4 bg-muted rounded-lg border border-border">
                <p>The `&lt;img&gt;` tag is self-closing.</p>
                <ul className="list-disc ml-6 mt-2 text-muted-foreground">
                    <li>`src` specifies the image path.</li>
                    <li>`alt` provides a description for accessibility.</li>
                </ul>
                <pre className="text-sm mt-2"><code>{'<img src="logo.png" alt="Company logo">'}</code></pre>
            </div>
        </div>
      </div>

      <hr className="my-6 border-border" />

      {/* 6. Tables & 7. Forms */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">6. Tables</h2>
      <div className="p-4 bg-muted rounded-lg border border-border">
        <p className="mb-2">Tables are for displaying data in rows and columns.</p>
        <pre className="text-sm"><code>
            {'<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John Doe</td>\n      <td>Developer</td>\n    </tr>\n  </tbody>\n</table>'}
        </code></pre>
      </div>

       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">7. HTML Forms</h2>
       <div className="p-4 bg-muted rounded-lg border border-border">
        <p className="mb-2">Forms are used to collect data from users.</p>
        <pre className="text-sm"><code>
            {'<form action="/login" method="POST">\n  <label for="username">Username:</label>\n  <input type="text" id="username" name="username" required>\n\n  <label for="password">Password:</label>\n  <input type="password" id="password" name="password" required>\n\n  <button type="submit">Log In</button>\n</form>'}
        </code></pre>
      </div>

       <hr className="my-6 border-border" />

      {/* 8. Semantic HTML */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">8. Semantic HTML5</h2>
      <p className="mb-2 text-muted-foreground">Use tags that describe the purpose of the content for better Accessibility, SEO, and Readability.</p>
       <div className="p-4 bg-muted rounded-lg border border-border">
           <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
               <li>`&lt;header&gt;`: The header of a page.</li>
               <li>`&lt;nav&gt;`: Main navigation links.</li>
               <li>`&lt;main&gt;`: The main, unique content.</li>
               <li>`&lt;article&gt;`: A self-contained piece like a blog post.</li>
               <li>`&lt;aside&gt;`: A sidebar.</li>
               <li>`&lt;footer&gt;`: The footer of a page.</li>
           </ul>
            <p className="font-bold mt-4">Example Layout:</p>
            <pre className="text-sm mt-1"><code>
                {'<body>\n  <header>\n    <h1>Website Title</h1>\n    <nav>...</nav>\n  </header>\n\n  <main>\n    <article>...</article>\n    <aside>...</aside>\n  </main>\n\n  <footer>...</footer>\n</body>'}
            </code></pre>
      </div>
    </div>
  );
};

export default TopicPage;
