import { Col, Dropdown, Modal, Form, Button } from "react-bootstrap";
import {
  API_KEY,
  API_KEY_COMMENTS,
  URL_POSTS,
} from "../redux/actions/actionsHome";
import { URL_COMMENTS } from "../redux/actions/actionsHome";
import {
  Bookmark,
  ChatText,
  Dot,
  HandThumbsUp,
  HandThumbsUpFill,
  SendFill,
  ShareFill,
  ThreeDots,
  Clipboard,
  CodeSlash,
  EyeSlashFill,
  Trash3Fill,
  PencilFill,
  PersonCircle,
} from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LIKE_POST } from "../redux/actions/actionsHome";

const SinglePost = ({ post, updatePosts, randomPhotos }) => {
  const [randomNumOfLikes, setRandomNumOfLikes] = useState(
    Math.floor(Math.random() * 200)
  );
  // eslint-disable-next-line no-unused-vars
  const [randomNumFrom0to80, setRandomNumFrom0to80] = useState(
    Math.floor(Math.random() * 80)
  );

  const likes = useSelector((state) => state.likedPosts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myProfile = useSelector((state) => state.profileData);
  const [commmentsNumber, setCommentsNumber] = useState(0);
  // Testo di partenza, modificabile, del modale
  const [textArea, setTextArea] = useState(post.text);

  // Testo del commento
  const [commentContent, setCommentContent] = useState("");
  // Commenti Filtrati in base all'id del post

  const [commentsToShow, setCommentsToShow] = useState(null);

  // Funzionalità del modale
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fetch per modificare i post

  const modifyPost = () => {
    fetch(URL_POSTS + post._id, {
      method: "PUT",
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

  // Fetch per eliminare il post
  const deletePost = () => {
    fetch(URL_POSTS + post._id, {
      method: "DELETE",
      headers: {
        Authorization: API_KEY,
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

  // Fetch per ottenere i commenti

  const getComments = (showThem) => {
    fetch(URL_COMMENTS, {
      headers: {
        Authorization: API_KEY_COMMENTS,
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
        console.log(data, "COMMENTS");

        const filteredData = data.filter(
          (comment) => comment.elementId === post._id
        );
        if (showThem !== "no") {
          setCommentsToShow(filteredData);
          setCommentsNumber(filteredData.length);
        } else {
          setCommentsNumber(filteredData.length);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Fetch per inviare il commento

  const sendComment = () => {
    fetch(URL_COMMENTS, {
      method: "POST",
      body: JSON.stringify({
        comment: commentContent,
        rate: "5",
        elementId: post._id,
      }),
      headers: {
        Authorization: API_KEY_COMMENTS,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setCommentContent("");

          console.log("YOUR COMMENT HAS BEEN SENT");
        } else {
          throw new Error("SOMETHING WENT WRONG!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getComments("no");
    setRandomNumOfLikes(Math.floor(Math.random() * 200));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={12} className="py-3 my-2 border rounded-3 background-columns">
      {/* MODALE per modificare il contenuto del post */}
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
                {post.username ? post.username.split("@")[0] : "Nome utente"}
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
              modifyPost();
              handleClose();
            }}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex justify-content-between mb-2">
        <div className="d-flex gap-2">
          {post.user.image && (
            <img
              src={post.user.image}
              width="50px"
              height="50px"
              alt="author-img"
            />
          )}

          {!post.user.image && <PersonCircle className="fs-1 text-secondary" />}

          <h4
            onClick={() => {
              navigate(`/profile/${post.user._id ? post.user._id : ""}`);
            }}
            className="fw-bold fs-6 cursor"
          >
            {post.username.split("@")[0]}
          </h4>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              className="text-end border-0 w-25"
              variant="none"
              drop="start"
              show="none"
              id="dropdown-basic"
            >
              <ThreeDots className="fs-4" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="d-flex align-items-center">
                <Bookmark className="me-2 mt-1" />
                Salva
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <Clipboard className="me-2 mt-1" />
                Copia link al post
              </Dropdown.Item>
              {myProfile._id === post.user._id ? (
                <>
                  <Dropdown.Item
                    className={"d-flex align-items-center"}
                    onClick={deletePost}
                  >
                    <Trash3Fill className="me-2 mt-1" />
                    Elimina questo post
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="d-flex align-items-center"
                    onClick={() => {
                      handleShow();
                    }}
                  >
                    <PencilFill className="me-2 mt-1" />
                    Modifica questo post
                  </Dropdown.Item>
                </>
              ) : (
                ""
              )}

              <Dropdown.Item className="d-flex align-items-center">
                <CodeSlash className="me-2 mt-1" />
                Incorpora questo post
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center">
                <EyeSlashFill className="me-2 mt-1" />
                Nascondi o segnala questo post
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <p>{post.text}</p>
      <div className="d-flex justify-content-center">
        <img
          src={
            randomPhotos[randomNumFrom0to80].src.original
              ? randomPhotos[randomNumFrom0to80].src.original
              : "https://placekitten.com/500"
          }
          width="500px"
          className="w-100"
          alt="post-img"
        />
      </div>
      <div className="d-flex justify-content-between mt-2 stats">
        <div className="d-flex align-items-center gap-2 ">
          <div
            className="border d-flex justify-content-center align-items-center rounded-circle cursor"
            style={{ width: "25px", height: "25px" }}
          >
            <HandThumbsUp />
          </div>
          <p className="mb-0">
            {likes.includes(post._id) ? randomNumOfLikes + 1 : randomNumOfLikes}
          </p>
        </div>
        <div className="d-flex align-items-center cursor">
          <p className="mb-0">{commmentsNumber} commenti</p>{" "}
          <Dot className="mt-1" /> <p className="mb-0">23 diffusioni post</p>
        </div>
      </div>
      <hr className="mx-3" />
      <div className="d-flex mt-3 justify-content-around comments-actions">
        <div
          className="d-flex gap-2 align-items-center cursor"
          onClick={() => {
            dispatch({
              type: LIKE_POST,
              payload: post._id,
            });
          }}
        >
          {likes.includes(post._id) ? (
            <HandThumbsUpFill className={`text-primary`} />
          ) : (
            <HandThumbsUp />
          )}

          <p className="mb-0">Consiglia</p>
        </div>
        <div className="d-flex gap-2 align-items-center cursor">
          <ChatText />
          <p className="mb-0" onClick={getComments}>
            Commenta
          </p>
        </div>
        <div className="d-flex gap-2 align-items-center cursor">
          <ShareFill />
          <p className="mb-0">Diffondi il post</p>
        </div>
        <div className="d-flex gap-2 align-items-center cursor">
          <SendFill />
          <p className="mb-0">Invia</p>
        </div>
      </div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          sendComment();
          setCommentContent("");
          getComments();
        }}
      >
        <Form.Group className="mb-3 d-flex gap-2 mt-4">
          <img
            src={myProfile ? myProfile.image : "https://placekitten.com/40"}
            width="40px"
            height="40px"
            className="rounded-circle"
            alt="profile-img"
          />
          <Form.Control
            type="text"
            placeholder="Aggiungi un commento"
            value={commentContent}
            onChange={(e) => {
              setCommentContent(e.target.value);
            }}
            onClick={() => {
              getComments();
            }}
            className="rounded-pill py-2 px-2 "
          />
          {/* <Button
            onClick={(e) => {
              e.preventDefault();
              sendComment();
              setCommentContent("");
              getComments();
            }}
          >
            INVIA
          </Button> */}
        </Form.Group>
      </Form>
      {commentsToShow &&
        commentsToShow.map((comment) => (
          <SingleComment
            comment={comment}
            getComments={getComments}
            postId={post._id}
            key={comment._id}
            postUserId={post.user._id}
          />
        ))}
    </Col>
  );
};

export default SinglePost;
