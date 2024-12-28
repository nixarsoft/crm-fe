import CardBox from "./components/CustomerCards/CardBox";
import { Container, Row, Col } from "react-bootstrap";
import Personalinfo from "./components/Personalinfo/Personalinfo";
import SocialTable from "./components/SocialMediaTable/SocialTable";



function App() {

  return (
    <>
      <Container className="main-wrapper justify-content-center w-100">
        <Row className="justify-content-center">
          <Col xs={11} sm={6} lg={3} >
            <CardBox />
          </Col>
        </Row>
        <Personalinfo />
        <SocialTable />
      </Container>
    </>
  );
}

export default App;