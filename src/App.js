import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './App/Home/Home';
import { Login } from './App/Forms/Login/Login';
import { Register } from './App/Forms/Register/Register';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
        </Switch>
      </div>
    </Router>
  );
}

const HomeView = () => (
  <Home />
);

const LoginView = () => (
  <Login />
);

const RegisterView = () => (
  <Register />
);

export default App;
