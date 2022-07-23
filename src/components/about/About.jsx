import React from 'react'
import './about.css'
import ME from "../../assests/me.JPG"
import {FaAward} from "react-icons/fa"
import {RiFoldersLine} from "react-icons/ri"
import {ImBooks} from "react-icons/im"
const About=()=>{
    return (
            <section id='about'>
                <h5>Get To Know</h5>
                <h2>About Me</h2>
                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} alt="About Image" />

                        </div>
                    </div>

                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                            <ImBooks className='about__icon'/>
                            <h5>Education</h5> 
                            <small>B.TECH IT </small> 
                            </article>       
                       

    
                            <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Achievements</h5> 
                            <small>More than 10</small> 
                            </article>        
                        

                    
                            <article className="about__card">
                            <RiFoldersLine className='about__icon'/>
                            <h5>Projects</h5> 
                            <small>More than 5 completed</small>     
                            </article>    
                        </div>

                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus, aperiam rerum commodi dignissimos natus eos vero earum doloremque omnis modi dolore illum quibusdam at eaque? Eaque maiores modi aliquam.
                        </p>
                        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                        
                    </div>


                </div>
             </section>
    
    )
}
export default About;