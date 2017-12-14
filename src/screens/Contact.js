import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Footer } from '../components/';
import '../assets/css/Contact.css';


const Contact = () => (
    <div>
        <Header />
        <section>
          <div class="location-map">
            <iframe title="g-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.8010696049087!2d-111.89121819136435!3d33.557582230346306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0ace81551759%3A0x6523e0cfe8461a52!2sCoderCamps!5e0!3m2!1sen!2sus!4v1511756579682" width="100%" height="400" frameborder="0" allowfullscreen></iframe>
          </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-header">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="contact-info">
                <ul>
                  <li>
                    <h4>Contact Info</h4>
                    <p><strong>Office: </strong>  <NavLink to="tel:18557552267">+1(855) 755-2267</NavLink></p>
                    <p><strong>Email: </strong> <NavLink to="mailto:info@codercamps.com">info@codercamps.com</NavLink></p>
                  </li>
                  <li>
                    <h4>Facility Address</h4>
                    <p>
                        8444 N 90th St #110<br />
                        Scottsdale, AZ 85258<br />
                        United States
                    </p>
                  </li>
                </ul>
                <h2>Get in touch</h2>
                <div class="social-icons">
                    <NavLink to="#"><i class="fa fa-facebook" aria-hidden="true"></i></NavLink>
                    <NavLink to="#"><i class="fa fa-instagram" aria-hidden="true"></i></NavLink>
                    <NavLink to="#"><i class="fa fa-twitter" aria-hidden="true"></i></NavLink>
                    <NavLink to="#"><i class="fa fa-google-plus" aria-hidden="true"></i></NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <form action="">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Email Address" required />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Subject" />
                </div>
                <div class="form-group">
                  <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <input type="submit" class="btn btn-primary" value="Send Message" />
              </form>
            </div>
          </div>
        </div>
      </section>
    <Footer />
  </div>
);

export default Contact;