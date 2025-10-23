import React, { FC } from 'react';

const IntroductionToTheMernStack: FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 4: Introduction to the MERN Stack</h1> */}

      <p className="mb-4 text-muted-foreground">
        The MERN stack is a popular and powerful collection of technologies used for building modern, full-stack web applications. It's an acronym that stands for the four key technologies that make up its different layers: <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React</strong>, and <strong>Node.js</strong>.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: "JavaScript Everywhere" 
      </h2>
      <p className="mb-2 text-muted-foreground">
        A "tech stack" is simply the set of technologies used to build an application. The MERN stack is particularly popular because it allows developers to use <strong>JavaScript</strong> across the entire application—from the user interface in the browser (React) to the logic on the server (Node.js/Express.js) and even in the database (MongoDB). This consistency simplifies development and allows for a more streamlined workflow.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>M</strong> - MongoDB (Database)</li>
            <li><strong>E</strong> - Express.js (Backend Framework)</li>
            <li><strong>R</strong> - React (Frontend Library)</li>
            <li><strong>N</strong> - Node.js (Backend Runtime Environment)</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. MongoDB */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. M - MongoDB (The Database)
      </h2>
      <p className="mb-2 text-muted-foreground">
        MongoDB is the database layer of the MERN stack. It's a <strong>NoSQL</strong> database, which means it doesn't use the traditional tables and rows of a relational (SQL) database. Instead, it stores data in a flexible, JSON-like format called <strong>BSON</strong> (Binary JSON).
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Role:</strong> Stores and manages all the application data, like user profiles, posts, and comments.</li>
            <li><strong>Key Feature:</strong> Its document-based structure makes it very easy to work with JavaScript objects, as the data format is almost identical.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Express.js */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. E - Express.js (The Backend Framework)
      </h2>
       <p className="mb-2 text-muted-foreground">
        Express.js is a minimal and flexible web application framework that runs on top of Node.js. It's not a standalone language but rather a tool that simplifies the process of building the backend server and its API.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Role:</strong> Manages the server-side logic. It handles incoming HTTP requests from the frontend, processes them, interacts with the database (MongoDB), and sends back a response.</li>
            <li><strong>Key Features:</strong> Simplifies routing (defining URLs like `/users` or `/posts`), handling middleware (functions that process requests), and building robust APIs.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. React */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. R - React (The Frontend Library)
      </h2>
      <p className="mb-2 text-muted-foreground">
        React is a JavaScript library for building user interfaces. It is the frontend (client-side) part of the MERN stack that the user actually sees and interacts with in their browser.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Role:</strong> To build a fast, interactive, and dynamic user interface.</li>
            <li><strong>Key Features:</strong> Based on a <strong>component architecture</strong>, where you build reusable UI pieces. It efficiently updates and renders the UI when your data changes, creating a seamless user experience.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Node.js */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. N - Node.js (The Backend Runtime Environment)
      </h2>
       <p className="mb-2 text-muted-foreground">
        Node.js is the foundation of the MERN backend. It's a JavaScript runtime environment that allows you to run JavaScript code <strong>outside of a web browser</strong>—specifically, on a server.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Role:</strong> Provides the environment where the Express.js server runs. It executes the backend JavaScript code.</li>
            <li><strong>Key Feature:</strong> It's built for creating fast and scalable network applications, making it perfect for handling many simultaneous client requests.</li>
        </ul>
       </div>
       
      <hr className="my-6 border-border" />

       {/* 6. The MERN Workflow */}
       <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        6. The MERN Workflow: How They Work Together
      </h2>
       <p className="mb-2 text-muted-foreground">
        The data flows in a clear cycle through the MERN stack.
      </p>
       <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
           <li>A user interacts with the <strong>React</strong> frontend in their browser (e.g., clicks a "Login" button).</li>
           <li>The React app sends an HTTP request (containing the user's data) to the backend API.</li>
           <li>The <strong>Express.js</strong> server, running on <strong>Node.js</strong>, receives the request.</li>
           <li>The Express server processes the request, interacts with the <strong>MongoDB</strong> database to validate the user's credentials.</li>
           <li>MongoDB sends the result of the query back to the Express server.</li>
           <li>The Express server formats a response (e.g., a success message and user data) and sends it back to the React frontend.</li>
           <li>The React app receives the response and updates the UI accordingly (e.g., logs the user in and shows their dashboard).</li>
       </ol>
    </div>
  );
};


export default IntroductionToTheMernStack;
