import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner, Badge } from "react-bootstrap";
import {
  Calendar2,
  CaretDownFill,
  CaretUpFill,
  File,
  Hash,
  Newspaper,
  PeopleFill,
  PersonFill,
} from "react-bootstrap-icons";
import { API_KEY } from "../redux/actions/actionsHome";
import SingleProfileSuggestion from "./SingleProfileSuggestion";
import { useSelector } from "react-redux";

const Net = () => {
  const [profilesData, setProfilesData] = useState(null);
  const [visibleProfiles, setVisibleProfiles] = useState(10);
  const [spinnerState, setSpinnerState] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const friends = useSelector((state) => state.following.length);
  const [following, setFollowing] = useState(friends);
  const [showOthers, setShowOthers] = useState(true);
  const addFollow = () => {
    setFollowing(following + 1);
  };

  const getAllprofilesInfo = () => {
    setSpinnerState(true);
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => {
        if (res.ok) {
          setSpinnerState(false);
          return res.json();
        } else {
          setSpinnerState(false);
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
          md={3}
          className="border rounded background-columns py-3 px-4 h-75 d-none d-md-block"
        >
          <p className="mb-3 fs-5">Gestisci la tua rete</p>
          <div className="d-flex flex-column gap-3 text-secondary cursor">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <PeopleFill className="fs-5" />
                <p className="mb-0">Collegamenti</p>
              </div>
              <div>
                <Badge
                  bg="info"
                  className="rounded-circle d-flex justify-content-center align-items-center  "
                >
                  {following ? following : 0}
                </Badge>
              </div>
            </div>
            {showOthers && (
              <>
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
              </>
            )}
          </div>
          {showOthers && (
            <div
              className="d-flex align-items-center gap-1 cursor"
              onClick={() => {
                setShowOthers(false);
              }}
            >
              <p className="mb-0 text-secondary ms-2 mt-3 ">Meno dettagli</p>
              <CaretUpFill className="mt-3" />
            </div>
          )}
          {!showOthers && (
            <div
              className="d-flex align-items-center gap-1 cursor"
              onClick={() => {
                setShowOthers(true);
              }}
            >
              <p className="mb-0 text-secondary ms-2 mt-3 ">Vedi altro</p>
              <CaretDownFill className="mt-3" />
            </div>
          )}

          <hr />
          <div
            className="mb-4 mt-3 d-flex gap-2 flex-column text-center cursor"
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
        <Col xs={12} md={8} className="mt-3 mt-md-0 ">
          <div
            className={`d-flex justify-content-between  align-items-center rounded border background-columns px-3 py-3 ${
              accepted ? "" : "bg-info-subtle"
            }`}
          >
            {accepted && (
              <>
                <p className="mb-0">Nessun invito in sospeso</p>
                <p className="text-secondary mb-0">Gestisci</p>
              </>
            )}
            {!accepted && (
              <>
                <div>
                  <p className="mb-0">
                    <strong>Stefano Casasola</strong> ti ha inviato una
                    richiesta di collegamento
                  </p>
                  <p>
                    Founder & Software Developer @ Nucleode SRL - Educator @
                    EPICODE <br />- IT Consultant
                  </p>
                </div>
                <div className="d-flex gap-3 align-items-center ">
                  <p className="text-secondary cursor">Ignora</p>
                  <p
                    className="btn btn-outline-primary cursor"
                    onClick={() => {
                      setAccepted(true);
                      addFollow();
                    }}
                  >
                    Accetta
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="py-3 px-1 background-columns mt-3 border rounded px-3 py-4 mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <p>
                Persone che potresti conoscere in base alla tua attività recente
              </p>
              <p className="text-secondary text-end">Vedi tutto </p>
            </div>
            <Row xs={2} md={2} lg={3} className="g-2">
              {spinnerState && (
                <div className="text-center w-100">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              )}
              {profilesData &&
                profilesData
                  .slice(0, visibleProfiles)
                  .map((profile) => (
                    <SingleProfileSuggestion
                      key={profile._id}
                      profile={profile}
                      addFollow={addFollow}
                    />
                  ))}
            </Row>

            <div className="text-center mt-3">
              <Button
                className="btn btn-secondary rounded-pill"
                onClick={() => {
                  setVisibleProfiles(visibleProfiles + 6);
                }}
              >
                Mostra altri
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Net;
