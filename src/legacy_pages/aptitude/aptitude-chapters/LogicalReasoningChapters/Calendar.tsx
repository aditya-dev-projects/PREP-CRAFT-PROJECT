import React from 'react';
const Calendar: React.FC = () => {
  return (
   <div className="p-6 max-w-4xl mx-auto bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Logical Reasoning Chapter 4: Calendar</h1>

      <p className="mb-4 text-muted-foreground">
        Calendar problems are a unique type of logical puzzle that tests your ability to understand the structure of our calendar system and perform calculations based on a set of fixed rules. These questions are all about counting days and finding patterns in the repetition of weeks. The key to mastering this chapter is to understand the concept of <strong>"odd days."</strong>
      </p>

      <hr className="my-6 border-border" />

      {/* 1. The Core Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        1. The Core Concepts: Years and Days 
      </h2>
      <p className="mb-2 text-muted-foreground">
        Our entire calendar system is built on two types of years.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>Ordinary Year:</strong> A year that is <strong>not</strong> a leap year. It has <strong>365 days</strong>.</li>
            <li><strong>Leap Year:</strong> A year with an extra day (February 29th). It has <strong>366 days</strong>.
                <ul className="list-circle ml-6 mt-2">
                    <li><strong>Rule 1:</strong> If a year is divisible by <strong>4</strong>, it is a leap year (e.g., 2004, 2024).</li>
                    <li><strong>Exception for Century Years:</strong> A year ending in "00" (like 1900) is a leap year only if it is divisible by <strong>400</strong>. (e.g., 2000 was a leap year, 1900 was not).</li>
                </ul>
            </li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 2. The Golden Concept: Odd Days */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        2. The Golden Concept: Odd Days
      </h2>
      <p className="mb-2 text-muted-foreground">
        This is the <strong>most important concept</strong> for solving any calendar problem. An "odd day" is any day that is left over after accounting for the complete weeks in any given period. The day of the week repeats every 7 days, so we only care about the remainder when the total number of days is divided by 7.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>In an Ordinary Year (365 days):</strong> 365 ÷ 7 = 52 weeks and <strong>1 day</strong> remainder. So, an ordinary year has <strong>1 odd day</strong>.</li>
            <li><strong>In a Leap Year (366 days):</strong> 366 ÷ 7 = 52 weeks and <strong>2 days</strong> remainder. So, a leap year has <strong>2 odd days</strong>.</li>
        </ul>
      </div>

      <hr className="my-6 border-border" />

      {/* 3. Odd Days in Centuries */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        3. Odd Days in Centuries
      </h2>
       <p className="mb-2 text-muted-foreground">
        This is a fixed reference that helps in solving problems involving dates from different centuries.
      </p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li><strong>100 Years:</strong> Contains 76 ordinary years and 24 leap years. Total odd days = (76×1) + (24×2) = 124 days. 124 ÷ 7 gives a remainder of <strong>5</strong>. So, 100 years have <strong>5 odd days</strong>.</li>
            <li><strong>200 Years:</strong> 5 × 2 = 10 days → <strong>3 odd days</strong>.</li>
            <li><strong>300 Years:</strong> 5 × 3 = 15 days → <strong>1 odd day</strong>.</li>
            <li><strong>400 Years:</strong> (5 × 4) + 1 (for the leap year 400) = 21 days → <strong>0 odd days</strong>.</li>
            <li className="text-primary">This cycle of (5, 3, 1, 0) repeats. Any 400-year block (e.g., 1600, 2000) has 0 odd days.</li>
        </ul>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 4. Finding the Day of the Week */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        4. Finding the Day of the Week for Any Date
      </h2>
      <p className="mb-2 text-muted-foreground">We use a reference point and count the total number of odd days up to the given date.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Example: What was the day of the week on 15th August 1947?</h4>
        <ol className="list-decimal ml-6 mt-2 text-muted-foreground">
            <li><strong>Break down the timeline:</strong> 1946 years + (Period from Jan 1, 1947 to Aug 15, 1947).</li>
            <li><strong>Odd days for centuries:</strong> 1900 years = 1600 + 300 years. Odd days = 0 + 1 = <strong>1 odd day</strong>.</li>
            <li><strong>Odd days for completed years (46 years):</strong> 11 leap years, 35 ordinary years. Odd days = (11×2) + (35×1) = 57 days. 57 ÷ 7 gives a remainder of <strong>1 odd day</strong>.</li>
            <li><strong>Odd days for the current year (1947):</strong> Jan(3) + Feb(0) + Mar(3) + Apr(2) + May(3) + Jun(2) + Jul(3) + Aug(15) = 31 days. 31 ÷ 7 gives a remainder of <strong>3 odd days</strong>.</li>
            <li><strong>Total Odd Days:</strong> 1 (from centuries) + 1 (from years) + 3 (from current year) = <strong>5 odd days</strong>.</li>
            <li className="text-primary"><strong>Find the day:</strong> 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat. So, 5 odd days means <strong>Friday</strong>.</li>
        </ol>
      </div>
      
      <hr className="my-6 border-border" />

      {/* 5. Calendar Repetition */}
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-primary-foreground">
        5. Calendar Repetition
      </h2>
      <p className="mb-2 text-muted-foreground">The calendar for any year repeats when the total number of odd days after that year becomes a multiple of 7.</p>
      <div className="p-4 mt-4 bg-muted rounded-lg border border-border">
        <h4 className="font-bold text-secondary-foreground">Shortcuts:</h4>
        <ul className="list-disc ml-6 mt-2 text-muted-foreground">
            <li>The calendar for a year immediately following a <strong>leap year</strong> will repeat after <strong>6 years</strong>. (e.g., 2005 repeats in 2011).</li>
            <li>The calendar for any other <strong>ordinary year</strong> will repeat after <strong>11 years</strong>. (e.g., 2006 repeats in 2017).</li>
            <li>The calendar for a <strong>leap year</strong> will always repeat after <strong>28 years</strong>. (e.g., 2024 will repeat in 2052).</li>
        </ul>
      </div>
    </div>
  );
};

export default Calendar;

// without changing the css just add the notes of calendar line by line without missing anything and dont add quiz part





