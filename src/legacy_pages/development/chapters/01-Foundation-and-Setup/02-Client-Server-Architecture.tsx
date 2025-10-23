import React, { FC } from 'react';

const ClientServerArchitecture: FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 2: Client-Server Architecture</h1> */}

      <p className="mb-4 text-muted-foreground">
        The Client-Server model is the fundamental architecture that powers the entire modern internet. It's a distributed application structure that separates tasks and workloads between two main parties: the <strong>Client</strong>, which requests services, and the <strong>Server</strong>, which provides those services.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A Two-Way Conversation 
      </h2>
      <p className="mb-2 text-muted-foreground">
        The entire model is based on a simple, structured conversation between two entities.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Analogy: Ordering food at a restaurant.</h4>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li>You (the <strong>Client</strong>) sit at a table with a menu.</li>
            <li>You make a specific request to the waiter (the <strong>Request</strong>).</li>
            <li>The waiter takes your request to the kitchen (the <strong>Server</strong>), which has the ingredients (data) and chefs (logic).</li>
            <li>The kitchen prepares the meal and gives it back to the waiter (the <strong>Response</strong>).</li>
            <li>The waiter brings the food to your table for you to enjoy.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The Client */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Client: The "Asker"
      </h2>
      <p className="mb-2 text-muted-foreground">
        The Client is any application or device that a user interacts with directly to access a service. It is responsible for the <strong>User Interface (UI)</strong> and the user's experience.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Role:</strong> To capture user input, send requests, and render the server's response in a human-readable format.</li>
            <li><strong>Key Characteristics:</strong> It's the "front-end", contains no core logic, and is an active initiator of communication.</li>
            <li><strong>Examples:</strong> Your web browser, a mobile app (Instagram, Uber), email software (Outlook).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Server */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Server: The "Provider"
      </h2>
       <p className="mb-2 text-muted-foreground">
        The Server is a powerful, centralized computer or system that has the resources, data, and logic to fulfill the client's requests. It is the "back-end" of the application.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Role:</strong> To wait passively for requests, process them, and send back the appropriate data or confirmation.</li>
            <li><strong>Key Characteristics:</strong> It's a powerful, always-on system that manages shared resources like databases and provides security.</li>
            <li><strong>Types:</strong> Web Server (serves files), Application Server (handles logic), Database Server (manages data).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. The Request-Response Cycle */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The Request-Response Cycle
      </h2>
      <p className="mb-2 text-muted-foreground">
        The communication between a client and server happens in a structured cycle.
      </p>
      <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
        <li><strong>User Action:</strong> The user performs an action on the client (e.g., clicks a link).</li>
        <li><strong>HTTP Request:</strong> The client formats this action into an HTTP Request and sends it to the server.</li>
        <li><strong>Server Processing:</strong> The server receives the request, processes it, and prepares a response.</li>
        <li><strong>HTTP Response:</strong> The server packages the result into an HTTP Response and sends it back.</li>
        <li><strong>Client Rendering:</strong> The client's browser receives the response and displays the content.</li>
      </ol>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">A simplified example of a client-side request in JavaScript:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              fetch('https://api.example.com/data') {'// 1. Sending the HTTP Request'}<br/>
              {'  .then(response => response.json())'}      {'// 2. Receiving the HTTP Response'}<br/>
              {'  .then(data => {'}<br/>
              {'    console.log(data); // 3. "Rendering" or using the data'}<br/>
              {'  });'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Benefits */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Benefits of Client-Server Architecture
      </h2>
       <p className="mb-2 text-muted-foreground">
        This model is the standard for the internet for several important reasons.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Centralization:</strong> All important data and logic are stored in one central, secure location (the server), making it easy to manage and update.</li>
        <li><strong>Scalability:</strong> You can improve performance for all users by upgrading the server or adding more servers, without changing anything on the client's device.</li>
        <li><strong>Platform Independence:</strong> The client and server can be on completely different platforms (e.g., a Linux server serving data to an iPhone app) as long as they speak the same protocol (HTTP).</li>
      </ul>
    </div>
  );
};

export default ClientServerArchitecture;
