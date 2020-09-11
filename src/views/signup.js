import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <Form className="mt-5">
        <Form.Group>
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="Correo" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Apellidos" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Repite tu contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Registrarme
        </Button>
        <Link to="/login">
          <Button variant="secondary" type="submit" className="mt-2" block>
            Ingresar
          </Button>
        </Link>
      </Form>
    </>
  );
};

export default Signup;
