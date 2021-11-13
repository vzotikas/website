import testimonial1 from "./images/pantelis.jpg";
import testimonial2 from "./images/george.jpg";
import testimonial3 from "./images/simon.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">My mates</span>
      <div className="testimonials__container container">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            // when window width is >= 568px
            568: {
              slidesPerView: 2,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="testimonials content">
                <div className="testimonials__data">
                  <div className="testimonials__header">
                    <img
                      src={testimonial1}
                      alt="Testimonial1"
                      className="testimonials__img"
                    />
                    <div>
                      <h3 className="testimonials name">Panteleimon Panidis</h3>
                      <span className="testimonials__client">Associate</span>
                    </div>
                  </div>
                  {/* <div>
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                  </div> */}
                </div>
                <p className="testimonials__description">
                  I get a good impression, I carry out my project with all the
                  possible quality and attention and support 24 hours a day.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="testimonials content">
                <div className="testimonials__data">
                  <div className="testimonials__header">
                    <img
                      src={testimonial2}
                      alt="Testimonial1"
                      className="testimonials__img"
                    />
                    <div>
                      <h3 className="testimonials name">
                        Georgios Vlachogiannis
                      </h3>
                      <span className="testimonials__client">Partner</span>
                    </div>
                  </div>
                  {/* <div>
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                  </div> */}
                </div>
                <p className="testimonials__description">
                  It was great working with Vasilis on our gaming platform. We
                  truly appreciate his efforts &amp; commitment to the project.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="testimonials content">
                <div className="testimonials__data">
                  <div className="testimonials__header">
                    <img
                      src={testimonial3}
                      alt="Testimonial1"
                      className="testimonials__img"
                    />
                    <div>
                      <h3 className="testimonials name">Simon Romanus</h3>
                      <span className="testimonials__client">Client</span>
                    </div>
                  </div>
                  {/* <div>
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                  </div> */}
                </div>
                <p className="testimonials__description">
                  I assigned Vasilis to redesign my existing site. He created a
                  fresh, eye-tempting design for my site, user-friendly and
                  responsive!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
