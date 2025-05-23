const data = [
  {
    img: "img/dish-1.jpg",
    name: "Баланс",
    descr:
      "Здоровое питание на каждый день для тех, кто  заботится о своем ежедневном рационе.",
    price: "1 190 ₽",
    kcal: "~1 800 ккал",
  },
  {
    img: "img/dish-2.jpg",
    name: "ЛАЙТ",
    descr:
      "Четырехразовое меню для похудения, поддержания формы и создания рельефа.",
    price: "1 050 ₽",
    kcal: "~1 400 ккал",
  },
  {
    img: "img/dish-3.jpg",
    name: "Супер лайт",
    descr:
      "Быстрое похудение и поддержание формы. Трехразовое меню для быстрого снижения веса без спорта.",
    price: "890 ₽",
    kcal: "~900 ккал",
  },
  {
    img: "img/dish-4.jpg",
    name: "масс",
    descr:
      "Сбалансированное питание для поддержания оптимальной формы при тренировках.",
    price: "1 490 ₽",
    kcal: "~1 800 ккал",
  },
];

export default function Diet() {
  return (
    <section className="diet">
      <div className="diet__content">
        <h2 className="diet__title">Рационы</h2>
        <div className="diet__list">
          {data.map((v, i) => (
            <div className="diet__item" key={i}>
              <div className="diet__item-img">
                <img src={v.img} alt="Блюдо" />
              </div>
              <span className="diet__item-name">{v.name}</span>
              <p className="diet__item-descr">{v.descr}</p>
              <span className="diet__item-kcal">{v.kcal}</span>
              <div className="diet__item-bottom">
                <span className="diet__item-price">{v.price}</span>
                <button className="diet__item-button">Выбрать</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
