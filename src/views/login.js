import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="Correo" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contrasña" />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Ingresar
        </Button>
        <Link to="/signup">
          <Button variant="secondary" type="submit" className="mt-2" block>
            Registrarme
          </Button>
        </Link>
      </Form>
    </>
  );
};

export default Login;
