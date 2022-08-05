import React, { Component } from 'react'
import './Project.css'


export default class Project extends Component {
  render(props) {
    return (
      <div className='main-container-project card'>
        {/* <div></div>  ------div for image of project---------  */ }
        <div className='project-name'>{this.props.projectName} </div> 
        <div className='project-description'>{this.props.projectDescription}</div>
        <div className='btns'>
            <button className='project-btns project-btn1'>GitHub</button>
            <button className='project-btns project-btn2'>Demo</button>
        </div> 
      </div>
    )
  }
}
