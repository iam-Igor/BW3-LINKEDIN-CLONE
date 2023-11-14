import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { FOLLOW } from "../redux/store";

const SuggestedProfile = ({ profile }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex my-2">
      <div>
        <img
          src={profile.image}
          style={{ width: "40px" }}
          alt="profile-img"
          className="rounded-circle"
        />
      </div>
      <div className="ms-2">
        <p className="fw-bold m-0">
          {profile.name} {profile.surname}
        </p>
        <p>{profile.title}</p>
        <Button
          variant="outline-dark"
          className="rounded-pill"
          onClick={() => {
            dispatch({ type: FOLLOW, payload: profile });
          }}
        >
          + Segui
        </Button>
      </div>
    </div>
  );
};

export default SuggestedProfile;
