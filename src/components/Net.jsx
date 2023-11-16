import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  Calendar2,
  CaretDownFill,
  CaretUpFill,
  File,
  Hash,
  Newspaper,
  PeopleFill,
  PersonAdd,
  PersonFill,
} from "react-bootstrap-icons";
import { API_KEY } from "../redux/actions/actionsHome";
import SingleProfileSuggestion from "./SingleProfileSuggestion";

const Net = () => {
  const [profilesData, setProfilesData] = useState(null);
  const [visibleProfiles, setVisibleProfiles] = useState(10);

  const getAllprofilesInfo = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error in fetching user profiles");
        }
      })
      .then((data) => {
        setProfilesData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllprofilesInfo();
  }, []);
  return (
    <Container>
      <Row className="mt-3">
        <Col
          xs={12}
          md={3}
          className="border rounded background-columns py-3 px-4"
        >
          <p className="mb-3 fs-5">Gestisci la tua rete</p>
          <div className="d-flex flex-column gap-3 text-secondary ">
            <div className="d-flex align-items-center gap-2">
              <PeopleFill className="fs-5" />
              <p className="mb-0">Collegamenti</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <PersonFill className="fs-5" />
              <p className="mb-0">Persone che segui e follower</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Calendar2 className="fs-5" />
              <p className="mb-0">Eventi</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <File className="fs-5" />
              <p className="mb-0">Pagine</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Newspaper className="fs-5" />
              <p className="mb-0">Notiziario</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Hash className="fs-5" />
              <p className="mb-0">Hashtag</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-1">
            <p className="mb-0 text-secondary ms-2 mt-3">Meno dettagli</p>
            <CaretUpFill className="mt-3" />
          </div>
          <hr />
          <div
            className="mb-4 mt-3 d-flex gap-2 flex-column"
            id="footer-sidebar"
          >
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
          </div>
        </Col>
        <Col xs={12} md={7}>
          <div className="d-flex justify-content-between  align-items-center rounded border background-columns px-3 py-3">
            <p className="mb-0">Nessun invito in sospeso</p>
            <p className="text-secondary mb-0">Gestisci</p>
          </div>
          <div className="py-3 px-1 background-columns mt-3 border rounded px-3 py-4">
            <div className="d-flex justify-content-between align-items-center">
              <p>
                Persone che potresti conoscere in base alla tua attività recente
              </p>
              <p className="text-secondary">Vedi tutto </p>
            </div>
            <Row xs={2} md={3} lg={3} className="g-2">
              {profilesData &&
                profilesData
                  .slice(0, visibleProfiles)
                  .map((profile) => (
                    <SingleProfileSuggestion
                      key={profile._id}
                      profile={profile}
                    />
                  ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Net;
