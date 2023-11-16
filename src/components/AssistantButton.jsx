import { Button } from "react-bootstrap";

const AssistanButton = ({ show, visible }) => {
  return (
    <Button
      className={`assistant rounded-circle fs-4 ${visible ? "" : "heartbeat"}`}
      onClick={() => {
        show(true);
      }}
    >
      <i className="bi bi-headset fs-3"></i>
    </Button>
  );
};

export default AssistanButton;
