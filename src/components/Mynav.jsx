import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  Col,
  Row,
  Button,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH, SET_SEARCH } from "../redux/store";
import JobsList from "./JobsList";

const Mynav = () => {
  const [open, setOpen] = useState(false);
  const searchInfo = useSelector((state) => state.searchData);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar className="d-flex px-3 bg-white sticky-top" expand="md">
        <Container fluid className="p-0 ">
          {/* logo e input */}
          <Row className="align-items-center w-100 ">
            <Col className="col-10 col-md-6">
              <div className="d-flex ms-5 flex-grow-2">
                <div className="d-flex align-items-center">
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
                    <input
                      onFocus={() => {
                        setOpen(true);
                      }}
                      id="search"
                      className="rounded-end"
                      style={{ height: "45px" }}
                      type="search"
                      placeholder="cerca"
                      onChange={(e) => {
                        dispatch({ type: SEARCH, payload: e.target.value });
                      }}
                    />
                  </div>
                </div>

                {/* logo e input */}
              </div>
            </Col>
            <Col className="col-2 d-md-none d-block">
              <Navbar.Toggle className="m-3" aria-controls="basic-navbar-nav" />
            </Col>
            <Col className="col-md-6 col-12">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <div className="d-flex me-5">
                    <Link
                      to={"/"}
                      className="nav-link d-flex flex-column text-center 0 pe-3"
                    >
                      <i className="bi bi-house-door-fill fs-4"></i>
                      <p className="m-0">Home</p>
                    </Link>
                    <Nav.Link
                      href="#link"
                      className="d-flex flex-column text-center d-none d-md-inline-block"
                    >
                      <i className="bi bi-people-fill fs-4"></i>
                      <p className="m-0">Rete</p>
                    </Nav.Link>
                    <Nav.Link
                      href="#link"
                      className="d-flex flex-column text-center d-none d-md-inline-block"
                    >
                      <i className="bi bi-suitcase-lg-fill fs-4"></i>
                      <p className="m-0">Lavoro</p>
                    </Nav.Link>
                    <Nav.Link
                      href="#link"
                      className="d-flex flex-column text-center d-none d-md-inline-block"
                    >
                      <i className="bi bi-chat-dots-fill fs-4"></i>
                      <p className="m-0">Messaggistica</p>
                    </Nav.Link>
                    <Nav.Link
                      href="#link"
                      className="d-flex flex-column text-center mx-2 mx-md-0"
                    >
                      <i className="bi bi-bell-fill fs-4"></i>
                      <p className="m-0">Notifiche</p>
                    </Nav.Link>
                    <Link
                      to={"/profile/me"}
                      className="nav-link d-flex flex-column text-center border border-start-0 border-top-0 border-bottom-0 pe-3"
                    >
                      <i className="bi bi-person-square fs-4"></i>
                      <p className="m-0">Tu</p>
                    </Link>
                    <Nav.Link
                      href="#link"
                      className="d-flex flex-column text-center"
                    >
                      <i className="bi bi-grid-3x3-gap-fill fs-4"></i>
                      <p className="m-0">Per le aziende</p>
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
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
