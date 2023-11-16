import { Container, Row, Col, Button } from "react-bootstrap";
import SideBarRight from "./SideBarRight";

const Notifiche = () => {
  return (
    <Container fluid className="mx-1 mt-4">
      <Row className="d-flex justify-content-center">
        <Col className="col-12 col-lg-2 ">
          <div className="d-flex flex-column bg-white p-2 border rounded d-flex justify-content-start align-items-center">
            <p>Gestisci le tue notifiche</p>
            <a href="#link">Impostazioni</a>
          </div>
        </Col>
        <Col className="col-12 col-lg-6 ">
          <div className="d-flex  bg-white p-3 border rounded d-flex justify-content-start align-items-center">
            <Button variant="success" className="rounded-pill w-25 me-2">
              Tutto
            </Button>
            <Button variant="outline-dark" className="rounded-pill w-25 me-2">
              I miei post
            </Button>
            <Button variant="outline-dark" className="rounded-pill w-25">
              Menzioni
            </Button>
          </div>
          <div className="d-flex mt-2 bg-white p-2 border rounded align-items-center">
            {/* lista notifiche centrale */}
            <ul className="list-unstyled p-1 d-flex flex-column align-items-center cursor">
              <li className="my-1 w-100 bg-info-subtle py-2 ">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    Stefano Casasola ti ha inviato una richiesta di
                    collegamento.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5 flex-grow-1 text-end me-3">
                    <p className="lista-notifiche m-0 ">Ora</p>
                    <i class="bi bi-three-dots me-1"></i>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    MICROSOFT ha pubblicato: Countdown to #MSignite what are you
                    lookin forward to? Globalizzare le interazioni aziendali e
                    con i clienti traducendo testo e sintesi vocale usando l'API
                    Translator e il servizio di riconoscimento vocale, sia nella
                    famiglia Servizi cognitivi di Azure.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5">
                    <p className="lista-notifiche m-0">2 minuti</p>
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    MICROSOFT ha pubblicato: Countdown to #MSignite what are you
                    lookin forward to? Globalizzare le interazioni aziendali e
                    con i clienti traducendo testo e sintesi vocale usando l'API
                    Translator e il servizio di riconoscimento vocale, sia nella
                    famiglia Servizi cognitivi di Azure.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5">
                    <p className="lista-notifiche m-0">8 minuti</p>
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>
              <li className="my-1">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://th.bing.com/th/id/R.70ecfdd862bdc3fdbf5715085812f49e?rik=fDJPk4oWTEisvw&pid=ImgRaw&r=0"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    FACEBOOK gentile utente: Hai una notifica sul tuo profilo.
                    You are one notification in your profile. Candice Benjamin è
                    un'insegnante specializzata nell’insegnamento della lingua
                    inglese con più di 5 anni di esperienza.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5">
                    <p className="lista-notifiche m-0">16 minuti</p>
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>{" "}
              <li className="my-1">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://th.bing.com/th/id/R.ed52f5f51ef07664bd615a932d569fc2?rik=jin4ji6h7xiTXg&pid=ImgRaw&r=0"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    W3Schools.com ha pubblicato: Explore our Package Deals,
                    we're always committed to providing you with the tools and
                    resourced your need. That's we've tailored our packages.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5">
                    <p className="lista-notifiche m-0">19 minuti</p>
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>{" "}
              <li className="my-1">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://th.bing.com/th/id/R.ed52f5f51ef07664bd615a932d569fc2?rik=jin4ji6h7xiTXg&pid=ImgRaw&r=0"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    W3Schools.com ha pubblicato: Explore our Package Deals,
                    we're always committed to providing you with the tools and
                    resourced your need. That's we've tailored our packages.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5">
                    <p className="lista-notifiche m-0">26 minuti</p>
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>{" "}
              <li className="my-1">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/000/600/805/original/pizza-logo-vector.png"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    Datapizza ha pubblicato: Esame di fondamenti di informatica
                    nel 2015: "Scusi prof, il codice non funziona..." "il tuo
                    algoritmo è sbagliato." il mondo della pizza italiana a
                    portata di click. Su Pizza.it trovi le offerte di lavoro.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5">
                    <p className="lista-notifiche m-0">33 minuti</p>
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>{" "}
              <li className="my-1">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/000/600/805/original/pizza-logo-vector.png"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    Datapizza ha pubblicato: Esame di fondamenti di informatica
                    nel 2015: "Scusi prof, il codice non funziona..." "il tuo
                    algoritmo è sbagliato." il mondo della pizza italiana a
                    portata di click. Su Pizza.it trovi le offerte di lavoro.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5">
                    <p className="lista-notifiche m-0">39 minuti</p>
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>{" "}
              <li className="my-1">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    Linkedin Notizie ha diffuso un aggiornamento: Su quali
                    pilastri deve fondarsi la gentilezza sul lavoro? La coach
                    Martina Sconcerti lo ha chiesto alla sua rete professionale.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5">
                    <p className="lista-notifiche m-0">45 minuti</p>
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>{" "}
              <li className="my-1">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    Linkedin Notizie ha diffuso un aggiornamento: Su quali
                    pilastri deve fondarsi la gentilezza sul lavoro? La coach
                    Martina Sconcerti lo ha chiesto alla sua rete professionale.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5">
                    <p className="lista-notifiche m-0">54 minuti</p>
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>{" "}
              <li className="my-1">
                <div className="d-flex align-items-center">
                  <i class="bi bi-dot"></i>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="logo"
                    style={{ height: "40px" }}
                  />
                  <p className="lista-notifiche mx-1">
                    Linkedin Notizie ha diffuso un aggiornamento: Su quali
                    pilastri deve fondarsi la gentilezza sul lavoro? La coach
                    Martina Sconcerti lo ha chiesto alla sua rete professionale.
                  </p>
                  <div className=" d-flex flex-column justify-content-center ms-5">
                    <p className="lista-notifiche m-0">59 minuti</p>
                    <i class="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>
              {/* lista notifiche centrale */}
            </ul>
          </div>
        </Col>
        <Col className="col-12 col-lg-3">
          <SideBarRight />
        </Col>
      </Row>
    </Container>
  );
};
export default Notifiche;
