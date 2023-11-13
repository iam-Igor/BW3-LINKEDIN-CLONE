import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import SuggestedProfile from "./SuggestedProfile";
import Modal from "react-bootstrap/Modal";

const Profile = () => {
  const [myProfile, setMyProfile] = useState(null);
  const [profilesData, setProfilesData] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [image, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    title: "",
    area: "",
    image: "",
    bio: "",
  });

  const handleSave = () => {
    const updatedData = {
      name,
      surname,
      username,
      email,
      title,
      area,
      image,
      bio,
    };

    setFormData((prevData) => ({
      ...prevData,
      ...updatedData,
    }));

    console.log("Form Data:", formData);

    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "PUT",
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error in fetching user profiles");
        }
      })
      .then((data) => {
        console.log("dati modificati!");
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <Col className="col-md-9 ">
            <Row className="d-flex flex-column">
              <Col className="position-relative p-0 mb-2">
                <Card>
                  <Card.Img
                    variant="fluid"
                    style={{ height: "150px", objectFit: "cover" }}
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/488f115d-6e44-4ccd-b238-b2699af64966/d7bmt54-cde04c58-1c7d-41d2-84aa-ba777a5e5e57.jpg/v1/fill/w_1192,h_670,q_70,strp/web_developer_wallpaper__code__by_plusjack_d7bmt54-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNDg4ZjExNWQtNmU0NC00Y2NkLWIyMzgtYjI2OTlhZjY0OTY2XC9kN2JtdDU0LWNkZTA0YzU4LTFjN2QtNDFkMi04NGFhLWJhNzc3YTVlNWU1Ny5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vHgupyecAg5BSAmKddsETVA6TmT2Dp-kGL64C5Oprqk"
                  />
                  <Card.Body>
                    <img
                      style={{ width: "150px", height: "150px" }}
                      src={myProfile.image}
                      className="rounded-circle position-absolute user-image"
                      alt="img-user"
                    />
                    <div className="mt-5 mx-2">
                      <div className="d-flex justify-content-between">
                        <h2>
                          {myProfile.name} {myProfile.surname}
                        </h2>
                        <div>
                          <i
                            className="bi bi-pencil fs-4"
                            onClick={handleShow}
                          ></i>
                        </div>
                      </div>
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
          <Col className="col-12 col-md-3 ps-0">
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
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />

                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your surname"
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                  required
                />

                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your new username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />

                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your new email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />

                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Es Developer.."
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                />

                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your area region"
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                  required
                />

                <Form.Label>Profile image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Image url"
                  onChange={(e) => {
                    setProfileImage(e.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Bio details"
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="rounded-pill"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              variant="primary"
              className="rounded-pill"
              onClick={handleSave}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
};
export default Profile;
