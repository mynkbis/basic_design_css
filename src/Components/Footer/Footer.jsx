import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
     <footer>
        <div className="row">
          <div className="column">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus euismod, faucibus mo eu enim dapibus suscipit.</p>
          </div>
          <div className="column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Subscription</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Connect with Us</h4>
            <ul className="social-icons">
              <li><a href="#">Fb</a></li>
              <li><a href="#">Is</a></li>
              <li><a href="#">Tw</a></li>
              <li><a href="#">Git</a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2023 All Rights Reserved</p>
      </footer>
 )
}

export default Footer