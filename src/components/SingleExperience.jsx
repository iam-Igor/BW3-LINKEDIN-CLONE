import { format, parseISO } from "date-fns";

const SingleExperience = ({ job }) => {
  const inputStart = job.startDate;
  const inputEnd = job.endDate;

  const inputDate = parseISO(inputStart);
  const inputDate2 = parseISO(inputEnd);

  const formattedDate = format(inputDate, "dd/MM/yyyy");
  const formattedDate2 = format(inputDate2, "dd/MM/yyyy");

  return (
    <div className="d-flex mx-2">
      <div className="p-0 me-3">
        <img style={{ width: "70px" }} src={job.image} alt="job-icon" />
      </div>
      <div className="">
        <h6>Ruolo: {job.role}</h6>
        <p className="mb-1">Compagnia: {job.company}</p>
        <p className="mb-1">
          Dal: {formattedDate} Al: {formattedDate2}
        </p>
        <p className="mb-1">Area: {job.area}</p>
        <p className="mt-4">
          <strong>Competenze: </strong> {job.description}
        </p>
      </div>
    </div>
  );
};

export default SingleExperience;
