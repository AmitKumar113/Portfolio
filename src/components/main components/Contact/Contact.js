import React, { Component } from 'react'
import './Contact.css'
import ContactImage from '../../../assets/contact.png'
// import {Helmet} from "react-helmet"
// import Smtp from 'https://smtpjs.com/v3/smtp.js'
// import emailjs from '@emailjs/browser';

export default class Contact extends Component {

  sendMail = ()=>{
    console.log('sendMail func calling')    
  }


  render() {
    return (
      <div className={`container-contact flex-container  home-mode-${this.props.mode}`}>
          <div className='image-container-contact '>
            <img src={ContactImage} alt='image'/>
          </div>
          
          
          <div className='form-container '>
              <form className='contact-form'>
                <input type='text' placeholder='Name' className={`input-box home-mode-${this.props.mode}`}></input>
                <input type='email' placeholder='Email ID' className={`input-box home-mode-${this.props.mode}`}></input>
                <input type='number' placeholder='Mobile number' className={`input-box home-mode-${this.props.mode}`}></input>
                <input type='text' placeholder='Organisation' className={`input-box home-mode-${this.props.mode}`}></input>
                <textarea rows="5"  placeholder='Write to us!' className={`home-mode-${this.props.mode}`}/>
                {/* <input type='submit' className='submit-button'></input> */}
              </form>
                <button className={`send-btn send-btn-${this.props.mode}`} onClick={this.sendMail}>SEND</button>

          </div>  
      </div>

    )
  }
}

// import React, { useRef } from 'react';
// import  { Component } from 'react';
// import emailjs from '@emailjs/browser';
// export default class Contact extends Component {
  
//   // this.form = useRef();

//   sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_hettxjp', 'template_p31qiht', useRef().current, 'XCPho5Q_zU-falZEU')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
// render(){
//   return (
//     <form ref={useRef()} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }
// };