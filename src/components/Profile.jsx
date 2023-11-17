import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Form,
  ModalBody,
  Alert,
  ProgressBar,
} from "react-bootstrap";
import SuggestedProfile from "./SuggestedProfile";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { PARAMS } from "../redux/store";
import { useLocation, useParams } from "react-router-dom";
import SingleExperience from "./SingleExperience";
import Myfooter from "./Myfooter";
import Events from "./Events";
import { LOADING } from "../redux/store";
import Test2 from "./Test2";
import AssistanButton from "./AssistantButton";

const Profile = () => {
  //SEZIONE PROFILO  E MODALE PER MODIFICA PROFILO
  const [myProfile, setMyProfile] = useState(null);
  const [profilesData, setProfilesData] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setShow2(false);
    setShow3(false);
  };

  const [allExperiences, setAllExperiuences] = useState(null);
  const [isVisible, setisVisible] = useState(false);

  const [contentSaved, setContentSaved] = useState(false);
  const urlParams = useParams();
  const [editProfile, setEditProfile] = useState("");
  const location = useLocation();
  const [editExoerience, setEditExoerience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    username: "totti10",
    image: "",
  });

  const apiKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ1YWM1NWU3ZTAwMThmODNjMGIiLCJpYXQiOjE2OTk4Njc5OTQsImV4cCI6MTcwMTA3NzU5NH0.s42cKTE4Spw6hQNWnXWOTl1nLe5K6KLEtN_9S8-D2OU";

  let newparams = "";

  if (location.pathname === "/profile/me") {
    newparams = "6551ed5ac55e7e0018f83c0b";
  } else {
    newparams = urlParams.userID;
  }

  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [username, setUsername] = useState("");
  // const [title, setTitle] = useState("");
  // const [area, setArea] = useState("");
  // const [image, setProfileImage] = useState("");
  // const [bio, setBio] = useState("");
  // const [email, setEmail] = useState("");

  // SEZIONE DISPATCH PER LEGGERE I FOLLOWING

  const following = useSelector((state) => state.following);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const isLoading = useSelector((state) => state.isLoading);

  // SEXIONE SECONDO SHOWTIME PER MODALE DEI FOLLOWING
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [count, setCount] = useState(0);

  const handleShow = () => {
    // setName(myProfile.name || "");
    // setSurname(myProfile.surname || "");
    // set(myProfile.username || "");
    // setEmail(myProfile.email || "");
    // setTitle(myProfile.title || "");
    // setArea(myProfile.area || "");
    // setProfileImage(myProfile.image || "");
    // setBio(myProfile.bio || "");

    setShow(true);
  };

  const getExperiences = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        newparams +
        "/experiences",
      {
        headers: {
          Authorization: apiKey,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error in fetching user profiles");
        }
      })
      .then((data) => {
        setAllExperiuences(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveExperience = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/6551ed5ac55e7e0018f83c0b/experiences",
      {
        method: "POST",
        headers: {
          Authorization: apiKey,
          "Content-Type": "application/json",
        },

        body: JSON.stringify(editExoerience),
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("salvato");
          setEditExoerience({
            role: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            area: "",
            username: "totti10",
            image: "",
          });
        } else {
          throw new Error("error in saving content");
        }
      })
      .then(() => {
        setContentSaved(true);
        setTimeout(() => {
          handleClose();
          getExperiences();
          setContentSaved(false);
        }, 800);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "PUT",
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editProfile),
    })
      .then((res) => {
        if (res.ok) {
        } else {
          throw new Error("error in fetching user profiles");
        }
      })
      .then(() => {
        setContentSaved(true);
        setTimeout(() => {
          handleClose();
          getAllprofilesInfo();
          getMyProfile();
          setContentSaved(false);
        }, 800);
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
    fetch("https://striveschool-api.herokuapp.com/api/profile/" + newparams, {
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
        setMyProfile(data);
        setEditProfile({
          name: data.name,
          surname: data.surname,
          email: data.email,
          username: data.username,
          bio: data.bio,
          title: data.title,
          area: data.area,
          image: data.image,
        });

        dispatch({ type: PARAMS, payload: data._id });

        setTimeout(() => {
          dispatch({ type: LOADING, payload: false });
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch({ type: LOADING, payload: true });

    getMyProfile();
    getAllprofilesInfo();
    getExperiences();
  }, [urlParams]);

  useEffect(() => {
    // Imposta un intervallo che aumenta count da 0 a 100 in 1000 millisecondi (1 secondo)
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    }, 1);

    // Pulisci l'intervallo quando il componente viene smontato
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <div className="d-flex align-items-center mt-5 flex-column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="loader__linkedin-logo"
            width="190"
            height="48"
            viewBox="0 0 190 48"
            fill="blue"
          >
            <g>
              <g>
                <path
                  d="M58,27.22V41H51V28.88c0-3.7-2.07-5.24-4-5.24a5,5,0,0,0-5.14,4.85,4.34,4.34,0,0,0,0,.51V41H35V18h6.6v3.25h.09c.69-1.41,3.64-3.75,7.66-3.75S58,20.22,58,27.22ZM24,41h7V18H24ZM27.5,6.45a4.05,4.05,0,1,0,4.1,4.05,4,4,0,0,0-4-4ZM190,3.5v41a3.5,3.5,0,0,1-3.5,3.5h-41a3.5,3.5,0,0,1-3.5-3.5V3.5A3.5,3.5,0,0,1,145.5,0h41A3.5,3.5,0,0,1,190,3.5ZM156,18h-7V41h7Zm.6-7.5a4.1,4.1,0,1,0-4.15,4.05h.05a4,4,0,0,0,4.1-3.9ZM183,27.22c0-7-4.63-9.72-8.65-9.72s-7,2.34-7.66,3.75h-.09V18H160V41h7V29c0-3.69,2.51-5.33,4.95-5.33,2,0,4.05,1.54,4.05,5.24V41h7ZM8,7H0V41H21V34H8ZM108,29.77v2H91a1.33,1.33,0,0,0,.11.43c.58,1.93,2.67,3.56,5.75,3.56A6.3,6.3,0,0,0,102,33.52l5.1,3.18a12.72,12.72,0,0,1-10.45,4.8C89.94,41.5,84,37.42,84,29.59S90,17.5,96.44,17.5,108,21.81,108,29.77ZM101,27c0-2.4-1.56-4.38-4.75-4.38-3,0-5.09,2-5.25,4.38ZM85.26,18H76.68l-7.54,9.37H69V7H62V41h7V30h.14l7.72,11h8.77L76.2,28.43ZM128,7h7V41h-6.6V38h-.09c-.88,1.52-3.24,3.49-7.4,3.49-5,0-10.91-3.63-10.91-12,0-7.53,5.1-11.95,10.82-11.95a9.55,9.55,0,0,1,7.09,3H128Zm.3,22.49a5.74,5.74,0,0,0-5.59-5.89h-.15A5.54,5.54,0,0,0,116.89,29c0,.15,0,.29,0,.44a5.61,5.61,0,0,0,5.26,5.94h.4A5.83,5.83,0,0,0,128.3,29.49Z"
                  fill="blue"
                ></path>
              </g>
            </g>
          </svg>
          <ProgressBar now={count} className="w-50 mt-5" />
        </div>
      ) : (
        <>
          {myProfile && (
            <Row className="d-flex flex-column flex-md-row mt-3">
              <Col className="col-md-9 ">
                <Row className="d-flex flex-column">
                  <Col className="position-relative p-0 mb-2">
                    <Card>
                      <Card.Img
                        variant="fluid"
                        style={{ height: "180px", objectFit: "cover" }}
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/488f115d-6e44-4ccd-b238-b2699af64966/d7bmt54-cde04c58-1c7d-41d2-84aa-ba777a5e5e57.jpg/v1/fill/w_1192,h_670,q_70,strp/web_developer_wallpaper__code__by_plusjack_d7bmt54-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNDg4ZjExNWQtNmU0NC00Y2NkLWIyMzgtYjI2OTlhZjY0OTY2XC9kN2JtdDU0LWNkZTA0YzU4LTFjN2QtNDFkMi04NGFhLWJhNzc3YTVlNWU1Ny5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vHgupyecAg5BSAmKddsETVA6TmT2Dp-kGL64C5Oprqk"
                      />
                      <Card.Body>
                        {location.pathname === "/profile/me" ? (
                          <div
                            className="pencilButton p-2 rounded-circle pointer"
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
                        ) : null}

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
                          {location.pathname === "/profile/me" ? (
                            <p className="pointer">
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
                          ) : null}
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
                  {allExperiences && (
                    <div className="bg-white rounded-2 border info-section mb-2">
                      <div className="position-relative d-flex align-items-center">
                        <h3 className="p-0 mt-3 mb-4 mx-2">Esperienza</h3>
                        {location.pathname === "/profile/me" ? (
                          <div
                            className="plus-button p-2 rounded-circle"
                            onClick={() => setShow3(true)}
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
                              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                            </svg>
                          </div>
                        ) : null}
                      </div>

                      {allExperiences.map((exp, index) => {
                        return (
                          <SingleExperience
                            key={index}
                            job={exp}
                            getExperiences={getExperiences}
                          />
                        );
                      })}
                    </div>
                  )}
                  <div className="bg-white rounded-2 border info-section mb-2">
                    <div className="d-flex  flex-column ">
                      <h3 className="p-0 mt-3 mb-4 mx-2">Attività</h3>
                      <div className="d-flex gap-2 mb-2">
                        {" "}
                        <Button
                          className="rounded-pill py-1 "
                          variant="success"
                        >
                          Post
                        </Button>
                        <Button
                          className="rounded-pill py-1 btn btn-outline-secondary"
                          variant="none"
                        >
                          Eventi
                        </Button>
                      </div>
                      {events &&
                        events.map((event) => {
                          return <Events event={event} myProfile={myProfile} />;
                        })}
                    </div>
                  </div>
                </Row>
              </Col>
              <Col className="col-12 col-md-3 ps-0">
                <Row className="ms-md-4 flex-column ms-0">
                  <Col className="bg-white p-3 border rounded d-flex justify-content-center d-none d-lg-block">
                    <div className="d-flex justify-content-around w-75 ">
                      <Button
                        variant="success"
                        className="rounded-pill w-50 me-2"
                      >
                        English
                      </Button>
                      <Button
                        variant="outline-dark"
                        className="rounded-pill w-50"
                      >
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
                            <SuggestedProfile key={index} profile={profile} />
                          );
                        })}
                      </Col>
                      <Col className="border my-2 bg-white d-flex flex-column rounded">
                        <p className="fw-bold mt-2">Protrebbero interessarti</p>
                        {profilesData.slice(6, 8).map((profile, index) => {
                          return (
                            <SuggestedProfile key={index} profile={profile} />
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
                {contentSaved ? (
                  <Alert variant="success">Content saved!</Alert>
                ) : (
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
                          setEditProfile({
                            ...editProfile,
                            name: e.target.value,
                          });
                        }}
                        required
                        value={editProfile.name}
                      />

                      <Form.Label>Surname</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your surname"
                        onChange={(e) => {
                          setEditProfile({
                            ...editProfile,
                            surname: e.target.value,
                          });
                        }}
                        required
                        value={editProfile.surname}
                      />

                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your new username"
                        onChange={(e) => {
                          setEditProfile({
                            ...editProfile,
                            username: e.target.value,
                          });
                        }}
                        required
                        value={editProfile.username}
                      />

                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Your new email"
                        onChange={(e) => {
                          setEditProfile({
                            ...editProfile,
                            email: e.target.value,
                          });
                        }}
                        required
                        value={editProfile.email}
                      />

                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Es Developer.."
                        onChange={(e) => {
                          setEditProfile({
                            ...editProfile,
                            title: e.target.value,
                          });
                        }}
                        required
                        value={editProfile.title}
                      />

                      <Form.Label>Area</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your area region"
                        onChange={(e) => {
                          setEditProfile({
                            ...editProfile,
                            area: e.target.value,
                          });
                        }}
                        required
                        value={editProfile.area}
                      />

                      <Form.Label>Profile image</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Image url"
                        onChange={(e) => {
                          setEditProfile({
                            ...editProfile,
                            image: e.target.value,
                          });
                        }}
                        required
                        value={editProfile.image}
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
                          setEditProfile({
                            ...editProfile,
                            bio: e.target.value,
                          });
                        }}
                        required
                        value={editProfile.bio}
                      />
                    </Form.Group>
                  </Form>
                )}
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
                  onClick={() => {
                    handleSave();
                  }}
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
          <>
            <Modal show={show3} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Aggiungi esperienza lavorativa</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {contentSaved ? (
                  <Alert variant="success">Content saved!</Alert>
                ) : (
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your role"
                        onChange={(e) => {
                          setEditExoerience({
                            ...editExoerience,
                            role: e.target.value,
                          });
                        }}
                        required
                        value={editExoerience.role}
                      />

                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your Company"
                        onChange={(e) => {
                          setEditExoerience({
                            ...editExoerience,
                            company: e.target.value,
                          });
                        }}
                        required
                        value={editExoerience.company}
                      />

                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Your start date"
                        onChange={(e) => {
                          setEditExoerience({
                            ...editExoerience,
                            startDate: e.target.value,
                          });
                        }}
                        required
                        value={editExoerience.startDate}
                      />

                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Your start date"
                        onChange={(e) => {
                          setEditExoerience({
                            ...editExoerience,
                            endDate: e.target.value,
                          });
                        }}
                        required
                        value={editExoerience.endDate}
                      />

                      <Form.Label>Area</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your Area"
                        onChange={(e) => {
                          setEditExoerience({
                            ...editExoerience,
                            area: e.target.value,
                          });
                        }}
                        required
                        value={editExoerience.area}
                      />

                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Image url"
                        onChange={(e) => {
                          setEditExoerience({
                            ...editExoerience,
                            image: e.target.value,
                          });
                        }}
                        required
                        value={editExoerience.image}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Bio details"
                        onChange={(e) => {
                          setEditExoerience({
                            ...editExoerience,
                            description: e.target.value,
                          });
                        }}
                        required
                        value={editExoerience.description}
                      />
                    </Form.Group>
                  </Form>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  className="rounded-pill"
                  onClick={() => setShow3(false)}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  className="rounded-pill"
                  onClick={() => {
                    saveExperience();
                  }}
                >
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
            {isVisible && (
              <Test2 visibility={setisVisible} profile={editProfile} />
            )}
          </>
          <AssistanButton show={setisVisible} visible={isVisible} />
          <Myfooter />
        </>
      )}
    </Container>
  );
};

export default Profile;
