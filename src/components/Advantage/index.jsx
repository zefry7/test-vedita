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
        {data.map((v, i) => (
          <div className="advantage__item" key={i}>
            <img
              src={v.img}
              alt="Элемент оформления"
              className="advantage__item-img"
            />
            <p className="advantage__item-text">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advantage;
