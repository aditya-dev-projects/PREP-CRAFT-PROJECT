import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 15: Git Best Practices & .gitignore</h1> */}

      <p className="mb-4 text-muted-foreground">
        Knowing Git commands is one thing; using them effectively is another. Following best practices is what separates a beginner from a professional developer. These practices ensure your project history is clean, understandable, and easy to manage, especially when working in a team. This chapter covers the most important conventions, including the crucial role of the `.gitignore` file.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Writing a Clean Project Diary 📔
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of your Git history (`git log`) as the official diary or logbook of your project. Each commit is an entry. A good diary is easy to read, with clear, dated entries that explain what happened. A bad diary is messy, confusing, and unhelpful. Git best practices are all about maintaining a clean, professional diary for your project so that anyone (including your future self) can understand its history.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. Commit Best Practices */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Commit Best Practices: Atomic and Descriptive
      </h2>
      <p className="mb-2 text-muted-foreground">
        Your commits are the most fundamental part of your project history.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li>
                <strong>Make Atomic Commits:</strong> Each commit should represent a single, logical change. Don't lump unrelated changes into one giant commit. For example, fixing a bug and adding a new feature should be two separate commits. This makes it easier to find and revert changes if something goes wrong.
            </li>
            <li>
                <strong>Write Good Commit Messages:</strong> This is a critical skill. A good commit message has two parts:
                 <ul className="list-circle ml-6 mt-2">
                    <li><strong>Subject Line:</strong> A short, descriptive summary (50 characters or less) written in the imperative mood (e.g., "Add login form validation," not "Added validation").</li>
                    <li><strong>Body (Optional):</strong> A more detailed explanation of what changed and why.</li>
                </ul>
            </li>
        </ul>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'# Bad Commit Message ❌'}<br/>
            {'git commit -m "updates"'}<br/><br/>
            {'# Good Commit Message ✅'}<br/>
            {'git commit -m "Feat: Add password strength indicator to signup form"'}
        </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Branching Best Practices */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Branching Best Practices: The Feature Branch Workflow
      </h2>
       <p className="mb-2 text-muted-foreground">
        Never commit directly to your `main` branch. The `main` branch should always be stable and deployable.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">The Standard Workflow:</p>
           {/* FIX: Changed closing </ul> to </ol> to match the opening tag */}
           <ol className="list-decimal ml-6 mt-2 space-y-2 text-muted-foreground">
               <li>For every new feature or bug fix, create a new, descriptively named branch from `main` (e.g., `git checkout -b fix-header-styling`).</li>
               <li>Do all your work and make all your commits on this feature branch.</li>
               <li>When the feature is complete, open a Pull Request to merge your branch into `main`.</li>
               <li>After the pull request is reviewed and merged, you can safely delete your feature branch.</li>
           </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. The .gitignore File */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The `.gitignore` File: Keeping Your Repository Clean
      </h2>
      <p className="mb-2 text-muted-foreground">
        A `.gitignore` file is a simple text file where you list files and folders that you want Git to **intentionally ignore**. Git will not track changes to these files, and they won't be included in your commits.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">What Should You Ignore?</h4>
        <p className="text-sm text-muted-foreground mt-1">You should ignore any file that is not your original source code. This includes:</p>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Dependencies:</strong> The `node_modules` folder, which can contain thousands of files.</li>
            <li><strong>Compiled Files:</strong> Any code that is generated during a build process.</li>
            <li><strong>Environment Variables:</strong> Files like `.env` that contain secret keys and API credentials. **Never commit secrets to your repository.**</li>
            <li><strong>System Files:</strong> OS-specific files like `.DS_Store` (macOS) or `Thumbs.db` (Windows).</li>
        </ul>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-secondary-foreground font-semibold">Example `.gitignore` for a Node.js project:</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {'# Dependencies'}<br/>
            {'node_modules/'}<br/><br/>
            {'# Production build files'}<br/>
            {'build/'}<br/><br/>
            {'# Environment variables'}<br/>
            {'.env'}<br/><br/>
            {'# Log files'}<br/>
            {'*.log'}
        </code></pre>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
       <p className="mb-2 text-muted-foreground">
        Adopting these practices will make you a more effective and professional developer.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Commit Atomically:</strong> One logical change per commit.</li>
        <li><strong>Write Clear Messages:</strong> Your commit history should tell a story.</li>
        <li><strong>Branch for Everything:</strong> Keep your `main` branch clean and always work on feature branches.</li>
        <li><strong>Use `.gitignore`:</strong> Create a `.gitignore` file at the start of every project to keep your repository free of unnecessary files and secrets.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
