// src/data/dsaCourse.ts

export interface SubChapter {
  id: string;
  title: string;
  file: string; // The exact filename (without .tsx extension)
  type: 'note' | 'quiz'; // Added type to differentiate
}

export interface Chapter {
  id: string;
  title: string;
  folder: string; // The exact folder name
  subChapters: SubChapter[];
}

export const dsaCourse: { title: string; chapters: Chapter[]; quizzes: { id: string; title: string; file: string; chapterId: string; }[] } = {
  title: 'Data Structures & Algorithms',
  chapters: [
    {
      id: 'dsa-chapter-01',
      title: 'Chapter 1: Basics Of Programming',
      folder: 'chapter-01',
      subChapters: [
        { id: '1.1', title: 'Variables & Data Types', file: '01-VariablesAndDataTypes', type: 'note' },
        { id: '1.2', title: 'Conditonal Statements', file: '02-ConditionalStatements', type: 'note' },
        { id: '1.3', title: 'Operators', file: '03-Operators', type: 'note' },
        { id: '1.4', title: 'Loops', file: '04-Loops', type: 'note' },
        { id: '1.5', title: 'Functions', file: '05-Functions', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-02',
      title: 'Chapter 2: Arrays',
      folder: 'chapter-02',
      subChapters: [
        { id: '2.1', title: 'Array Basics', file: '01-IntroToArrays', type: 'note' },
        { id: '2.2', title: '2D Arrays', file: '02-2D-Arrays', type: 'note' },
        { id: '2.3', title: 'Strings', file: '03-Strings', type: 'note' },
      ],
      // 
    },
    {
      id: 'dsa-chapter-03',
      title: 'Chapter 3: Sorting Techniques',
      folder: 'chapter-03',
      subChapters: [
        { id: '3.1', title: 'What Is Sorting', file: '01-Sorting', type: 'note' },
        { id: '3.2', title: 'Bubble Sort', file: '02-BubbleSorting', type: 'note' },
        { id: '3.3', title: 'Selection Sort', file: '03-SelectionSorting', type: 'note'},
        { id: '3.4', title: 'Insertion Sort', file: '04-InsertionSorting', type: 'note'},
        { id: '3.5', title: 'Counting ', file: '05-Counting', type: 'note'},
      ],
    },
    {
      id: 'dsa-chapter-04',
      title: 'Chapter 4: Problem Solving Techniques',
      folder: 'chapter-04',
      subChapters: [
        { id: '4.1', title: 'Recursion', file: '01-Recursion', type: 'note' },
        { id: '4.2', title: 'Backtracking', file: '02-BackTracking', type: 'note' },
        { id: '4.3', title: 'Divide & Conqueror', file: '03-DivideAndConqueror', type: 'note' },
        { id: '4.4', title: 'Bit Manipulation', file: '04-BitManipulation', type: 'note' },
        { id: '4.5', title: 'Time & Space Complexity', file: '05-TimeAndSpaceComplexity', type: 'note' },
        { id: '4.6', title: 'Greedy Algorithim', file: '06-GreedyAlgorithim', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-05',
      title: 'Chapter 5: Object Oriented Programming',
      folder: 'chapter-05',
      subChapters: [
        { id: '5.1', title: 'Basic Of OOPs', file: '01-BasicOops', type: 'note' },
        { id: '5.2', title: 'Advanced OOPs', file: '02-AdvancedOops', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-06',
      title: 'Chapter 6: Linear Data Structures',
      folder: 'chapter-06',
      subChapters: [
        { id: '6.1', title: 'Array Lists', file: '01-ArrayLists', type: 'note' },
        { id: '6.2', title: 'Linked Lists', file: '02-LinkedLists', type: 'note' },
        { id: '6.3', title: 'Stacks', file: '03-Stacks', type: 'note' },
        { id: '6.4', title: 'Queues', file: '04-Queues', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-07',
      title: 'Chapter 7: Trees',
      folder: 'chapter-07',
      subChapters: [
        { id: '7.1', title: 'Binary Trees', file: '01-BinaryTrees', type: 'note' },
        { id: '7.2', title: 'Binary Search Trees (BST)', file: '02-BinarySearchTrees', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-08',
      title: 'Chapter 8: Advanced Data Structures',
      folder: 'chapter-08',
      subChapters: [
        { id: '8.1', title: 'Heaps/Priority Queues', file: '01-Heaps', type: 'note' },
        { id: '8.2', title: 'Hashing (Maps & Sets)', file: '02-Hashing', type: 'note' },
        { id: '8.3', title: 'Tries', file: '03-Tries', type: 'note' },
        { id: '8.4', title: 'Graphs', file: '04-Graphs', type: 'note' },
        { id: '8.5', title: 'Segment Trees', file: '05-SegmentTrees', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-09',
      title: 'Chapter 9: Dynammic Programming',
      folder: 'chapter-09',
      subChapters: [
        { id: '9.1', title: 'Basic DP', file: '01-BasicDp', type: 'note' },
        { id: '9.2', title: 'Advanced DP', file: '02-AdvancedDp', type: 'note' },
      ],
    },
    // {
    //   id: 'dsa-chapter-10',
    //   title: 'Chapter 10: Dynamic Programming',
    //   folder: 'chapter-10',
    //   subChapters: [
    //     { id: '10.1', title: 'Dynamic Programming Intro', file: '01-Dynamic-Programming-Intro', type: 'note' },
    //     { id: '10.2', title: 'Memoization vs Tabulation', file: '02-Memoization-vs-Tabulation', type: 'note' },
    //   ],
    // },
  ],
  quizzes: [ // Added quizzes section
    { id: 'quiz-1', title: 'Chapter 1 Quiz', file: 'Chapter1Quiz', chapterId: 'dsa-chapter-01' },
    { id: 'quiz-2', title: 'Chapter 2 Quiz', file: 'Chapter2Quiz', chapterId: 'dsa-chapter-02' },
    { id: 'quiz-3', title: 'Chapter 3 Quiz', file: 'Chapter3Quiz', chapterId: 'dsa-chapter-03' },
    { id: 'quiz-4', title: 'Chapter 4 Quiz', file: 'Chapter4Quiz', chapterId: 'dsa-chapter-04' },
    { id: 'quiz-5', title: 'Chapter 5 Quiz', file: 'Chapter5Quiz', chapterId: 'dsa-chapter-05' },
    { id: 'quiz-6', title: 'Chapter 6 Quiz', file: 'Chapter6Quiz', chapterId: 'dsa-chapter-06' },
    { id: 'quiz-7', title: 'Chapter 7 Quiz', file: 'Chapter7Quiz', chapterId: 'dsa-chapter-07' },
    { id: 'quiz-8', title: 'Chapter 8 Quiz', file: 'Chapter8Quiz', chapterId: 'dsa-chapter-08' },
    { id: 'quiz-9', title: 'Chapter 9 Quiz', file: 'Chapter9Quiz', chapterId: 'dsa-chapter-09' },
    { id: 'quiz-10', title: 'Chapter 10 Quiz', file: 'Chapter10Quiz', chapterId: 'dsa-chapter-10' },
  ]
};

/* Quizzes Needs To Be Created :
-IntroToArrays
-2D-Arrays
-Strings
-Sorting
-BubbleSorting
-SelectionSorting
-InsertionSorting
-Counting
-Recursion
-Backtracking
-Divide & Conqueror
-Bit Manipulation
-Time & Space Complexity
-Greedy Algorithim
-Basic Of OOPs
-Advanced OOPs
-Array Lists
-Linked Lists
-Stacks
-Queues
-Binary Trees
-Binary Search Trees (BST)
-Heaps/Priority Queues
-Hashing (Maps & Sets)
-Tries
-Graphs
-Segment Trees
-Basic DP
-Advanced DP























*/