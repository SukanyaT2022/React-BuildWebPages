import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container>
      <Row>
        <Col xs>footer</Col>
        <Col xs={{ order: 12 }}>footer</Col>
        <Col xs={{ order: 1 }}>footer</Col>
      </Row>
    </Container>
  );
}

export default Footer;