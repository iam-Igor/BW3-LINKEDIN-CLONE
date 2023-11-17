import { Dropdown, Modal, Form, Button } from "react-bootstrap";
import {
  Clipboard,
  Pencil,
  Share,
  ThreeDots,
  Trash3,
} from "react-bootstrap-icons";
import {
  URL_COMMENTS,
  API_KEY_COMMENTS,
  passedTime,
} from "../redux/actions/actionsHome";
import { useState } from "react";
import { useSelector } from "react-redux";
const SingleComment = ({ comment, getComments, postId, postUserId }) => {
  const myProfile = useSelector((state) => state.profileData);
  // Funzionalità del modale
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Testo del modale
  const [textArea, setTextArea] = useState(comment.comment);
  //
  const deleteComment = () => {
    fetch(URL_COMMENTS + comment._id, {
      method: "DELETE",
      headers: {
        Authorization: API_KEY_COMMENTS,
      },
    })
      .then((res) => {
        if (res.ok) {
          getComments();
          console.log("YOUR COMMENT HAS BEEN DELETED");
        } else {
          throw new Error("SOMETHING WENT WRONG!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const modifyComment = () => {
    fetch(URL_COMMENTS + comment._id, {
      method: "PUT",
      body: JSON.stringify({
        comment: textArea,
        rate: "5",
        elementId: postId,
      }),
      headers: {
        Authorization: API_KEY_COMMENTS,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          getComments();
        } else {
          throw new Error("SOMETHING WENT WRONG!");
        }
      })
      .catch((err) => {
        console.log(err, "ERROR.");
      });
  };
  return (
    <div className="d-flex gap-2 mb-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="d-flex align-items-center gap-3 ms-2">
            <div>
              <img
                // src={post.user.images}
                src="https://placekitten.com/50"
                className="rounded-circle"
                fluid
                alt="profile-img"
              />
            </div>
            <div>
              <Modal.Title className="fs-5">
                {comment.author.split("@")[0]}
              </Modal.Title>
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
                  setTextArea(e.target.value);
                }}
                as="textarea"
                className="border-0 fs-5"
                rows={10}
                value={textArea}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="rounded-pill py-1"
            onClick={() => {
              modifyComment();

              handleClose();
            }}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
      {/*  */}
      <img
        src="https://placedog.net/50"
        className="rounded-circle"
        width="40px"
        height="40px"
        alt="profile-img"
      />
      <div className="d-flex justify-content-between flex-grow-1 bg-secondary-subtle py-2 px-2 rounded-bottom rounded-end ">
        <div>
          <p className="mb-0 fw-bold ">{comment.author.split("@")[0]}</p>
          <p className="mb-0 comment-content truncated">{comment.comment}</p>
        </div>
        <div>
          <div className="d-flex justify-content-end">
            <div className="text-end">
              <span className="comment-date">
                {passedTime(comment.createdAt)}
              </span>
            </div>
            <Dropdown>
              <Dropdown.Toggle
                className="pe-0 pt-0 w-25 border-0"
                variant="none"
                id="dropdown-basic"
              >
                <ThreeDots />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {myProfile._id === postUserId ? (
                  <>
                    <Dropdown.Item
                      onClick={() => {
                        handleShow();
                      }}
                    >
                      <Pencil className="me-2" />
                      Modifica commento
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        deleteComment();
                      }}
                    >
                      <Trash3 className="me-2" />
                      Elimina commento
                    </Dropdown.Item>{" "}
                  </>
                ) : (
                  ""
                )}
                <Dropdown.Item>
                  <Clipboard className="me-2" />
                  Copia il link nel commento
                </Dropdown.Item>
                <Dropdown.Item>
                  <Share className="me-2" />
                  Segnala
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
