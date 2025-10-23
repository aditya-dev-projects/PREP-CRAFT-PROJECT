import React from 'react';
const ReadingComp: React.FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Chapter 1: Reading Comprehension (RC)</h1>

      <p className="mb-4 text-muted-foreground">
        Reading Comprehension is the cornerstone of the VARC (Verbal Ability and Reading Comprehension) section. It tests your ability to <strong>read, understand, and analyze</strong> a given passage. Success in RC is not about speed reading; it's about efficient reading, critical thinking, and the ability to accurately identify what the author is trying to convey.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: Active Reading 
      </h2>
      <p className="mb-2 text-muted-foreground">
        Passive reading is simply letting your eyes scan the words. Active reading is a conscious process of engagement with the text. Your goal is to understand the passage's structure, main idea, and the author's tone.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The Active Reading Checklist:</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Identify the Main Idea:</strong> What is the single most important point the author is trying to make? This is the central theme of the passage.</li>
            <li><strong>Understand the Structure:</strong> How is the passage organized? Does it present a problem and then a solution? Does it compare and contrast two ideas? Does it explain a historical event chronologically?</li>
            <li><strong>Note the Author's Tone:</strong> What is the author's attitude towards the subject? Are they critical, supportive, neutral, analytical, or sarcastic?</li>
            <li><strong>Look for Keywords:</strong> Pay attention to transition words like "however," "therefore," "in contrast," and "for example." They signal shifts in the argument.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The Step-by-Step Approach to an RC Passage */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Step-by-Step Approach to an RC Passage
      </h2>
      <p className="mb-2 text-muted-foreground">
        Having a consistent strategy is key to tackling RC passages efficiently under time pressure.
      </p>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
          <li><strong>First Skim (30-45 seconds):</strong> Quickly read the first and last sentences of each paragraph. This often gives you a high-level summary of the passage's main idea and structure.</li>
          <li><strong>Read the Questions (but not the options):</strong> Before reading the passage in detail, quickly glance at the questions. This tells you what specific information you need to look for. Are they asking about the main idea, a specific detail, or the author's tone?</li>
          <li><strong>Read the Passage Actively:</strong> Now, read the entire passage with the questions in mind. Make mental notes or underline key phrases related to the questions you just read. Focus on understanding the "why" behind the author's statements.</li>
          <li><strong>Answer the Questions:</strong> Tackle the questions one by one. Always go back to the passage to find evidence for your answer. Do not rely on your memory alone.</li>
      </ol>
      
      <hr className="my-6 border-border" />

      {/* 3. Common Question Types */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Common Question Types
      </h2>
       <p className="mb-2 text-muted-foreground">
        RC questions are not random. They fall into predictable categories.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Main Idea / Primary Purpose Questions:</strong> Asks for the central theme or the author's main goal. (e.g., "The primary purpose of the passage is to...")</li>
            <li><strong>Specific Detail / Fact-Based Questions:</strong> Asks for information that is directly stated in the passage. (e.g., "According to the passage, which of the following is true about...?").</li>
            <li><strong>Inference Questions:</strong> Asks for something that is not directly stated but is strongly implied. You need to "read between the lines." (e.g., "It can be inferred from the passage that...").</li>
            <li><strong>Tone / Attitude Questions:</strong> Asks about the author's feelings or perspective towards the subject. (e.g., "The author's tone can best be described as...").</li>
            <li><strong>Vocabulary-in-Context Questions:</strong> Asks for the meaning of a specific word as it is used in the passage. (e.g., "The word 'sanction' in the second paragraph most nearly means...").</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. The Art of Elimination */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. The Art of Elimination: Spotting Trap Options
      </h2>
      <p className="mb-2 text-muted-foreground">Often, it's easier to find the wrong answers than the right one. Look for these common traps in the options:</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Too Extreme:</strong> Options that use absolute words like "always," "never," "all," "none," or "only." The passage is usually more nuanced.</li>
            <li><strong>Out of Scope:</strong> Options that introduce information or ideas not mentioned in the passage at all.</li>
            <li><strong>True but Irrelevant:</strong> The option might state a fact that is true, but it doesn't actually answer the specific question being asked.</li>
            <li><strong>One Word Off:</strong> The option looks perfect but contains one word that makes it incorrect or contradicts the passage.</li>
            <li><strong>Distortion:</strong> The option twists the information presented in the passage to mean something slightly different.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Focus on the Main Idea:</strong> Don't get lost in minor details. Always keep the central theme in mind.</li>
        <li><strong>Paraphrase, Don't Memorize:</strong> Try to understand the author's point in your own words rather than memorizing sentences.</li>
        <li><strong>Base Your Answer ONLY on the Passage:</strong> Do not use any outside knowledge you have on the topic. The answer must be supported by evidence from the text.</li>
        <li><strong>Manage Your Time:</strong> Don't spend too much time on one difficult question. It's better to make an educated guess and move on.</li>
        <li><strong>Practice with Diverse Topics:</strong> Read passages from various subjects (science, history, philosophy, economics) to get comfortable with different writing styles and vocabularies.</li>
      </ol>

    
    </div>
  );
};


export default ReadingComp;