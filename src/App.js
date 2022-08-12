import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/main components/Home/Home'
import Skills from './components/main components/Skills/Skills'
import Projects from './components/main components/Projects/Projects'
import Contact from './components/main components/Contact/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'

export default class App extends Component {
  render() {
    return (
      // <Router>
        <Router>
        <div className='container-app'>
        <Navbar/>
        {/* <Home></Home> */}
        {/* <Skills></Skills> */}
        {/* <Projects></Projects> */}
        {/* <Contact></Contact> */}
        <Routes>
          <Route exact  path='/skills' element={<Skills/>}/>
          <Route exact  path='/projects'  element={<Projects/>}/>
          <Route exact  path='/contact'  element={<Contact/>}/>
          <Route  path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
        </div>
        </Router>
      // </Router>
    )
  }
}



