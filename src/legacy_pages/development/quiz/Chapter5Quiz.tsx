import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter5Quiz: React.FC = () => {
  const quizData = [
    { question: 'What is Node.js?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is npm?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Express.js?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is middleware?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is routing?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a REST API?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is CRUD?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is JWT?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is bcrypt?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a mini project?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />;
};

export default Chapter5Quiz;