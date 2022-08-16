import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className={`container-footer footer-mode-${this.props.mode}`}>All rights reserved &#169; Amit Kumar 2022</div>
    )
  }
}
