import { Row, Col, Form, Modal, Button } from "react-bootstrap";
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
import { API_KEY, URL_POSTS } from "../redux/actions/actionsHome";

const Posts = () => {
  const [textArea, setTextArea] = useState("");
  const [posts, setPosts] = useState(null);
  const [update, setUpdate] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getPosts = () => {
    fetch(URL_POSTS, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("SOMETHING WENT WRONG!");
        }
      })
      .then((data) => {
        console.log(data);
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
    getPosts();
  }, []);

  useEffect(() => {
    getPosts();
  }, [update]);

  return (
    <Row className="justify-content-center">
      {/* MODALE che si apre cliccando sull'input */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="d-flex align-items-center gap-3 ms-2">
            <div>
              <img
                src="https://placekitten.com/50"
                className="rounded-circle"
                fluid
                alt="profile-img"
              />
            </div>
            <div>
              <Modal.Title className="fs-5">Nome utente</Modal.Title>
              <p className="mb-0">Pubblica: Chiunque</p>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                onChange={(e) => {
                  e.preventDefault();
                  setTextArea(e.target.value);
                  console.log(e.target.value);
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
              className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center"
              style={{ width: "50px", height: "50px" }}
            >
              <CardImage />
            </div>
            <div
              className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center"
              style={{ width: "50px", height: "50px" }}
            >
              <Calendar3 />
            </div>
            <div
              className="ms-2 rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center"
              style={{ width: "50px", height: "50px" }}
            >
              <ThreeDots />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Clock className="fw-bold fs-5 me-3" />
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
      <Col className="border rounded-3 py-3 px-4" xs={12}>
        <div className="d-flex gap-3 align-items-center ">
          <div className="mb-3">
            <img
              src="http://placekitten.com/50"
              alt="profile-img"
              className="rounded-circle"
            />
          </div>
          <Form className="flex-grow-1" onClick={handleShow}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Avvia un post"
                className="rounded-pill py-3 px-3"
              />
            </Form.Group>
          </Form>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="d-flex align-items-center gap-2">
            <CardImage />
            <p className="mb-0">Contenuti multimediali</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Calendar3 />

            <p className="mb-0">Evento</p>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Postcard />
            <p className="mb-0">Scrivi un articolo</p>
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <div className="d-flex align-items-center">
          <hr className="w-50" />
          <p>
            Seleziona la visualizzazione dei feed:
            <strong>Più rilevanti per primi</strong>
          </p>
        </div>
      </Col>
      {/* SEZIONE CONSIGLIATI */}
      <Col xs={12} className="border rounded-3 pt-3">
        <Row className="mt-3">
          <h5 className="fs-6 mb-4 ">Consigli per te</h5>
          <Col className="pe-0">
            <img src="http://placekitten.com/50" width={"100%"} alt="" />
          </Col>

          <Col xs={9}>
            <h5 className="fs-6">Stack Overflow</h5>
            <p>
              Stack Overflow empowers the world to develop technology through
              collective knowledge.
            </p>
          </Col>
          <Col className="ps-0 text-primary">
            <div className="rounded-pill d-flex align-items-center border px-2 py-1 border-primary">
              <PlusLg className="mt-1" /> Segui
            </div>
          </Col>
        </Row>
        <hr className="my-0" />
        <Row className="mt-3">
          <Col className="pe-0 ">
            <img src="http://placekitten.com/50" width={"100%"} alt="" />
          </Col>

          <Col xs={9}>
            <h5 className="fs-6">Stack Overflow</h5>
            <p>
              Stack Overflow empowers the world to develop technology through
              collective knowledge.
            </p>
          </Col>
          <Col className="ps-0 text-primary">
            <div className="rounded-pill d-flex align-items-center border px-2 py-1 border-primary">
              <PlusLg className="mt-1" /> Segui
            </div>
          </Col>
        </Row>
        <hr className="my-0" />
        <Row className="mt-3">
          <Col className="pe-0">
            <img src="http://placekitten.com/50" width={"100%"} alt="" />
          </Col>

          <Col xs={9}>
            <h5 className="fs-6">Stack Overflow</h5>
            <p>
              Stack Overflow empowers the world to develop technology through
              collective knowledge.
            </p>
          </Col>
          <Col className="ps-0 text-primary">
            <div className="rounded-pill d-flex align-items-center border px-2 py-1 border-primary">
              <PlusLg className="mt-1" /> Segui
            </div>
          </Col>
        </Row>
        <hr className="my-0" />
        <Row className="mt-3">
          <Col className="d-flex justify-content-center align-items-center gap-2 fw-bold ">
            <p>Visualizza altro</p>
            <ArrowRight className="mb-3" />
          </Col>
        </Row>
      </Col>
      {/* SEZIONE POST */}
      <Row className="px-0">
        {posts &&
          posts.map((post) => {
            return (
              <SinglePost
                key={post._id}
                post={post}
                updatePosts={updatePosts}
              />
            );
          })}
      </Row>
    </Row>
  );
};

export default Posts;
