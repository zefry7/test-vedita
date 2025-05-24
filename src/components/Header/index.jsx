import { useEffect, useState } from "react";

export default function Header() {
  const mediaWindow = window.matchMedia("(max-width: 660px)");
  const [mobileMode, setMobileMode] = useState(mediaWindow.matches);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleActiveMenu = () => {
    const body = document.body;

    if (!activeMenu) {
      setActiveMenu(true);
      body.classList.add("lock-root");
    } else {
      setActiveMenu(false);
      body.classList.remove("lock-root");
    }
  };

  useEffect(() => {
    const func = (e) => {
      setMobileMode(e.matches);

      if (!e.matches) {
        setActiveMenu(false);
      }
    };

    mediaWindow.addEventListener("change", func);

    return () => {
      mediaWindow.removeEventListener("change", func);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__row">
          <div className="header__logo">
            <img src="img/logo.png" alt="Логотип" />
          </div>
          {!mobileMode ? (
            <>
              <span className="header__city">Тамбов</span>
              <a href="tel:800000000" className="header__tel">
                +7 (915) 660 09-09
              </a>
              <span className="header__timework">09:00-21:00</span>
            </>
          ) : (
            <>
              <button
                className="header__button"
                onClick={() => handleActiveMenu()}
              >
                <img src="img/menu.svg" alt="Кнопка меню" />
              </button>
            </>
          )}
        </div>
        <hr className="header__line" />
        {!mobileMode && (
          <div className="header__row">
            <nav className="header__menu">
              <a href="#" className="header__menu-item">
                Меню ресторана
              </a>
              <a href="#" className="header__menu-item">
                Бизнес-ланч
              </a>
              <a href="#" className="header__menu-item">
                Детокс
              </a>
              <a href="#" className="header__menu-item">
                Рационы
              </a>
            </nav>
            <button className="header__basket">
              <span>3</span>
              Корзина
            </button>
          </div>
        )}

        {activeMenu && (
          <div className="header__block">
            <button
              className="header__menu-cancel"
              onClick={() => handleActiveMenu()}
            >
              <img src="img/x.svg" alt="Закрыть меню" />
            </button>
            <nav className="header__menu">
              <a href="#" className="header__menu-item">
                Меню ресторана
              </a>
              <a href="#" className="header__menu-item">
                Бизнес-ланч
              </a>
              <a href="#" className="header__menu-item">
                Детокс
              </a>
              <a href="#" className="header__menu-item">
                Рационы
              </a>
            </nav>
            <button className="header__basket">
              <span>3</span>
              Корзина
            </button>
            <div className="header__menu-block">
              <div className="header__menu-row">
                <span className="header__city">Тамбов</span>
                <span className="header__timework">09:00-21:00</span>
              </div>

              <a href="tel:800000000" className="header__tel">
                +7 (915) 660 09-09
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
