import React from 'react';
const SpottingErrors: React.FC = () => {
  return (
  <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary"> Chapter 2: Spotting Errors</h1>

      <p className="mb-4 text-muted-foreground">
        Spotting Errors, also known as Sentence Correction, is a common question type in the VARC section. It tests your knowledge of core English grammar rules. You are typically given a sentence divided into parts, and you must identify which part contains a grammatical error. If there is no error, you choose the "No error" option.
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concept */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concept: The "Grammar Checklist" 
      </h2>
      <p className="mb-2 text-muted-foreground">
        Success in this topic comes from systematically checking for a few common types of errors. Instead of just reading the sentence and seeing if it "sounds right," you should actively hunt for specific grammatical mistakes.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">The Mental Checklist:</h4>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Subject-Verb Agreement:</strong> Does the verb match the subject in number (singular/plural)?</li>
            <li><strong>Pronouns:</strong> Is the pronoun correct (e.g., 'he' vs 'him')? Does it agree with the noun it's replacing?</li>
            <li><strong>Tenses:</strong> Are the verb tenses consistent throughout the sentence?</li>
            <li><strong>Modifiers:</strong> Is it clear which word an adjective or adverb is describing?</li>
            <li><strong>Prepositions & Conjunctions:</strong> Are the correct prepositions (in, on, at) and conjunctions (and, but, or) used?</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. Rule 1: Subject-Verb Agreement Errors */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. Rule 1: Subject-Verb Agreement Errors
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the most frequently tested rule. A singular subject must have a singular verb, and a plural subject must have a plural verb.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Incorrect:</strong> The list of items <strong>are</strong> on the desk.
                <p className="text-xs text-muted-foreground">(The subject is "list," which is singular, not "items.")</p>
                <p className="text-primary text-sm"><strong>Correct:</strong> The list of items <strong>is</strong> on the desk.</p>
            </li>
            <li><strong>Incorrect:</strong> Each of the students <strong>are</strong> intelligent.
                <p className="text-xs text-muted-foreground">(Words like 'Each', 'Every', 'Either', 'Neither' are singular.)</p>
                <p className="text-primary text-sm"><strong>Correct:</strong> Each of the students <strong>is</strong> intelligent.</p>
            </li>
             <li><strong>Incorrect:</strong> The team of players <strong>are</strong> practicing.
                <p className="text-xs text-muted-foreground">(Collective nouns like 'team', 'group', 'committee' are treated as singular.)</p>
                <p className="text-primary text-sm"><strong>Correct:</strong> The team of players <strong>is</strong> practicing.</p>
            </li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 3. Rule 2: Pronoun Errors */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Rule 2: Pronoun Errors
      </h2>
       <p className="mb-2 text-muted-foreground">
        Pronouns must agree with the noun they refer to (the antecedent) in number and gender, and they must be in the correct case (subjective/objective).
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-3 text-muted-foreground">
            <li><strong>Incorrect Case:</strong> The teacher gave the award to Sam and <strong>I</strong>.
                 <p className="text-xs text-muted-foreground">(The pronoun is the object of the preposition 'to', so it must be in the objective case.)</p>
                <p className="text-primary text-sm"><strong>Correct:</strong> The teacher gave the award to Sam and <strong>me</strong>.</p>
            </li>
            <li><strong>Agreement Error:</strong> Each of the girls must bring <strong>their</strong> own lunch.
                <p className="text-xs text-muted-foreground">('Each' is singular, so the pronoun must also be singular.)</p>
                <p className="text-primary text-sm"><strong>Correct:</strong> Each of the girls must bring <strong>her</strong> own lunch.</p>
            </li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Rule 3: Modifier and Tense Errors */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Rule 3: Modifier and Tense Errors
      </h2>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Misplaced Modifiers:</h4>
        <p className="mt-1 text-muted-foreground">A descriptive phrase must be placed next to the word it is describing.</p>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground mt-2">
            <li><strong>Incorrect:</strong> Covered in mud, the owner gave his dog a bath.
                <p className="text-xs text-muted-foreground">(This sounds like the owner was covered in mud.)</p>
                <p className="text-primary text-sm"><strong>Correct:</strong> The owner gave his dog, which was covered in mud, a bath.</p>
            </li>
        </ul>
      </div>
       <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Inconsistent Verb Tense:</h4>
        <p className="mt-1 text-muted-foreground">The tenses in a sentence should be consistent unless there's a logical reason for them to change.</p>
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground mt-2">
            <li><strong>Incorrect:</strong> He <strong>walked</strong> into the room and <strong>sees</strong> a strange sight.
                <p className="text-xs text-muted-foreground">(The sentence starts in the past tense but switches to the present.)</p>
                <p className="text-primary text-sm"><strong>Correct:</strong> He <strong>walked</strong> into the room and <strong>saw</strong> a strange sight.</p>
            </li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Key Strategy Summary */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Key Strategy Summary
      </h2>
      <ol className="list-decimal ml-6 space-y-3 text-muted-foreground">
        <li><strong>Read the Entire Sentence First:</strong> Get a feel for the overall meaning before you start hunting for errors.</li>
        <li><strong>Check Subject-Verb Agreement:</strong> Find the main subject and its verb. Do they agree in number? This is the most common error.</li>
        <li><strong>Check Pronouns:</strong> Find every pronoun and check its antecedent and case.</li>
        <li><strong>Check Verb Tenses:</strong> Ensure the timeline of the sentence is logical and the verb tenses are consistent.</li>
        <li><strong>Read Each Part Separately:</strong> If you can't find an error, read each underlined part in isolation to see if it sounds grammatically awkward.</li>
        <li><strong>Trust Your Ear, but Verify with Rules:</strong> Sometimes a sentence "sounds wrong" for a reason. Use your intuition to find potential errors, but then confirm them with a specific grammar rule.</li>
      </ol>

    
    </div>
  );
};


export default SpottingErrors;