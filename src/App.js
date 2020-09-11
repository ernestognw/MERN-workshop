import React from 'react';
import Navbar from './components/navbar';
import Container from 'react-bootstrap/container';
import Hot from './views/hot';
import Recent from './views/recent';
import Login from './views/login';
import Signup from './views/signup';
import Question from './views/question';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/hot">
            <Hot />
          </Route>
          <Route path="/recent">
            <Recent />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/question/:id">
            <Question />
          </Route>
          <Redirect to="/hot" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
