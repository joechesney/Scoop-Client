import React from 'react'
import { Image } from 'semantic-ui-react';


const Footer = props => {
  console.log('footer log:',props);
  return (
    <div className="footer">
      <br />
      <div className="footerContainer">
        <p className="centered footerSection">Made by Joe Chesney<br /><span>With help from Reverb.com</span></p>
        <p className="centered footerSection">&copy; Scoop LLC, 2018</p>
        <p className="centered footerSection">
          <a href="https://www.github.com/joechesney/Scoop-Client" target="_blank">
            <Image size='mini' src={props.githubLogo} />
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer;