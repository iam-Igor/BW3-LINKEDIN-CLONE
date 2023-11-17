import { ThreeDots } from "react-bootstrap-icons";

const SingleFavouriteJob = ({ job }) => {
  return (
    <div>
      <div className="d-flex justify-content-between cursor mb-2">
        <div className="d-flex flex-column gap-1">
          <p className="mb-0 fw-bold">{job.title}</p>
          <p className="mb-0">{job.company_name}</p>
          <p className="mb-0">{job.candidate_required_location}</p>
        </div>
        <div>
          <ThreeDots />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SingleFavouriteJob;
