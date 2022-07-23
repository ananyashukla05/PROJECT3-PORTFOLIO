import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me2.jpeg'
import HeaderSocials from './HeaderSocials'
export const Header = () => {
  return (
    <header>
     <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ananya Shukla!</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img className='as' src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}
export default Header;