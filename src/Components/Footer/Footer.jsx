import React from 'react'
import "./Footer.css"
import { FaFacebookF, FaInstagram,FaTwitter,FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
     <footer>
        <div className="row">
          <div className="column">
            <h4>About Us</h4>
            <p>We are the builders of future, who gives better choice to choose for brighter future</p>
          </div>
          <div className="column">
            <h4>Quick Links</h4>
            <ul>
              <li ><a href="#">Subscription</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Connect with Us</h4>
            <ul className="social-icons">
              <li><a href="#"><FaFacebookF/></a></li>
              <li><a href="#"><FaInstagram/></a></li>
              <li><a href="#"><FaTwitter/></a></li>
              <li><a href="#"><FaGithub/></a></li>
            </ul>
          </div>
        </div>
        <p  style={{color:"blue"}} className="copyright">© 2023 All Rights Reserved</p>
      </footer>
 )
}

export default Footer