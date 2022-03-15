import React from "react";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";

function Footer() {
  return(
    <footer>
      <a href="https://www.linkedin.com/in/sergeytocarchuk/" target="_blank">
        <ImLinkedin className="footer--icon" />
      </a>
      <a href="https://github.com/SergeyTocarchuk" target="_blank">
        <ImGithub className="footer--icon" />
      </a>
    </footer>
  )
}

export default Footer;