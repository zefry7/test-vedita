import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import FormDelivery from "../../utils/FormDelivery";

function Delivery() {
  const [activeForm, setActiveForm] = useState(false);

  return (
    <section className="delivery" id="delivery">
      <div className="delivery__content">
        <div className="delivery__info">
          <h2 className="delivery__title">Условия ДОСТАВКи</h2>
          <p className="delivery__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
            neque, et leo nulla nisl. Neque parturient elementum habitasse etiam
            nec.
          </p>
          <p className="delivery__text">
            Fermentum justo nam nibh vitae pellentesque integer. Imperdiet
            habitant tortor est amet tortor viverra.
          </p>
          <button
            className="button-style delivery__button"
            onClick={() => {
              setActiveForm(true);
            }}
          >
            Связаться с нами
          </button>
        </div>
        <div className="delivery__map">
          <YMaps>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
              <Placemark geometry={[55.75, 37.57]} />
            </Map>
          </YMaps>
        </div>
      </div>
      {activeForm === true && <FormDelivery cancel={setActiveForm} />}
    </section>
  );
}

export default Delivery;
