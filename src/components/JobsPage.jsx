import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  BookmarkFill,
  CaretDownFill,
  Clipboard2Check,
  GearFill,
  ListTask,
  PencilSquare,
  PlayBtnFill,
} from "react-bootstrap-icons";
import SingleJobSuggestion from "./SingleJobSuggestion";

const JobsComponent = () => {
  const [jobData, setJobData] = useState();
  const [visibleJobs, setVisibleJobs] = useState(2);

  const getJobs = () => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs?category=software")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in retrieving data for jobs");
        }
      })
      .then((data) => {
        console.log(data);
        setJobData(data.data.slice(0, 14));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <Container>
      <Row className="mt-4">
        <Col xs={12} md={3} id="jobs-sidebar">
          <div className="border rounded background-columns">
            <ul className="d-flex flex-column gap-3 ps-3 mt-3">
              <li className="list-unstyled d-flex align-items-center gap-2">
                <BookmarkFill className="mb-3" />
                <p>Le mie offerte di lavoro</p>
              </li>
              <li className="list-unstyled d-flex align-items-center gap-2">
                <ListTask className="mb-3" />
                <p>Preferenze</p>
              </li>
              <li className="list-unstyled d-flex align-items-center gap-2">
                <Clipboard2Check className="mb-3" />
                <p>Valutazioni delle competenze</p>
              </li>
              <li className="list-unstyled d-flex align-items-center gap-2">
                <PlayBtnFill className="mb-3" />
                <p>Indicazioni per chi cerca lavoro</p>
              </li>
              <li className="list-unstyled d-flex align-items-center gap-2">
                <GearFill className="mb-3" />
                <p>Impostazioni candidatura</p>
              </li>
            </ul>
          </div>
          <div className="border rounded-4 border-primary d-flex gap-3 justify-content-center align-items-center btn btn-outline-primary mt-3 ">
            <PencilSquare />
            <p className="mb-0 py-2">Pubblica offerta gratuita</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div
            className="border rounded px-3 background-columns"
            id="jobs-main"
          >
            <div className="d-flex justify-content-between align-items-center mt-4">
              <h4 className="fs-5 mb-3">Ricerche di lavoro recenti</h4>
              <p className="m-0 text-secondary cursor">Cancella</p>
            </div>
            <div className="cursor">
              <p className="mb-0">Software developer</p>
              <p className="mb-0">Italia</p>
            </div>
            <hr />
            <div className="cursor">
              <p className="mb-0">Software engineer</p>
              <p className="mb-0">USA</p>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-2 justify-content-center fw-bold text-primary cursor">
              <p className="fs-6">Vedi altro</p>
              <CaretDownFill className="mb-3" />
            </div>
          </div>
          <div
            className="border rounded px-3 mt-3 background-columns mb-3"
            id="suggestions-jobs"
          >
            <div className="mt-3">
              <h4 className="mb-0 fs-5">Consigliato per te</h4>
              <p className="text-secondary">
                Sulla base del tuo profilo e della tua cronologia delle ricerche
              </p>
            </div>
            {jobData &&
              jobData
                .slice(0, visibleJobs)
                .map((job) => (
                  <SingleJobSuggestion jobData={job} key={job._id} />
                ))}
            <hr />
            <div className="text-center my-3">
              <Button
                className="btn btn-secondary"
                onClick={() => {
                  setVisibleJobs(visibleJobs + 3);
                }}
              >
                Mostra altri
              </Button>
            </div>
          </div>
        </Col>
        <Col className="mb-4 mt-3 d-flex gap-2 flex-column" id="footer-sidebar">
          <div className="d-flex gap-3 justify-content-center ">
            <p className="text-secondary mb-0">Informazioni</p>
            <p className="text-secondary mb-0">Accessibilità</p>
          </div>

          <div className="d-flex gap-3 justify-content-center ">
            <p className="text-secondary mb-0 text-center">
              Centro Assistenza{" "}
            </p>
            <p className="text-secondary mb-0 text-center">
              Privacy e condizioni <CaretDownFill />
            </p>
          </div>

          <div className="d-flex gap-3 justify-content-center ">
            <p className="text-secondary mb-0">
              Opzioni per gli annunci pubblicitari
            </p>
          </div>

          <div className="d-flex gap-3 justify-content-center ">
            <p className="text-secondary mb-0">
              Servizi alle aziende <CaretDownFill />
            </p>
            <p className="text-secondary mb-0">Pubblicità</p>
          </div>

          <div className="d-flex gap-3 justify-content-center ">
            <p className="text-secondary mb-0">Scarica app Linkedln</p>
            <p className="text-secondary mb-0">Altro</p>
          </div>

          <div className="d-flex justify-content-center">
            <div className="text-secondary me-3">
              &copy; {new Date().getFullYear()}
            </div>
            <img
              src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
              alt="Immagine copy"
              width="20%"
            />
          </div>
        </Col>{" "}
      </Row>
    </Container>
  );
};

export default JobsComponent;
