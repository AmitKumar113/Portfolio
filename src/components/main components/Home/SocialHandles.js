import React, { Component } from 'react'
import './SocialHandles.css'
import Instagram from '../../../assets/instagram2.png'
import Facebook from '../../../assets/facebook.png'
import Linkedin from '../../../assets/linkedin.png'
import Twitter from '../../../assets/twitter.png'

export default class SocialHandles extends Component {
  render() {
    return (
      <div className='social-handles-container'>
        <div><img src={Instagram} alt='Instagram Icon'/></div>
        <div><img src={Facebook} alt='Facebook Icon'/></div>
        <div><a href='https://www.linkedin.com/in/amit-kumar-021b45204/'><img src={Linkedin} alt='Linkedin Icon'/></a></div>
        <div><img src={Twitter} alt='Twitter Icon'/></div>
      </div>
    )
  }
}
