import React from 'react';
import BoatsAndStreamsQuiz from '../../Quizzes/BoatsAndStreamsQuiz';

const BoatsAndStreams : React.FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 17 Notes: Boats and Streams</h1>

      <p className="mb-4 text-muted-foreground">
        Boat and Stream problems are a classic application of <strong>Relative Speed</strong>, similar to train problems. The core idea is that the speed of a river's current either helps or hinders the boat's movement. These questions test your ability to calculate the effective speed of the boat when it's moving with the current versus against it.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The River's Influence 🌊
      </h2>
      <p className="mb-2 text-muted-foreground">
        Imagine you are rowing a boat. If you row in the same direction as the river's current, the river <strong>helps</strong> you, and your overall speed increases. If you row against the current, the river <strong>hinders</strong> you, and your speed decreases. This is the central principle of all boat and stream problems.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. Key Terminology & Formulas */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Key Terminology & Formulas
      </h2>
      <p className="mb-2 text-muted-foreground">
        To solve these problems, you need to be fluent in the specific vocabulary used.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Speed of the boat in still water (B):</strong> The boat's own speed without any influence from the river's current.</li>
        <li><strong>Speed of the stream/current (S):</strong> The speed at which the river water is flowing.</li>
        <li><strong>Downstream Speed (D):</strong> The effective speed of the boat when it is traveling <strong>with the current</strong>. The speeds add up.</li>
        <li><strong>Upstream Speed (U):</strong> The effective speed of the boat when it is traveling <strong>against the current</strong>. The speeds are subtracted.</li>
      </ul>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border grid md:grid-cols-2 gap-4">
          <div className="p-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400"><strong>Downstream:</strong> `D = B + S`</div>
          <div className="p-2 bg-purple-500/10 rounded text-purple-700 dark:text-purple-400"><strong>Upstream:</strong> `U = B - S`</div>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Reverse Formulas */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Reverse Formulas (Very Important!)
      </h2>
      <p className="mb-2 text-muted-foreground">
        In many problems, you will be given the downstream and upstream speeds and asked to find the boat's speed or the stream's speed. These are extremely useful shortcuts.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>To find Speed of Boat (B):</strong> `B = (Downstream Speed + Upstream Speed) / 2`</p>
        <p className="mt-2"><strong>To find Speed of Stream (S):</strong> `S = (Downstream Speed - Upstream Speed) / 2`</p>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A boat travels downstream at 20 km/hr and upstream at 12 km/hr. Find the speed of the boat and stream.</strong></p>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
          <li><strong>Speed of Boat (B)</strong> = (20 + 12) / 2 = 16 km/hr.</li>
          <li><strong>Speed of Stream (S)</strong> = (20 - 12) / 2 = 4 km/hr.</li>
        </ul>
      </div>


      <hr className="my-6 border-border" />

      {/* 4. Solving Standard Problems */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Solving Standard Problems
      </h2>
      <p className="mb-2 text-muted-foreground">Most problems involve a journey downstream and a return journey upstream. The key is to apply the basic `Time = Distance / Speed` formula using the correct speed (Downstream or Upstream).</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Example Problem</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> A boat travels 36 km downstream in 3 hours. It takes 6 hours to travel the same distance upstream. Find the speed of the boat in still water.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>Calculate Downstream Speed (D):</strong> Distance / Time = 36 / 3 = 12 km/hr.</li>
          <li><strong>Calculate Upstream Speed (U):</strong> Distance / Time = 36 / 6 = 6 km/hr.</li>
          <li className="text-primary"><strong>Use the Reverse Formula for Boat Speed:</strong> B = (D + U) / 2 = (12 + 6) / 2 = <strong>9 km/hr</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Read the problem carefully</strong> and identify what is given and what needs to be found.</li>
        <li><strong>Write down the key values:</strong> Speed of Boat (B), Speed of Stream (S), Downstream Speed (D), and Upstream Speed (U).</li>
        <li>Use the primary formulas <strong>`D = B + S`</strong> and <strong>`U = B - S`</strong> if you know the boat and stream speeds.</li>
        <li>Use the reverse formulas <strong>`B = (D+U)/2`</strong> and <strong>`S = (D-U)/2`</strong> if you can first calculate the downstream and upstream speeds.</li>
        <li>Set up your equations using `Time = Distance / Speed`, making sure to use `D` for downstream journeys and `U` for upstream journeys.</li>
        <li>Ensure all units are consistent (usually km and hr).</li>
      </ol>

      <hr className="my-6 border-border" />
      <BoatsAndStreamsQuiz />
    </div>
  );
};


export default BoatsAndStreams ;
