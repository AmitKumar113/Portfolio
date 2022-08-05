import React, { Component } from 'react'
import SocialHandles from './SocialHandles'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='main-container'>
        <div className='text-and-image-container'>
        <div className='text-box'>
          <div>
            <h3>Hi, There</h3>
            <h1>I'm AMIT KUMAR</h1>
            <p>FRONT-END DEVELOPER</p>
          </div>
        </div>
        <div className='image-box'>
            <div>
            </div>
        </div>
        </div>
      <div className='social-handles-container-home'><SocialHandles/></div>
      </div>
        

    )
  }
}
