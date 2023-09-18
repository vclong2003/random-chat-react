import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationPane from "../navigationPane";

export default function MainLayout() {
  return (
    <Container>
      <Row>
        <Col lg="3">
          <NavigationPane />
        </Col>
        <Col lg="6">
          <Outlet />
        </Col>
        <Col lg="3"></Col>
      </Row>
    </Container>
  );
}
