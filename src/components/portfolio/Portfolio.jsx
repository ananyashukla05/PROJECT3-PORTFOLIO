import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/p1.jpg";
import IMG2 from "../../assests/p2.jpg";
import IMG3 from "../../assests/p3.jpg";
import IMG4 from "../../assests/p4.jpg";
import IMG5 from "../../assests/p5.jpg";
import IMG6 from "../../assests/p6.jpg";
import IMG7 from "../../assests/p7.jpg";
import IMG8 from "../../assests/p8.jpg";
import IMG9 from "../../assests/p9.jpg";
import IMG10 from "../../assests/p10.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG8,
    title: "Charts Templates",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG9,
    title: "Crypto Currency Dashboard",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG7,
    title: "format Text Tool",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency Dashboard",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crypto Currency Dashboard",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
        data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  );
};
export default Portfolio;
