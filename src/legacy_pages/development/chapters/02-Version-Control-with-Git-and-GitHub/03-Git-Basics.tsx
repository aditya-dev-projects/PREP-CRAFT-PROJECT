import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Git Basics (Init, Add, Commit, Status, Log)</h1> */}

      <p className="mb-4 text-muted-foreground">
        Now that Git is installed and configured, it's time to learn the core, everyday commands that you will use constantly. These five commands—`init`, `add`, `commit`, `status`, and `log`—form the fundamental workflow for tracking changes in any project. Mastering them is the key to using version control effectively.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Three Trees of Git 🌳
      </h2>
      <p className="mb-2 text-muted-foreground">
        To understand how Git works, you need to visualize three "trees" or areas where your code lives. The commands you learn are simply ways to move changes between these areas.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
            <li><strong>Working Directory:</strong> This is your project folder; the files you are currently editing. It's your messy workshop where you are actively working.</li>
            <li><strong>Staging Area (or Index):</strong> This is an intermediate area where you prepare your next "save point." You move files from your working directory to the staging area to tell Git, "I want to include these specific changes in my next commit."</li>
            <li><strong>Local Repository (.git directory):</strong> This is your project's permanent history. When you "commit," Git takes the snapshot from your staging area and saves it forever in your local repository.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. git init & git status */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. `git init` & `git status`: Starting and Checking
      </h2>
      <p className="mb-2 text-muted-foreground">
        These are the first and most frequently used commands.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li>
                <strong>`git init`</strong>
                <p className="text-sm">As covered before, this command initializes a new, empty Git repository in your current folder. It creates the hidden `.git` directory. You only run this once per project.</p>
            </li>
            <li>
                <strong>`git status`</strong>
                <p className="text-sm">This is your most-used command. It tells you the current state of your repository. It shows you which files have been modified, which files are staged, and which are untracked. It's your dashboard for seeing what's going on.</p>
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
                    {'# Run this command often!'}<br/>
                    {'git status'}
                </code></pre>
            </li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. git add */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. `git add`: The Staging Area
      </h2>
       <p className="mb-2 text-muted-foreground">
        The `git add` command is used to move changes from your working directory to the staging area. This is how you tell Git which changes you want to include in your next commit.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Common `git add` Commands</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# Stage a single file'}<br/>
              {'git add index.html'}<br/><br/>
              {'# Stage multiple specific files'}<br/>
              {'git add index.html styles.css'}<br/><br/>
              {'# Stage ALL modified files in the project'}<br/>
              {'git add .'}
          </code></pre>
          <p className="text-sm text-muted-foreground mt-2">The `git add .` command is a very common shortcut to stage all your current changes.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. git commit & git log */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. `git commit` & `git log`: Saving and Viewing History
      </h2>
      <p className="mb-2 text-muted-foreground">
        Once you have staged your changes, you need to save them permanently to your repository's history.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
          <li>
            <strong>`git commit`</strong>
            <p className="text-sm">This command takes everything in the staging area and creates a new "save point" or commit. It's crucial to include a descriptive message with every commit to explain what changes were made.</p>
             <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
                {'# Commit staged changes with a message'}<br/>
                {'git commit -m "Add user authentication feature"'}
            </code></pre>
          </li>
          <li>
            <strong>`git log`</strong>
            <p className="text-sm">This command shows you the history of all the commits you have made. It displays the commit hash (a unique ID), the author, the date, and the commit message for each save point.</p>
             <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
                {'# View the commit history'}<br/>
                {'git log'}<br/><br/>
                {'# View a more condensed version of the log'}<br/>
                {'git log --oneline'}
            </code></pre>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Workflow Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The Everyday Local Workflow
      </h2>
       <p className="mb-2 text-muted-foreground">
        For your daily work, you will repeat this cycle over and over.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Make Changes:</strong> Edit your code, add new files, or delete old ones.</li>
        <li><strong>Check Status:</strong> Run `git status` to see a summary of your changes.</li>
        <li><strong>Stage Changes:</strong> Run `git add .` (or add specific files) to prepare your commit.</li>
        <li><strong>Commit Changes:</strong> Run `git commit -m "Your descriptive message"` to save your work.</li>
        <li><strong>Repeat:</strong> Go back to step 1 and continue working on your next task.</li>
       </ol>
    </div>
  );
};
export default TopicPage;
