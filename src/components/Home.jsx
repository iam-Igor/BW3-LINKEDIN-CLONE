import { Container, Row, Col } from "react-bootstrap";
import Posts from "./Posts";
const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          {/* COLONNA A SINISTRA */}
          <Col></Col>
          {/* COLONNA CENTRALE */}
          <Col xs={12} md={6} className="mt-5">
            <Posts />
          </Col>
          {/* COLONNA A DESTRA */}
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
