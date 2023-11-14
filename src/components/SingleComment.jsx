import { Dropdown } from "react-bootstrap";
import { ThreeDots } from "react-bootstrap-icons";
import { URL_COMMENTS, API_KEY_COMMENTS } from "../redux/actions/actionsHome";
const SingleComment = ({ comment, getComments }) => {
  const deleteComment = () => {
    fetch(URL_COMMENTS + comment._id, {
      method: "DELETE",
      headers: {
        Authorization: API_KEY_COMMENTS,
      },
    })
      .then((res) => {
        if (res.ok) {
          getComments();
          console.log("YOUR COMMENT HAS BEEN DELETED");
        } else {
          throw new Error("SOMETHING WENT WRONG!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(comment);
  return (
    <div className="d-flex gap-2 mb-2">
      <img
        src="https://placedog.net/50"
        className="rounded-circle"
        width="40px"
        height="40px"
        alt="profile-img"
      />
      <div className="d-flex justify-content-between flex-grow-1 bg-secondary-subtle py-2 px-2 rounded-bottom rounded-end">
        <div>
          <p className="mb-0 fw-bold ">{comment.author.split("@")[0]}</p>
          <p className="mb-0">{comment.comment}</p>
        </div>
        <div>
          <div className="d-flex">
            <span>3 giorni</span>
            <Dropdown>
              <Dropdown.Toggle
                className="pe-0 pt-0"
                variant="none"
                id="dropdown-basic"
              >
                <ThreeDots />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {}}>Modify comment</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    deleteComment();
                  }}
                >
                  Delete comment
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
