import { Button } from "react-bootstrap";

const SuggestedProfile = ({ profile }) => {
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
        <Button variant="outline-dark" className="rounded-pill">
          + Segui
        </Button>
      </div>
    </div>
  );
};

export default SuggestedProfile;
