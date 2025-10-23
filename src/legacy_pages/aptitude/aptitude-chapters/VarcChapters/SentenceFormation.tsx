import React from 'react';
const SentenceFormation: React.FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 3: Sentence Formation (Para Jumbles)</h1>

      <p className="mb-4 text-muted-foreground">
        Sentence Formation, commonly known as <strong>Para Jumbles</strong>, is a type of verbal reasoning question that tests your logical and comprehension skills. You are given a set of sentences that are jumbled, and your task is to rearrange them to form a coherent and meaningful paragraph.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Finding the Narrative Flow 📜
      </h2>
      <p className="mb-2 text-muted-foreground">
        The goal of a para jumble is to reconstruct the author's original train of thought. Every coherent paragraph has a logical flow—an introduction, supporting details, and a conclusion. Your job is to find this hidden narrative structure by identifying logical links between the sentences.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The Mental Framework:</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Identify the Opening Sentence:</strong> Which sentence introduces the main topic or the central idea?</li>
            <li><strong>Find Mandatory Pairs:</strong> Are there two sentences that absolutely must go together?</li>
            <li><strong>Look for Logical Transitions:</strong> How do the ideas connect from one sentence to the next?</li>
            <li><strong>Identify the Closing Sentence:</strong> Which sentence summarizes the idea or provides a concluding thought?</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Step 1: Identifying the Opening Sentence */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Step 1: Identifying the Opening Sentence
      </h2>
      <p className="mb-2 text-muted-foreground">
        The first sentence of a paragraph is usually independent and introduces the main subject. Look for these characteristics:
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Introduces a Person, Place, or Concept:</strong> It often starts with a proper noun or a general statement.</li>
            <li><strong>Is a Standalone Statement:</strong> It does not depend on any previous sentence for context.</li>
            <li><strong>Avoids Pronouns and Conjunctions:</strong> It is unlikely to start with words like 'He', 'She', 'It', 'They', 'But', 'However', 'Therefore', or 'So'.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 3. Step 2: Finding Logical Links & Mandatory Pairs */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Step 2: Finding Logical Links & Mandatory Pairs
      </h2>
       <p className="mb-2 text-muted-foreground">
        Once you have a potential opening sentence, look for other sentences that connect to it or to each other.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Pronoun-Antecedent Link:</strong> If a sentence has a pronoun (he, she, it, they, them), find the sentence that contains the noun it refers to. The noun sentence must come before the pronoun sentence. (e.g., "<strong>Ravi</strong> went to the market. <strong>He</strong> bought some vegetables.")</li>
            <li><strong>Cause and Effect Link:</strong> One sentence might state a cause, and another might state its effect. Look for keywords like 'therefore', 'as a result', 'consequently'.</li>
            <li><strong>Chronological Order:</strong> If the sentences describe a series of events, arrange them in the order they happened. Look for time-based keywords like 'first', 'then', 'next', 'finally'.</li>
            <li><strong>Idea-Example Link:</strong> One sentence might present a general idea, and another might provide a specific example. The idea sentence comes before the example.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. The Step-by-Step Solving Strategy */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The Step-by-Step Solving Strategy
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <p><strong>Example: Rearrange the following sentences (A, B, C, D) in a logical order.</strong></p>
        <div className="p-2 mt-2 bg-blue-500/10 rounded text-blue-700 dark:text-blue-400">
            <p><strong>A.</strong> He was, therefore, able to solve the problem easily.</p>
            <p><strong>B.</strong> The student was very intelligent.</p>
            <p><strong>C.</strong> The problem was very difficult.</p>
            <p><strong>D.</strong> But for him, it was quite simple.</p>
        </div>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Find the Opening Sentence:</strong> Sentence (B) introduces the subject ("The student") and is an independent statement. So, B is likely the start.</li>
            <li><strong>Find a Link to B:</strong> Sentence (C) introduces the problem. Sentence (D) starts with "But for him..." The pronoun "him" refers to the student. This links B and D. The contrast "But" suggests that the difficulty mentioned in C comes before. So, a likely pair is (C-D).</li>
            <li><strong>Arrange the Pairs:</strong> The flow seems to be: Introduce the student (B), introduce the problem (C), state the student's perspective on the problem (D). This gives the sequence B-C-D.</li>
            <li><strong>Place the Concluding Sentence:</strong> Sentence (A) starts with "He was, therefore..." which is a concluding statement of cause and effect. It logically follows the sequence B-C-D.</li>
            <li className="text-primary"><strong>Final Order:</strong> The correct order is <strong>BCDA</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Don't Read the Sentences in Order:</strong> Scan all sentences to find the most likely opening sentence first.</li>
        <li><strong>Look for Mandatory Pairs:</strong> Finding two sentences that must go together is the most powerful technique. It dramatically reduces the number of possible combinations.</li>
        <li><strong>Use the Options (If Provided):</strong> In multiple-choice questions, you don't always have to find the full sequence. You can test the given options to see which one has the most logical flow.</li>
        <li><strong>Pay Attention to Transition Words:</strong> Words like 'but', 'however', 'also', 'furthermore', 'similarly', 'hence' are strong clues that link ideas.</li>
        <li><strong>Practice:</strong> Like all reasoning topics, speed and accuracy in para jumbles come from consistent practice.</li>
      </ol>

      <hr className="my-6 border-border" />
      {/* <SentenceFormationQuiz /> */}
    </div>
  );
};


export default SentenceFormation;