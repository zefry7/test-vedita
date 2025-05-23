

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__row">
          <div className="header__logo">
            <img src="img/logo.png" alt="" />
          </div>
          <button className="header__city">Тамбов</button>
          <a href="tel:800000000" className="header__tel">
            +7 (915) 660 09-09
          </a>
          <span className="header__timework">09:00-21:00</span>
        </div>
        <hr className="header__line" />
        <div className="header__row">
          <nav className="header__menu">
            <a href="" className="header__menu-item">
              Меню ресторана
            </a>
            <a href="" className="header__menu-item">
              Бизнес-ланч
            </a>
            <a href="" className="header__menu-item">
              Детокс
            </a>
            <a href="" className="header__menu-item">
              Рационы
            </a>
          </nav>
          <button className="header__basket">
            <span>3</span>
            Корзина
        </button>
        </div>
      </div>
    </header>
  );
}
