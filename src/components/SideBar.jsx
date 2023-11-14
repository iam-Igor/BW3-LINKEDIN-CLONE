import React from "react";
import { Row, Col } from "react-bootstrap";
import { BookmarkFill, PersonFillAdd, PlusLg } from "react-bootstrap-icons";

const SideBar = ({ myProfile }) => {
  return (
    <Row>
      <Col className="p-4 border border-bottom rounded background-columns">
        <div>
          <div className="text-center">
            <img
              src={
                myProfile
                  ? myProfile.image
                  : "https://previews.123rf.com/images/siamimages/siamimages1504/siamimages150400651/38413902-segno-icona-utente.jpg"
              }
              alt="Immagine del profilo"
              className="img-fluid rounded-circle"
              style={{ width: "20%" }}
            />
            <h3 className="mt-3">
              {myProfile ? myProfile.username : "Nome utente"}
            </h3>
            <p className="text-secondary">
              {" "}
              {myProfile ? myProfile.title : "Titolo professionale"}
            </p>
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
      <Col xs={12} className="mt-2 rounded border background-columns">
        <div className="d-flex flex-column mt-4">
          <p className="text-primary ms-4 cursor">Gruppi</p>
          <div className="d-flex justify-content-between cursor">
            <p className="text-primary ms-4">Eventi</p>
            <PlusLg className="me-4" />
          </div>
          <p className="text-primary ms-4 cursor">Hashtag Seguiti</p>
          <div>
            <hr></hr>
            <p className="text-secondary text-center cursor">Scopri di più</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SideBar;
