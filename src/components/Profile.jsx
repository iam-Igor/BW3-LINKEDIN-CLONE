import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Profile = () => {
  return (
    <Container>
      <Row className="d-flex">
        <Col className="col-9">
          <Row className="d-flex flex-column">
            <Col className="position-relative p-0">
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
                  <Card.Text className="mt-5">
                    <h2>Username</h2>
                    <h4>Mansione/impiego</h4>
                    <p>luogo</p>
                    <p>Follower</p>
                  </Card.Text>
                  <div>
                    <Button>+Segui</Button>
                    <Button>Messaggio</Button>
                    <Button>Altro</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="bg-white rounded-2 border my-2">
              <h2>Informazioni</h2>
              <p>Javascript</p>
              <p>CSS</p>
              <p>HTML</p>
              <p>React</p>
            </Col>
          </Row>
        </Col>
        <Col className="col-3">
          <Row className="ms-4 flex-column">
            <Col className="bg-white p-3 border rounded d-flex justify-content-center">
              <div className="d-flex justify-content-around w-75">
                <Button variant="success" className="rounded-pill w-50 me-2">
                  English
                </Button>
                <Button variant="outline-dark" className="rounded-pill w-50">
                  Italiano
                </Button>
              </div>
            </Col>
            <Col className="p-0  border my-2">
              <img
                className="img-fluid rounded"
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                alt="linkedin"
              />
            </Col>
            <Col className="p-0  border my-2 bg-white">
              <p>Altri profili consultati</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
