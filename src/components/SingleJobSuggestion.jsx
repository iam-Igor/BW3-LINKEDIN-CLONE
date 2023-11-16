import { Col, Row } from "react-bootstrap";
import { Bookmark, BookmarkFill, Bullseye } from "react-bootstrap-icons";

const SingleJobSuggestion = ({ jobData }) => {
  return (
    <Row className="cursor">
      <Col xs={2} className="pe-0">
        <img src="https://placekitten.com/500" width={"100%"} alt="job-img" />
      </Col>
      <Col xs={8}>
        <p className="mb-1 fw-bold">{jobData.title}</p>
        <p className="mb-1">{jobData.company_name}</p>
        <p className="mb-1 text-secondary">
          {jobData.candidate_required_location}
        </p>
        <div className="d-flex align-content-center gap-1 text-secondary">
          <Bullseye className="mt-1 " />
          <p>Selezione attiva</p>
        </div>
      </Col>
      <Col className="text-end">
        <Bookmark />
        {/* <BookmarkFill /> */}
      </Col>
    </Row>
  );
};
export default SingleJobSuggestion;
