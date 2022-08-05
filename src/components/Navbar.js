import React, { Component } from 'react'
import './Navbar.css'
import darkmode from '../assets/darkmode2.png'
import {
  BrowserRouter as 
  NavLink,
} from 'react-router-dom'

export default class Navbar  extends Component {
  render() {
    return (
      <div className='container'>
        <div className='navbar-first'>AK.</div>
        <div>
        <ul className='navbar-middle'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/skills'>Skills</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/contact'>Contact me</NavLink></li>
        </ul>
        </div>
        <div className='navbar-last'>
            <div className='download-btn '>download CV</div>
            <div className='darkmode-icon flex-container '><img src={darkmode} alt='darkmode'/></div>
        </div>
      </div>
    )
  }
}
