import React from "react";
import { Row, Col } from "react-bootstrap";
import { InfoSquareFill, CaretDownFill } from "react-bootstrap-icons";

const SideBarRight = () => {
  return (
    <Row>
      <Col
        className="p-4 border border-bottom rounded background-columns"
        // style={{ backgroundColor: " #f3f3f3" }}
      >
        <div>
          <div className="">
            <div className="d-flex justify-content-between">
              <h5 className="mt-3 ms-3">Linkedln Notizie</h5>
              <InfoSquareFill className="me-3" />
            </div>
          </div>
          <ul id="ul-sidebar">
            <li>Single e fieri di esserlo</li>
            <p className="text-secondary">3 giorni fa </p>
            <li>Che cosa vuole l'Italia dall'AI</li>
            <p className="text-secondary">3 giorni fa </p>
            <li>PayPal si allarga alle bollette</li>
            <p className="text-secondary">7 ore fa </p>
            <li>Impennata degli attacchi informarici</li>
            <p className="text-secondary">5 giorni fa </p>
            <li>I primi supermercati senza casse</li>
            <p className="text-secondary">3 giorni fa </p>
            <li>Innovazione,ricerca e sviluppo</li>
            <p className="text-secondary">1 ora fa </p>
          </ul>
        </div>
      </Col>
      <Col
        xs={12}
        className="my-4 d-flex gap-2 flex-column"
        id="footer-sidebar"
      >
        <div className="d-flex gap-3 justify-content-center ">
          <p className="text-secondary mb-0">Informazioni</p>
          <p className="text-secondary mb-0">Accessibilità</p>
        </div>

        <div className="d-flex gap-3 justify-content-center ">
          <p className="text-secondary mb-0 text-center">Centro Assistenza </p>
          <p className="text-secondary mb-0 text-center">
            Privacy e condizioni <CaretDownFill />
          </p>
        </div>

        <div className="d-flex gap-3 justify-content-center ">
          <p className="text-secondary mb-0">
            Opzioni per gli annunci pubblicitari
          </p>
        </div>

        <div className="d-flex gap-3 justify-content-center ">
          <p className="text-secondary mb-0">
            Servizi alle aziende <CaretDownFill />
          </p>
          <p className="text-secondary mb-0">Pubblicità</p>
        </div>

        <div className="d-flex gap-3 justify-content-center ">
          <p className="text-secondary mb-0">Scarica app Linkedln</p>
          <p className="text-secondary mb-0">Altro</p>
        </div>

        <div className="d-flex justify-content-center">
          <div className="text-secondary me-3">
            &copy; {new Date().getFullYear()}
          </div>
          <img
            src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
            alt="Immagine copy"
            width="20%"
          />
        </div>
      </Col>
    </Row>
  );
};
export default SideBarRight;
