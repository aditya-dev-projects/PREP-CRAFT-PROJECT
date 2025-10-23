import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter9Quiz: React.FC = () => {
  const quizData = [
    { question: 'What is Redux Toolkit?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Zustand?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is performance optimization in React?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are WebSockets?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Socket.io?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is GraphQL?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are security best practices?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Jest?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is React Testing Library?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Postman?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />;
};

export default Chapter9Quiz;