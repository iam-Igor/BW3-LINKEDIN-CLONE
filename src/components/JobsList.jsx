import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Col, Row, Alert, Button } from "react-bootstrap";
import SingleJob from "./SingleJob";

const JobsList = ({ popup }) => {
  const searchIndex = useSelector((state) => state.searchInput);
  const searchInfo = useSelector((state) => state.searchData);

  const [jobData, setJobData] = useState();

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
              <p className="m-0 btn btn-primary rounded-pill">Close</p>
            </div>
          </div>
          {jobData.map((job, i) => {
            return <SingleJob key={i} job={job} />;
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
                <p className="m-0 btn btn-primary rounded-pill">Close</p>
              </div>
            </Alert>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default JobsList;
