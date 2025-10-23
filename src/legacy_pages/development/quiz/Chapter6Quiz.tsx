import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter6Quiz: React.FC = () => {
  const quizData = [
    { question: 'What is MongoDB?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is NoSQL?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are CRUD operations?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Mongoose?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are data relationships?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is indexing?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is aggregation?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a mini project?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the purpose of a mini project?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a database?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />;
};

export default Chapter6Quiz;