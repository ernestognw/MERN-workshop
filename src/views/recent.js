import React from 'react';
import QuestionList from '../components/question-list';

const Recent = () => {
  const questions = [
    {
      id: Date.now(),
      title: 'Duda con Android',
      description: 'Hola, tengo una duda con Android',
      icon: 'DiAndroid',
      createdAt: Date.now(),
      answers: [
        {
          description: 'Respuesta Android',
        },
        {
          description: 'Respuesta Android',
        },
      ],
    },
    {
      id: Date.now(),
      title: 'Duda con React',
      description: 'Hola, tengo una duda con React',
      icon: 'DiReact',
      createdAt: Date.now(),
      answers: [
        {
          description: 'Respuesta React',
        },
      ],
    },
  ];

  return (
    <>
      <QuestionList questions={questions} />
    </>
  );
};

export default Recent;
