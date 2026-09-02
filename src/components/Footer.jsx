import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Accent */}
      <div className="footer-accent"></div>

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column footer-about">
          <div className="footer-logo">
            <img src="./src/assets/logo.jpg" alt="Thirumala Construction" />
          </div>

          <h3>Thirumala Construction</h3>

          <p>
            Thirumala Construction is committed to delivering quality
            construction solutions with reliability, innovation and
            professional excellence.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="WhatsApp">◔</a>
          </div>
        </div>


        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/projects">Our Projects</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>


        {/* Services */}
        <div className="footer-column">
          <h4>Our Services</h4>

          <ul>
            <li><a href="/services">Residential Construction</a></li>
            <li><a href="/services">Commercial Construction</a></li>
            <li><a href="/services">Building Renovation</a></li>
            <li><a href="/services">Interior Works</a></li>
            <li><a href="/services">Turnkey Projects</a></li>
          </ul>
        </div>


        {/* Contact */}
        <div className="footer-column contact-column">
          <h4>Get In Touch</h4>

          <div className="contact-item">
            <span className="contact-icon">⌖</span>
            <p>
              Coimbatore,<br />
              Tamil Nadu, India
            </p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">☎</span>
            <a href="tel:+919999999999">
              +91 99999 99999
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <a href="mailto:info@thirumalaconstruction.com">
              info@thirumalaconstruction.com
            </a>
          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Thirumala Construction.
          All Rights Reserved.
        </p>

        <p>
          Designed & Developed by{" "}
          <a href="#">Aadhik Web Studio</a>
        </p>
      </div>


      {/* Floating Buttons */}
      <div className="floating-buttons">

        <a
          href="tel:+919999999999"
          className="float-btn phone-btn"
          aria-label="Call"
        >
          ☎
        </a>

        <a
          href="https://wa.me/8754322577"
          className="float-btn whatsapp-btn"
          aria-label="WhatsApp"
        >
          ◔
        </a>

      </div>

      {/* Scroll Top */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

    </footer>
  );
};

export default Footer;