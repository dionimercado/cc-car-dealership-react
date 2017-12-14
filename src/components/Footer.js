import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Footer.css';

const Footer = () => (
    <footer>
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <p>&copy; 2017 Cars Company, Inc.</p>
              </div>
              <div class="col-md-6 social-links">
                  <NavLink to="https://facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></NavLink>
                  <NavLink to="https://instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></NavLink>
                  <NavLink to="https://twitter.com/"><i class="fa fa-twitter" aria-hidden="true"></i></NavLink>
                  <NavLink to="https://youtube.com/"><i class="fa fa-youtube-play" aria-hidden="true"></i></NavLink>
                  <NavLink to="https://plus.google.com/"><i class="fa fa-google-plus" aria-hidden="true"></i></NavLink>
                  <NavLink to="https://github.com/"><i class="fa fa-github" aria-hidden="true"></i></NavLink>
              </div>
          </div>
      </div>
  </footer>
)

export default Footer;