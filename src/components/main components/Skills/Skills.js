import React, { Component } from 'react'
import PlayChess from '../../../assets/Play chess.png'
import CppLogo2 from '../../../assets/c++ logo2.png'
import FirebaseLogo from '../../../assets/firebase.svg'
import CssLogo from '../../../assets/css-logo.svg'
import HtmlLogo from '../../../assets/html logo.svg'
import GitLogo from '../../../assets/Git-Icon.png'
import ReactLogo from '../../../assets/react.svg'
import JsLogo2 from '../../../assets/js.svg'
import './Skills.css'

export default class Skills extends Component {
  render() {
    return (
      <div className={`main-container-skills home-mode-${this.props.mode}`}>
      
        <div className='introduction-box'>
          <div className='text-introduction-box'>
            <h2 className='p1'>Know who i'm</h2>
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
          <hr/>
        
        <div className='professional-skills-box'>
            <h1>Professional Skills</h1>
            <div className='skills-container'>
                <div className='skill'><img src={CppLogo2} alt='Cpp Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={HtmlLogo} alt='Html Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={CssLogo} alt='CSS Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={JsLogo2} alt='JS Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={ReactLogo} alt='React Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={FirebaseLogo} alt='Firebase Logo' width='70px' height='70px'></img></div>
                <div className='skill'><img src={GitLogo} alt='Git Logo' width='70px' height='70px'></img></div>
            </div>
        </div>
      
      </div>
    )
  }
}
