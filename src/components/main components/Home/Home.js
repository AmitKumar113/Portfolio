import React, { Component } from 'react'
import SocialHandles from './SocialHandles'
import Type from './Type'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='main-container'>
        <div className='text-and-image-container'>
        <div className='text-box'>
          <div>
            <section>Hi, There</section>
            <p>I'm AMIT KUMAR</p>
            {/* <p></p> */}
          <Type/>
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
