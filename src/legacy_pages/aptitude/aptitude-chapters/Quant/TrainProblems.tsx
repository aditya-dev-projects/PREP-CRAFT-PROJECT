import React from 'react';
import TrainProblemsQuiz from '../../Quizzes/TrainProblemsQuiz';

const TrainProblems: React.FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 16 Notes: Train Problems</h1>

      <p className="mb-4 text-muted-foreground">
        Train problems are a special case of <strong>Time, Speed, and Distance</strong> where you must consider the <strong>length of the train</strong> as a key factor in the distance it covers. These questions are very common in placement tests and are designed to test your understanding of relative speed and how to correctly calculate the total distance traveled.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The Journey of a Train 🚂
      </h2>
      <p className="mb-2 text-muted-foreground">
        The fundamental rule that separates train problems from general speed problems is that the total distance covered by the train is the sum of its own length plus the length of the object it is crossing.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Formula:</strong> `Total Distance = Length of Train + Length of Object`</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Case 1: Crossing Stationary Objects */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Case 1: Crossing Stationary Objects
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is when the object the train is passing is not moving.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Type A: Crossing a Point Object (e.g., a pole, a man)</h4>
        <p className="mt-1 text-muted-foreground">The distance covered is simply the <strong>Length of the Train (Lₜ)</strong>.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> A 150m long train at 36 km/hr passes a man. How long does it take?</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Distance</strong> = 150 m.</li>
            <li><strong>Convert Speed:</strong> 36 km/hr × (5/18) = 10 m/s.</li>
            <li className="text-primary"><strong>Time</strong> = Distance / Speed = 150 / 10 = <strong>15 seconds</strong>.</li>
        </ol>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Type B: Crossing an Object with Length (e.g., a bridge, platform)</h4>
        <p className="mt-1 text-muted-foreground">The distance covered is the <strong>Length of Train (Lₜ) + Length of Object (Lₒ)</strong>.</p>
        <p className="mt-2 text-muted-foreground"><strong>Example:</strong> A 200m train at 54 km/hr crosses a 250m bridge.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Total Distance</strong> = 200 + 250 = 450 m.</li>
            <li><strong>Convert Speed:</strong> 54 km/hr × (5/18) = 15 m/s.</li>
            <li className="text-primary"><strong>Time</strong> = 450 / 15 = <strong>30 seconds</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Case 2: Crossing Moving Objects (Relative Speed) */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Case 2: Crossing Moving Objects (Relative Speed)
      </h2>
      <p className="mb-2 text-muted-foreground">
        When the object is also moving, we must use the concept of <strong>Relative Speed</strong>. The formula becomes `Time = Total Distance / Relative Speed`.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Opposite Directions</h4>
            <p className="text-sm text-muted-foreground mt-1">Speeds <strong>add up</strong>.</p>
            <p className="p-2 mt-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400 text-sm"><strong>Relative Speed</strong> = S₁ + S₂</p>
        </div>
        <div className="p-4 border rounded-lg bg-muted">
            <h4 className="font-bold text-secondary-foreground">Same Direction</h4>
            <p className="text-sm text-muted-foreground mt-1">Speeds are <strong>subtracted</strong> (faster - slower).</p>
            <p className="p-2 mt-2 bg-purple-500/10 rounded text-purple-700 dark:text-purple-400 text-sm"><strong>Relative Speed</strong> = S₁ - S₂</p>
        </div>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example (Opposite):</strong> Two trains (120m & 180m) run towards each other at 50 km/hr and 40 km/hr.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Total Distance</strong> = 120 + 180 = 300 m.</li>
            <li><strong>Relative Speed</strong> = 50 + 40 = 90 km/hr = 25 m/s.</li>
            <li className="text-primary"><strong>Time</strong> = 300 / 25 = <strong>12 seconds</strong>.</li>
        </ol>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example (Same):</strong> A 100m train (72 km/hr) overtakes a 150m train (54 km/hr).</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Total Distance</strong> = 100 + 150 = 250 m.</li>
            <li><strong>Relative Speed</strong> = 72 - 54 = 18 km/hr = 5 m/s.</li>
            <li className="text-primary"><strong>Time</strong> = 250 / 5 = <strong>50 seconds</strong>.</li>
        </ol>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. Unit Conversion */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Unit Conversion: The Most Common Trap! ⚠️
      </h2>
      <p className="mb-2 text-muted-foreground">Almost every train problem will require you to convert units. Be very careful.</p>
      <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
          <li><strong>km/hr to m/s:</strong> Multiply by <strong>5/18</strong>.</li>
          <li><strong>m/s to km/hr:</strong> Multiply by <strong>18/5</strong>.</li>
      </ul>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Identify the objects:</strong> What is the train crossing? Is it a point or an object with length? Is it stationary or moving?</li>
        <li><strong>Calculate the Total Distance:</strong> `Length of Train` or `Length of Train + Length of Object`.</li>
        <li><strong>Calculate the Effective Speed:</strong> Actual speed for stationary objects, or Relative Speed for moving objects.</li>
        <li><strong>Check Units:</strong> Ensure distance and speed are in compatible units (meters with m/s, or km with km/hr).</li>
        <li><strong>Apply the Formula:</strong> `Time = Total Distance / Effective Speed`.</li>
      </ol>

      <hr className="my-6 border-border" />
      <TrainProblemsQuiz />
    </div>
  );
};


export default TrainProblems;
