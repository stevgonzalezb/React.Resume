import React from 'react'
import {Container, Grid} from "@material-ui/core"

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
//import { ReactNotifications } from 'react-notifications-component'

import {HashRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';


const App = () => {

return (
  <>
  {/* <ReactNotifications /> */}
  <Container className={'top-60'}>
  <Router>
    <Grid container spacing={6} >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Route path='/:lang'>
          <Profile/>
        </Route>
      </Grid>
      <Grid item xs>
          <div className='main-content containter-shadow'>
          <Switch>
            <Route path='/:lang/portfolio'>
              <Header/>
              <Portfolio/>
            </Route>
            <Route path='/:lang'>
              <Header/>
              <Resume/>
            </Route>
            
          </Switch>
          </div>
        <Footer/>
      </Grid>
    </Grid>
    </Router>
  </Container>
  </>
);
}

export default App;
