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
      title: 'Chapter 1: Introduction & Analysis',
      folder: 'chapter-01',
      subChapters: [
        { id: '1.1', title: 'Introduction and Analysis', file: '01-Introduction-and-Analysis', type: 'note' },
        { id: '1.2', title: 'Big O Notation', file: '02-Big-O-Notation', type: 'note' },
        { id: '1.3', title: 'Time and Space Complexity', file: '03-Time-and-Space-Complexity', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-02',
      title: 'Chapter 2: Arrays',
      folder: 'chapter-02',
      subChapters: [
        { id: '2.1', title: 'Array Basics', file: '01-Array-Basics', type: 'note' },
        { id: '2.2', title: '2D Arrays', file: '02-2D-Arrays', type: 'note' },
        { id: '2.3', title: 'ArrayLists', file: '03-ArrayLists', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-03',
      title: 'Chapter 3: Strings',
      folder: 'chapter-03',
      subChapters: [
        { id: '3.1', title: 'String Manipulation', file: '01-String-Manipulation', type: 'note' },
        { id: '3.2', title: 'String Builders', file: '02-String-Builders', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-04',
      title: 'Chapter 4: Linked Lists',
      folder: 'chapter-04',
      subChapters: [
        { id: '4.1', title: 'Singly Linked Lists', file: '01-Singly-Linked-Lists', type: 'note' },
        { id: '4.2', title: 'Doubly Linked Lists', file: '02-Doubly-Linked-Lists', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-05',
      title: 'Chapter 5: Stacks & Queues',
      folder: 'chapter-05',
      subChapters: [
        { id: '5.1', title: 'Stacks (LIFO)', file: '01-Stacks-LIFO', type: 'note' },
        { id: '5.2', title: 'Queues (FIFO)', file: '02-Queues-FIFO', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-06',
      title: 'Chapter 6: Trees',
      folder: 'chapter-06',
      subChapters: [
        { id: '6.1', title: 'Tree Traversals', file: '01-Tree-Traversals', type: 'note' },
        { id: '6.2', title: 'Binary Trees', file: '02-Binary-Trees', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-07',
      title: 'Chapter 7: Graphs',
      folder: 'chapter-07',
      subChapters: [
        { id: '7.1', title: 'Graph Representations', file: '01-Graph-Representations', type: 'note' },
        { id: '7.2', title: 'BFS and DFS', file: '02-BFS-and-DFS', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-08',
      title: 'Chapter 8: Sorting',
      folder: 'chapter-08',
      subChapters: [
        { id: '8.1', title: 'Bubble Sort', file: '01-Bubble-Sort', type: 'note' },
        { id: '8.2', title: 'Merge Sort', file: '02-Merge-Sort', type: 'note' },
        { id: '8.3', title: 'Quick Sort', file: '03-Quick-Sort', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-09',
      title: 'Chapter 9: Searching',
      folder: 'chapter-09',
      subChapters: [
        { id: '9.1', title: 'Linear Search', file: '01-Linear-Search', type: 'note' },
        { id: '9.2', title: 'Binary Search', file: '02-Binary-Search', type: 'note' },
      ],
    },
    {
      id: 'dsa-chapter-10',
      title: 'Chapter 10: Dynamic Programming',
      folder: 'chapter-10',
      subChapters: [
        { id: '10.1', title: 'Dynamic Programming Intro', file: '01-Dynamic-Programming-Intro', type: 'note' },
        { id: '10.2', title: 'Memoization vs Tabulation', file: '02-Memoization-vs-Tabulation', type: 'note' },
      ],
    },
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