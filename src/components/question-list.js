import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import { useHistory } from 'react-router-dom';
import * as Icons from 'react-icons/di';

const QuestionList = ({ questions }) => {
  const { push } = useHistory();
  return (
    <>
      {questions.map((question) => {
        const IconComponent = Icons[question.icon];

        return (
          <Card key={question.id * Math.random()} style={{ margin: '10px 0' }}>
            <Card.Header as="h5">
              <IconComponent />
            </Card.Header>
            <Card.Body>
              <Card.Title>{question.title}</Card.Title>
              <Card.Text className="text-muted">
                {question.answers.length} Respuestas
              </Card.Text>
              <Button
                onClick={() => push(`/question/${question.id}`)}
                variant="primary"
              >
                Ver pregunta
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default QuestionList;
