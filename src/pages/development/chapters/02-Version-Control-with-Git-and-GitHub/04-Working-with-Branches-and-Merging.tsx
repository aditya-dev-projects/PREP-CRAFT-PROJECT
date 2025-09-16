import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
     <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 11: Working with Branches & Merging</h1> */}

      <p className="mb-4 text-muted-foreground">
        Branching is arguably the most powerful feature of Git. It allows you to diverge from the main line of development and continue to work in isolation without affecting that main line. This chapter covers the essential commands for creating, switching between, and merging branches, which is the core of collaborative and feature-based development.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A Parallel Universe for Your Code 🌌
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of your main codebase (often called the `main` or `master` branch) as your project's "official timeline." A branch is like creating a copy of this timeline where you can safely experiment with a new feature.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>You can make changes, commit, and break things in your new branch without any impact on the stable, main timeline.</li>
            <li>Once you are happy with your new feature, you can **merge** your experimental timeline back into the official one, incorporating your changes.</li>
            <li>If the feature doesn't work out, you can simply delete the branch (the parallel universe) with no side effects.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Essential Branching Commands */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Essential Branching Commands
      </h2>
      <p className="mb-2 text-muted-foreground">
        These are the commands for creating, listing, and switching between branches.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Common Branching Commands</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# List all branches in your local repository'}<br/>
              {'git branch'}<br/><br/>
              {'# Create a new branch with the given name'}<br/>
              {'git branch <branch-name>'}<br/><br/>
              {'# Switch to a different branch'}<br/>
              {'git checkout <branch-name>'}<br/><br/>
              {'# Create a new branch AND switch to it in one command (shortcut)'}<br/>
              {'git checkout -b <new-branch-name>'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Merging Process */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Merging Process: Combining Timelines
      </h2>
       <p className="mb-2 text-muted-foreground">
        Once you've completed your work on a feature branch, you'll want to merge it back into your main branch.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">The Merge Workflow</p>
          <ol className="list-decimal ml-6 mt-2 text-muted-foreground space-y-2">
            <li>First, switch to the branch you want to merge **into**. This is usually your `main` branch.</li>
            <li>Run the `git merge` command, specifying the name of the branch you want to bring in.</li>
          </ol>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# Switch to the main branch'}<br/>
              {'git checkout main'}<br/><br/>
              {'# Merge the "new-feature" branch into main'}<br/>
              {'git merge new-feature'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Dealing with Merge Conflicts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Dealing with Merge Conflicts
      </h2>
      <p className="mb-2 text-muted-foreground">
        A merge conflict occurs when Git is unable to automatically resolve differences in code between two branches. This happens when the **same line of code** was changed in both the branches you are trying to merge.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-muted-foreground">When a conflict occurs, Git will pause the merge and mark the conflicting lines in the file with special markers:</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'<<<<<<< HEAD'}<br/>
              {'  // Code from your current branch (e.g., main)'}<br/>
              {'======='}<br/>
              {'  // Code from the branch you are merging in (e.g., new-feature)'}<br/>
              {'>>>>>>> new-feature'}
          </code></pre>
        {/* FIX: Corrected the nesting of <strong> and <p> tags */}
        <p className="mt-2 text-muted-foreground"><strong>How to Resolve:</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground space-y-2">
            <li>Open the conflicted file in your code editor.</li>
            <li>Manually edit the file to keep the code you want and delete the conflicting code and the special markers.</li>
            <li>Save the file.</li>
            {/* FIX: Correctly escaped angle brackets for JSX */}
            <li>Run `git add {'<conflicted-file-name>'}` to mark the conflict as resolved.</li>
            <li>Run `git commit` to complete the merge.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Branching Workflow */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. The Standard Feature Branch Workflow
      </h2>
       <p className="mb-2 text-muted-foreground">
        This is the most common and recommended way to work on new features.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Start on `main`:</strong> Make sure your main branch is up-to-date.</li>
        <li><strong>Create a New Branch:</strong> Create a descriptively named branch for your new feature (e.g., `git checkout -b user-login-form`).</li>
        <li><strong>Work and Commit:</strong> Make all your code changes and commit them to your new feature branch.</li>
        <li><strong>Merge:</strong> When the feature is complete and tested, switch back to your `main` branch and merge your feature branch into it.</li>
        <li><strong>Delete the Branch (Optional):</strong> After a successful merge, you can delete your feature branch to keep your repository clean (`git branch -d user-login-form`).</li>
       </ol>
    </div>
  );
};


export default TopicPage;
