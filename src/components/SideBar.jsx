import React, { useEffect } from "react";
import { Row, Col, Modal, Form, Button, InputGroup } from "react-bootstrap";
import { BookmarkFill, PersonFillAdd, PlusLg } from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_EVENT } from "../redux/actions/actionsHome";

const SideBar = ({ myProfile }) => {
  const dispatch = useDispatch();
  const [textArea, setTextArea] = useState({
    title: "",
    type: "",
    date: "",
    time: "",
    description: "",
  });
  useEffect(() => {
    console.log(textArea);
  }, [textArea]);
  const handleInputChange = (property, value) => {
    setTextArea({
      ...textArea,
      [property]: value,
    });
  };
  // Funzionalità modale
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //

  return (
    <Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="d-flex align-items-center gap-3 ms-2">
            <div>
              <Modal.Title className="fs-5 fw-normal ">
                Crea un evento{" "}
              </Modal.Title>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("ok");
              dispatch({
                type: CREATE_EVENT,
                payload: textArea,
              });
              console.log(textArea);
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome evento</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  e.preventDefault();
                  handleInputChange("title", e.target.value);
                }}
              />
              <Form.Label className="mt-4">Tipo di evento</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Online"
                  name="group1"
                  type="radio"
                  value={"Online"}
                  onChange={(e) => {
                    e.preventDefault();
                    handleInputChange("type", e.target.value);
                  }}
                />
                <Form.Check
                  inline
                  label="In sede"
                  value={"In sede"}
                  // checked={textArea.type === "Online"}

                  name="group1"
                  type="radio"
                  onChange={(e) => {
                    e.preventDefault();

                    handleInputChange("type", e.target.value);
                  }}
                />
              </div>
              <InputGroup className="d-flex gap-1 mt-3 gap-4 ">
                <Form.Group>
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    type="date"
                    value={textArea.date}
                    onChange={(e) => {
                      e.preventDefault();

                      handleInputChange("date", e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Ora</Form.Label>
                  <Form.Control
                    type="time"
                    value={textArea.time}
                    onChange={(e) => {
                      e.preventDefault();

                      handleInputChange("time", e.target.value);
                    }}
                  />
                </Form.Group>
              </InputGroup>
              <Form.Group className="mt-3">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  onChange={(e) => {
                    e.preventDefault();

                    handleInputChange("description", e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Group>
            <div id="modal-event-paragraphs">
              <p>
                Se continui, accetti le{" "}
                <span className="text-primary fw-bold ">
                  norme sugli eventi di LinkedIn.{" "}
                </span>
              </p>
              <p>
                Sfrutta tutti i vantaggi di LinkedIn Events.{" "}
                <span className="text-primary fw-bold">
                  {" "}
                  Per saperne di più.
                </span>
              </p>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="rounded-pill py-1"
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: CREATE_EVENT,
                payload: textArea,
              });
              handleClose();
            }}
          >
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
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
        <div className="d-flex flex-column mt-3">
          <p className="text-primary ms-4 cursor">Gruppi</p>
          <div className="d-flex justify-content-between">
            <p className="text-primary ms-4 cursor">Eventi</p>
            <PlusLg className="me-4 cursor" onClick={handleShow} />
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
