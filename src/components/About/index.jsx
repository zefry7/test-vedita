import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

export default function About() {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__img">
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 2500,
              disable2OnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src="./img/foto.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/foto.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/foto.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-prev">
            <img src="img/arrow-grey.svg" alt="Элемент управления" />
          </div>
          <div className="swiper-button-next">
            <img src="img/arrow-grey.svg" alt="Элемент управления" />
          </div>
        </div>
        <div className="about__info">
          <h2 className="about__title">о нас</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
            neque, et leo nulla nisl. Neque parturient elementum habitasse etiam
            nec. Fermentum justo nam nibh vitae pellentesque integer. Imperdiet
            habitant tortor est amet tortor viverra. Nulla eget commodo,
            adipiscing arcu in et risus in.
          </p>
          <p className="about__text">
            Cras eu molestie consectetur amet at euismod. Nunc elementum lorem
            pharetra cursus risus eu. Ac feugiat arcu etiam eget sem urna
            tincidunt lacus. Nec morbi ultrices nulla accumsan adipiscing.
            Elementum sagittis eu placerat non molestie luctus gravida. Risus
            laoreet nunc lectus orci. Vitae at augue sagittis. Sed faucibus
            ultrices elementum faucibus varius leo, vitae. Molestie semper
            habitant varius eleifend nisi faucibus.
          </p>
        </div>
      </div>
    </section>
  );
}
