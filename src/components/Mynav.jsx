import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  Col,
  Row,
  Dropdown,
  DropdownMenu,
  Offcanvas,
  Badge,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH, SET_SEARCH } from "../redux/store";
import JobsList from "./JobsList";
import {
  AwardFill,
  Bullseye,
  CaretUpSquareFill,
  Check,
  Compass,
  PeopleFill,
  PlayBtn,
  PlusLg,
} from "react-bootstrap-icons";
import { notify } from "../App";

const Mynav = () => {
  const [open, setOpen] = useState(false);
  const searchInfo = useSelector((state) => state.searchData);
  const location = useLocation();
  const [notifications, setNotifiactions] = useState(1);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      notify();
      setShowNotifications(true);
    }, 5000);
  }, []);

  // Funzionalità OFFCANVAS
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //

  const dispatch = useDispatch();

  return (
    <>
      <Navbar className="d-flex px-3 bg-white sticky-top" expand="md">
        <Container fluid className="p-0 ">
          {/* logo e input */}
          <Row className="align-items-center w-100 ">
            <Col className="col-10 col-md-6">
              <div className="d-flex ms-5 flex-grow-2">
                <div
                  className="d-flex align-items-center cursor"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <img
                    className="me-2"
                    style={{ width: "40px", height: "35px" }}
                    src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png"
                    alt="logo-linkedin"
                  />
                  <div className="d-flex ">
                    <div
                      className="search-icon rounded-start ps-1 d-flex align-items-center"
                      onClick={() => {
                        dispatch({ type: SET_SEARCH, payload: !searchInfo });
                        setTimeout(() => {
                          dispatch({ type: SET_SEARCH, payload: false });
                        }, 500);
                      }}
                    >
                      <i className="bi bi-search"></i>
                    </div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        dispatch({ type: SET_SEARCH, payload: !searchInfo });
                        setTimeout(() => {
                          dispatch({ type: SET_SEARCH, payload: false });
                        }, 500);
                      }}
                    >
                      <input
                        onFocus={() => {
                          setOpen(true);
                        }}
                        id="search"
                        className="rounded-end input-bar"
                        style={{ height: "45px" }}
                        type="search"
                        placeholder="cerca"
                        onChange={(e) => {
                          dispatch({ type: SEARCH, payload: e.target.value });
                        }}
                      />
                    </form>
                  </div>
                </div>

                {/* logo e input */}
              </div>
            </Col>
            <Col className="col-2 d-md-none d-block">
              <Navbar.Toggle className="m-3" aria-controls="basic-navbar-nav" />
            </Col>
            <Col className="col-md-6 col-12" id="navbar-col">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <div className="d-flex me-5">
                    <Link
                      to={"/"}
                      className={`nav-link d-flex flex-column text-center 0 pe-3 ${
                        location.pathname === "/" ? "text-black" : ""
                      }`}
                    >
                      <i className="bi bi-house-door-fill fs-4"></i>
                      <p className="m-0">Home</p>
                    </Link>
                    <Nav.Link className="d-flex flex-column text-center d-none d-md-inline-block">
                      <i className="bi bi-people-fill fs-4"></i>
                      <p className="m-0">Rete</p>
                    </Nav.Link>
                    <Nav.Link className="d-flex flex-column text-center d-none d-md-inline-block">
                      <i className="bi bi-suitcase-lg-fill fs-4"></i>
                      <p className="m-0">Lavoro</p>
                    </Nav.Link>
                    <Nav.Link className="d-flex flex-column text-center d-none d-md-inline-block">
                      <i className="bi bi-chat-dots-fill fs-4"></i>
                      <p className="m-0">Messaggistica</p>
                    </Nav.Link>
                    <Link
                      className="nav-link d-flex flex-column text-center mx-2 mx-md-0"
                      to={"/notifiche/"}
                    >
                      <div className="position-relative">
                        <i className="bi bi-bell-fill fs-4"></i>
                        {showNotifications && (
                          <Badge
                            className="rounded-circle"
                            bg="danger"
                            id="badge-notification"
                          >
                            {notifications}
                          </Badge>
                        )}
                      </div>
                      <p className="m-0">Notifiche</p>
                    </Link>
                    <Link
                      to={"/profile/me"}
                      className={`nav-link d-flex flex-column text-center border border-start-0 border-top-0 border-bottom-0 pe-3 ${
                        location.pathname.startsWith("/profile")
                          ? "text-black"
                          : ""
                      }`}
                    >
                      <i className="bi bi-person-square fs-4"></i>
                      <p className="m-0">Tu</p>
                    </Link>
                    <Nav.Link
                      className="d-flex flex-column text-center"
                      onClick={handleShow}
                    >
                      <i className="bi bi-grid-3x3-gap-fill fs-4"></i>
                      <p className="m-0">Per le aziende</p>
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
          <Offcanvas
            className="px-2"
            show={show}
            onHide={handleClose}
            placement="end"
          >
            <Offcanvas.Header className="pb-1" closeButton>
              <Offcanvas.Title className="ms-1 mb-0">
                Per le aziende
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="body-canvas">
              <div className="border rounded">
                <div>
                  <p className="fw-bold mt-3 ms-3">
                    Scopri altri prodotti LinkedIn
                  </p>
                </div>
                <hr />
                <div
                  className="d-flex flex-wrap gap-3 text-center justify-content-center"
                  id="icons-offcanvas"
                >
                  <div className="d-flex justify-content-center align-items-center flex-column ">
                    <div className="border d-flex justify-content-center align-items-center icons-div rounded">
                      <PlayBtn className="fs-3 text-primary" />
                    </div>
                    <p>Learning</p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center flex-column ">
                    <div className="border d-flex justify-content-center align-items-center icons-div rounded">
                      <AwardFill className="fs-3 text-primary" />{" "}
                    </div>
                    <p>Talent Insights</p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center flex-column ">
                    <div className="border d-flex justify-content-center align-items-center icons-div rounded">
                      <CaretUpSquareFill className="fs-3 text-primary" />{" "}
                    </div>
                    <p className="mb-0">
                      Pubblica un <br />
                      offerta di lavoro
                    </p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center flex-column ">
                    <div className="border d-flex justify-content-center align-items-center icons-div rounded">
                      <Bullseye className="fs-3 text-primary" />
                    </div>
                    <p>Pubblicizza</p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center flex-column ">
                    <div className="border d-flex justify-content-center align-items-center icons-div rounded">
                      <Compass className="fs-3 text-primary" />
                    </div>

                    <p>Trova nuovi clienti</p>
                  </div>

                  <div className="d-flex justify-content-center align-items-center flex-column ">
                    <div className="border d-flex justify-content-center align-items-center icons-div rounded">
                      <PeopleFill className="fs-3 text-primary" />
                    </div>
                    <p>Gruppi</p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center flex-column ">
                    <div className="border d-flex justify-content-center align-items-center icons-div rounded">
                      <Check className="fs-3 text-primary" />
                    </div>
                    <p>Marketplace dei servizi</p>
                  </div>
                </div>
              </div>
              <div className="border rounded mt-3">
                <div>
                  <p className="fw-bold mt-3 ms-3">
                    Scopri altro per il business
                  </p>
                </div>
                <hr />
                <div>
                  <ul>
                    <li>
                      <p className="fw-bold">Assumi su LinkedIn</p>
                      <p>Trova, attrai e assumi</p>
                    </li>
                    <li>
                      <p className="fw-bold">Vendi con LinkedIn</p>
                      <p>Costruisci relazioni con i buyer</p>
                    </li>
                    <li>
                      <p className="fw-bold">Offerta di lavoro gratuita</p>
                      <p>Trova candidati di qualità</p>
                    </li>
                    <li>
                      <p className="fw-bold">Fai pubblicità su LinkedIn</p>
                      <p>Acquisisci clienti e fai crescere la tua azienda</p>
                    </li>
                    <li>
                      <p className="fw-bold">Impara con LinkedIn</p>
                      <p>Corsi per formare i tuoi dipendenti</p>
                    </li>
                    <li>
                      <p className="fw-bold">Centro amministrazione</p>
                      <p>Gestisci i dettagli di fatturazione e account</p>
                    </li>
                  </ul>
                </div>
                <hr />
                <div
                  className="d-flex align-items-center cursor"
                  id="last-div-canvas"
                >
                  <p className="fw-bold ms-4">Crea una pagina aziendale</p>
                  <PlusLg className="mb-3 ms-2" />
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>

      <Dropdown show={open}>
        <div
          id="example-collapse-text"
          className="justify-content-center d-flex"
        >
          <DropdownMenu className="pb-0 job-menu border-0">
            <JobsList popup={setOpen} />
          </DropdownMenu>
        </div>
      </Dropdown>
    </>
  );
};
export default Mynav;
