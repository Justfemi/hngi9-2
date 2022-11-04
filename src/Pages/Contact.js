import React from 'react';
import { Link } from 'react-router-dom';

import i4gLogo from '../Images/I4G.png';
import zuriLogo from '../Images/zuri-logo.png';

function contact() {
  return (
    <div className='wrapper'>
      <h1>Contact page</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <div className='form-container'>
        <div className='input-box'>
          <label>first name</label>
          <input type='text' placeholder='Enter your first name' id='first_name' />
        </div>
        <div className='input-box'>
          <label>last name</label>
          <input type='text' placeholder='Enter your last name' id='last_name' />
        </div>
        <div className='input-box'>
          <label>email</label>
          <input type='email' placeholder='yourname@email.com' id='email' />
        </div>
        <div className='input-box'>
          <label>message</label>
          <textarea placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        </div>
        <div className='input-box'>
          <input type='checkbox' id='check-box' />
          <p>You agree to providing you data to Ajibade Olufemi who may contact you.</p>
        </div>
        <div className='input-box'>
          <input type='submit' value='send message' id='btn' />
        </div>
      </div>
      <hr />
      <footer>
        <div>
          <Link to='/contact'>
            <img src={ zuriLogo } alt="zuri-logo" />
          </Link>
        </div>
        <div>
          <h3>HNG Internship 9 Frontend Task</h3>
        </div>
        <div>
          <img src={ i4gLogo } alt="I4G-logo" />
        </div>
      </footer>
    </div>
  )
}

export default contact;