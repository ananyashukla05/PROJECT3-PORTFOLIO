import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
export const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        What skills I Have
      </h5>
      <h2>
        My Projects
      </h2>
      <div className="container experience_container">
        <div className="experience__frontend">
          <h3>
            FRONTEND DEVELOPMENT
          </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                 <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
             
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>jAVASCRIPT</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>BOOTSTRAP</h4>
              <small className="text-light">Beginner</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>REACT</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>
          </div>

        </div>
        <div className="experience__backend">
        <h3>
            BACKEND DEVELOPMENT
          </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>FLASK</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>NODEJS</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>SQL</h4>
              <small className="text-light">Experienced</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MONGODB</h4>
              <small className="text-light">Intermediate</small>
              </div>
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>PYTHON</h4>
              <small className="text-light">Experienced</small>
              </div>
              
            </article>
          </div>

        </div>

      </div>
      











    </section>
  )
}
export default Experience;