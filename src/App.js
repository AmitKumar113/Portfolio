import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/main components/Home/Home'
import Skills from './components/main components/Skills/Skills'
import Projects from './components/main components/Projects/Projects'
import Contact from './components/main components/Contact/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-app'>
        <Navbar/>
        <Switch>
          <Route exact  path='/skills' component={Skills}/>
          <Route exact  path='/projects'  component={Projects}/>
          <Route exact  path='/contact'  component={Contact}/>
          <Route  path='/' component={Home}/>
        </Switch>
        <Footer/>
        </div>
      </Router>
    )
  }
}

// v r in the responsiveness branch after a merge