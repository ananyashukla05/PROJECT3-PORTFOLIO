import React from 'react'
import './footer.css'
import{RiMessengerLine} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANANYA</a>
      <ul className="permalinks">
      <li><a href="">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https:facebook.com" target='_blank'><RiMessengerLine/></a>
        <a href="https:instagram.com" target='_blank'><BsInstagram/></a>
        <a href="https:github.com" target='_blank'><BsGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Ananya Shukla. All rights reserved</small>
      </div>
    </footer>
  )
}
export default Footer;