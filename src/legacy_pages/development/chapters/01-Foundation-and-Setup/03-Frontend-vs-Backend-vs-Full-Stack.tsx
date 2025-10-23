import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 3: Frontend vs. Backend vs. Full Stack</h1> */}

      <p className="mb-4 text-muted-foreground">
        In the world of web development, the work is often divided into two major areas: the <strong>Frontend</strong> and the <strong>Backend</strong>. Understanding the clear distinction between these two is fundamental to understanding how web applications are built. A <strong>Full-Stack</strong> developer is someone who bridges this divide.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Restaurant Analogy 
      </h2>
      <p className="mb-2 text-muted-foreground">
        The easiest way to understand the difference is to think of a restaurant.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Frontend (The Dining Area):</strong> This is everything the customer sees and interacts with. It includes the decor, the tables, the menu, and the waiter. The goal is to create a pleasant experience.</li>
            <li><strong>Backend (The Kitchen):</strong> This is the hidden part that makes everything work. It includes the chefs, ovens, and refrigerators (database). The kitchen receives orders, processes them, and sends the finished food back out.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Frontend Development */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Frontend Development (Client-Side)
      </h2>
      <p className="mb-2 text-muted-foreground">
        The Frontend is the part of the website that runs in the user's browser. It's all about the <strong>User Interface (UI)</strong> and <strong>User Experience (UX)</strong>. A frontend developer's job is to translate a design into live, interactive code.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>What they build:</strong> The visual elements of a website—the layout, buttons, animations, and forms.</li>
            <li><strong>Core Responsibilities:</strong> Implementing visual design, making the site interactive, ensuring responsiveness (works on all devices), and optimizing for speed.</li>
            <li><strong>Key Technologies:</strong> HTML, CSS, JavaScript, and frameworks like <strong>React</strong>, <strong>Angular</strong>, or <strong>Vue.js</strong>.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Backend Development */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Backend Development (Server-Side)
      </h2>
       <p className="mb-2 text-muted-foreground">
        The Backend is the part of the website that runs on the server. It's the "brain" of the application, handling everything that happens behind the scenes.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>What they build:</strong> The logic that powers the frontend, including databases, servers, and the application's core logic.</li>
            <li><strong>Core Responsibilities:</strong> Managing the database, handling user authentication (logins), writing business logic, and creating APIs for the frontend to use.</li>
            <li><strong>Key Technologies:</strong> Languages like <strong>Node.js</strong> (JavaScript), <strong>Python</strong> (Django, Flask), <strong>Java</strong> (Spring), and databases like <strong>SQL</strong> (MySQL) or <strong>NoSQL</strong> (MongoDB).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Full-Stack Development */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Full-Stack Development
      </h2>
      <p className="mb-2 text-muted-foreground">
        A <strong>Full-Stack Developer</strong> is a "jack-of-all-trades" who is proficient in both frontend and backend development. They have a comprehensive understanding of the entire technology stack.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>What they do:</strong> They can build a complete, functional web application from start to finish.</li>
            <li><strong>Why they are valuable:</strong> They are highly flexible, have a holistic view of the application, and are crucial in smaller teams where roles are less specialized.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Differences at a Glance */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Differences at a Glance
      </h2>
       <p className="mb-2 text-muted-foreground">
        This table provides a clear summary of the distinctions between the roles.
      </p>
      <div className="overflow-x-auto p-4 bg-muted rounded-lg border border-border">
        <table className="w-full text-left">
            <thead>
                <tr className="border-b border-border">
                    <th className="py-2 px-4 font-bold text-secondary-foreground">Aspect</th>
                    <th className="py-2 px-4 font-bold text-secondary-foreground">Frontend Development</th>
                    <th className="py-2 px-4 font-bold text-secondary-foreground">Backend Development</th>
                </tr>
            </thead>
            <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                    <td className="py-2 px-4"><strong>Location</strong></td>
                    <td className="py-2 px-4">Runs on the Client (User's Browser)</td>
                    <td className="py-2 px-4">Runs on the Server</td>
                </tr>
                <tr className="border-b border-border">
                    <td className="py-2 px-4"><strong>Main Concern</strong></td>
                    <td className="py-2 px-4">User Interface & Experience (How it looks and feels)</td>
                    <td className="py-2 px-4">Data, Logic, and Performance (How it works)</td>
                </tr>
                 <tr className="border-b border-border">
                    <td className="py-2 px-4"><strong>Visibility</strong></td>
                    <td className="py-2 px-4">Visible to the user</td>
                    <td className="py-2 px-4">Invisible to the user</td>
                </tr>
                 <tr>
                    <td className="py-2 px-4"><strong>Core Skills</strong></td>
                    <td className="py-2 px-4">HTML, CSS, JavaScript, React/Angular/Vue</td>
                    <td className="py-2 px-4">Node.js/Python/Java, SQL/NoSQL Databases, API Design</td>
                </tr>
            </tbody>
        </table>
       </div>
    </div>
  );
};
export default TopicPage;
