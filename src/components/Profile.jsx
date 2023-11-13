import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Profile = () => {
  return (
    <Container>
      <Row className="d-flex">
        <Col className="col-8">
          <Row className="d-flex flex-column">
            <Col className="position-relative p-0 mb-2">
              <Card>
                <Card.Img
                  variant="fluid"
                  style={{ height: "150px" }}
                  src="https://placekitten.com/300"
                />
                <Card.Body>
                  <img
                    src="https://placekitten.com/140"
                    className="rounded-circle position-absolute user-image"
                    alt="img-user"
                  />
                  <Card.Text className="mt-5 mx-2">
                    <h2>Username</h2>
                    <h4>Mansione/impiego</h4>
                    <p>luogo</p>
                    <p>Follower</p>
                  </Card.Text>
                  <div className="mx-2">
                    <Button>+Segui</Button>
                    <Button>Messaggio</Button>
                    <Button>Altro</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="bg-white rounded-2 border mb-2 pt-3 info-section">
              <div className="mx-2">
                <h3>Informazioni</h3>
                <p>Javascript</p>
                <p>CSS</p>
                <p>HTML</p>
                <p>React</p>
              </div>
            </Col>
            <Col className="bg-white rounded-2 border info-section mb-2">
              <Row className="mx-2">
                <h3 className="p-0 mt-3 mb-4">Esperienza</h3>
                <Col className="col-1 p-0">
                  <img src="https://placekitten.com/50" alt="job-icon" />
                </Col>
                <Col className="col-11">
                  <h6>Ruolo ricoperto</h6>
                  <p>Nome azienda - Tempo pieno/part-time</p>
                  <p>Data - Periodo - Durata</p>
                  <p>Località, Regione, Stato</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="col-4"></Col>
      </Row>
    </Container>
  );
};
export default Profile;
