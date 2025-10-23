import React from 'react';
const SeatingArrangment: React.FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Logical Reasoning Chapter 2: Seating Arrangement</h1>

      <p className="mb-4 text-muted-foreground">
        Seating Arrangement is a fundamental and frequently asked topic in the logical reasoning section. These problems are logic puzzles that test your ability to visualize, understand spatial relationships, and process multiple pieces of information systematically. Success depends entirely on <strong>logical deduction</strong> and <strong>careful interpretation</strong> of the given clues.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concepts: Types of Arrangements
      </h2>
      <p className="mb-2 text-muted-foreground">
        Seating arrangement problems can be broadly categorized into three main types. Visualizing the correct layout is the first and most important step.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Linear Arrangement:</strong> People or objects are arranged in one or more straight lines (e.g., a single row or two parallel rows facing each other).</li>
        <li><strong>Circular Arrangement:</strong> People or objects are arranged around a circle. Pay attention to whether they are facing the center or facing away.</li>
        <li><strong>Rectangular / Square Arrangement:</strong> People are seated around a rectangular or square table, which adds the concepts of corners and sides.</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 2. Decoding the Language */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Decoding the Language: The Key to the Puzzle
      </h2>
      <p className="mb-2 text-muted-foreground">
        The clues in seating arrangement problems are given in a specific language. Understanding these phrases precisely is crucial.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Immediate Left/Right:</strong> Refers to the person directly next to someone.</li>
            <li><strong>"A is two places to the right of B":</strong> Means there is exactly <strong>one</strong> person between A and B.</li>
            <li><strong>"Who" vs. "And":</strong> "A is next to B, <strong>who</strong> is left of C" means B is left of C. "A is next to B <strong>and</strong> is left of C" means A is left of C.</li>
            <li><strong>Opposite:</strong> In arrangements with an even number of people, this means sitting directly across the table.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. The Step-by-Step Solving Strategy */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. The Step-by-Step Solving Strategy
      </h2>
      <p className="mb-2 text-muted-foreground">
        Follow a structured approach to avoid getting confused by the multiple clues.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Read and Visualize:</strong> Read the entire problem to understand the layout (linear, circular?), the number of people, etc. Draw the basic layout with empty slots.</li>
        <li><strong>Find Definite Information:</strong> Look for the most concrete clue that gives you a fixed position. This is your starting point.</li>
        <li><strong>Link Relative Information:</strong> Find other clues that relate to the person(s) you have already placed and build upon your initial placement.</li>
        <li><strong>Use Negative Information:</strong> Clues like "A is not a neighbor of C" are very powerful for elimination.</li>
        <li><strong>Consider All Cases:</strong> If a clue leads to multiple possibilities, draw separate diagrams and explore them. A later clue will often invalidate one case.</li>
        <li><strong>Verify:</strong> After placing everyone, re-read all clues to ensure your final arrangement satisfies every condition.</li>
      </ol>
      
      <hr className="my-6 border-border" />

      {/* 4. Solved Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Solved Examples
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Example 1: Linear Arrangement</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> Five friends P, Q, R, S, and T are sitting in a row facing North. S is between T and Q. R is to the immediate left of T. P is at the extreme left end. Who is in the middle?</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Draw Layout:</strong> 5 slots facing North: `_ _ _ _ _`</li>
            <li><strong>Definite Clue:</strong> "P is at the extreme left end." → `P _ _ _ _`</li>
            <li><strong>Link Clues:</strong> "R is to the immediate left of T" means they are a block (R, T). "S is between T and Q" means they are a block (T, S, Q).</li>
            <li><strong>Combine Blocks:</strong> The combined block of people is (R, T, S, Q).</li>
            <li><strong>Place the block:</strong> The only way to fit this 4-person block is: `P R T S Q`.</li>
            <li className="text-primary"><strong>Answer:</strong> The person in the middle is <strong>T</strong>.</li>
        </ol>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Example 2: Circular Arrangement</h4>
        <p className="mt-2 text-muted-foreground"><strong>Problem:</strong> Six people (A, B, C, D, E, F) are sitting around a circular table facing the center. B is between F and C. A is between E and D. F is to the immediate left of D. Who is opposite to A?</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Start with a definite clue:</strong> "F is to the immediate left of D." Place D, then place F to its left (clockwise).</li>
            <li><strong>Link Clues:</strong> "A is between E and D." A must be on the other side of D from F, giving (F, D, A).</li>
            <li>Now, E must be next to A, giving (F, D, A, E).</li>
            <li>"B is between F and C." B must be on the other side of F from D, giving (B, F, D, A, E).</li>
            <li>Finally, C must be next to B, completing the circle: (B, F, D, A, E, C).</li>
            <li className="text-primary"><strong>Answer:</strong> In a 6-person circle, the person 3 spots away is opposite. The person opposite to A is <strong>B</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 5. Key Tips for Speed and Accuracy */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Tips for Speed and Accuracy
      </h2>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>Draw a Clear Diagram:</strong> Don't try to solve it in your head. A large, clear diagram is your best tool.</li>
        <li><strong>Start with the Most Concrete Clue:</strong> Find the clue that gives you the most certainty and build from there.</li>
        <li><strong>Pay Attention to Directions:</strong> In circular arrangements, "left" and "right" depend on whether people are facing the center or away from it.</li>
        <li><strong>Don't Assume Information:</strong> Only use the information explicitly given in the problem.</li>
        <li><strong>Practice Regularly:</strong> Seating arrangement is a skill that improves dramatically with practice.</li>
      </ul>

     
    </div>
  );
};

export default SeatingArrangment;



// Remaning Chapters To ADD As New Files

// BloodRelations.tsx
// Directions.tsx
// WordPattern.tsx
// CodingDecoding.tsx
// MathematicalOperations.tsx
// VennDiagram.tsx
// VisualReasoning.tsx
// PaperCuttingAndAdding.tsx
// CubesAndDices.tsx
// DataSufficency.tsx
// StatementAndAssumptions.tsx
// StatementAndConclusion.tsx


