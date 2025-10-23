import React from 'react';
const Directions: React.FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Logical Reasoning Chapter 6: Direction Sense</h1>

      <p className="mb-4 text-muted-foreground">
        Direction Sense problems are a common type of logical puzzle in placement tests. They are designed to test your spatial reasoning and ability to visualize movement and position. These questions require you to follow a path of a person or object and determine their final direction or distance from the starting point. The key is to always <strong>draw a clear diagram</strong>.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Compass Rose 🧭
      </h2>
      <p className="mb-2 text-muted-foreground">
        All direction problems are based on the standard compass directions. It is crucial to have a clear mental map of this. The rule is to always assume that <strong>North</strong> is pointing upwards on your paper.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Cardinal Directions:</strong> The four main directions: <strong>North (N), South (S), East (E), West (W)</strong>.</li>
            <li><strong>Inter-Cardinal Directions:</strong> The four directions in between: <strong>North-East (NE), North-West (NW), South-East (SE), South-West (SW)</strong>.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The Concept of Turns */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Concept of Turns: Left, Right, Clockwise & Anti-Clockwise
      </h2>
      <p className="mb-2 text-muted-foreground">
        A "left" or "right" turn depends entirely on the <strong>current direction</strong> the person is facing.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Facing North:</strong> A left turn leads to West. A right turn leads to East.</li>
            <li><strong>Facing South:</strong> A left turn leads to East. A right turn leads to West.</li>
            <li><strong>Facing East:</strong> A left turn leads to North. A right turn leads to South.</li>
            <li><strong>Facing West:</strong> A left turn leads to South. A right turn leads to North.</li>
            <li>A <strong>90° clockwise</strong> turn is a <strong>right turn</strong>. A <strong>90° anti-clockwise</strong> turn is a <strong>left turn</strong>.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Solving Problems with Diagrams */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Solving Problems with Diagrams
      </h2>
       <p className="mb-2 text-muted-foreground">
        Never try to solve direction puzzles in your head. Always draw a diagram representing the path.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Example: A man starts from home, walks 5 km East, then turns left and walks 4 km. He then turns left again and walks 5 km. How far is he from home and in which direction?</h4>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Start Point (H):</strong> Mark a point for home.</li>
            <li><strong>"walks 5 km East"</strong>: Draw a line 5 km to the right to point A.</li>
            <li><strong>"turns left and walks 4 km"</strong>: From A (facing East), a left turn is North. Draw a line 4 km upwards to point B.</li>
            <li><strong>"turns left again and walks 5 km"</strong>: From B (facing North), a left turn is West. Draw a line 5 km to the left to point C.</li>
            <li>The final diagram is a rectangle. The distance between the start (H) and end (C) is the same as the side AB.</li>
            <li className="text-primary"><strong>Answer:</strong> He is <strong>4 km</strong> from his home, in the <strong>North</strong> direction.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Finding the Shortest Distance */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Finding the Shortest Distance: Pythagoras Theorem
      </h2>
      <p className="mb-2 text-muted-foreground">When asked for the shortest straight-line distance, if the path forms a right-angled triangle, we use the Pythagoras theorem.</p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
          <p><strong>Theorem:</strong> `(Hypotenuse)² = (Base)² + (Perpendicular)²`</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Example: A person walks 8 meters North and then 6 meters East. What is the shortest distance from the starting point?</h4>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li>The path forms a right-angled triangle with sides 8m and 6m.</li>
            <li><strong>Apply the theorem:</strong> Shortest Distance² = 8² + 6² = 64 + 36 = 100.</li>
            <li className="text-primary"><strong>Shortest Distance</strong> = √100 = <strong>10 meters</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Special Case: Shadow Problems */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Special Case: Shadow Problems
      </h2>
      <p className="mb-2 text-muted-foreground">These puzzles involve the position of the sun.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The Two Golden Rules:</h4>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>In the morning (sunrise):</strong> The sun is in the <strong>East</strong>, so shadows fall to the <strong>West</strong>.</li>
            <li><strong>In the evening (sunset):</strong> The sun is in the <strong>West</strong>, so shadows fall to the <strong>East</strong>.</li>
        </ul>
        <p className="mt-4 text-muted-foreground"><strong>Example: One morning, Ram and Shyam were talking face-to-face. If Ram's shadow was exactly to the left of Shyam, which direction was Ram facing?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Time is morning:</strong> Sun is East, so all shadows are West.</li>
            <li>Ram's shadow is in the West.</li>
            <li>For Shyam, Ram's shadow is to his "left". If Shyam's left is West, he must be facing <strong>North</strong>.</li>
            <li>Since they are face-to-face, Ram is facing the opposite direction.</li>
            <li className="text-primary"><strong>Answer:</strong> Ram was facing <strong>South</strong>.</li>
        </ol>
      </div>
    </div>
  );
};


export default Directions;
