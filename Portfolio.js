import * as Unicons from "@iconscout/react-unicons";
import portfolio1 from "./images/portfolio1.jpg";
import portfolio2 from "./images/portfolio2.jpg";
import portfolio3 from "./images/portfolio3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-scroll";
import ReactPlayer from "react-player";
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
      console.log(modalViews[modalClick]);
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
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // cssMode={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          mousewheel={true}
          keyboard={true}
          loop={true}
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
                  {/* --Modal Section start-- */}
                  {/* 
                  <Link
                    id="showreel_button"
                    style={{ cursor: "pointer" }}
                    className="button button--flex video__button"
                    to={"section5"}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Video <Unicons.UilVideo className="button__icon " />
                  </Link>

                  <div className="video__modal">
                    <div className="video__modal-content">
                      <div className="player-wrapper">
                        <ReactPlayer
                          className="react-player fixed-bottom"
                          url={video}
                          width="100%"
                          height="100%"
                          controls={true}
                          playing={isPlaying}
                          stopOnUnmount={true}
                        />
                      </div>
                      <Unicons.UilTimes className="video__modal-close" />
                    </div>
                  </div> */}
                  {/* --Modal Section End-- */}
                  <span className="button button--flex button--small button--link portfolio__button">
                    View More
                    <Unicons.UilArrowRight className="button__icon" />
                  </span>
                  <div className="portfolio__modal">
                    <div className="portfolio__modal-content">
                      <h4 className="portfolio__modal-title">
                        Mobile App <br /> Development
                      </h4>
                      <Unicons.UilTimes className="portfolio__modal-close" />
                      <ul className="portfolio__modal-services grid">
                        <li className="portfolio__modal-details">
                          <Unicons.UilCheckCircle className="portfolio__modal-icon" />
                          <p>iOS App Development</p>
                        </li>
                        <li className="portfolio__modal-details">
                          <Unicons.UilCheckCircle className="portfolio__modal-icon" />
                          <p>Android App Development</p>
                        </li>
                        <li className="portfolio__modal-details">
                          <Unicons.UilCheckCircle className="portfolio__modal-icon" />
                          <p>ARKit / ARCore App Development</p>
                        </li>
                        <li className="portfolio__modal-details">
                          <Unicons.UilCheckCircle className="portfolio__modal-icon" />
                          <p>React Native App Development</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* --- */}
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
                  <a
                    href="/"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <Unicons.UilArrowRight className="button__icon" />
                  </a>
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
                  <a
                    href="/"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <Unicons.UilArrowRight className="button__icon" />
                  </a>
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
