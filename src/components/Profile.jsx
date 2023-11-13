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
                  <div className="mt-5">
                    <h2>Username</h2>
                    <p>Mansione/impiego</p>
                    <p>luogo</p>
                    <p>Follower</p>
                  </div>
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
        <Col className="col-3 d-none d-md-block">
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
            {profilesData && (
              <>
                <Col className="border my-2 bg-white d-flex flex-column rounded">
                  <p className="fw-bold mt-2">Profili che potresti conoscere</p>
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
    </Container>
  );
};
export default Profile;
