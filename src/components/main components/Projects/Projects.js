import React, { Component } from 'react'
import Project from './Project'
import './Projects.css'
import SocialHandles from '../Home/SocialHandles'


export default class Projects extends Component {
  render() {
    return (
      <div className={`main-container-projects home-mode-${this.props.mode}`}>
          <div className='heading'>Projects</div>
          <p>My recent work</p>
          <div className='projects-container'>
              <Project projectName='My portfolio' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              <Project projectName='Canvas Paint' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              <Project projectName='Micro-Niche Website' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              <Project projectName='ChitChat Web app' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              <Project projectName='Project 5' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
              <Project projectName='Project 6' projectDescription='this is my portfolio made with html, css, javascript and react which is js library.'/>
          </div>
          <div className='socialhandles-projects'>
            <div className='p1'>Connect With me</div>
            <div className='p2'>Want to discuss anything about projects?</div>
            <div className='p3'>Find me on</div>
            <SocialHandles mode={this.props.mode}/>
          </div>
      </div>
    )
  }
}
