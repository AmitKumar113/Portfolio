import React, { Component } from 'react'
import Typewriter from 'typewriter-effect'
import './Type.css'

export default class Type extends Component {
  render() {
    return (
        <div className='typewriter'>
        <Typewriter
        options={{
          strings: [
            "Developer",
            "Front-End Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
        />

        </div>
    )
  }
}
