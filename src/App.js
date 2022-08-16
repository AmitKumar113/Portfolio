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

  constructor(){
    super()
    // window.matchMedia("(prefers-color-scheme: dark)").matches
    // console.log(MediaQueryList)
    this.state={
      mode : window.matchMedia("(prefers-color-scheme: dark)").matches?'dark':'light'
    }
  }

  toggleMode = ()=>{
    this.setState(
      {mode : this.state.mode==='light'?'dark':'light'}
    )
  }

  render() {
   
    return (
        <Router>
        <div className='container-app'>
        <Navbar mode={this.state.mode}/>
        <div className='darkmode-icon flex-container' onClick={this.toggleMode}><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill={this.state.mode==='light'?'black':'#C9D1D9'} d="M12 20q1.4 0 2.637-.45 1.238-.45 2.263-1.225-1.75-.625-3.4-1.875t-2.8-3.025Q9.55 11.65 9.075 9.4q-.475-2.25.05-4.85-2.25.85-3.687 2.9Q4 9.5 4 12q0 3.425 2.288 5.712Q8.575 20 12 20Zm0 1.5q-2.025 0-3.762-.725-1.738-.725-3.013-2t-2-3.013Q2.5 14.025 2.5 12q0-3.325 2.013-5.888Q6.525 3.55 9.85 2.825q.6-.15.888.225.287.375.087 1.025Q10.2 6.2 10.463 8.3q.262 2.1 1.262 3.875t2.65 3.087q1.65 1.313 3.8 1.863.675.175.838.613.162.437-.263.887-1.275 1.325-3.025 2.1-1.75.775-3.725.775Z"/></svg></div>
      
        <Routes>
          <Route exact  path='/skills' element={<Skills mode={this.state.mode}/>}/>
          <Route exact  path='/projects'  element={<Projects mode={this.state.mode}/>}/>
          <Route exact  path='/contact'  element={<Contact mode={this.state.mode}/>}/>
          <Route  path='/' element={<Home mode={this.state.mode}/>}/>
        </Routes>
        <Footer mode={this.state.mode}/>
        </div>
        </Router>
    )
  }
}



