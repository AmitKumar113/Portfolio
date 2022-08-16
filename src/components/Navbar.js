import React, { Component } from 'react'
import Resume from '../assets/amit kumar resume.pdf'
import './Navbar.css'
import { Link } from "react-router-dom";

export default class Navbar  extends Component {

  render() {

    return (
      <div className={`container navbar-mode-${this.props.mode}`} >
        <div className='navbar-first'>AK.</div>
        <div>
        <ul className='navbar-middle'>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/skills' >About</Link></li>
            <li><Link to='/projects' >Projects</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        </div>
        <div className='navbar-last'>
            <div className='download-btn '><a href={Resume} download >download CV</a></div>
            <div className='darkmode-icon flex-container'>
            </div>
            
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
