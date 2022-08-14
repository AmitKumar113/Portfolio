import React, { useState, Component } from 'react'
import Resume from '../assets/amit kumar resume.pdf'
import './Navbar.css'
import darkmode from '../assets/darkmode2.png'
import { Link } from "react-router-dom";

export default class Navbar  extends Component {

  constructor(){
    super()

      this.state = {
        myStyle : {
          color: 'black',
          backgroundColor: 'rgba(203, 209, 208, 0.781)'
        }
      }
    }

  toggleMode = (state)=>{
      console.log("toggle mode called");
    if(this.state.myStyle.color === 'white')
    
    {
      this.setState({
        myStyle : {
          color:'black',
          backgroundColor:'rgba(203, 209, 208, 0.781)'}})
        }
        else{
          this.setState({
            myStyle : {
              color:'white',
              backgroundColor:'black'}})
        }
    
  }
  // myStyle = {
  //   color: 'white',
  //   backgroundColor: 'rgb(20%, 20%, 20%)'
  // }

  render() {

    return (
      <div className='container' style={this.state.myStyle}>
        <div className='navbar-first'>AK.</div>
        <div>
        <ul className='navbar-middle'>
            {/* <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li> */}
            <li><Link to='/' style={{color:this.state.myStyle.color}}>Home</Link></li>
            <li><Link to='/skills' style={{color:this.state.myStyle.color}}>Skills</Link></li>
            <li><Link to='/projects' style={{color:this.state.myStyle.color}}>Projects</Link></li>
            <li><Link to='/contact' style={{color:this.state.myStyle.color}}>Contact</Link></li>
        </ul>
        </div>
        <div className='navbar-last'>
            <div className='download-btn '><a href={Resume} download style={{color:this.state.myStyle.color}}>download CV</a></div>
            <div className='darkmode-icon flex-container' onClick={this.toggleMode}><img src={darkmode} alt='darkmode'/></div>
            
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
