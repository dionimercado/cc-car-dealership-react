import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => (
    <footer>
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <p>&copy; 2017 Cars Company, Inc.</p>
              </div>
              <div class="col-md-6 social-links">
                  <a href="https://facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="https://instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href="https://twitter.com/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="https://youtube.com/"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                  <a href="https://plus.google.com/"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                  <a href="https://github.com/"><i class="fa fa-github" aria-hidden="true"></i></a>
              </div>
          </div>
      </div>
  </footer>
)

export default Footer;