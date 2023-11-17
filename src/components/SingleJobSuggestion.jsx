import { Col, Row } from "react-bootstrap";
import { Bookmark, BookmarkFill, Bullseye } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_FAVOURITE_JOB,
  REMOVE_FAVOURITE_JOB_ID,
  SEND_FAVOURITE_JOB,
  SEND_FAVOURITE_JOB_ID,
} from "../redux/actions/actionsHome";

const SingleJobSuggestion = ({ jobData }) => {
  const dispatch = useDispatch();
  const favouriteJobsId = useSelector((state) => state.favouriteJobsId);

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
      <Col
        className="text-end"
        onClick={() => {
          if (!favouriteJobsId.includes(jobData._id)) {
            dispatch({
              type: SEND_FAVOURITE_JOB,
              payload: jobData,
            });
            dispatch({
              type: SEND_FAVOURITE_JOB_ID,
              payload: jobData._id,
            });
          } else {
            dispatch({
              type: REMOVE_FAVOURITE_JOB,
              payload: jobData,
            });
            dispatch({
              type: REMOVE_FAVOURITE_JOB_ID,
              payload: jobData._id,
            });
          }
        }}
      >
        {favouriteJobsId.includes(jobData._id) ? (
          <BookmarkFill />
        ) : (
          <Bookmark />
        )}
      </Col>
    </Row>
  );
};
export default SingleJobSuggestion;
