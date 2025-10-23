
import React from 'react';
const VisualReasoning: React.FC = () => {
  return (
<div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 11: Visual Reasoning</h1>

      <p className="mb-4 text-muted-foreground">
        Visual Reasoning, also known as Abstract or Spatial Reasoning, tests your ability to understand and analyze visual information. These problems use shapes and figures instead of words or numbers. The goal is to identify underlying patterns related to the <strong>shape, position, rotation, and sequence</strong> of these figures. It is a pure test of your observation and pattern recognition skills.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Spotting the Transformation 
      </h2>
      <p className="mb-2 text-muted-foreground">
        Every visual reasoning problem is based on a logical transformation between figures. Your first step is always to compare the first two figures in a series and ask: "What changed?"
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Key Transformation Parameters:</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Rotation:</strong> Are the shapes rotating? By how many degrees (e.g., 45°, 90°, 180°)? Is it clockwise or anti-clockwise?</li>
            <li><strong>Position / Movement:</strong> Are the elements moving within the figure? Do they move from one corner to another? Do they move a set number of steps?</li>
            <li><strong>Shape / Size:</strong> Are the shapes changing (e.g., a square becomes a triangle)? Are they getting bigger or smaller?</li>
            <li><strong>Number:</strong> Is the number of elements (lines, dots, shapes) increasing or decreasing in a predictable way?</li>
            <li><strong>Addition/Deletion:</strong> Is a new element added or an old one removed in each step?</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Type 1: Series Completion */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Type 1: Series Completion (What Comes Next?)
      </h2>
      <p className="mb-2 text-muted-foreground">
        You are given a series of figures (usually 4 or 5) that follow a pattern, and you must find the next figure in the series from the given options.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A series shows an arrow. In Figure 1, it points North. In Figure 2, North-East. In Figure 3, East. What is the next figure?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Analyze the Transformation:</strong> The arrow is rotating from one position to the next.</li>
            <li><strong>Identify the Pattern:</strong> From North to North-East is a 45° clockwise rotation. From North-East to East is another 45° clockwise rotation.</li>
            <li><strong>Apply the Pattern:</strong> The next step is a 45° clockwise rotation from East.</li>
            <li className="text-primary"><strong>Solution:</strong> The arrow will point <strong>South-East</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Type 2: Analogy (Finding the Relationship) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Type 2: Analogy (A is to B as C is to D)
      </h2>
       <p className="mb-2 text-muted-foreground">
        You are given two pairs of figures. The first pair has an established relationship. You must apply the exact same relationship to the third figure to find the fourth.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Figure A is a large square with a small circle inside. Figure B is a large circle with a small square inside. Figure C is a large triangle with a small star inside. What is Figure D?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Find the Relationship between A and B:</strong> The outer and inner shapes swap roles. The large outer shape becomes the small inner shape, and the small inner shape becomes the large outer shape.</li>
            <li><strong>Apply this Relationship to C:</strong> Figure C has a large triangle (outer) and a small star (inner).</li>
            <li>Following the rule, Figure D should have a large star as the outer shape and a small triangle as the inner shape.</li>
            <li className="text-primary"><strong>Solution:</strong> A large star with a small triangle inside.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Type 3: Odd One Out (Classification) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Type 3: Odd One Out (Classification)
      </h2>
      <p className="mb-2 text-muted-foreground">You are given a set of figures (usually 5), out of which all but one are alike in some way. You have to find the figure that does not belong to the group.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Five figures show different numbers of straight lines: A(2 lines), B(3 lines), C(4 lines), D(5 lines), E(6 lines). Figure C is a square, while the others are open shapes. Which is the odd one out?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Look for a Common Property:</strong> Figures A, B, D, and E are all open figures made of straight lines.</li>
            <li><strong>Find the Exception:</strong> Figure C (the square) is a closed figure.</li>
            <li>The number of lines (2, 3, 4, 5, 6) forms a simple arithmetic progression, so that is not the distinguishing factor.</li>
            <li className="text-primary"><strong>Solution:</strong> Figure C is the odd one out because it is a closed figure while all others are open.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Be Systematic:</strong> Don't just glance at the figures. Check each transformation parameter (Rotation, Position, Shape, Number, etc.) one by one.</li>
        <li><strong>Eliminate Options:</strong> In series and analogy problems, once you identify one part of the pattern (e.g., a 90° rotation), immediately eliminate all answer choices that do not follow this rule.</li>
        <li><strong>Look for Alternating Patterns:</strong> Sometimes, the transformation from Figure 1 to 2 is different from 2 to 3, but the 1→2 pattern is the same as 3→4.</li>
        <li><strong>Don't Overthink:</strong> The patterns are usually simple and logical. If you find a very complex rule, you might be on the wrong track. Look for a simpler explanation.</li>
        <li><strong>Practice:</strong> Visual reasoning is a skill that improves with practice. The more you train your brain to see these transformations, the faster you will become.</li>
      </ol>

     
    </div>
  );
};

export default VisualReasoning;