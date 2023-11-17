import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

const SingleExperience = ({ job, getExperiences }) => {
  const inputStart = job.startDate;
  const inputEnd = job.endDate;
  const location = useLocation();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let newparams = "";
  let urlId = useParams();

  if (location.pathname === "/profile/me") {
    newparams = "6551ed5ac55e7e0018f83c0b";
  } else {
    newparams = urlId.userID;
  }

  const [infoExperience, setInfoExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    username: "totti10",
    image: "",
  });

  const inputDate = job.startDate ? parseISO(inputStart) : null;
  const inputDate2 = job.endDate ? parseISO(inputEnd) : null;
  const formattedDate = inputDate
    ? format(inputDate, "dd/MM/yyyy")
    : "Nessuna data di inizio rapporto";
  const formattedDate2 = inputDate2
    ? format(inputDate2, "dd/MM/yyyy")
    : "Nessuna data di fine rapporto";

  useEffect(() => {}, [urlId]);

  const editExperience = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        newparams +
        "/experiences/" +
        job._id,
      {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ1YWM1NWU3ZTAwMThmODNjMGIiLCJpYXQiOjE2OTk4Njc5OTQsImV4cCI6MTcwMTA3NzU5NH0.s42cKTE4Spw6hQNWnXWOTl1nLe5K6KLEtN_9S8-D2OU",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(infoExperience),
      }
    )
      .then((res) => {
        if (res.ok) {
        } else {
          throw new Error("error in fetching user profiles");
        }
      })
      .then(() => {
        handleClose();
        getExperiences();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteExperience = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        newparams +
        "/experiences/" +
        job._id,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ1YWM1NWU3ZTAwMThmODNjMGIiLCJpYXQiOjE2OTk4Njc5OTQsImV4cCI6MTcwMTA3NzU5NH0.s42cKTE4Spw6hQNWnXWOTl1nLe5K6KLEtN_9S8-D2OU",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          alert("eliminazione avvenuta con successo");
          handleClose();
          getExperiences();
          setInfoExperience({
            role: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            area: "",
            username: "totti10",
            image: "",
          });
        } else {
          throw new Error("error in fetching user profiles");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row mx-2 border-bottom mb-4">
      <div className="p-0 col-2 col-lg-1">
        <img className="w-100" src={job.image} alt="job-icon" />
      </div>
      <div className="col-7 col-lg-8">
        <h6>
          <strong>Ruolo:</strong> {job.role}
        </h6>
        <p className="mb-1">
          <strong>Compagnia: </strong>
          {job.company}
        </p>
        <p className="mb-1">
          <strong>Dal:</strong> {formattedDate} <strong>Al: </strong>{" "}
          {formattedDate2}
        </p>
        <p className="mb-1">
          <strong>Area:</strong> {job.area}
        </p>
        <p className="mt-2 mb-4">
          <strong>Competenze: </strong> {job.description}
        </p>
      </div>
      <div className="col-3 p-0 d-flex align-items-end justify-content-center mb-4 position-relative">
        {location.pathname === "/profile/me" ? (
          <div
            className="pencilButton p-2 rounded-circle"
            onClick={() => {
              handleShow();
              setInfoExperience({
                role: job.role,
                company: job.company,
                startDate: job.startDate,
                endDate: "",
                description: job.description,
                area: job.area,
                username: "totti10",
                image: job.image,
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg>
          </div>
        ) : null}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica esperienza lavorativa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your role"
                onChange={(e) => {
                  setInfoExperience({
                    ...infoExperience,
                    role: e.target.value,
                  });
                }}
                required
                value={infoExperience.role}
              />

              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Company"
                onChange={(e) => {
                  setInfoExperience({
                    ...infoExperience,
                    company: e.target.value,
                  });
                }}
                required
                value={infoExperience.company}
              />

              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Your start date"
                onChange={(e) => {
                  setInfoExperience({
                    ...infoExperience,
                    startDate: e.target.value,
                  });
                }}
                required
                value={infoExperience.startDate}
              />

              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Your start date"
                onChange={(e) => {
                  setInfoExperience({
                    ...infoExperience,
                    endDate: e.target.value,
                  });
                }}
                required
                value={infoExperience.endDate}
              />

              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Area"
                onChange={(e) => {
                  setInfoExperience({
                    ...infoExperience,
                    area: e.target.value,
                  });
                }}
                required
                value={infoExperience.area}
              />

              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image url"
                onChange={(e) => {
                  setInfoExperience({
                    ...infoExperience,
                    image: e.target.value,
                  });
                }}
                required
                value={infoExperience.image}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Bio details"
                onChange={(e) => {
                  setInfoExperience({
                    ...infoExperience,
                    description: e.target.value,
                  });
                }}
                required
                value={infoExperience.description}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <div>
            <Button
              variant="danger"
              className="rounded-pill"
              onClick={() => {
                deleteExperience();
              }}
            >
              Elimina
            </Button>
          </div>
          <div>
            <Button
              variant="secondary"
              className="rounded-pill me-2"
              onClick={() => setShow(false)}
            >
              Chiudi
            </Button>
            <Button
              variant="primary"
              className="rounded-pill"
              onClick={() => {
                editExperience();
              }}
            >
              Salva
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SingleExperience;
