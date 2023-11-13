import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Profile = () => {
  const [myProfile, setMyProfile] = useState(null);

  const getMyProfile = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ1YWM1NWU3ZTAwMThmODNjMGIiLCJpYXQiOjE2OTk4Njc5OTQsImV4cCI6MTcwMTA3NzU5NH0.s42cKTE4Spw6hQNWnXWOTl1nLe5K6KLEtN_9S8-D2OU",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella ricezione del profilo");
        }
      })
      .then((data) => {
        console.log(data);
        setMyProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <Container>
      {myProfile && (
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
                      style={{ width: "140px" }}
                      src={myProfile.image}
                      className="rounded-circle position-absolute user-image"
                      alt="img-user"
                    />
                    <div className="mt-5 mx-2">
                      <h2>
                        {myProfile.name} {myProfile.surname}
                      </h2>
                      <h4>{myProfile.title}</h4>
                      <p>{myProfile.area}</p>
                      <p>Follower</p>
                    </div>
                    <div className="mx-2">
                      <Button>+Segui</Button>
                      <Button>Messaggio</Button>
                      <Button>Altro</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <div className="bg-white rounded-2 border mb-2 pt-3 info-section">
                <div className="mx-2">
                  <h3>Informazioni</h3>
                  <p>{myProfile.bio}</p>
                </div>
              </div>
              <div className="bg-white rounded-2 border info-section mb-2">
                <h3 className="p-0 mt-3 mb-4 mx-2">Esperienza</h3>
                <div className="d-flex mx-2">
                  <div className="p-0 me-3">
                    <img src="https://placekitten.com/50" alt="job-icon" />
                  </div>
                  <div className="">
                    <h6>Ruolo ricoperto</h6>
                    <p className="mb-1">Nome azienda - Tempo pieno/part-time</p>
                    <p className="mb-1">Data - Periodo - Durata</p>
                    <p className="mb-1">Località, Regione, Stato</p>
                    <p className="mt-4">
                      <strong>Competenze: </strong>Lorem ipsum dolor, sit amet
                      consectetur adipisicing elit. Vero odit asperiores ad,
                      repudiandae numquam minus officiis eaque, quam vitae nobis
                      quasi, non possimus adipisci. Laudantium harum quas a
                      voluptatum soluta.
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
          <Col className="col-4"></Col>
        </Row>
      )}
    </Container>
  );
};
export default Profile;
