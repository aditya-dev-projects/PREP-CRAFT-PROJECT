import React from 'react';
const IdiomsAndPhrases: React.FC = () => {
  return (
 <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 5: Idioms & Phrases</h1>

      <p className="mb-4 text-muted-foreground">
        Idioms and Phrases are a common feature of the English language where a group of words has a <strong>figurative meaning</strong> that is different from its literal meaning. In placement tests, these questions test your familiarity with common English expressions and your ability to understand contextual, non-literal language.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Figurative vs. Literal Meaning 
      </h2>
      <p className="mb-2 text-muted-foreground">
        The key to understanding idioms is to recognize that you cannot deduce their meaning by looking at the individual words. The phrase as a whole has a special, culturally understood meaning.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Example: "Bite the bullet"</h4>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li><strong>Literal Meaning:</strong> To actually bite a metal bullet (which makes no sense).</li>
            <li className="text-primary"><strong>Figurative (Idiomatic) Meaning:</strong> To face a difficult situation with courage and determination.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Common Idioms Based on Themes: Part 1 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Common Idioms Based on Themes: Part 1
      </h2>
      <p className="mb-2 text-muted-foreground">
        Grouping idioms by theme can make them easier to remember.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Body Parts</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>An arm and a leg:</strong> Very expensive. ("That new phone costs an arm and a leg.")</li>
            <li><strong>Play it by ear:</strong> To improvise or decide what to do as you go along. ("We don't have a plan, we'll just play it by ear.")</li>
            <li><strong>Get cold feet:</strong> To become nervous or hesitant about doing something. ("He got cold feet before his wedding.")</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 3. Common Idioms Based on Themes: Part 2 */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Common Idioms Based on Themes: Part 2
      </h2>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Animals</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Let the cat out of the bag:</strong> To reveal a secret carelessly. ("She let the cat out of the bag about the surprise party.")</li>
            <li><strong>Hold your horses:</strong> Be patient; wait a moment. ("Hold your horses! We aren't ready to leave yet.")</li>
            <li><strong>A fish out of water:</strong> Someone who is uncomfortable in a particular situation. ("As a country boy, he felt like a fish out of water in the big city.")</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Strategy for Solving Questions */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Strategy for Solving Questions
      </h2>
      <p className="mb-2 text-muted-foreground">
        Questions will typically present a sentence with an idiom and ask you to choose the option that best explains its meaning.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: The project was a huge success, but the team leader decided to <span className="text-primary">rest on her laurels</span>.</strong></p>
        <p className="mt-2 text-muted-foreground"><strong>Options:</strong> (A) Take a break, (B) Work even harder, (C) Stop trying after a success, (D) Celebrate with the team.</p>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Analyze the Context:</strong> The project was a success, but the phrase seems to imply something negative or a cessation of effort.</li>
            <li><strong>Eliminate Literal Meanings:</strong> "Laurels" are leaves, so it's not about literally resting.</li>
            <li><strong>Deduce the Meaning:</strong> "To rest on one's laurels" means to be so satisfied with what you have already achieved that you stop putting in any more effort.</li>
            <li className="text-primary"><strong>Solution:</strong> The correct answer is <strong>(C) Stop trying after a success</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Context is King:</strong> The surrounding words in the sentence often provide strong clues to the idiom's meaning.</li>
        <li><strong>Eliminate Literal Options:</strong> One or two of the options will often reflect the literal meaning of the words. These are almost always incorrect.</li>
        <li><strong>Build a Mental List:</strong> The best way to prepare is to learn and revise a list of the most common English idioms. Create flashcards or a notebook.</li>
        <li><strong>Look for Positive/Negative Connotation:</strong> Try to determine if the idiom has a positive or negative feel. This can help you eliminate options with the wrong tone.</li>
        <li><strong>Practice with Sentences:</strong> Don't just memorize the meaning. Understand how the idiom is used in a sentence to grasp its full context.</li>
      </ol>

      
    </div>
  );
};


export default IdiomsAndPhrases;