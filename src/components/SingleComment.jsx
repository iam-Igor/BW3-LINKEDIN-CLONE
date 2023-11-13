import { ThreeDots } from "react-bootstrap-icons";
const SingleComment = () => {
  return (
    <div className="d-flex gap-2 ">
      <img
        src="https://placedog.net/50"
        className="rounded-circle"
        width="40px"
        height="40px"
        alt="profile-img"
      />
      <div className="d-flex justify-content-between flex-grow-1 bg-secondary-subtle py-2 px-2 rounded-bottom rounded-end">
        <div>
          <p className="mb-0 fw-bold ">Nome utente che commenta</p>
          <p className="mb-0">qua ci sarà il commento</p>
        </div>
        <div>
          <span className="me-2">3 giorni</span>
          <ThreeDots />
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
