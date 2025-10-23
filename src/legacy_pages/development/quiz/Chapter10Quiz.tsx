import React from 'react';
import Quiz from '../../../components/Quiz';

const Chapter10Quiz: React.FC = () => {
  const quizData = [
    { question: 'What is a full-stack eCommerce app?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a social media clone?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a chat application?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a blog platform?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is a capstone project?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'What is the purpose of a capstone project?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'How do you build a full-stack eCommerce app?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'How do you build a social media clone?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'How do you build a chat application?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { question: 'How do you build a blog platform?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
  ];

  return <Quiz quizData={quizData} />;
};

export default Chapter10Quiz;