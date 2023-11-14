import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Form,
  ModalBody,
} from "react-bootstrap";
import SuggestedProfile from "./SuggestedProfile";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  //SEZIONE PROFILO  E MODALE PER MODIFICA PROFILO
  const [myProfile, setMyProfile] = useState(null);
  const [profilesData, setProfilesData] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [image, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  // SEZIONE DISPATCH PER LEGGERE I FOLLOWING

  const following = useSelector((state) => state.following);
  const dispatch = useDispatch();

  // SEXIONE SECONDO SHOWTIME PER MODALE DEI FOLLOWING
  const [show2, setShow2] = useState(false);

  const handleShow = () => {
    setName(myProfile.name || "");
    setSurname(myProfile.surname || "");
    setUsername(myProfile.username || "");
    setEmail(myProfile.email || "");
    setTitle(myProfile.title || "");
    setArea(myProfile.area || "");
    setProfileImage(myProfile.image || "");
    setBio(myProfile.bio || "");

    setShow(true);
  };

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
      .then(() => {
        console.log("dati modificati!");
        handleClose();
        getMyProfile();
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
        <Row className="d-flex flex-column flex-md-row mt-3">
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
                    <div
                      className="pencil-button p-2 rounded-circle pointer"
                      onClick={handleShow}
                    >
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
                    </div>
                    <img
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                      src={myProfile.image}
                      className="rounded-circle position-absolute user-image"
                      alt="img-user"
                    />
                    <div className="mt-5 mx-2">
                      <div className="d-flex justify-content-between">
                        <h2>
                          {myProfile.name} {myProfile.surname}
                        </h2>
                      </div>
                      <h4>{myProfile.title}</h4>
                      <p>{myProfile.area}</p>
                      <p>
                        Following:{" "}
                        <span
                          className="fw-bold"
                          onClick={() => {
                            setShow2(true);
                          }}
                        >
                          {following.length}
                        </span>{" "}
                      </p>
                    </div>
                    <div className="mx-2">
                      <Button className="rounded-pill fw-bold">
                        Disponibile per
                      </Button>
                      <Button
                        variant="outline-primary fw-bold"
                        className="rounded-pill mx-2"
                      >
                        Messaggio
                      </Button>
                      <Button
                        variant="outline-secondary fw-bold"
                        className="rounded-pill"
                      >
                        Altro
                      </Button>
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
              <Col className="p-0  border my-2 bg-white rounded text-center">
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
                      return (
                        <SuggestedProfile
                          key={index}
                          profile={profile}
                          dispatch={dispatch}
                        />
                      );
                    })}
                  </Col>
                  <Col className="border my-2 bg-white d-flex flex-column rounded">
                    <p className="fw-bold mt-2">Protrebbero interessarti</p>
                    {profilesData.slice(6, 8).map((profile, index) => {
                      return (
                        <SuggestedProfile
                          key={index}
                          profile={profile}
                          dispatch={dispatch}
                        />
                      );
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
                  value={name}
                />

                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your surname"
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                  required
                  value={surname}
                />

                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your new username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                  value={username}
                />

                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your new email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  value={email}
                />

                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Es Developer.."
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                  value={title}
                />

                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your area region"
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                  required
                  value={area}
                />

                <Form.Label>Profile image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Image url"
                  onChange={(e) => {
                    setProfileImage(e.target.value);
                  }}
                  required
                  value={image}
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
                  value={bio}
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
      <>
        <Modal
          show={show2}
          onHide={() => {
            setShow2(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Following users</Modal.Title>
          </Modal.Header>
          {following ? (
            <Modal.Body>
              {following.map((profile, index) => {
                return (
                  <div key={index} className="my-2 d-flex">
                    <div>
                      <img
                        src={profile.image}
                        style={{ width: "40px" }}
                        alt="profile-img"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="ms-2 d-flex align-items-center justify-content-between w-100">
                      <div className="me-3">
                        <p className="m-0">
                          {profile.name} {profile.surname}
                        </p>
                        <p className="fw-bold m-0">{profile.title}</p>
                      </div>
                      <div>
                        <Button
                          variant="outline-dark"
                          className="rounded-pill"
                          onClick={() => {
                            dispatch({ type: "REMOVE", payload: index });
                          }}
                        >
                          Rimuovi
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Modal.Body>
          ) : (
            <ModalBody>
              <p>You are not following any user</p>
            </ModalBody>
          )}

          <Modal.Footer>
            <Button
              variant="secondary"
              className="rounded-pill"
              onClick={() => {
                setShow2(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
};

export default Profile;
