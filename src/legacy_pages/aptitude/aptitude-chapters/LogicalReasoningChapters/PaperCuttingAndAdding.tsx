
import React from 'react';
const PaperCuttingAndAdding: React.FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
<h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 12: Paper Cutting & Folding</h1>

      <p className="mb-4 text-muted-foreground">
        Paper Cutting and Folding is a type of non-verbal, visual reasoning that tests your <strong>spatial imagination skills</strong>. You are shown a sequence of steps where a piece of paper is folded, and then one or more cuts (or punches) are made. Your task is to visualize how the paper will look when it is completely unfolded.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Mirror Image Principle 🪞
      </h2>
      <p className="mb-2 text-muted-foreground">
        The key to solving these problems is to think of each fold as a line of symmetry. When you unfold the paper, the cuts you made will be mirrored across the fold line. The entire process is about working backward, step-by-step, creating mirror images of the cuts.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>The Golden Rule:</strong> Unfolding is the reverse of folding. In the last step of unfolding, you create a mirror image of the cuts across the most recent fold line.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Step-by-Step Unfolding Strategy */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Step-by-Step Unfolding Strategy
      </h2>
      <p className="mb-2 text-muted-foreground">
        Always work backward from the final folded and cut paper.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A square paper is folded in half from top to bottom, then folded in half again from left to right. A circular hole is punched in the top-right corner. How will it look when unfolded?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Identify the Last Fold:</strong> The last fold was from left to right. The paper is currently a small square, representing the bottom-right quadrant of the original paper. The hole is in its top-right corner.</li>
            <li><strong>Perform the First Unfold (Right to Left):</strong> When you unfold it to the left, the small square and its hole are mirrored. You will now have a rectangle with two holes: one in the top-right and one in the top-left.</li>
            <li><strong>Perform the Second Unfold (Bottom to Top):</strong> Now, unfold the rectangle upwards. The entire top half (the rectangle with two holes) is mirrored to the bottom half.</li>
            <li className="text-primary"><strong>Solution:</strong> The final paper will be a square with <strong>four holes</strong>, one in each of the four corners.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Tips for Complex Folds */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Tips for Complex Folds
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Diagonal Folds:</strong> If the paper is folded diagonally, the mirror image will be created across the diagonal line. This often results in patterns that are symmetrical along the diagonal.</li>
            <li><strong>Cuts on the Fold Line:</strong> If a cut is made directly on a fold line, it will create a symmetrical shape when unfolded. For example, a semi-circle cut on a fold line will become a full circle when unfolded. A triangle cut on a fold line will become a diamond or a square.</li>
            <li><strong>Number of Holes:</strong> The number of holes doubles with each fold you undo. If you have 1 hole after 2 folds, you'll have 2 holes after the first unfold and 4 holes after the second unfold.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Elimination Strategy */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Elimination Strategy for Multiple Choice Questions
      </h2>
      <p className="mb-2 text-muted-foreground">Often, you don't need to visualize the entire final pattern. You can eliminate incorrect options based on simple logic.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Check Symmetry:</strong> The final unfolded paper must be symmetrical along all the fold lines. If an option is not symmetrical, it's wrong.</li>
            <li><strong>Count the Holes/Cuts:</strong> If the paper was folded `n` times and `k` holes were punched, the final paper will have `k * 2ⁿ` holes (assuming no overlaps). You can quickly eliminate options that have the wrong number of holes.</li>
            <li><strong>Check the Corners/Edges:</strong> Observe where the final cut is made. If it's in a corner of the folded paper, the final pattern must have cuts in all four corners of the unfolded paper. If it's on an edge, the final pattern must have cuts on its edges.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Trace the Folds:</strong> Understand the sequence of folds first. Note whether they are horizontal, vertical, or diagonal.</li>
        <li><strong>Work Backwards:</strong> Start with the final folded paper and undo the last fold first.</li>
        <li><strong>Mirror the Cuts:</strong> With each unfold, perfectly mirror the existing cuts across the fold line you are opening.</li>
        <li><strong>Use Elimination:</strong> For multiple-choice questions, use symmetry and the number of cuts to quickly eliminate incorrect answer choices.</li>
        <li><strong>Practice Visualization:</strong> If you find this topic difficult, take a small piece of paper and physically perform the folds and cuts to train your brain to visualize the process.</li>
      </ol>
    </div>
  );
};

export default PaperCuttingAndAdding;