import React from "react";
const CubesAndDices: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 13: Cubes & Dices</h1>

      <p className="mb-4 text-muted-foreground">
        This chapter of visual reasoning tests your ability to visualize 3D objects. Problems involving <strong>dices</strong> focus on understanding the relationship between opposite and adjacent faces. Problems involving <strong>cubes</strong> test your ability to count smaller cubes formed from a larger one, based on how many of their faces are painted.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept of a Dice */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept of a Dice 🎲
      </h2>
      <p className="mb-2 text-muted-foreground">
        A standard die is a cube with faces numbered 1 through 6. The key property is that the sum of the numbers on <strong>opposite faces is always 7</strong>.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Opposite to 1 is <strong>6</strong> (1 + 6 = 7)</li>
            <li>Opposite to 2 is <strong>5</strong> (2 + 5 = 7)</li>
            <li>Opposite to 3 is <strong>4</strong> (3 + 4 = 7)</li>
        </ul>
      </div>
      <p className="mt-4 text-muted-foreground">
        In reasoning problems, you are often shown two or more views of the same die and asked to find the number on the face opposite to a given number.
      </p>

      <hr className="my-6 border-border" />

      {/* 2. Rules for Solving Dice Problems */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Rules for Solving Dice Problems
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Rule 1: One Face is Common</h4>
        <p className="mt-1 text-muted-foreground">If you have two views of a die and only one face is common, the faces adjacent to this common face in one view are opposite to the faces adjacent to it in the other view. The remaining two faces are opposite each other.</p>
        <p className="mt-2 text-muted-foreground">A simpler way is to write the adjacent faces in clockwise order. <br/><strong>Example:</strong> In two views, '4' is common. <br/> View 1: Clockwise from 4 gives `4 → 1 → 2`. <br/> View 2: Clockwise from 4 gives `4 → 6 → 5`.<br/> Then, 1 is opposite 6, 2 is opposite 5, and the remaining number (3) is opposite 4.</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Rule 2: Two Faces are Common</h4>
        <p className="mt-1 text-muted-foreground">If you have two views of a die and two faces are common, the remaining third faces in each view are always opposite to each other.</p>
        {/* FIX: Replaced JSX delimiters {} with simple text to prevent parsing error */}
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> View 1 shows "{`{3, 4, 5}`}". View 2 shows "{`{3, 4, 6}`}". The common faces are 3 and 4. The remaining faces, 5 and 6, must be opposite each other.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Core Concept of a Painted Cube */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Core Concept of a Painted Cube 🎨
      </h2>
       <p className="mb-2 text-muted-foreground">
        This involves a large cube that is painted on all its faces and then cut into smaller, identical cubes. You need to find the number of smaller cubes with 3 faces painted, 2 faces painted, 1 face painted, or no faces painted.
      </p>
      <p className="mt-2 text-muted-foreground">Let a large cube of side 'N' be cut into smaller cubes of side '1'. The total number of smaller cubes will be <strong>N³</strong>.</p>
      
      <hr className="my-6 border-border" />

      {/* 4. Formulas for Painted Cubes */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Formulas for Painted Cubes
      </h2>
      <p className="mb-2 text-muted-foreground">These formulas are constant for any cube painted on all sides.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li>
                <strong>Cubes with 3 Faces Painted:</strong> These are always the corner cubes. A cube has 8 corners.
                <p className="p-2 mt-1 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400"><strong>Formula:</strong> Always <strong>8</strong></p>
            </li>
            <li>
                <strong>Cubes with 2 Faces Painted:</strong> These are the cubes on the edges (but not the corners). A cube has 12 edges.
                <p className="p-2 mt-1 bg-purple-500/10 rounded text-purple-700 dark:text-purple-400"><strong>Formula:</strong> <strong>12 × (N - 2)</strong></p>
            </li>
            <li>
                <strong>Cubes with 1 Face Painted:</strong> These are the cubes in the center of each face. A cube has 6 faces.
                <p className="p-2 mt-1 bg-green-500/10 rounded text-green-700 dark:text-green-400"><strong>Formula:</strong> <strong>6 × (N - 2)²</strong></p>
            </li>
            <li>
                <strong>Cubes with 0 Faces Painted (Inner Core):</strong> These are the cubes hidden inside, with no paint.
                <p className="p-2 mt-1 bg-red-500/10 rounded text-red-700 dark:text-red-400"><strong>Formula:</strong> <strong>(N - 2)³</strong></p>
            </li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>For Dice:</strong> Look for common faces between different views. If one face is common, use the clockwise rule. If two faces are common, the remaining faces are opposite.</li>
        <li><strong>For Cubes:</strong> First, find the value of 'N'. If a cube is cut into 64 smaller cubes, then N³ = 64, so N = 4.</li>
        <li><strong>Memorize the Formulas:</strong> The four formulas for painted cubes (3-face, 2-face, 1-face, 0-face) are constant and should be memorized.</li>
        <li><strong>Visualize:</strong> Try to visualize the cube. The 3-face painted cubes are corners, 2-face are edges, and 1-face are centers. This helps in understanding the formulas.</li>
      </ol>
    </div>
  );
};

export default CubesAndDices;
