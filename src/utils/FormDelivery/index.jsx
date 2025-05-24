import { InputMask } from "@react-input/mask";
import { useState } from "react";

export default function FormDelivery({ cancel }) {
  const [accept, setAccept] = useState(false);

  return (
    <div className="form-delivery">
      <div className="form-delivery__bg">
        <div className="form-delivery__block">
          <h2 className="form-delivery__title">Форма обратной связи</h2>
          {accept == true ? (
            <>
              <p className="form-delivery__text-accept">
                Ваша заявка успешно отправлена.
              </p>
              <button
                className="form-delivery__button form-delivery__button-cancel"
                onClick={() => cancel(false)}
              >
                Закрыть
              </button>
            </>
          ) : (
            <>
              <form className="form-delivery__form">
                <label className="form-delivery__label">
                  <p>
                    Ваше имя <span>*</span>
                  </p>
                  <input type="text" className="form-delivery__input" />
                </label>
                <label className="form-delivery__label">
                  <p>
                    Телефон <span>*</span>
                  </p>
                  <InputMask className="form-delivery__input" mask="+7 (9__) ___-__-__" replacement={{ _: /\d/ }} placeholder="+7 (___) ___-__-__" />
                </label>
              </form>
              <button
                className="form-delivery__button"
                onClick={() => {
                  setAccept(true);
                }}
              >
                Отправить
              </button>
              <p className="form-delivery__text">
                Нажимая на кнопку, вы соглашаетесь на обработку
                <span> персональных данных</span>
              </p>
            </>
          )}
          <button
            className="form-delivery__cancel"
            onClick={() => cancel(false)}
          >
            <img src="img/x.svg" alt="Закрыть" />
          </button>
        </div>
      </div>
    </div>
  );
}
