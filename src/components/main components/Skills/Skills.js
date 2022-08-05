import React, { Component } from 'react'
import PlayChess from '../../../assets/Play chess.png'
import JsLogo from '../../../assets/javascript-logo.png'
import CppLogo from '../../../assets/c++ logo.png'
import FirebaseLogo from '../../../assets/firebase logo.jpg'
import CssLogo from '../../../assets/css logo.png'
import HtmlLogo from '../../../assets/html logo.png'
import GitLogo from '../../../assets/Git-Icon.png'
import ReactLogo from '../../../assets/react.jpg'
import './Skills.css'

export default class Skills extends Component {
  render() {
    return (
      <div className='main-container-skills'>
      
        <div className='introduction-box'>
          <div className='text-introduction-box'>
            <h2>Know who I'm</h2>
            <p>Hi, I am AMIT KUMAR from New Delhi, India. I am a 2nd year B. Tech. Computer Science student at MSIT.</p>
            <p className='p2'>Things i like to do other than coding:</p>
            <ul>
              <li>Traveling</li>
              <li>Playing Chess</li>
              <li>Sleeping</li>
            </ul>
          </div>
          
          <div className='image-introduction-box'>
            {/* <h2>box for image</h2> */}
            <img src={PlayChess} alt='...'/>
          </div>

        </div>
        
        <div className='professional-skills-box'>
            <h1>Professional Skills</h1>
            <div className='skills-container'>
                <div className='skill'><img src={CppLogo} alt='Cpp Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={HtmlLogo} alt='Html Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={CssLogo} alt='CSS Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={JsLogo} alt='JS Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={ReactLogo} alt='React Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={FirebaseLogo} alt='Firebase Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={GitLogo} alt='Git Logo' width='70px' height='70px'></img></div>
                {/* <div className='skill'></div>
                <div className='skill'></div> */}
            </div>
        </div>
      
      </div>
    )
  }
}
