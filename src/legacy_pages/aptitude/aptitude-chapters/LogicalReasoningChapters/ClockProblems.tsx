import React from 'react';
const ClockProblems: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Logical Reasoning Chapter 3: Clocks</h1>

      <p className="mb-4 text-muted-foreground">
        Clock problems are a classic type of logical reasoning puzzle that involves understanding the movement and relative speeds of the hour and minute hands. These questions test your ability to work with circular measurements (degrees), relative speed, and logical formulas. While they might seem tricky, they are very predictable and can be easily solved with a few key concepts and formulas.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Clock as a Circle 
      </h2>
      <p className="mb-2 text-muted-foreground">
        The foundation of every clock problem is understanding the clock face as a perfect circle.
      </p>
      <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
        <li><strong>A Circle has 360 Degrees:</strong> The entire dial of the clock represents a 360° circle.</li>
        <li><strong>Two Main Players:</strong> Most problems involve the <strong>Hour Hand</strong> (shorter) and the <strong>Minute Hand</strong> (longer).</li>
        <li><strong>Clock Divisions:</strong> The clock is divided into 12 large hour spaces (30° each) and 60 small minute spaces (6° each).</li>
      </ul>

      <hr className="my-6 border-border" />

      {/* 2. Speed of the Hands & Relative Speed */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Speed of the Hands & Relative Speed
      </h2>
      <p className="mb-2 text-muted-foreground">
        To solve problems about the hands meeting or forming angles, you must know how fast they move.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Speed of the Minute Hand:</strong> Covers 360° in 60 minutes, so its speed is <strong>6° per minute</strong>.</li>
            <li><strong>Speed of the Hour Hand:</strong> Covers 30° in 60 minutes, so its speed is <strong>0.5° per minute</strong>.</li>
        </ul>
      </div>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Relative Speed:</strong> Since both hands move in the same direction, their relative speed is the difference. This is the rate at which the minute hand "gains" on the hour hand.</p>
        <p className="font-semibold mt-1">Relative Speed = 6° - 0.5° = <strong>5.5° per minute</strong>.</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Finding the Angle Between the Hands */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Finding the Angle Between the Hands
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the most common type of clock problem, where you are asked to find the angle between the hands at a specific time.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>The Master Formula:</strong> `Angle (θ) = | (11/2) × M - 30 × H |`</p>
        <p className="text-sm mt-1">(Where M = Minutes, H = Hour, and |...| means absolute value)</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: What is the angle between the hands of the clock at 4:20?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
          <li><strong>H = 4</strong>, <strong>M = 20</strong>.</li>
          <li><strong>Plug into the formula:</strong> Angle = | (11/2) × 20 - 30 × 4 |</li>
          <li><strong>Calculate:</strong> Angle = | 110 - 120 | = | -10 |</li>
          <li className="text-primary"><strong>Answer:</strong> The angle is <strong>10°</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Special Positions of the Hands */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Special Positions of the Hands
      </h2>
      <p className="mb-2 text-muted-foreground">These are frequently tested scenarios.</p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Coincidence (0°)</h4>
            <p className="text-sm text-muted-foreground mt-1">Hands are together. Happens <strong>11 times</strong> in 12 hours.</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Opposite (180°)</h4>
            <p className="text-sm text-muted-foreground mt-1">Hands are in a straight line. Happens <strong>11 times</strong> in 12 hours.</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Right Angles (90°)</h4>
            <p className="text-sm text-muted-foreground mt-1">Hands are perpendicular. Happens <strong>22 times</strong> in 12 hours.</p>
        </div>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Faulty Clocks */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Faulty Clocks: Gaining and Losing Time
      </h2>
      <p className="mb-2 text-muted-foreground">A faulty clock is one that runs either faster (gaining time) or slower (losing time) than a correct clock.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: A clock gains 5 minutes every hour. If it was set correctly at 12 PM, what time will it show at 5 PM on the same day?</strong></p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Time Elapsed:</strong> From 12 PM to 5 PM is 5 hours.</li>
            <li><strong>Rate of Gain:</strong> The clock gains 5 minutes per hour.</li>
            <li><strong>Total Gain:</strong> In 5 hours, the clock will gain 5 × 5 = 25 minutes.</li>
            <li><strong>Time Shown:</strong> The faulty clock will show the correct time (5 PM) plus the time it has gained.</li>
            <li className="text-primary"><strong>Answer:</strong> The clock will show <strong>5:25 PM</strong>.</li>
        </ol>
      </div>

      
    </div>
  );
};


export default ClockProblems;

