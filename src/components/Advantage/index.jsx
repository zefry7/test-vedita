import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

const data = [
  {
    text: "Используем только натуральные продукты, блюда без консервантов и искусственных добавок.",
    img: "img/item-1.png",
  },
  {
    text: "Сбалансированное здоровое меню, соответствующее КБЖУ.",
    img: "img/item-2.png",
  },
  {
    text: "По желанию подберем программу тренировок и составим индивидуальное КБЖУ для любого уровня подготовки.",
    img: "img/item-3.png",
  },
  {
    text: "Бесплатная доставка, чтобы сэкономить массу времени и сил для более важных и приятных дел.",
    img: "img/item-4.png",
  },
];

function Advantage() {
  return (
    <section className="advantage">
      <div className="advantage__content">
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            620: {
              slidesPerView: 2
            },
            1025: {
              slidesPerView: "auto",
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
        >
          {data.map((v, i) => (
            <SwiperSlide key={i}>
              <div className="advantage__item">
                <img
                  src={v.img}
                  alt="Элемент оформления"
                  className="advantage__item-img"
                />
                <p className="advantage__item-text">{v.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Advantage;
