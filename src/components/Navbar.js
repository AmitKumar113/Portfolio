import React, { Component } from 'react'
import './Navbar.css'
import darkmode from '../assets/darkmode2.png'
import { Link } from "react-router-dom";

export default class Navbar  extends Component {
  render() {
    return (
      <div className='container'>
        <div className='navbar-first'>AK.</div>
        <div>
        <ul className='navbar-middle'>
            {/* <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li> */}
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        </div>
        <div className='navbar-last'>
            <div className='download-btn '>download CV</div>
            <div className='darkmode-icon flex-container '><img src={darkmode} alt='darkmode'/></div>
            <div className='burger-container flex-container'>
                <div class="burger ">
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
                </div>
            </div> 
        </div>
      </div>
    )
  }
}
