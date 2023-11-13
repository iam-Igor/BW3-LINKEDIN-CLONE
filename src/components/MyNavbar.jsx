import { Container, Navbar, Nav } from "react-bootstrap";

const Mynavbar = () => {
  return (
    <>
      <Container fluid className="bg-white">
        {/* logo e input */}
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img
              className="me-2"
              style={{ width: "40px" }}
              src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png"
              alt="logo-linkedin"
            />
            <div className="d-flex">
              <div className="search-icon rounded-start ps-1 d-flex align-items-center">
                <i class="bi bi-search"></i>
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
          {/* logo e input */}
          {/* lista icone */}
          <Navbar
            id="mynav"
            className="navbar navbar-expand-lg p-0 flex-grow-1"
          >
            <Container>
              {/* home */}
              {/* prova drop */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              {/* prova drop */}
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="w-100 justify-content-end"
              >
                <Nav className="d-flex justify-content-between navbar-nav p-0 gap-3">
                  <Nav.Link className="nav-item d-flex flex-column text-center">
                    <a className="nav-link" href="a">
                      <i className="bi bi-house-door-fill fs-4"></i>
                      <p className="m-0">Home</p>
                    </a>
                  </Nav.Link>
                  {/* rete */}
                  <Nav.Link className="nav-item d-flex flex-column text-center d-none d-md-inline-block">
                    <a className="nav-link" href="a">
                      <i className="bi bi-people-fill fs-4"></i>
                      <p className="m-0">Rete</p>
                    </a>
                  </Nav.Link>
                  <Nav.Link className="nav-item d-flex flex-column text-center d-none d-md-inline-block">
                    {/* lavoro */}
                    <a className="nav-link" href="a">
                      <i className="bi bi-suitcase-lg-fill fs-4"></i>
                      <p className="m-0">Lavoro</p>
                    </a>
                  </Nav.Link>
                  <Nav.Link className="nav-item d-flex flex-column text-center d-none d-md-inline-block">
                    <a className="nav-link" href="a">
                      {/* messaggistica */}
                      <i className="bi bi-chat-dots-fill fs-4"></i>
                      <p className="m-0">Messaggistica</p>
                    </a>
                  </Nav.Link>
                  {/* notifiche */}
                  <Nav.Link className="nav-item d-flex flex-column text-center d-none d-md-inline-block">
                    <a className="nav-link" href="a">
                      <i className="bi bi-bell-fill fs-4"></i>
                      <p className="m-0">Notifiche</p>
                    </a>
                  </Nav.Link>
                  {/* TU */}
                  <Nav.Link className="nav-item d-flex flex-column text-center border border-start-0 border-top-0 border-bottom-0 pe-2">
                    <a className="nav-link" href="a">
                      <i className="bi bi-person-square fs-4"></i>
                      <p className="m-0">Tu</p>
                    </a>
                  </Nav.Link>
                  {/* per le aziende */}
                  <Nav.Link className="nav-item d-flex flex-column text-center">
                    <a className="nav-link" href="a">
                      <i className="bi bi-grid-3x3-gap-fill fs-4"></i>
                      <p className="m-0">Per le aziende</p>
                    </a>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* lista icone */}
        </div>
        {/*qui sotto div chiusura conteiner*/}
      </Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Mynavbar;
