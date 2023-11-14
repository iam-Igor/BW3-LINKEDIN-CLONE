import { Container, Row, Col } from "react-bootstrap";
import Posts from "./Posts";
import SideBar from "./SideBar";
import SideBarRight from "./SideBarRight";
import { useEffect } from "react";
import { getProfileAction } from "../redux/actions/actionsHome";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {/* COLONNA A SINISTRA */}
          <Col md={3} xs={12} className="mt-5">
            <SideBar />
          </Col>
          {/* COLONNA CENTRALE */}
          <Col md={5} xs={12} className="mt-5">
            <Posts />
          </Col>
          {/* COLONNA A DESTRA */}
          <Col md={4} xs={12} className="mt-5">
            <SideBarRight />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
