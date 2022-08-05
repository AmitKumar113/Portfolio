import React, { Component } from 'react'
import Project from './Project'
import './Projects.css'
// import Proptypes from 'react'


export default class Projects extends Component {
  render() {
    return (
      <div className='main-container-projects'>
          <div className='heading'> My Projects</div>
          <div className='projects-container'>
              <Project projectName='My portfolio' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              <Project projectName='Project 2' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              <Project projectName='Project 3' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              <Project projectName='Project 4' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              <Project projectName='Project 5' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              <Project projectName='Project 6' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              {/* <Project/>
              <Project/> */}
          </div>
      </div>
    )
  }
}
