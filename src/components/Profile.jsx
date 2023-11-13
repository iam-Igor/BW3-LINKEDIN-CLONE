import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SuggestedProfile from "./SuggestedProfile";

const Profile = () => {
  const [myProfile, setMyProfile] = useState(null);
  const [profilesData, setProfilesData] = useState(null);

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

  const apiKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ1YWM1NWU3ZTAwMThmODNjMGIiLCJpYXQiOjE2OTk4Njc5OTQsImV4cCI6MTcwMTA3NzU5NH0.s42cKTE4Spw6hQNWnXWOTl1nLe5K6KLEtN_9S8-D2OU";

  useEffect(() => {
    getMyProfile();
    getAllprofilesInfo();
  }, []);

  return (
    <Container>
      {myProfile && (
        <Row className="d-flex flex-column flex-md-row">
          <Col className="col-md-8 ">
            <Row className="d-flex flex-column">
              <Col className="position-relative p-0 mb-2">
                <Card>
                  <Card.Img
                    variant="fluid"
                    style={{ height: "150px" }}
                    src="https://placekitten.com/300"
                  />
                  <Card.Body>
                    <a href="ujiu" className="pencil-button p-2 rounded-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        fill="currentColor"
                        className="mercado-match"
                        width="24"
                        height="24"
                        focusable="false"
                      >
                        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                      </svg>
                    </a>
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
          <Col className="col-12 col-md-4 ps-0">
            <Row className="ms-md-4 flex-column ms-0">
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
              <Col className="p-0  border my-2 bg-white text-center">
                <img
                  className="img-fluid rounded"
                  src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                  alt="linkedin"
                />
              </Col>
              {profilesData && (
                <>
                  <Col className="border my-2 bg-white d-flex flex-column rounded">
                    <p className="fw-bold mt-2">
                      Profili che potresti conoscere
                    </p>
                    {profilesData.slice(0, 6).map((profile, index) => {
                      return <SuggestedProfile key={index} profile={profile} />;
                    })}
                  </Col>
                  <Col className="border my-2 bg-white d-flex flex-column rounded">
                    <p className="fw-bold mt-2">Protrebbero interessarti</p>
                    {profilesData.slice(6, 8).map((profile, index) => {
                      return <SuggestedProfile key={index} profile={profile} />;
                    })}
                  </Col>
                </>
              )}
              <Col className="p-0  border my-2 rounded">
                <img
                  className="img-fluid rounded"
                  src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                  alt="linkedin"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default Profile;
