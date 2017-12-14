import React from 'react';
import { Header, Footer } from '../components';

const Home = () => (
  <div>
    <Header />
    <main>
      <div className="jumbotron">
        <div className="video-bg">
          <div className="embed-responsive embed-responsive-16by9">
            <video autoplay loop className="d-none">
              <source src="assets/videos/video.mp4" type="video/mp4" />
            </video>
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/j-eAsQk0Bwg?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1"></iframe>
          </div>
        </div>
        <div className="container">
          <div className="page-header">
            <h1>Welcome!</h1>
          </div>
          <p>Cars.com is a leading online destination that helps car shoppers and owners navigate every turn of car ownership. A pioneer in automotive classifieds, the company has evolved into one of the largest digital automotive platforms...</p>
          <p><a className="btn btn-primary btn-lg" href="/about" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h1>New Cars</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <figure>
              <img className="img-responsive" src="https://www.cars.com/feo-cdn/R/6/m_rX3g1EU.jpg" alt="" />
            </figure>
            <h2>2018 Hyundai Sonata</h2>
            <p>It's not a full redesign, but this quiet, comfortable sedan has significantly improved in looks, interior feel and driving dynamics.</p>
            <p><a className="btn btn-default" href="/inventory" role="button">See our inventory &raquo;</a></p>
          </div>
          <div className="col-sm-6">
            <figure>
              <img className="img-responsive" src="https://www.cars.com/feo-cdn/e/E/okxQGsBdg.jpg" alt="" />
            </figure>
            <h2>2018 Chevrolet Equinox</h2>
            <p>The redesigned Equinox is less distinctive than its predecessor, but it arrives with definite refinement.</p>
            <p><a className="btn btn-default" href="/inventory" role="button">See our inventory &raquo;</a></p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;