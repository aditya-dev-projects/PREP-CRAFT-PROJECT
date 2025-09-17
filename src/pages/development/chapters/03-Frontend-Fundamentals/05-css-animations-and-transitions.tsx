import React, { FC } from 'react';

const TopicPage: FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      {/* <h1 className="text-3xl font-bold mb-6 text-primary">Web Development Chapter 20: CSS Animations & Transitions</h1> */}

      <p className="mb-4 text-muted-foreground">
        Modern web design is not just about static layouts; it's also about creating dynamic and engaging user experiences. CSS Animations and Transitions are powerful tools that allow you to bring your website to life by adding motion and interactivity. They can transform a simple user action, like hovering over a button, into a smooth and delightful visual feedback.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Motion Over Time ⏱️
      </h2>
      <p className="mb-2 text-muted-foreground">
        Both transitions and animations are about changing an element's style properties over a specific duration. Instead of a style change being instant (e.g., a button's color changing immediately on hover), these tools allow the change to happen smoothly over a period of time, creating a sense of motion.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Transitions:</strong> Simpler. Designed to manage the change from a **start state** to an **end state**. They are typically triggered by user interactions like `:hover` or `:focus`.</li>
            <li><strong>Animations:</strong> More powerful. Allow you to create complex, multi-step sequences with fine-grained control using **keyframes**. They can run automatically without user interaction.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. CSS Transitions */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. CSS Transitions: The A-to-B Animation
      </h2>
      <p className="mb-2 text-muted-foreground">
        A transition smoothly animates an element from its initial state to a new state.
      </p>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Key Transition Properties:</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground mt-2">
            <li><strong>`transition-property`</strong>: The CSS property you want to animate (e.g., `background-color`, `transform`).</li>
            <li><strong>`transition-duration`</strong>: How long the transition should take (e.g., `0.3s` or `300ms`).</li>
            <li><strong>`transition-timing-function`</strong>: The speed curve of the transition (e.g., `ease-in`, `ease-out`, `linear`).</li>
            <li><strong>`transition-delay`</strong>: An optional delay before the transition starts.</li>
        </ul>
         <p className="text-secondary-foreground font-semibold mt-4">Shorthand Property:</p>
         <p className="text-sm text-muted-foreground mt-1">It's best practice to combine these into a single shorthand property.</p>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`/* property | duration | timing-function | delay */`}<br/>
            {`transition: background-color 0.5s ease-out;`}
        </code></pre>
        <h4 className="font-bold text-secondary-foreground mt-4">Example: Hover Effect on a Button</h4>
        <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
            {`.btn {`}<br/>
            {'  background-color: blue;'}<br/>
            {'  transition: background-color 0.3s ease-in-out;'}<br/>
            {'}'}<br/><br/>
            {`.btn:hover {`}<br/>
            {'  background-color: red;'}<br/>
            {'}'}
        </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. CSS Animations & Keyframes */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. CSS Animations & Keyframes
      </h2>
       <p className="mb-2 text-muted-foreground">
        Animations give you more control by allowing you to define multiple points in the animation sequence using `@keyframes`.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <p className="text-secondary-foreground font-semibold">How it Works (Two Parts):</p>
          <ol className="list-decimal ml-6 mt-2 text-muted-foreground space-y-2">
            <li><strong>Define the Animation (`@keyframes`):</strong> You create a named animation and define its "stops" or keyframes using percentages, from `0%` (the start) to `100%` (the end).</li>
            <li><strong>Apply the Animation:</strong> You apply the animation to an element using the `animation` property.</li>
          </ol>
          <pre className="mt-2 p-2 bg-black rounded-md text-white text-sm"><code>
              {`/* 1. Define the animation */`}<br/>
              {`@keyframes slide-in {`}<br/>
              {'  from { /* or 0% */'}<br/>
              {'    transform: translateX(-100%);'}<br/>
              {'    opacity: 0;'}<br/>
              {'  }'}<br/>
              {'  to { /* or 100% */'}<br/>
              {'    transform: translateX(0);'}<br/>
              {'    opacity: 1;'}<br/>
              {'  }'}<br/>
              {'}'}<br/><br/>
              {`/* 2. Apply the animation to an element */`}<br/>
              {`.box {`}<br/>
              {'  animation-name: slide-in;'}<br/>
              {'  animation-duration: 1s;'}<br/>
              {'  animation-timing-function: ease-out;'}<br/>
              {'}'}
          </code></pre>
      </div>

      <hr className="my-6 border-border" />

      {/* 4. The `transform` Property */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The `transform` Property: Performance is Key
      </h2>
      <p className="mb-2 text-muted-foreground">
        The CSS `transform` property lets you modify the coordinate space of an element. You can use it to move, rotate, scale, and skew elements.
      </p>
      <div className="p-4 mt-4 bg-primary/10 border-l-4 border-primary">
        <p><strong>Best Practice:</strong> For animations and transitions, you should always prefer animating the `transform` and `opacity` properties. Animating properties like `width`, `height`, `margin`, or `left`/`top` can be slow and cause jerky animations because they force the browser to recalculate the layout of the page.</p>
      </div>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
          <h4 className="font-bold text-secondary-foreground">Common `transform` Functions:</h4>
          <ul className="list-disc ml-6 mt-2 text-muted-foreground">
              <li>`transform: translate(x, y);` (e.g., `translateX(50px)`)</li>
              <li>`transform: rotate(angle);` (e.g., `rotate(45deg)`)</li>
              <li>`transform: scale(x, y);` (e.g., `scale(1.2)`)</li>
          </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary for Motion
      </h2>
       <p className="mb-2 text-muted-foreground">
        Use motion to enhance the user experience, not to distract from it.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Use Transitions for Simple State Changes:</strong> Perfect for hover effects on links, buttons, and cards.</li>
        <li><strong>Use Animations for Complex Sequences:</strong> Use for multi-step effects like loading spinners, notifications sliding in, or attention-grabbing elements.</li>
        <li><strong>Prioritize Performance:</strong> Whenever possible, animate `transform` and `opacity` instead of properties that affect layout (like `margin` or `width`).</li>
        <li><strong>Keep it Subtle and Quick:</strong> Good animations are usually fast (between 200ms and 500ms). They should provide feedback without making the user wait.</li>
       </ol>
    </div>
  );
};


export default TopicPage;
