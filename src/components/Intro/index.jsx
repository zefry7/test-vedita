import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__content">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // autoplay={{
          //   delay: 3500,
          //   disableOnInteraction: false,
          // }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="intro__info">
              <h2 className="intro__title">
                <span className="intro__title-green">Детокс-</span>{" "}
                <span className="intro__title-white">программа</span>{" "}
                комплексного очищения организма от{" "}
                <span className="intro__title-white">1099</span> руб
              </h2>
              <a className="intro__button" href="#delivery">
                Заказать
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="intro__info">
              <h2 className="intro__title">
                <span className="intro__title-green">Детокс-</span>{" "}
                <span className="intro__title-white">программа</span>{" "}
                комплексного очищения организма от{" "}
                <span className="intro__title-white">1099</span> руб
              </h2>
              <button className="intro__button">Заказать</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="intro__info">
              <h2 className="intro__title">
                <span className="intro__title-green">Детокс-</span>{" "}
                <span className="intro__title-white">программа</span>{" "}
                комплексного очищения организма от{" "}
                <span className="intro__title-white">1099</span> руб
              </h2>
              <button className="intro__button">Заказать</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="intro__info">
              <h2 className="intro__title">
                <span className="intro__title-green">Детокс-</span>{" "}
                <span className="intro__title-white">программа</span>{" "}
                комплексного очищения организма от{" "}
                <span className="intro__title-white">1099</span> руб
              </h2>
              <button className="intro__button">Заказать</button>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev">
          <img src="img/arrow.svg" alt="Элемент управления" />
        </div>
        <div className="swiper-button-next">
          <img src="img/arrow.svg" alt="Элемент управления" />
        </div>
      </div>
    </section>
  );
}
