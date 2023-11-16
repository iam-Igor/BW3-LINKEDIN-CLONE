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
  console.log(randomPhotos, "SONO LE FOTO");
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
        console.log(data);
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
                console.log("ok");
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
      <Col xs={12} className="border rounded-3 pt-3 background-columns">
        <Row className="mt-3">
          <h5 className="fs-6 mb-4 ">Consigli per te</h5>
          <Col className="pe-0">
            <img src="http://placekitten.com/50" width={"100%"} alt="" />
          </Col>

          <Col xs={9} className="p-0 cursor">
            <h5 className="fs-6">Stack Overflow</h5>
            <p>
              Stack Overflow empowers the world to develop technology through
              collective knowledge.
            </p>
          </Col>
          <Col className="ps-0 text-primary">
            <div className="rounded-pill d-flex align-items-center border border-2 px-2 py-1 border-primary cursor fw-bold">
              <PlusLg className="mt-1" /> Segui
            </div>
          </Col>
        </Row>
        <hr className="my-0" />
        <Row className="mt-3">
          <Col className="pe-0 ">
            <img src="http://placekitten.com/50" width={"100%"} alt="" />
          </Col>

          <Col xs={9} className="p-0 cursor">
            <h5 className="fs-6">Stack Overflow</h5>
            <p>
              Stack Overflow empowers the world to develop technology through
              collective knowledge.
            </p>
          </Col>
          <Col className="ps-0 text-primary">
            <div className="rounded-pill d-flex align-items-center border border-2 px-2 py-1 border-primary cursor fw-bold">
              <PlusLg className="mt-1" /> Segui
            </div>
          </Col>
        </Row>
        <hr className="my-0" />
        <Row className="mt-3">
          <Col className="pe-0">
            <img src="http://placekitten.com/50" width={"100%"} alt="" />
          </Col>

          <Col xs={9} className="p-0 cursor">
            <h5 className="fs-6">Stack Overflow</h5>
            <p>
              Stack Overflow empowers the world to develop technology through
              collective knowledge.
            </p>
          </Col>
          <Col className="ps-0 text-primary">
            <div className="rounded-pill d-flex align-items-center border border-2 px-2 py-1 border-primary cursor fw-bold">
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
              className="w-50 btn btn-secondary my-3"
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
