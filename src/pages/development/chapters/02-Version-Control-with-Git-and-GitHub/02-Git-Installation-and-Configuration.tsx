import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 9: Git Installation & Configuration</h1> */}

      <p className="mb-4 text-muted-foreground">
        Before you can start using the powerful features of Git and GitHub, you need to perform a one-time setup on your computer. This chapter walks you through installing the Git software, configuring it with your identity, and making your first local repository.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Setting Up Your Developer ID Card 💳
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of this process like getting hired for a new job. First, you are given the company's tools (<strong>installing Git</strong>). Then, you are given an ID card that identifies you as an employee (<strong>configuring Git</strong>). You need both before you can start working on any projects. This initial setup ensures that every change you make to a project is stamped with your name and email.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. Installing Git */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Installing Git on Your Machine
      </h2>
      <p className="mb-2 text-muted-foreground">
        Git is a command-line tool that needs to be installed on your operating system.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Windows & macOS:</strong> The easiest way is to download the official installer from the <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" className="text-primary underline">git-scm.com</a> website. The installer will guide you through the process with default options that are suitable for most users.</li>
            <li><strong>Linux (Debian/Ubuntu):</strong> You can install it directly from your terminal using the package manager.
                <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>sudo apt-get update && sudo apt-get install git</code></pre>
            </li>
        </ul>
        <p className="mt-4 font-semibold">After installation, open your terminal (or Git Bash on Windows) and type the following command to verify it was installed correctly:</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>git --version</code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. First-Time Configuration */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. First-Time Configuration
      </h2>
       <p className="mb-2 text-muted-foreground">
        After installing Git, you must tell it who you are. This information will be embedded into every commit you make. This is a one-time setup.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Set Your Identity</p>
          <p className="text-sm text-muted-foreground mt-1">Open your terminal and run the following two commands, replacing the placeholder text with your actual name and email address. Use the same email you used to sign up for GitHub.</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# Set your username'}<br/>
              {'git config --global user.name "Your Name"'}<br/><br/>
              {'# Set your email address'}<br/>
              {'git config --global user.email "youremail@example.com"'}
          </code></pre>
          <p className="text-sm text-muted-foreground mt-2">The `--global` flag means this configuration will apply to every Git project on your computer.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Initializing a Repository */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Initializing Your First Repository
      </h2>
      <p className="mb-2 text-muted-foreground">
        A "repository" (or "repo") is simply a project that Git is tracking. To start tracking a project, you need to initialize Git within that project's folder.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Steps to Create a Local Repository:</p>
            <ol className="list-decimal ml-6 mt-2 text-muted-foreground space-y-2">
                <li>Create a new folder for your project and navigate into it using the terminal.</li>
                <li>Run the `git init` command.</li>
            </ol>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# Create a new directory and move into it'}<br/>
              {'mkdir my-first-project'}<br/>
              {'cd my-first-project'}<br/><br/>
              {'# Initialize Git in this folder'}<br/>
              {'git init'}
          </code></pre>
          <p className="text-sm text-muted-foreground mt-2">This command creates a hidden `.git` subdirectory in your project folder. This is where Git stores all the history and metadata for your project. You should never manually edit the files in this folder.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Connecting to GitHub */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Connecting to GitHub (Authentication)
      </h2>
       <p className="mb-2 text-muted-foreground">
        To push your local repository to a remote host like GitHub, you need a way to authenticate securely. The most common and secure method is by using SSH keys.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Generate an SSH Key:</strong> Run `ssh-keygen` in your terminal and follow the prompts. This creates a private and public key pair on your machine.</li>
        <li><strong>Copy Your Public Key:</strong> Find and copy the contents of the public key file (usually located at `~/.ssh/id_rsa.pub`).</li>
        <li><strong>Add Key to GitHub:</strong> Go to your GitHub account settings, navigate to "SSH and GPG keys," click "New SSH key," and paste your public key there.</li>
        {/* FIX: Escaped the angle brackets to prevent JSX parsing errors */}
        <li><strong>Link Remote to Local:</strong> In your local repository, run `git remote add origin {'<your-github-repo-url.git>'}` to tell your local project where its remote counterpart lives on GitHub.</li>
       </ol>
    </div>
  );
};



export default TopicPage;
