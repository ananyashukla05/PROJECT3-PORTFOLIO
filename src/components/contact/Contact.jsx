import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ix8sdzd', 'template_47nmwfw', form.current, 'l-FO_yQQ6CMGnKwyN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    

  return (

      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>ananyashukla3030</h5>
              <a href="mailto:ananyashukla3030@gmail.com" target="_blank" >Send a message</a>
            </article>
            
            <article className="contact__option">
              <RiMessengerLine/>
              <h4>Messenger</h4>
              <h5>Ananya Shukla</h5>
              <a href="https://m.me/aniiiiieeee" target="_blank">Send a message</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp/>
              <h4>Whatsapp</h4>
              <h5>Ananya Shukla</h5>
              <a href="https://api.whatsapp.com/send?phone-9454126050" target="_blank">Send a message</a>
            </article>  
          </div>
          {/* END OF CONTACT OPTIONS*/}
          
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <input type="email" name='email' placeholder='Enter your email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
  )
}
export default Contact