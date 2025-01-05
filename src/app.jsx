import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={6} xl={4}>
          <Form>
            <Row className="border border-white g-3 p-3">
              <Col xs={12} sm={6}>
                <Form.Label className="fw-semibold fs-5">Firstname</Form.Label>
                <Form.Control
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="border border-2 border-secondary"
                />
                <Form.Text className="text-white-50">
                  Firstname
                </Form.Text>
              </Col>

              <Col xs={12} sm={6}>
                <Form.Label className="fw-semibold fs-5">Lastname</Form.Label>
                <Form.Control
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="border border-2 border-secondary"
                />
                <Form.Text className="text-white-50">
                  Lastname
                </Form.Text>
              </Col>

              <Col xs={12}>
                <Form.Label className="fw-semibold fs-5">E-mail</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  className="border border-2 border-secondary"
                />
                <Form.Text className="text-white-50">
                  E-mail
                </Form.Text>
              </Col>

              <Col xs={12}>
                <Form.Label className="fw-semibold fs-5">Gender</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    id="gender_male"
                    name="gender"
                    value="male"
                    label="Male"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    id="gender_female"
                    name="gender"
                    value="female"
                    label="Female"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    id="gender_prefer_not_to_say"
                    name="gender"
                    value="Prefer not to say"
                    label="Prefer not to say"
                  />
                </div>
              </Col>

              <Button variant="success">
                <div className="d-flex align-items-center justify-content-center">
                  <span className="fs-5">Save</span>
                </div>
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;