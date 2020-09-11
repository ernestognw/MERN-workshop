import React from 'react';
import Jumbotron from 'react-bootstrap/jumbotron';
import Row from 'react-bootstrap/row';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import Form from 'react-bootstrap/form';
import moment from 'moment';
import * as Icons from 'react-icons/di';

const Question = () => {
  const question = {
    id: Date.now(),
    title: 'Duda con Android',
    description: 'Hola, tengo una duda con Android',
    icon: 'DiAndroid',
    user: {
      firstName: 'Foo',
      lastName: 'Bar',
    },
    createdAt: Date.now(),
    answers: [
      {
        description: 'Respuesta Android',
        createdAt: Date.now(),
        user: {
          firstName: 'Foo',
          lastName: 'Bar',
        },
      },
      {
        description: 'Respuesta Android',
        createdAt: Date.now(),
        user: {
          firstName: 'Foo',
          lastName: 'Bar',
        },
      },
    ],
  };

  const Icon = Icons[question.icon];

  return (
    <>
      <Jumbotron>
        <h1>
          <Icon /> {question.title}
        </h1>
        <p>{question.description}</p>
        <p>
          Publicado por: {question.user.firstName} {question.user.lastName}
        </p>
      </Jumbotron>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Responder:</Form.Label>
          <Form.Control as="textarea" rows="3" />
          <Button variant="primary" className="mt-2" block>
            Responder
          </Button>
        </Form.Group>
      </Form>
      {question.answers.map((answer) => (
        <Card className="my-2">
          <Card.Body>
            <Card.Title>
              {answer.user.firstName} {answer.user.lastName}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {moment(answer.createdAt).fromNow()}
            </Card.Subtitle>

            <Card.Text>{answer.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Question;
