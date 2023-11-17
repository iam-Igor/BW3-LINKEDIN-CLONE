import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ChatBox = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);
  const isLoading = useSelector((state) => state.isLoading);
  const location = useLocation();

  if (location.pathname !== "/jobs/offers") {
    return (
      <Container
        fluid
        className={`sticky-bottom chat-box d-none ${
          isLoading ? "" : " d-lg-inline-block "
        }`}
      >
        <Row
          className={`d-flex justify-content-end  bg-white ms-5 rounded flex-column chat-container ${
            show ? `chat-on` : `chat-off`
          }`}
        >
          <Col className="d-flex align-items-center justify-content-between ">
            <div className="d-flex py-3" onClick={handleShow}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
                alt="logo"
                style={{ width: "15%" }}
              />
              <p className="m-0 fw-bold">Messaggistica</p>
            </div>
            <div className="fs-5 d-flex">
              <i className="bi bi-three-dots"></i>
              <i className="bi bi-pencil-square mx-2"></i>
              <i
                className={`bi bi-chevron-compact-${show ? `down` : `up`}`}
                onClick={handleClose}
              ></i>
            </div>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="&#xF002;"
              className="chat-input"
              style={{ fontFamily: "FontAwesome" }}
            />
          </Col>
          <Col className="d-flex single-chat align-items-center border">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
                alt="logo"
                style={{ width: "80%" }}
              />
            </div>
            <div className="mt-3">
              <h6 className="fw-bold m-0">Guido Masi</h6>
              <p>Na birretta stasera?</p>
            </div>
          </Col>
          <Col className="d-flex single-chat align-items-center border">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
                alt="logo"
                style={{ width: "80%" }}
              />
            </div>
            <div className="mt-3">
              <h6 className="fw-bold m-0">Simone Pernella</h6>
              <p>Io stasera nun esco proprio</p>
            </div>
          </Col>
          <Col className="d-flex single-chat align-items-center border">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
                alt="logo"
                style={{ width: "80%" }}
              />
            </div>
            <div className="mt-3">
              <h6 className="fw-bold m-0">Riccardo di Bari</h6>
              <p>Stasera festaaaa??</p>
            </div>
          </Col>
          <Col className=" d-flex single-chat align-items-center border">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
                alt="logo"
                style={{ width: "80%" }}
              />
            </div>
            <div className="mt-3">
              <h6 className="fw-bold m-0">Eros Savogin</h6>
              <p>Ma come si centra quel div ? d**</p>
            </div>
          </Col>
          <Col className=" d-flex single-chat align-items-center border">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
                alt="logo"
                style={{ width: "80%" }}
              />
            </div>
            <div className="mt-3">
              <h6 className="fw-bold m-0">Ygor Garofalo</h6>
              <p>Io react lo odio proprio</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ChatBox;
