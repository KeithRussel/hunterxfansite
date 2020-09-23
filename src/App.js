import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/layout/HeaderNav';
import Home from './components/pages/Home';
import Others from './components/pages/Others';
import Footer from './components/layout/Footer';

import './App.scss';
// import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Container className='customMargin'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/others' component={Others} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
