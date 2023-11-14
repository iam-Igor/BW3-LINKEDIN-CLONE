import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Mynavbar = () => {
  const url = useSelector((state) => state.urlParams);

  return (
    <>
      <Navbar className="d-flex sticky-top p-0" expand="lg">
        <Container fluid className="p-0 bg-white ">
          <div className="d-flex ">
            <div className="d-flex align-items-center">
              <img
                className="me-2"
                style={{ width: "40px", height: "35px" }}
                src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png"
                alt="logo-linkedin"
              />
              <div className="d-flex">
                <div className="search-icon rounded-start ps-1 d-flex align-items-center">
                  <i className="bi bi-search"></i>
                </div>
                <input
                  id="search"
                  className="rounded-end"
                  style={{ height: "45px" }}
                  type="search"
                  placeholder="cerca"
                />
              </div>
            </div>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <div className="d-flex">
                <Nav.Link className="d-flex flex-column text-center">
                  <i className="bi bi-house-door-fill fs-4"></i>
                  <p className="m-0" to="/home">
                    Home
                  </p>
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  className="d-flex flex-column text-center"
                >
                  <i className="bi bi-people-fill fs-4"></i>
                  <p className="m-0">Rete</p>
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  className="d-flex flex-column text-center"
                >
                  <i className="bi bi-suitcase-lg-fill fs-4"></i>
                  <p className="m-0">Lavoro</p>
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  className="d-flex flex-column text-center"
                >
                  <i className="bi bi-chat-dots-fill fs-4"></i>
                  <p className="m-0">Messaggistica</p>
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  className="d-flex flex-column text-center"
                >
                  <i className="bi bi-bell-fill fs-4"></i>
                  <p className="m-0">Notifiche</p>
                </Nav.Link>
                <Link
                  to={`/profile/me`}
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
        </Container>
      </Navbar>
    </>
  );
};
export default Mynavbar;
