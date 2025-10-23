import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 12: GitHub Introduction & Account Setup</h1> */}

      <p className="mb-4 text-muted-foreground">
        GitHub is arguably the single most important platform for software developers. It is a web-based service that hosts your Git repositories, enabling collaboration, code sharing, and portfolio building. This chapter covers what GitHub is, how to set up your professional account, and how to create your first remote repository.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: A Social Network for Developers 🌐
      </h2>
      <p className="mb-2 text-muted-foreground">
        The best way to think of GitHub is as a professional social network, like LinkedIn, but centered entirely around your code. It's the place where you showcase your work, collaborate with others, and build your reputation as a developer.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Your <strong>Profile</strong> is your resume.</li>
            <li>Your <strong>Repositories</strong> are your projects or portfolio pieces.</li>
            <li>Your <strong>Commits</strong> are your work history.</li>
            <li><strong>Following</strong> others and <strong>starring</strong> their projects is how you network and show appreciation.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. GitHub vs. Git (A Quick Recap) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Git vs. GitHub (A Quick Recap)
      </h2>
      <p className="mb-2 text-muted-foreground">
        It's crucial to remember the distinction:
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Git</strong> is the version control software you install and run on your local machine to track changes.</li>
            <li><strong>GitHub</strong> is the online service where you store your Git repositories remotely. It's the "home in the cloud" for your projects.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Setting Up Your GitHub Account */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Setting Up Your GitHub Account
      </h2>
       <p className="mb-2 text-muted-foreground">
        Your GitHub profile is your public face as a developer. Setting it up professionally is a critical first step.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Step-by-Step Account Creation:</p>
          <ol className="list-decimal ml-6 mt-2 text-muted-foreground space-y-2">
            <li>Go to <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">github.com</a> and click "Sign up".</li>
            <li>Choose a <strong>professional username</strong>. A good format is `firstname-lastname` or a variation. Avoid unprofessional names.</li>
            <li>Use an email address that you check regularly.</li>
            <li>Choose a strong, unique password.</li>
            <li>Verify your email address to activate your account.</li>
            <li>Once registered, upload a clear profile picture and write a concise bio describing your skills and interests.</li>
          </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Creating Your First Remote Repository */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Creating Your First Remote Repository
      </h2>
      <p className="mb-2 text-muted-foreground">
        A repository (or "repo") is a container for a project. Here’s how to create one on GitHub.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground space-y-2">
          <li>On the GitHub homepage, click the **"+"** icon in the top-right corner and select **"New repository"**.</li>
          <li>Give your repository a short, memorable name (e.g., `my-portfolio-website`).</li>
          <li>Add a one-line description of the project.</li>
          <li>Keep the repository **Public** so that potential employers can see your work.</li>
          <li><strong>Important:</strong> Check the box to **"Add a README file"**. A README is a file that describes your project, and every good repository has one.</li>
          <li>Click **"Create repository"**.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Linking Local and Remote Repositories */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Linking Local and Remote Repositories
      </h2>
       <p className="mb-2 text-muted-foreground">
        After creating a repository on GitHub, you need to connect your local project folder to it.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Connecting an Existing Local Repo</p>
           <p className="text-sm text-muted-foreground mt-1">If you already ran `git init` in a local folder, you use the `git remote add` command.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# Get the URL from your GitHub repository page'}<br/>
              {'git remote add origin <your-github-repo-url.git>'}<br/><br/>
              {'# Verify the remote was added'}<br/>
              {'git remote -v'}<br/><br/>
              {'# Push your local main branch to the remote origin'}<br/>
              {'git push -u origin main'}
          </code></pre>
          <p className="text-secondary-foreground font-semibold mt-4">Cloning a Remote Repo</p>
           <p className="text-sm text-muted-foreground mt-1">If the repository already exists on GitHub, the easier way is to "clone" it. This downloads the repository and automatically connects it for you.</p>
           <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'git clone <your-github-repo-url.git>'}
          </code></pre>
      </div>
    </div>
  );
};

export default TopicPage;
