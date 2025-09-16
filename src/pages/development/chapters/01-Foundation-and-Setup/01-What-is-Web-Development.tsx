import React, { FC } from 'react';

const WhatIsWebDevelopment: FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 1: What is Web Development?</h1> */}

      <p className="mb-4 text-muted-foreground">
        Web Development is the work involved in creating and maintaining websites and web applications. It's the "behind-the-scenes" process that makes the websites we use every day—from simple text pages to complex social media platforms—functional, interactive, and visually appealing.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Three Pillars of the Web
      </h2>
      <p className="mb-2 text-muted-foreground">
        Every single website you visit is built using three core technologies that work together. Understanding their distinct roles is the most important concept in web development.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Analogy: Building a human body.</h4>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li><strong>HTML (HyperText Markup Language):</strong> This is the <strong>skeleton</strong>. It provides the fundamental structure and content.</li>
            <li><strong>CSS (Cascading Style Sheets):</strong> This is the <strong>appearance</strong>. It's the skin, hair color, and clothing that styles the skeleton.</li>
            <li><strong>JavaScript (JS):</strong> This is the <strong>brain and nervous system</strong>. It adds interactivity and makes the body respond to actions.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. How the Internet Works */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. How the Internet Works: The Journey of a Webpage
      </h2>
      <p className="mb-2 text-muted-foreground">
        Before a website can be developed, we need to understand the system that delivers it: the internet. The entire process works like a very fast, global postal service.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Analogy: Requesting a brochure.</h4>
        <ol className="list-decimal ml-6 mt-2 space-y-1 text-muted-foreground">
            <li>You (the <strong>Client</strong>) want a brochure from a company (`google.com`).</li>
            <li>You look up the company name in a phone book (<strong>DNS</strong>) to get their address (<strong>IP Address</strong>).</li>
            <li>You write a letter (<strong>HTTP Request</strong>) asking for the brochure and send it.</li>
            <li>The company's mailroom (<strong>Server</strong>) receives your letter and gets the brochure.</li>
            <li>They send it back to you in a package (<strong>HTTP Response</strong>).</li>
            <li>You receive the package and see the brochure (the webpage).</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />
      
      {/* 3. Front-End Development */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Front-End Development: The "Client-Side"
      </h2>
      <p className="mb-2 text-muted-foreground">
        The <strong>Front-End</strong> is everything the user <strong>sees and interacts with</strong> in their web browser. It's often called the "client-side" because the code (HTML, CSS, JS) is run on the client's (user's) computer.
      </p>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
        <li><strong>Responsibilities:</strong> Designing the layout, applying styles, ensuring responsiveness, and building interactive features.</li>
        <li><strong>Key Technologies:</strong> HTML, CSS, JavaScript, and frameworks like <strong>React</strong>, <strong>Angular</strong>, or <strong>Vue.js</strong>.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 4. Back-End Development */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Back-End Development: The "Server-Side"
      </h2>
      <p className="mb-2 text-muted-foreground">
        The <strong>Back-End</strong> is the hidden engine of a website that the user never sees. It's the "server-side" because its code runs on a server. It manages logic, data, and communication.
      </p>
       <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
        <li><strong>Responsibilities:</strong> Writing application logic, interacting with databases, managing user authentication, and creating APIs.</li>
        <li><strong>Key Technologies:</strong> Languages like <strong>Node.js (JavaScript)</strong>, <strong>Python</strong>, <strong>Java</strong>, and databases like <strong>MySQL</strong> or <strong>MongoDB</strong>.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 5. Full-Stack Development */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Full-Stack Development: The Best of Both Worlds
      </h2>
      <p className="mb-2 text-muted-foreground">
        A <strong>Full-Stack Developer</strong> is a versatile professional who is comfortable working on <strong>both the front-end and the back-end</strong>. They understand the entire flow of a web application, from the user interface in the browser all the way to the database on the server.
      </p>

      <hr className="my-6 border-border" />
      
      {/* 6. The Web Development Workflow */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. The Web Development Workflow
      </h2>
      <p className="mb-2 text-muted-foreground">
        Creating a website isn't a single step; it's a process that typically follows a structured path from idea to a live product.
      </p>
      <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
          <li><strong>Plan:</strong> Define goals, audience, and features.</li>
          <li><strong>Design (UI/UX):</strong> Create wireframes and mockups.</li>
          <li><strong>Develop:</strong> Write the front-end and back-end code.</li>
          <li><strong>Test:</strong> Check for bugs, performance, and compatibility.</li>
          <li><strong>Deploy:</strong> Launch the website on a server.</li>
          <li><strong>Maintain:</strong> Update, fix bugs, and add features after launch.</li>
      </ol>

      <hr className="my-6 border-border" />
      
      {/* 7. Essential Tools for a Web Developer */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        7. Essential Tools for a Web Developer
      </h2>
       <p className="mb-2 text-muted-foreground">
        Every web developer relies on a set of core tools to build, manage, and debug their code efficiently.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Code Editor:</strong> A text editor specifically designed for writing code. The most popular choice is <strong>Visual Studio Code (VS Code)</strong>.</li>
        <li><strong>Web Browser:</strong> Essential for testing. Browsers like Chrome and Firefox come with built-in <strong>Developer Tools</strong> for debugging.</li>
        <li><strong>Version Control System:</strong> A system that tracks changes to your code. <strong>Git</strong> is the industry standard, and <strong>GitHub</strong> is the most popular platform for hosting Git repositories.</li>
        <li><strong>Command Line Interface (CLI):</strong> A text-based interface (like Terminal) used for running commands and interacting with tools like Git.</li>
      </ul>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">A simple Git workflow example:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              git add .<br/>
              git commit -m "Add new feature"<br/>
              git push
          </code></pre>
      </div>
      
      
    </div>
  );
};

export default WhatIsWebDevelopment;


// Make notes for this Client-Server Architecture in same way and give same react code for this and dont include quiz component in the code and add notes line by line 