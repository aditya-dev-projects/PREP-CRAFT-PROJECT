import React from 'react';
const SynnonymAndAntonym: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 4: Synonyms & Antonyms</h1>

      <p className="mb-4 text-muted-foreground">
        Synonyms and Antonyms are fundamental vocabulary-based questions in the VARC section. <strong>Synonyms</strong> are words that have the same or nearly the same meaning, while <strong>Antonyms</strong> are words that have the opposite meaning. These questions directly test the breadth and precision of your vocabulary.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Understanding Nuance .
      </h2>
      <p className="mb-2 text-muted-foreground">
        The key to this topic is understanding that words have shades of meaning (nuance). A synonym is rarely a perfect replacement. The goal is to find the word that is **closest** in meaning (for synonyms) or most **diametrically opposed** (for antonyms) in the given context.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Example of Nuance:</h4>
        <p className="mt-2 text-muted-foreground">The words "thin," "slim," and "skinny" are synonyms for not being fat. However, "slim" often has a positive connotation (healthy), while "skinny" can have a negative connotation (unhealthily thin).</p>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Synonyms in Depth */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Synonyms: Finding the Closest Match
      </h2>
      <p className="mb-2 text-muted-foreground">
        A synonym is a word that means exactly or nearly the same as another word.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Common Examples:</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Happy:</strong> Joyful, Cheerful, Delighted, Elated</li>
            <li><strong>Brave:</strong> Courageous, Fearless, Valiant, Heroic</li>
            <li><strong>Important:</strong> Significant, Crucial, Vital, Essential</li>
        </ul>
        <p className="mt-4 text-muted-foreground"><strong>Question Type:</strong> You will be given a word and asked to choose the closest synonym from a list of options.</p>
        <p className="mt-2 text-primary"><strong>Example:</strong> Choose the synonym for <strong>TRANSIENT</strong>. (A) Permanent (B) Fleeting (C) Slow (D) Stationary. <br/><strong>Answer:</strong> (B) Fleeting, as both mean lasting for a very short time.</p>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 3. Antonyms in Depth */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Antonyms: Finding the Opposite
      </h2>
       <p className="mb-2 text-muted-foreground">
        An antonym is a word that has the opposite meaning of another word.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Common Examples:</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Ancient:</strong> Modern</li>
            <li><strong>Brave:</strong> Cowardly</li>
            <li><strong>Abundant:</strong> Scarce</li>
        </ul>
        <p className="mt-4 text-muted-foreground"><strong>Question Type:</strong> You will be given a word and asked to choose the word that is most nearly opposite in meaning.</p>
        <p className="mt-2 text-primary"><strong>Example:</strong> Choose the antonym for <strong>EXPAND</strong>. (A) Widen (B) Enlarge (C) Contract (D) Stretch. <br/><strong>Answer:</strong> (C) Contract, as it means to become smaller, the opposite of expanding.</p>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Strategy for Solving Questions */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Strategy for Solving Questions
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground space-y-2">
            <li><strong>Understand the Given Word:</strong> First, make sure you understand the meaning of the word in the question. Try to use it in a sentence.</li>
            <li><strong>Consider the Part of Speech:</strong> Is the word a noun, verb, or adjective? Its synonym or antonym will almost always be the same part of speech. This can help eliminate options.</li>
            <li><strong>Eliminate Obvious Mismatches:</strong> Go through the options and immediately discard any words that are clearly unrelated.</li>
            <li><strong>The Root Word Method:</strong> If you don't know the word, look at its root. For example, 'bene-' often means 'good' (e.g., benefit, benevolent), while 'mal-' often means 'bad' (e.g., malice, malevolent). This can give you a clue about its meaning.</li>
            <li><strong>Positive/Negative Connotation:</strong> Determine if the given word has a positive or negative feel. For a synonym, look for an option with a similar feel. For an antonym, look for one with the opposite feel.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Build Your Vocabulary:</strong> This is the most important step. Regularly learn new words through reading, using flashcards, or vocabulary-building apps.</li>
        <li><strong>Focus on Context:</strong> Understand that a word's meaning can change slightly based on how it's used.</li>
        <li><strong>Learn Prefixes and Suffixes:</strong> Knowing common prefixes (like 'un-', 'in-', 'mis-') and suffixes can help you guess the meaning of unknown words.</li>
        <li><strong>Practice Elimination:</strong> You don't always need to know the right answer immediately. Often, you can find it by confidently eliminating the three wrong answers.</li>
      </ol>

    </div>
  );
};


export default SynnonymAndAntonym;