import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 14: Collaboration Workflows (Forks, Pull Requests, Issues)</h1> */}

      <p className="mb-4 text-muted-foreground">
        While `git push` and `git pull` are great for small teams with shared access to a repository, the true power of platforms like GitHub shines in open-source and large-scale collaboration. This is managed through a structured process involving forks, pull requests, and issues, which allows anyone to contribute to a project in a safe and organized way.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The "Suggestion Box" Model 📥
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of a public project on GitHub as a town's suggestion box. You can't just walk into the mayor's office and change the town's plans yourself. Instead, you follow a formal process:
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
            <li>You take a copy of the town's plans for yourself (a <strong>Fork</strong>).</li>
            <li>You work on your suggestion on your own copy.</li>
            <li>You submit your revised plan back to the town council (a <strong>Pull Request</strong>).</li>
            <li>The council reviews your suggestion, discusses it, and decides whether to approve and merge it into the official town plans.</li>
            <li><strong>Issues</strong> are like a public notice board where residents can report problems (bugs) or suggest new ideas.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Forking a Repository */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Forking: Your Personal Copy of a Project
      </h2>
      <p className="mb-2 text-muted-foreground">
        A **fork** is a personal copy of another user's repository that lives in your own GitHub account. Forking allows you to freely experiment with changes without affecting the original project. You have full control over your fork.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Why Fork?</p>
          <p className="text-sm text-muted-foreground mt-1">You fork a repository when you want to contribute to a project that you don't have write access to. It's the first step in the open-source contribution workflow.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Pull Requests (PRs) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Pull Requests (PRs): Proposing Your Changes
      </h2>
       <p className="mb-2 text-muted-foreground">
        A **Pull Request** is the heart of collaboration on GitHub. After you've made changes in a branch on your fork, you open a pull request to ask the original project maintainers to "pull" your changes into their main repository.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">What a PR contains:</p>
           <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
               <li>A clear title and description of the changes you made.</li>
               <li>A reference to the issue it solves (e.g., "Closes #42").</li>
               <li>A view of all the commits and file changes you are proposing.</li>
               <li>A platform for code review, where maintainers can comment on your code and request changes before merging.</li>
           </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Issues */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Issues: Tracking Tasks and Bugs
      </h2>
      <p className="mb-2 text-muted-foreground">
        **Issues** are a powerful project management tool built into every GitHub repository. They are used to track bug reports, feature requests, and other tasks.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>They create a transparent way for users and developers to report problems.</li>
            <li>They allow maintainers to assign tasks to specific developers.</li>
            <li>They provide a space for discussion about a particular bug or feature before any code is written.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. The Standard Open Source Workflow */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The Standard Open Source Workflow
      </h2>
       <p className="mb-2 text-muted-foreground">
        This is the step-by-step process you would follow to contribute to a project on GitHub.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Find an Issue:</strong> Find a bug or feature you want to work on in the project's "Issues" tab.</li>
        <li><strong>Fork the Repository:</strong> Create your own personal copy of the project on GitHub.</li>
        <li><strong>Clone Your Fork:</strong> Clone your fork to your local machine (`git clone ...`).</li>
        <li><strong>Create a Branch:</strong> Create a new branch for your changes (`git checkout -b fix-login-bug`).</li>
        <li><strong>Make Changes:</strong> Write the code to fix the bug or implement the feature.</li>
        <li><strong>Commit and Push:</strong> Commit your changes and push them to your fork on GitHub (`git push origin fix-login-bug`).</li>
        <li><strong>Open a Pull Request:</strong> Go to the original repository on GitHub. You will see a prompt to open a pull request from your new branch.</li>
        <li><strong>Code Review:</strong> The project maintainers will review your code, provide feedback, and may request changes.</li>
        <li><strong>Merge:</strong> Once approved, a maintainer will merge your pull request, and your code becomes part of the official project!</li>
       </ol>
    </div>
  );
};


export default TopicPage;
