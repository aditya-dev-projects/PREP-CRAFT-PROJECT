import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter1Quiz: React.FC = () => {
  const quizData = [
    { question: 'What is web development?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is client-server architecture?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the difference between frontend and backend?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the MERN stack?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is VS Code?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Node.js?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is Git?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What are browser dev tools?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the purpose of a client?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the purpose of a server?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />; 
};

export default Chapter1Quiz;