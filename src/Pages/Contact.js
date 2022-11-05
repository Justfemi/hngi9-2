import React from 'react';
import '../contact.css';

import i4gLogo from '../Images/I4G.png';
import zuriLogo from '../Images/zuri-logo.png';

function contact() {
  const name = "Ajibade Olufemi";

  return (
    <div className='wrapper'>
      <h1>Contact me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <div className='form-container'>
        <div className='input-box'>
          <div className='entry'>
            <label>First name</label>
            <input type='text' placeholder='Enter your first name' id='first_name' />
          </div>

          <div className='entry'>
            <label>Last name</label>
            <input type='text' placeholder='Enter your last name' id='last_name' />
          </div>
        </div>
        <div className='input-box'>
          <label>Email</label>
          <input type='email' placeholder='yourname@email.com' id='email' />
        </div>
        <div className='input-box'>
          <label>Message</label>
          <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id='message'></textarea>
        </div>
        <div className='request'>
          <input type='checkbox' />
          <h5>You agree to providing your data to {name} who may contact you.</h5>
        </div>
        <div className='input-box'>
          <input type='submit' value='Send message' id='btn__submit' />
        </div>
      </div>
      <hr />
      <div className='footer'>
        <div>
          <img src={ zuriLogo } alt="zuri-logo"/>
        </div>
        <div>
          <h3>HNG Internship 9 Frontend Task</h3>
        </div>
        <div>
          <img src={ i4gLogo } alt="I4G-logo"/>
        </div>
      </div>
    </div>
  )
}

export default contact;