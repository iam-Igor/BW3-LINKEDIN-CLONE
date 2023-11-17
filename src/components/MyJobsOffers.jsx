import { Container, Row, Col, Button } from "react-bootstrap";
import { BookmarkFill, ThreeDots } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import SingleFavouriteJob from "./SingleFavouriteJob";

const MyJobsOffers = () => {
  const favouriteJobs = useSelector((state) => state.favouriteJobs);
  return (
    <Container>
      <Row className="mt-3">
        <Col xs={12} md={3}>
          <div className="border rounded px-3 background-columns cursor">
            <div className="d-flex gap-2 text-secondary mt-2 align-items-center">
              <BookmarkFill className="mt-2" />
              <p className="mb-0 mt-2">I miei elementi</p>
            </div>
            <hr />
            <div className="">
              <p className="text-primary fs-7 fw-bold">
                Le mie offerte di lavoro
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="background-columns px-4 pt-3 pb-2 ">
            <div className="d-flex flex-column ">
              <p className="fs-4">Le mie offerte di lavoro</p>
              <div>
                <Button className="btn btn-success rounded-pill fw-bold ">
                  Archiviate
                </Button>
              </div>
              <hr />
              {favouriteJobs.map((job) => (
                <SingleFavouriteJob key={job._id} job={job} />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default MyJobsOffers;
