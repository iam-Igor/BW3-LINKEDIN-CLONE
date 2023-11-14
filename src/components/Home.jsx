import { Container, Row, Col } from "react-bootstrap";
import Posts from "./Posts";
import SideBar from "./SideBar";
import SideBarRight from "./SideBarRight";
const Home = () => {
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
