import { Row, Col, Form, Modal, Button, Spinner } from "react-bootstrap";
import {
  CardImage,
  Calendar3,
  Postcard,
  PlusLg,
  ArrowRight,
  Clock,
  ThreeDots,
} from "react-bootstrap-icons";
import SinglePost from "./SinglePost";
import { useEffect, useState } from "react";
import {
  API_KEY,
  URL_POSTS,
  getRandomPhotos,
  sortPostsByDate,
  sortPostsByDateOldest,
} from "../redux/actions/actionsHome";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profileData);
  const randomPhotos = useSelector((state) => state.randomPhotos);

  const [textArea, setTextArea] = useState("");
  const [posts, setPosts] = useState(null);
  const [spinnerState, setSpinnerState] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [recentPosts, setRecentPosts] = useState(null);
  const [mostRecent, setMostRecent] = useState(true);

  const [update, setUpdate] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState(2);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getPosts = (recentSelected) => {
    setSpinnerState(true);
    fetch(URL_POSTS, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => {
        if (res.ok) {
          setSpinnerState(false);
          return res.json();
        } else {
          setSpinnerState(false);
          throw new Error("SOMETHING WENT WRONG!");
        }
      })
      .then((data) => {
        if (recentSelected) {
          sortPostsByDate(data);
        } else {
          sortPostsByDateOldest(data);
        }
        setPosts(data);
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
  };

  const sendPost = () => {
    fetch(URL_POSTS, {
      method: "POST",
      body: JSON.stringify({ text: textArea }),
      headers: {
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          updatePosts();
          console.log("YOUR POST HAS BEEN SENT.");
        } else {
          throw new Error("SOMETHING WENT WRONG!");
        }
      })
      .catch((err) => {
        console.log(err, "ERROR.");
      });
  };

  const updatePosts = () => {
    setUpdate(update + 1);
  };

  useEffect(() => {
    getPosts(mostRecent);
    dispatch(getRandomPhotos(mostRecent));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPosts(mostRecent);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  useEffect(() => {
    getPosts(mostRecent);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mostRecent]);

  return (
    <Row className="justify-content-center mx-1">
      {/* MODALE che si apre cliccando sull'input */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="d-flex align-items-center gap-3 ms-2">
            <div>
              <img
                src={myProfile ? myProfile.image : "http://placekitten.com/50"}
                width="50px"
                height="50px"
                className="rounded-circle"
                alt="profile-img"
              />
            </div>
            <div>
              <Modal.Title className="fs-5">
                {myProfile ? myProfile.username : "Nome utente"}
              </Modal.Title>
              <p className="mb-0">Pubblica: Chiunque</p>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(e) => {
                  e.preventDefault();
                  setTextArea(e.target.value);
                }}
                as="textarea"
                className="border-0 fs-5"
                rows={10}
                placeholder="Di cosa vorresti parlare?"
              />
            </Form.Group>
          </Form>
          <div className="d-flex gap-2 fs-4">
            <div
              className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center cursor"
              style={{ width: "50px", height: "50px" }}
            >
              <CardImage />
            </div>
            <div
              className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center cursor"
              style={{ width: "50px", height: "50px" }}
            >
              <Calendar3 />
            </div>
            <div
              className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center cursor"
              style={{ width: "50px", height: "50px" }}
            >
              <ThreeDots />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Clock className="fw-bold fs-5 me-3 cursor" />
          <Button
            variant="primary"
            className="rounded-pill py-1"
            onClick={() => {
              sendPost();
              handleClose();
            }}
          >
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
      {/* SEZIONE INPUT DOVE SCRIVERE I POST*/}
      <Col className="border rounded-3 py-3 px-4 background-columns" xs={12}>
        <div className="d-flex gap-3 align-items-center">
          <div className="mb-3 cursor">
            <img
              src={myProfile ? myProfile.image : "http://placekitten.com/50"}
              width="50px"
              height="50px"
              alt="profile-img"
              className="rounded-circle"
            />
          </div>
          <Form className="flex-grow-1" onClick={handleShow}>
            <Form.Group className="mb-3">
              <Form.Control
                id="control-input"
                type="email"
                placeholder="Avvia un post"
                className="rounded-pill py-3 px-3 cursor"
              />
            </Form.Group>
          </Form>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2 cursor">
            <CardImage className="text-primary" />
            <p className="mb-0">Contenuti multimediali</p>
          </div>
          <div className="d-flex align-items-center gap-2 cursor me-4">
            <Calendar3 className="text-warning" />

            <p className="mb-0">Evento</p>
          </div>

          <div className="d-flex align-items-center gap-2 cursor">
            <Postcard className="text-danger" />
            <p className="mb-0">Scrivi un articolo</p>
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <div className="d-flex align-items-center" id="select-feed">
          <hr />
          <p className="cursor">
            {/* <strong className="ms-1">Più rilevanti per primi</strong> */}
          </p>
          <Form.Select
            onChange={(e) => {
              const selectedValue = e.target.value;
              if (selectedValue === "mostRecent") {
                setMostRecent(true);
              } else if (selectedValue === "leastRecent") {
                setMostRecent(false);
              }
            }}
            aria-label="Default select example"
            className="custom-select-paragraph cursor text-secondary"
          >
            <option>Seleziona la visualizzazione dei feed:</option>
            <option value={"mostRecent"}>Più recenti per primi</option>
            <option value={"leastRecent"}>Meno recenti per primi</option>
          </Form.Select>
        </div>
      </Col>
      {/* SEZIONE CONSIGLIATI */}
      <Col
        xs={12}
        className="border rounded-3 pt-3 background-columns"
        id="suggested-for-you"
      >
        <Row className="mt-3">
          <h5 className="fs-6 mb-4 ">Consigli per te</h5>
          <Col className="pe-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png"
              width={"100%"}
              alt=""
            />
          </Col>

          <Col xs={6} className="p-0 cursor">
            <h5 className="fs-6">Stack Overflow</h5>
            <p className="fs-7">
              Stack Overflow empowers the world to develop technology through
              collective knowledge.
            </p>
          </Col>
          <Col className="ps-0 text-primary">
            <div className="rounded-pill d-flex align-items-center justify-content-center border border-2 px-2 py-1 border-primary cursor fw-bold">
              <PlusLg className="mt-1" /> Segui
            </div>
          </Col>
        </Row>
        <hr className="my-0" />
        <Row className="mt-3">
          <Col className="pe-0 ">
            <img
              src="data:image/png;base64,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"
              width={"100%"}
              alt=""
            />
          </Col>

          <Col xs={6} className="p-0 cursor">
            <h5 className="fs-6">Docker</h5>
            <p className="fs-7">
              Docker helps developers bring their ideas to life by conquering
              the complexity of app development.
            </p>
          </Col>
          <Col className="ps-0 text-primary">
            <div className="rounded-pill d-flex align-items-center justify-content-center border border-2 px-2 py-1 border-primary cursor fw-bold">
              <PlusLg className="mt-1" /> Segui
            </div>
          </Col>
        </Row>
        <hr className="my-0" />
        <Row className="mt-3">
          <Col className="pe-2 d-flex align-content-center justify-content-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg"
              width={"100%"}
              alt=""
            />
          </Col>

          <Col xs={6} className="p-0 cursor">
            <h5 className="fs-6">GitLab</h5>
            <p className="fs-7">
              Build software faster. The DevSecOps Platform enables your entire
              org to collaborate around your code.
            </p>
          </Col>
          <Col className="ps-0 text-primary">
            <div className="rounded-pill d-flex align-items-center justify-content-center  border border-2 px-2 py-1 border-primary cursor fw-bold">
              <PlusLg className="mt-1" /> Segui
            </div>
          </Col>
        </Row>
        <hr className="my-0" />
        <Row className="mt-3">
          <Col className="d-flex justify-content-center align-items-center gap-2 fw-bold cursor text-secondary">
            <p>Visualizza altro</p>
            <ArrowRight className="mb-3" />
          </Col>
        </Row>
      </Col>
      {/* SEZIONE POST */}
      {spinnerState && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!spinnerState && (
        <Row className="px-0">
          {posts &&
            posts.slice(0, visiblePosts).map((post) => {
              return (
                <SinglePost
                  key={post._id}
                  post={post}
                  updatePosts={updatePosts}
                  randomPhotos={randomPhotos.photos}
                />
              );
            })}
          <div className="text-center">
            <Button
              className="w-50 btn btn-secondary my-3 rounded-pill"
              onClick={() => {
                setVisiblePosts(visiblePosts + 6);
              }}
            >
              Mostra altri
            </Button>
          </div>
        </Row>
      )}
    </Row>
  );
};

export default Posts;
