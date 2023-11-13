import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SuggestedProfile from "./SuggestedProfile";
import { useEffect, useState } from "react";

const Profile = () => {
  const apiKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ1YWM1NWU3ZTAwMThmODNjMGIiLCJpYXQiOjE2OTk4Njc5OTQsImV4cCI6MTcwMTA3NzU5NH0.s42cKTE4Spw6hQNWnXWOTl1nLe5K6KLEtN_9S8-D2OU";

  const [profilesData, setProfilesData] = useState(null);

  console.log(profilesData);

  const getAllprofilesInfo = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error in fetching user profiles");
        }
      })
      .then((data) => {
        setProfilesData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllprofilesInfo();
  }, []);

  return (
    <Container>
      <Row className="d-flex">
        <Col className="col-12 col-md-9">
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
                  <div className="mt-5">
                  <Card.Text className="mt-5 mx-2">
                    <h2>Username</h2>
                    <p>Mansione/impiego</p>
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
