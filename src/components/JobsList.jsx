import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Col, Row, Alert, Button } from "react-bootstrap";

const JobsList = ({ popup }) => {
  const searchIndex = useSelector((state) => state.searchInput);
  const searchInfo = useSelector((state) => state.searchData);

  const [jobData, setJobData] = useState();

  console.log(jobData);

  const getJobs = () => {
    fetch(
      "https://strive-benchmark.herokuapp.com/api/jobs?search=" + searchIndex
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in retrieving data for jobs");
        }
      })
      .then((data) => {
        setJobData(data.data.slice(0, 14));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (searchInfo) {
      getJobs();
    }
  }, [searchInfo]);

  return (
    <div className="bg-white job-list rounded">
      {jobData ? (
        <Row className="d-flex justify-content-center">
          <div className="d-flex justify-content-around align-items-center">
            <h5 className="text-center">
              Results for: <span>{searchIndex}</span>
            </h5>
            <div
              className="text-center"
              onClick={() => {
                popup(false);
              }}
            >
              <i className="bi bi-x-square-fill fs-4 btn p-0"></i>
              <p className="m-0">Close</p>
            </div>
          </div>
          {jobData.map((job, i) => {
            return (
              <Col
                key={i}
                className="d-flex col-lg-5 border rounded m-2 job-info p-2 align-items-center col-10"
              >
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
                >
                  More info
                </a>
              </Col>
            );
          })}
        </Row>
      ) : (
        <Row className="p-4">
          <Col className="text-center d-flex justify-content-center">
            <Alert className="m-0 w-75 d-flex justify-content-between align-items-center">
              Search for jobs
              <div
                className="text-center"
                onClick={() => {
                  popup(false);
                }}
              >
                <i className="bi bi-x-square-fill fs-4 btn p-0"></i>
                <p className="m-0">Close</p>
              </div>
            </Alert>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default JobsList;
