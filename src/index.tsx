import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, CreateMarvel, Marvel, UpdateMarvel, Login } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap'
import logo from './assets/img/marvel-logo.jpg';
import './styles.css';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

// Imports From React-Router-DOM
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from 'react-router-dom'

render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Router>
      <Navbar bg='dark' variant='dark'>

        <Navbar.Brand> {/* this is a child of Navbar */}
          <img 
            alt="Coding Marvel Members"
            src={logo}
            width='30'
            height='30'
            className="d-inline-block align-top"
            /> {' '}
            <Link to="/">Marvel Members Area</Link>
        </Navbar.Brand>

        {/* Nav Items to the right */}
        <Nav className="move-nav" activeKey='/'> 

        <Nav.Item>
          <Nav.Link>
            <Link to="/"> Home </Link>
          </Nav.Link>
        </Nav.Item>

        {/* Auth Check for Authed User */}
        <AuthCheck fallback={
          
          <Nav.Item>
            <Nav.Link>
              <Link to="/login">Login Here</Link>
            </Nav.Link>
          </Nav.Item>
        }>
          <Nav.Item> {/*  hiding this one */}
          <Nav.Link>
            <Link to="/marvel"> Display Your Marvel Character</Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item> 
          <Nav.Link>
            <Link to="/login"> Logout </Link>
          </Nav.Link>
        </Nav.Item>

        </AuthCheck>
        {/* End of Auth Check */}
        </Nav>

      </Navbar>
      {/* Comments for React */}
      <Switch>

        <Route exact path="/">
          <Home title='Coding Marvel'/>
        </Route>

        <Route path="/create">
          <CreateMarvel />
        </Route>

        <Route path="/marvel">
          <Marvel />
        </Route>

        <Route path="/update">
          <UpdateMarvel />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        
      </Switch>
    </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
