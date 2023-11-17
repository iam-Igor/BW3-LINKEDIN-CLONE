import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const Myfooter = () => {
  return (
    <Container className="mt-5 text-secondary">
      <Row className="d-flex aliign-items-center justify-content-center mb-3">
        {/* testo */}
        <Col>
          <div className="d-flex flex-column">
            <p>Informazioni</p>
            <p className="fs-6">Linee guida della community</p>
            <p>Privacy e condizioni</p>
            <p>Sales Solution</p>
            <p>Centro sicurezza</p>
          </div>
        </Col>
        {/*  testo */}
        <Col>
          <div className="d-flex flex-column">
            <p>Accessibilità</p>
            <p className="fs-6">Carriera</p>
            <p>Opzioni per gli annunci pubblicvitari</p>
            <p>Mobile</p>
          </div>
        </Col>
        {/* testo */}
        <Col>
          <div className="d-flex flex-column">
            <p>Talent Solution</p>
            <p className="fs-6">Soluzioni di marketing</p>
            <p>IPubblicità</p>
            <p>Piccole imprese</p>
          </div>
        </Col>
        {/* sez icone e domande */}
        <Col id="icon-footer">
          <div className="d-flex flex-column">
            <p>
              <i className="bi bi-question-circle-fill me-2"></i>Domande?
            </p>
            <p className="fs-6">
              <i className="bi bi-gear-fill me-2"></i>Gestisci il tuo account e
              la tua privacy
            </p>
            <p>
              <i className="bi bi-shield-shaded me-2"></i>Trasparenza sui
              contenuti consigliati
            </p>
          </div>
        </Col>
        {/* input lingua */}
        <Col>
          <div className="d-flex flex-column">
            <p>Seleziona lingua</p>

            <Form.Select aria-label="Default select example">
              <option>Seleziona-</option>
              <option value="1">Italiano</option>
              <option value="2">Inglese</option>
            </Form.Select>
          </div>
        </Col>
      </Row>
      <p>Linkedin Corporation - Copyright {new Date().getFullYear()} </p>
    </Container>
  );
};
export default Myfooter;
