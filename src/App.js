import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Home } from './App/Home/Home';
import { Login } from './App/Forms/Login/Login';
import { Register } from './App/Forms/Register/Register';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function HomeView() {
  if (fakeAuth.isAuthenticated) {
    return <Home />;
  } else {
    return <Login />;
  }
}

const PrivateRoute = ({ component: Component, auth }) => (
  <Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{ pathname: '/' }} />
  }
  />
)

function NoMatch() {
  let location = useLocation();

  return (
    <Grid container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} spacing={3}>        
        <div>
          <Typography variant="h2" component="h3">
            No match for <code>{location.pathname}</code>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default App;
