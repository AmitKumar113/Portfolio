import React, { Component } from 'react'
import Resume from '../assets/amit kumar resume.pdf'
import './Navbar.css'
import { Link } from "react-router-dom";

export default class Navbar  extends Component {

  burgerClick = ()=>{
    console.log("burger")
    // console.log(document.querySelector('.navbar-first').style)
    document.querySelector('.navbar-middle').style.visibility = document.querySelector('.navbar-middle').style.visibility === 'visible'? 'hidden' : 'visible'
    if(document.querySelector('.navbar-middle').style.visibility==='visible')
    {   document.querySelector('.burger').classList.add('cross')
        document.querySelector('.download-btn').style.visibility='visible'
        document.querySelector('.navbar-middle').classList.add('transform')
        document.querySelector('.download-btn').classList.add('transform')
      }
      else {document.querySelector('.burger').classList.remove('cross')
      document.querySelector('.download-btn').style.visibility='hidden'
      document.querySelector('.navbar-middle').classList.remove('transform')
      document.querySelector('.download-btn').classList.remove('transform')
    }  
}

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
            {/* <div className='darkmode-icon flex-container'>
            </div> */}
            
            <div className={`burger-container flex-container navbar-mode-${this.props.mode}`} onClick={this.burgerClick}>
                <div class="burger " >
                  <div class="line line1"></div>
                  <div class="line line2"></div>
                  <div class="line line3"></div>
                </div>
            </div> 
        </div>
      </div>
    )
  }
}
