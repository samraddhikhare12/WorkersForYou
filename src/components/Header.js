import React from 'react';
import "./Header.css";

export default function Header() {
  return (
    <div>

      <nav class="navbar navbar-expand-lg">
        <div class="container"> <a class="navbar-brand navbar-logo" href="/"> <img src="data:image/jpeg;base64,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" width="200px" alt="logo" class="logo-1" /> </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"> <a class="nav-link" href="/" data-scroll-nav="0">Header</a> </li>
              <li class="nav-item"> <a class="nav-link" href="/aboutus" data-scroll-nav="1">About</a> </li>
              <li class="nav-item"> <a class="nav-link" href="/services" data-scroll-nav="2">Services</a> </li>
              <li class="nav-item"> <a class="nav-link" href="/testimonial" data-scroll-nav="3">Testimonial</a> </li>
              <li class="nav-item"> <a class="nav-link" href="/gallery" data-scroll-nav="3">Gallery</a> </li>
              <li class="nav-item"> <a class="nav-link" href="/contactus" data-scroll-nav="4">Contact</a> </li>
              <li class="nav-item"> <a class="nav-link" href="/registration" data-scroll-nav="4">Registration</a> </li>
              <li class="nav-item"> <a class="nav-link" href="/login" data-scroll-nav="4">Login</a> </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="banner text-center" data-scroll-index='0'>
      <div className="banner-overlay">
        <div className="container">
          <h1 className="text-capitalize">Maid Seekers</h1>
          <p><i>The best part at this website is that you get to choose from the best resource as maidservices understands your requirement to the core.
            The home workers are available for full- time or part-time work depending on your requirement.

            Maid Servies makes sure that the workers are thoroughly verified before they are hired.
            The services are currently in the major metro cities of India.</i></p>
        </div>

      </div>
    </div>
    </div>


  )
}