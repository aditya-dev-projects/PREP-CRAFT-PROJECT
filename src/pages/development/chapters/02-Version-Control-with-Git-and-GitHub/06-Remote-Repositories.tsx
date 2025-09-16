import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
<div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 13: Remote Repositories (Push, Pull, Clone, Fetch)</h1> */}

      <p className="mb-4 text-muted-foreground">
        While Git is powerful for tracking changes on your local machine, its true potential is unlocked when you collaborate using remote repositories. A remote repository is a version of your project that is hosted on the internet, most commonly on a service like GitHub. This chapter covers the essential commands for interacting with these remotes.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Central Library 📚
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of the remote repository on GitHub as the **central library** for your project. Your local repository on your computer is your **personal copy** that you've checked out from the library.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>When you want to start working on a project, you **clone** it (check out the book).</li>
            <li>When you've made changes and want to share them, you **push** your updates back to the central library for everyone to see.</li>
            <li>When you want to get the latest updates that others have made, you **pull** them from the central library to your personal copy.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. git clone */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. `git clone`: Getting a Local Copy
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is typically the first command you'll use when you want to start working on an existing project. The `git clone` command downloads a full copy of a remote repository to your computer, including its entire history. It also automatically sets up a connection to the remote repository, which it names `origin` by default.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Command Syntax:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# Go to the GitHub repository page, click the "Code" button, and copy the URL'}<br/>
              {'git clone <repository-url>'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. git push */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. `git push`: Sending Your Changes to the Remote
      </h2>
       <p className="mb-2 text-muted-foreground">
        After you have made and committed changes locally, the `git push` command is used to upload your committed changes to the remote repository. This is how you share your work with your team.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Command Syntax:</p>
           <p className="text-sm text-muted-foreground mt-1">This command tells Git to push the changes from your local `main` branch to the remote named `origin`.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'git push origin main'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. git fetch vs. git pull */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. `git fetch` vs. `git pull`: Getting Changes from the Remote
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is a crucial distinction. Both commands are used to download new data from a remote repository, but they do so in different ways.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">`git fetch` (The Safe Way)</h4>
            <p className="text-sm text-muted-foreground mt-1">`git fetch` **downloads** all the new data from the remote repository but **does not integrate** any of it into your local working files. It's like checking for mail and seeing there are new letters, but leaving them in the mailbox. It's safe because it doesn't change your current work.</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">`git pull` (The Convenient Way)</h4>
            <p className="text-sm text-muted-foreground mt-1">`git pull` is actually two commands in one: it first runs `git fetch` to download the new data, and then it immediately runs `git merge` to automatically integrate those changes into your current branch. It's like getting the mail from the mailbox and immediately opening it and mixing it with your current papers.</p>
        </div>
      </div>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Conclusion:</strong> Use `git pull` for your daily workflow to stay updated. Use `git fetch` when you want to see what others have done without immediately affecting your own local branches.</p>
      </div>


      <hr className="my-6 border-border" />

      {/* 5. The Standard Collaborative Workflow */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The Standard Collaborative Workflow
      </h2>
       <p className="mb-2 text-muted-foreground">
        When working on a team, you will follow a daily cycle to keep your work in sync with others.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Start Your Day:</strong> Before you begin working, always update your local repository with the latest changes from the remote server.
            <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'git pull origin main'}</code></pre>
        </li>
        <li><strong>Work Locally:</strong> Make your changes, `add` them to staging, and `commit` them with a clear message, just as you would in a local-only workflow.</li>
        <li><strong>Push Your Changes:</strong> At the end of the day, or after completing a feature, push your commits to the remote repository to share them with the team.
             <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>{'git push origin main'}</code></pre>
        </li>
        <li><strong>Repeat:</strong> The next day, you start again by pulling the changes that your teammates pushed.</li>
       </ol>
    </div>
  );
};
export default TopicPage;
