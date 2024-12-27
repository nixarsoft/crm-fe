import CardBox from "./components/CustomerCards/CardBox";
import { Container, Row, Col } from "react-bootstrap";


function App() {

  return (
    <>
      <Container fluid className="main-wrapper justify-content-center p-4">
        <Row>
          <Col lg={3}  >
            <CardBox />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;