export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__row">
          <div className="footer__logo">
            <img src="./img/logo-white.svg" alt="Логотип" />
          </div>
          <div className="footer__block">
            <ul className="footer__menu">
              <li className="footer__item">Контакты</li>
              <li className="footer__item">О компании</li>
            </ul>
            <ul className="footer__menu">
              <li className="footer__item">Оплата</li>
              <li className="footer__item">Доставка</li>
            </ul>
            <ul className="footer__menu">
              <li className="footer__item">Публичная оферта</li>
              <li className="footer__item">Политика конфиденциальности</li>
            </ul>
          </div>
        </div>
        <hr className="footer__line" />
        <div className="footer__row">
          <span className="footer__year">© 2022</span>
          <div className="footer__inst">
            <img src="./img/inst.svg" alt="Соц.сеть" />
          </div>
        </div>
        <p className="footer__text">
          Мы используем cookies для быстрой и удобной работы сайта. Продолжая
          пользоваться сайтом, вы принимаете условия обработки персональных
          данных
        </p>
      </div>
    </footer>
  );
}
