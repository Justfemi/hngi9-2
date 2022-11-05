import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css';

import myPicture from '../Images/femi.png';
import githubLogo from '../Images/git-logo.png';
import i4gLogo from '../Images/I4G.png';
import slackLogo from '../Images/slack-logo.png';
import zuriLogo from '../Images/zuri-logo.png';

function home() {
  return (
    <div className="container">
      <div className="profile">
        <img src={ myPicture } alt="my profile" id="profile__img" />
        <h2 id="twitter">Justfemi</h2>
        <h3 id="slack">Denver</h3>
      </div>
      <div className="buttons-box">
        <a href="https://training.zuri.team/" id="btn__zuri" className="btn">zuri team</a>
        <a href="http://books.zuri.team" id="books" className="btn">zuri books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=<denver>" id="book__python" className="btn">python books</a>
        <a href="https://background.zuri.team" id="pitch" className="btn">background check for coders</a>
        <a href="https://books.zuri.team/design-rules" id="book__design" className="btn">design books</a>
        <Link to='/contact' id="contact" className="btn">Contact Me</Link>
      </div>
      <div className="icons">
        <img src={ slackLogo } alt="slack-logo" />
        <img src={ githubLogo } alt="github-logo" />
      </div>
      <hr />
      <footer>
        <div>
          <img src={ zuriLogo } alt="zuri-logo" />
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

export default home;