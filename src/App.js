import React from 'react'
import {Container, Grid} from "@material-ui/core";

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import { ReactNotifications } from 'react-notifications-component'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';


const App = () => {

  return (
    <>
    {/* <ReactNotifications /> */}
    <Container className={'top-60'}>
      <Grid container spacing={6} >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Profile/>
        </Grid>
        <Grid item xs>
            <Router>
              <Header/>
              <div className='main-content containter-shadow' >
              <Switch>
                <Route path='/portfolio'>
                  <Portfolio/>
                </Route>
                <Route path='/'>
                  <Resume/>
                </Route>
              </Switch>
              </div>
            </Router>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default App;
