import React from 'react'
// import {socialLinks} from "../data"
import SocialLinks from "./SocialLinks"
import PageLinks from "./PageLinks"
export default function Footer() {
  return (
    <footer className="section footer">
      <PageLinks groupClass="footer-links" itemClass="footer-link" nav_id=""/>
      {/* <ul className="footer-links">
        <li><a href="#home" className="footer-link">home</a></li>
        <li><a href="#about" className="footer-link">about</a></li>
        <li><a href="services" className="footer-link">services</a></li>
        <li><a href="#tour" className="footer-link">tour</a></li>
      </ul> */}
      <SocialLinks groupClass="footer-icons" itemClass="footer-icon"/>
      {/* <ul className="footer-icons">
        <li><a href="#" className="footer-icon"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#" className="footer-icon"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#" className="footer-icon"><i className="fab fa-squarespace"></i></a></li>
      </ul> */}
      <p className="copyright">
        copyright &copy; backroads travel tours company <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}
