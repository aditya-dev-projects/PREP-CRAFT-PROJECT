import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 8: Introduction to Version Control</h1> */}

      <p className="mb-4 text-muted-foreground">
        Version Control is a system that records changes to a file or set of files over time so that you can recall specific versions later. For software development, it is a fundamental and non-negotiable tool. It allows developers to track every change, revert to previous versions, and collaborate effectively without overwriting each other's work.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A Time Machine for Your Code ⏳
      </h2>
      <p className="mb-2 text-muted-foreground">
        Imagine you're working on a project. You make a change that breaks everything, and you wish you could go back to the version you had an hour ago. Version Control is that time machine.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Analogy: Save Points in a Video Game</h4>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li>Every time you reach a significant milestone in your code (e.g., a feature is complete), you create a "save point" called a <strong>commit</strong>.</li>
            <li>This commit saves a snapshot of your entire project at that exact moment.</li>
            <li>If you later make a mistake, you can simply load a previous save point, effectively undoing all the changes made since then.</li>
            <li>This system gives you the freedom to experiment without the fear of permanently breaking your project.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Why is Version Control Essential? */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Why is Version Control Essential?
      </h2>
      <p className="mb-2 text-muted-foreground">
        Using a Version Control System (VCS) is not optional in a professional environment. It solves several critical problems.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Collaboration:</strong> It allows multiple developers to work on the same project simultaneously. The VCS helps merge these different changes together without conflicts.</li>
            <li><strong>History Tracking:</strong> It maintains a complete history of who made what change, why they made it, and when. This is invaluable for debugging and understanding the project's evolution.</li>
            <li><strong>Branching and Experimentation:</strong> You can create an experimental "branch" of your project to work on a new feature. If the feature works, you can merge it into the main project. If it doesn't, you can simply delete the branch without affecting the main codebase.</li>
            <li><strong>Backup:</strong> When used with a remote hosting service, it acts as a complete backup of your entire project and its history.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Git vs. GitHub */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Git vs. GitHub: The Tool and the Clubhouse
      </h2>
       <p className="mb-2 text-muted-foreground">
        This is a common point of confusion for beginners. They are related but are two very different things.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Git</h4>
            <p className="text-sm text-muted-foreground mt-1">Git is the software , the version control system itself. It is a command-line tool that you install and run locally on your computer to track your files.</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">GitHub</h4>
            <p className="text-sm text-muted-foreground mt-1">GitHub is a web-based service for hosting your Git projects. It's a "clubhouse" for your code. It provides a remote, central location to store your code, collaborate with others, and manage your projects.</p>
        </div>
      </div>
      <p className="mt-4 text-muted-foreground">In short: You use Git on your computer, and you push your code to GitHub to back it up and share it.</p>

      <hr className="my-6 border-border" />

      {/* 4. The Basic Git Workflow */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The Basic Git Workflow
      </h2>
      <p className="mb-2 text-muted-foreground">
        The most common workflow involves three main steps to save your changes.
      </p>
      <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
        <li><strong>Modify:</strong> You make changes to your files in your working directory.</li>
        <li><strong>Stage (`git add`):</strong> You choose which of your modified files you want to include in your next save point. This is like putting items into a box before sealing it.</li>
        <li><strong>Commit (`git commit`):</strong> You take the "snapshot" of the staged files and permanently save it to your Git history with a descriptive message. This is like sealing the box and putting a label on it.</li>
      </ol>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example Git Command Sequence:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# Check the status of your files'}<br/>
              {'git status'}<br/><br/>
              {'# Stage all modified files for the next commit'}<br/>
              {'git add .'}<br/><br/>
              {'# Create a commit with a message explaining the change'}<br/>
              {'git commit -m "Implement user login functionality"'}<br/><br/>
              {'# Push your committed changes to the remote repository on GitHub'}<br/>
              {'git push origin main'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary for Beginners
      </h2>
       <p className="mb-2 text-muted-foreground">
        Getting started with version control can seem intimidating, but following these principles makes it manageable.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Commit Often:</strong> Make small, frequent commits. It's better to have many small save points than one giant, confusing one. A good rule is to commit after you finish a small, logical task.</li>
        <li><strong>Write Good Commit Messages:</strong> Your commit messages should be a clear, concise summary of what you changed. A message like "Fix bug" is not helpful. A message like "Fix bug where login button crashes on mobile" is excellent.</li>
        <li><strong>Use Branches:</strong> As soon as you start working on a new feature, get into the habit of creating a new branch for it. This keeps your main codebase clean and stable.</li>
        <li><strong>Pull Before You Push:</strong> When collaborating, always update your local repository with the latest changes from the remote server (`git pull`) before you push your own changes. This helps prevent conflicts.</li>
       </ol>
    </div>
  );
};



export default TopicPage;
