import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 7: Terminal/Command Line Basics</h1> */}

      <p className="mb-4 text-muted-foreground">
        The Command Line Interface (CLI), often called the terminal or shell, is a powerful text-based interface for interacting with your computer. While graphical user interfaces (GUIs) are intuitive for many tasks, the command line is an essential tool for developers, offering speed, power, and automation that GUIs cannot match. Mastering the basics is a fundamental step in becoming a proficient developer.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Direct Conversation with Your OS 
      </h2>
      <p className="mb-2 text-muted-foreground">
        Think of your operating system's GUI (like Windows Explorer or macOS Finder) as a friendly receptionist who helps you find files and run programs. The command line, on the other hand, is like having a direct phone line to the system's control room. You use specific, text-based commands to tell the computer exactly what to do, without any graphical middleman. This is faster and more powerful for development tasks.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Key Components of the Command Line:</h4>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-muted-foreground">
            <li><strong>The Prompt:</strong> A short piece of text that indicates the terminal is ready to accept a command. It often shows your current username and directory.</li>
            <li><strong>A Command:</strong> The specific instruction you give to the computer (e.g., `ls` to list files).</li>
            <li><strong>An Argument:</strong> Extra information the command needs to work on (e.g., in `cd Documents`, `Documents` is the argument).</li>
            <li><strong>A Flag/Option:</strong> Modifies the behavior of a command (e.g., in `ls -l`, `-l` is a flag to show a "long" list format).</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Essential Navigation Commands */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Essential Navigation Commands (Your GPS)
      </h2>
      <p className="mb-2 text-muted-foreground">
        The first skill is learning how to move around your computer's file system.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <table className="w-full text-left text-muted-foreground">
            <thead>
                <tr className="border-b border-border">
                    <th className="py-2 font-mono text-secondary-foreground">Command</th>
                    <th className="py-2 text-secondary-foreground">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-t border-border">
                    <td className="py-2 font-mono">pwd</td>
                    <td className="py-2"><strong>P</strong>rint <strong>W</strong>orking <strong>D</strong>irectory. Shows you the full path of the folder you are currently in.</td>
                </tr>
                <tr className="border-t border-border">
                    <td className="py-2 font-mono">ls</td>
                    <td className="py-2"><strong>L</strong>i<strong>s</strong>t. Shows all the files and folders in your current directory. (Use `dir` on Windows).</td>
                </tr>
                <tr className="border-t border-border">
                    <td className="py-2 font-mono">cd</td>
                    <td className="py-2"><strong>C</strong>hange <strong>D</strong>irectory. Used to move into a different folder.</td>
                </tr>
            </tbody>
        </table>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">Example Navigation Session:</p>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {'# Go to your home directory'}<br/>
              {'cd ~'}<br/><br/>
              {'# Move into the "Documents" folder'}<br/>
              {'cd Documents'}<br/><br/>
              {'# Go back up one level to the parent directory'}<br/>
              {'cd ..'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. File & Folder Manipulation */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. File & Folder Manipulation
      </h2>
       <p className="mb-2 text-muted-foreground">
        These are the commands you'll use to create, move, copy, and delete files and folders.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <table className="w-full text-left text-muted-foreground">
            <thead>
                <tr className="border-b border-border">
                    <th className="py-2 font-mono text-secondary-foreground">Command</th>
                    <th className="py-2 text-secondary-foreground">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-t border-border">
                    <td className="py-2 font-mono">mkdir</td>
                    <td className="py-2"><strong>M</strong>a<strong>k</strong>e <strong>Dir</strong>ectory. Creates a new folder.</td>
                </tr>
                <tr className="border-t border-border">
                    <td className="py-2 font-mono">touch</td>
                    <td className="py-2">Creates a new, empty file. (e.g., `touch index.html`).</td>
                </tr>
                <tr className="border-t border-border">
                    <td className="py-2 font-mono">cp</td>
                    <td className="py-2"><strong>C</strong>o<strong>p</strong>y. Copies a file. (e.g., `cp source.txt destination.txt`).</td>
                </tr>
                <tr className="border-t border-border">
                    <td className="py-2 font-mono">mv</td>
                    <td className="py-2"><strong>M</strong>o<strong>v</strong>e. Used to move or rename a file.</td>
                </tr>
                <tr className="border-t border-border">
                    <td className="py-2 font-mono">rm</td>
                    <td className="py-2"><strong>R</strong>e<strong>m</strong>ove. Deletes a file. Use with caution!</td>
                </tr>
            </tbody>
        </table>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. The `PATH` Environment Variable */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The `PATH` Environment Variable
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is a crucial but often confusing concept. The `PATH` is a list of directories that your terminal searches through when you type a command. When you install tools like Node.js or Git, the installer adds their location to this `PATH`. This is what allows you to type `node` or `git` from any folder and have it work.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p className="text-muted-foreground">If you ever see a "command not found" error for a program you know is installed, it's almost always an issue with the `PATH` variable.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
       <p className="mb-2 text-muted-foreground">
        Becoming comfortable with the command line is a gradual process.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Use the Integrated Terminal in VS Code:</strong> This is the most convenient way to work. It keeps your code and your command line in the same window.</li>
        <li><strong>Tab Completion is Your Best Friend:</strong> Start typing a file or folder name and press the `Tab` key. The terminal will automatically complete the name for you. This saves time and prevents typos.</li>
        <li><strong>Use the Up Arrow:</strong> Press the `Up Arrow` key to cycle through your previously used commands. This saves you from retyping long commands.</li>
        <li><strong>Don't Be Afraid:</strong> While some commands like `rm` can be destructive, basic navigation and file creation commands are safe. Practice creating and moving around in a dedicated "test" folder until you are comfortable.</li>
       </ol>
    </div>
  );
};

export default TopicPage;
