import React from "react";
import { TeamData } from "../../assets/data";
import "./carousel.scss";

import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

export const Carousel = () => {
  return (
    <div id="carousel">
      <div className="navigation">
        <Swiper
          spaceBetween={49}
          slidesPerView={4}
          // mousewheel={true}
          // direction={"horizontal"}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 1,
            },
            1400: {
              slidesPerView: 2,
            },

            // 1500: {
            //   slidesPerView: 3,
            // },
            1600: {
              slidesPerView: 2,
            },
            2000: {
              slidesPerView: 3,
            },
          }}
          virtual
        >
          {TeamData.map((el, key) => (
            <SwiperSlide key={key} className="item">
              <div className="slide-item">
                <div className="slide-item-soc">
                  <div className="socials">
                    <img src={el.src} alt="teamMember" />
                    <p className="title">{el.title}</p>
                    <p className="name">{el.name}</p>

                    <div>
                      {el.socialINST && (
                        <a href={el.socialINST} rel="noreferrer">
                          <span>INSTAGRAM</span>
                        </a>
                      )}
                      {el.socialFB && (
                        <a href={el.socialFB} rel="noreferrer">
                          <span>FACEBOOK</span>
                        </a>
                      )}
                      {el.socialARTS && (
                        <a href={el.socialARTS} rel="noreferrer">
                          <span>ARTSTATION</span>
                        </a>
                      )}
                      {el.socialBEH && (
                        <a href={el.socialBEH} rel="noreferrer">
                          <span>BEHANCE</span>
                        </a>
                      )}
                      {el.socialLINK && (
                        <a href={el.socialLINK} rel="noreferrer">
                          <span>LINKEDIN</span>
                        </a>
                      )}
                      <a></a>
                    </div>
                  </div>
                </div>
                <div className="border"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
