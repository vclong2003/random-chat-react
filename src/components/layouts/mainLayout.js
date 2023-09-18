import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Container>
      <Row>
        <Col lg="3"></Col>
        <Col lg="6">
          <Outlet />
        </Col>
        <Col lg="3"></Col>
      </Row>
    </Container>
  );
}
