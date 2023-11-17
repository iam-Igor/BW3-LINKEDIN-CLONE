import { Col } from "react-bootstrap";

const SingleJob = ({ job }) => {
  return (
    <Col className="d-flex col-lg-5 border rounded m-2 job-info p-2 align-items-center col-10">
      <div className="w-25 d-flex align-items-center">
        <img
          src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
          style={{ width: "80%" }}
          alt="linkedin-logo"
        />
      </div>
      <div className="w-75 mt-2">
        <div className="d-flex">
          <p className="fw-bold">Title:</p>
          <p>{job.title}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Category:</p>
          <p>{job.category}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Company:</p>
          <p>{job.company_name}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Area:</p>
          <p>{job.candidate_required_location}</p>
        </div>
      </div>

      <a
        className="btn btn-primary rounded-pill job-button"
        href={job.url}
        target="_blank"
      >
        More info
      </a>
    </Col>
  );
};

export default SingleJob;
