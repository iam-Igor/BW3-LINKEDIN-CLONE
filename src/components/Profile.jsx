import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SuggestedProfile from "./SuggestedProfile";
import { useEffect, useState } from "react";

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
