import CardBox from "./components/CustomerCards/CardBox";
import { Container, Row, Col } from "react-bootstrap";
import Personalinfo from "./components/Personalinfo/Personalinfo";


function App() {

  return (
    <>
      <Container fluid className="main-wrapper justify-content-center ">
        <Row className="justify-content-center">
          <Col xs={11} sm={6} lg={3} >
            <CardBox />
          </Col>
        </Row>
        <Personalinfo />
      </Container>
    </>
  );
}

export default App;