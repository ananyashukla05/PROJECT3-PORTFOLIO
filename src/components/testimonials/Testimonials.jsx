import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assests/t1.jpg";
import AVTR2 from "../../assests/t2.jpg";
import AVTR3 from "../../assests/t3.jpg";
import AVTR4 from "../../assests/t5.jpg";
import AVTR5 from "../../assests/t4.jpg";

import { Navigation, Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR2,
    name: "Tina shoe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus maxime, impedit quia incidunt provident officia enim voluptates dolorum magnam, molestias sed ipsum reprehenderit quaerat eaque similique soluta? Rem, alias ducimus!",
  },
  {
    avatar: AVTR4,
    name: "Kalie",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus maxime, impedit quia incidunt provident officia enim voluptates dolorum magnam, molestias sed ipsum reprehenderit quaerat eaque similique soluta? Rem, alias ducimus!",
  },
  {
    avatar: AVTR3,
    name: "Joe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus maxime, impedit quia incidunt provident officia enim voluptates dolorum magnam, molestias sed ipsum reprehenderit quaerat eaque similique soluta? Rem, alias ducimus!",
  },
  {
    avatar: AVTR5,
    name: "Hannah McBrown",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus maxime, impedit quia incidunt provident officia enim voluptates dolorum magnam, molestias sed ipsum reprehenderit quaerat eaque similique soluta? Rem, alias ducimus!",
  },
  {
    avatar: AVTR1,
    name: "Harry Jenson",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus maxime, impedit quia incidunt provident officia enim voluptates dolorum magnam, molestias sed ipsum reprehenderit quaerat eaque similique soluta? Rem, alias ducimus!",
  },
];
export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{ clickable: true }}>
     
        {
        data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img className="aaaa" src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide >
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
