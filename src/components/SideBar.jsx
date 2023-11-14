import React from "react";
import { Row, Col } from "react-bootstrap";
import { BookmarkFill, PersonFillAdd, PlusLg } from "react-bootstrap-icons";

const SideBar = () => {
  return (
    <Row>
      <Col className="p-4 border border-bottom rounded background-columns">
        <div>
          <div className="text-center">
            <img
              src="https://previews.123rf.com/images/siamimages/siamimages1504/siamimages150400651/38413902-segno-icona-utente.jpg"
              alt="Immagine del profilo"
              className="img-fluid rounded-circle"
              style={{ width: "20%" }}
            />
            <h3 className="mt-3">Nome Utente</h3>
            <p className="text-secondary">Titolo Professionale</p>
            <hr></hr>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <p className="text-secondary ">Collegamenti</p>
                <p className="">Espandi la tua rete</p>
              </div>
              <PersonFillAdd />
            </div>

            <hr></hr>
            <p className="text-secondary ">
              Accedi a strumenti e informazioni in esclusiva
            </p>
            <p className="text-decoration-underline">Prova Premium Gratis</p>
            <hr></hr>
            <p>
              {" "}
              <BookmarkFill /> I miei elementi
            </p>
          </div>
        </div>
      </Col>
      <Col xs={12} className="mt-2 rounded border background-columns" ì>
        <div className="d-flex flex-column ">
          <p className="text-primary ms-4">Gruppi</p>
          <div className="d-flex justify-content-between">
            <p className="text-primary ms-4">Eventi</p>
            <PlusLg className="me-4" />
          </div>
          <p className="text-primary ms-4">Hashtag Seguiti</p>
          <div>
            <hr></hr>
            <p className="text-secondary text-center">Scopri di più</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SideBar;
