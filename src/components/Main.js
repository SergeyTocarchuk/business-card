import React from "react";
import logo from '../images/photo.jpg'
import { HiMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";

function Main() {
  return (
    <main>
      <img src={logo} alt="logo" />
      <div className="main--title">
        <h3>Serhii Tokarchuk</h3>
        <h4>Ruby on Rails Developer</h4>
        <div className="main--buttons">
          <a href="mailto:tocarchuk@gmail.com" target="_blank">
            <button className="btn--mail">
              <HiMail className="icon--mail" />
              <p>Email</p>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/sergeytocarchuk/" target="_blank">
            <button className="btn--lnk">
              <ImLinkedin className="icon--lnk" />
              <p>LinkedIn</p>
            </button>
          </a>
        </div>
      </div>
      <div className="content">
        <h3>Skills:</h3>
        <ul className="content--list">
          <li>Backend: Ruby on Rails</li>
          <li>Databases: PostgreSQL</li>
          <li>Frontend: HTML5, CSS3, Bootstrap, JavaScript, React.js</li>
          <li>Deployment: Heroku, Git, GitHub</li>
          <li>Dev Tools: Zsh, Chrome Dev Tools</li>
        </ul>
      </div>
    </main>
  )
}

export default Main;