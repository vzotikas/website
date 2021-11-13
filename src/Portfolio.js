import * as Unicons from "@iconscout/react-unicons";
import portfolio1 from "./images/portfolio1.jpg";
import portfolio2 from "./images/portfolio2.jpg";
import portfolio3 from "./images/portfolio3.jpg";
import portfolio4 from "./images/portfolio4.jpg";
import portfolio5 from "./images/portfolio5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-scroll";
// import ReactPlayer from "react-player";
// import video from "./videos/video.m4v";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Portfolio = () => {
  const [modalViews, setModalViews] = useState(null);
  const [modalBtns, setModalBtns] = useState(null);
  const [modalCloses, setModalCloses] = useState(null);

  useEffect(() => {
    setModalViews(document.querySelectorAll(".portfolio__modal"));
    setModalBtns(document.querySelectorAll(".portfolio__button"));
    setModalCloses(document.querySelectorAll(".portfolio__modal-close"));
  }, []);

  if (modalViews && modalBtns && modalCloses) {
    const modal = (modalClick) => {
      console.log([modalClick]);
      console.log(modalViews[modalClick].classList);
      modalViews[modalClick].classList.add("active-modal");
    };

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener("click", () => {
        modal(i);
      });
    });

    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
          modalView.classList.remove("active-modal");
        });
      });
    });
  }

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Projects</span>

      <div className="portfolio__container container">
        {/* modal1--- */}
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <h4 className="portfolio__modal-header">VR ArchViz Interior</h4>
            <Unicons.UilTimes className="portfolio__modal-close" />
            <ul className="portfolio__modal-services grid">
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilCalendarAlt className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Date: </span>{" "}
                  January, 2021
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilSubject className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Category: </span> VR
                  Application
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilShoppingCart className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Client: </span>{" "}
                  Besqab
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilDesktop className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Technologies: </span>
                  Unity, Steam VR, Maya, Blender, 3D Studio, Substance, AutoCAD
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* ---modal1 */}
        {/* modal2--- */}
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <h4 className="portfolio__modal-header">
              Web AR 3D model configurator
            </h4>
            <Unicons.UilTimes className="portfolio__modal-close" />
            <ul className="portfolio__modal-services grid">
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilCalendarAlt className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Date: </span>{" "}
                  November, 2020
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilSubject className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Category: </span>{" "}
                  React Application
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilShoppingCart className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Client: </span>{" "}
                  Studio 3D
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilDesktop className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Technologies: </span>{" "}
                  React, Three.js, Firebase, ARKit, ARCore, Google Model Viewer,
                  WebGL
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* ---modal2 */}
        {/* modal3--- */}
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <h4 className="portfolio__modal-header">Fav8 iOS App</h4>
            <Unicons.UilTimes className="portfolio__modal-close" />
            <ul className="portfolio__modal-services grid">
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilCalendarAlt className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Date: </span> August,
                  2020
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilSubject className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Category: </span> iOS
                  Applications
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilShoppingCart className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Client: </span>{" "}
                  Woqomoqo
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilDesktop className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Technologies: </span>{" "}
                  Xcode, Swift, Firebase, React Native, Radio Directory API
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* ---modal3 */}
        {/* modal4--- */}
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <h4 className="portfolio__modal-header">Miniature Maze Game</h4>
            <Unicons.UilTimes className="portfolio__modal-close" />
            <ul className="portfolio__modal-services grid">
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilCalendarAlt className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Date: </span> May,
                  2020
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilSubject className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Category: </span>{" "}
                  Unity Games
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilShoppingCart className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Client: </span>{" "}
                  Nackademin
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilDesktop className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Technologies: </span>{" "}
                  Unity, C#, Maya, Blender, Substance
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* ---modal4 */}
        {/* modal5--- */}
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <h4 className="portfolio__modal-header">AR Maze</h4>
            <Unicons.UilTimes className="portfolio__modal-close" />
            <ul className="portfolio__modal-services grid">
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilCalendarAlt className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Date: </span>{" "}
                  September, 2020
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilSubject className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Category: </span> AR
                  Applications
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilShoppingCart className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Client: </span>{" "}
                  Nackademin
                </p>
              </li>
              <li className="portfolio__modal-portfolio">
                <div>
                  <Unicons.UilDesktop className="uil__portfolio" />
                </div>
                <p>
                  <span className="portfolio__modal-title">Technologies: </span>{" "}
                  Unity, C#, ARCore, ARKit, AR Foundation
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* ---modal5 */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // cssMode={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          keyboard={true}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img
                  src={portfolio1}
                  alt="Portfolio1"
                  className="portfolio__img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">VR ArchViz Interior</h3>
                  <p className="portfolio__description">
                    A photorealistic VR experience! The Besqab Apartment
                    Interior is an architectural visualization project made with
                    Unity. The Architectural project, build in every single
                    detail from scratch is a full navigable interior that
                    includes more than 200 furniture and 4K textures and able to
                    runs on different platforms, from PC, to VR up to Mobile.
                  </p>

                  <span className="button button--flex button--small button--link portfolio__button">
                    View More
                    <Unicons.UilArrowRight className="button__icon" />
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio__content grid">
                <img
                  src={portfolio2}
                  alt="Portfolio2"
                  className="portfolio__img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">
                    Web AR 3D model configurator
                  </h3>
                  <p className="portfolio__description">
                    A Web-Based 3D React Application that utilizes Three.js, a
                    JavaScript 3D Library based on WebGL. With the Studio3Dmodel
                    configurator, you can dynamically change all the properties
                    of any 3D model and then place it in the real-world
                    environment using ARKit and ARCore directly out of your
                    phone's web browser.
                  </p>
                  <span className="button button--flex button--small button--link portfolio__button">
                    View More
                    <Unicons.UilArrowRight className="button__icon" />
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio__content grid">
                <img
                  src={portfolio3}
                  alt="Portfolio3"
                  className="portfolio__img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Fav8 iOS App</h3>
                  <p className="portfolio__description">
                    A custom iOS app that I designed and developed my self in
                    Xcode using Swift.Listen to your favorite radio stations
                    everywhere! Tune in to music stations, news stations, sports
                    stations and many other free radio stations of your choice.
                    Tune in and... Enjoy listening!
                  </p>
                  <span className="button button--flex button--small button--link portfolio__button">
                    View More
                    <Unicons.UilArrowRight className="button__icon" />
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio__content grid">
                <img
                  src={portfolio4}
                  alt="Portfolio4"
                  className="portfolio__img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Miniature Maze Game</h3>
                  <p className="portfolio__description">
                    A Unity and C# game that recreates a demo Unity game. The
                    addition of LEGO pieces gives the illusion of a miniature
                    world. The sleepwalker is trying to go to his bed, but
                    little creepy zombies are trying to get him. The player can
                    earn points by killing jombies or collecting LEGOs. After
                    collecting all the legos he can enter his bedroom and sleep.
                  </p>
                  <span className="button button--flex button--small button--link portfolio__button">
                    View More
                    <Unicons.UilArrowRight className="button__icon" />
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio__content grid">
                <img
                  src={portfolio5}
                  alt="Portfolio5"
                  className="portfolio__img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">AR Maze</h3>
                  <p className="portfolio__description">
                    A fun game that showcases the possibilities of AR. AR is the
                    next big thing and has the potential to deliver a level of
                    engagement that is virtually unprecedented. Both Apple and
                    Google are embracing this new technology and provide us
                    tools like ARKit and ARCore to bring to life amazing new
                    experiences.
                  </p>
                  <span className="button button--flex button--small button--link portfolio__button">
                    View More
                    <Unicons.UilArrowRight className="button__icon" />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
