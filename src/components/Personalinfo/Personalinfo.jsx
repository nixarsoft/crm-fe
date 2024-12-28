import React from 'react'
import { Container, Row, Col, FormControl, FormGroup, FormCheck } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'

import './Personalinfo.css'

function Personalinfo() {
  return (
    <Container fluid style={{ minHeight: "100vh" }} className='d-flex justify-content-center align-items-center '>
      <Row className='w-100 h-100 justify-content-center'>
        <Col xs={12} md={8} lg={5} >
          <div className='text-center'>
            <h1>Personal Info</h1>
          </div>
          <Form className='personal-info-form rounded p-4 d-flex flex-column justify-content-between'>
            <div className='d-flex w-100 justify-content-between gap-4'>
              <Form.Group controlId="formName">
                <Form.Label className='fs-5'>
                  Firstname
                </Form.Label>
                <Form.Control className='bg-transparent border-black' />
                <Form.Text className="text-muted">
                  Firstname
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label className='fs-5'>
                  Lastname
                </Form.Label>
                <Form.Control className='bg-transparent border-black' />
                <Form.Text className="text-muted">
                  Lastname
                </Form.Text>
              </Form.Group>
            </div>
            <div className='w-100'>
              <Form.Group controlId="FormEmail">
                <Form.Label className='fs-5'>
                  Email
                </Form.Label>
                <Form.Control className='bg-transparent border-black' />
                <Form.Text className="text-muted">
                  Email
                </Form.Text>
              </Form.Group>
            </div>
            <div className='w-100'>
              <h6 className='fs-5'>Gender</h6>
              <Form.Group className='d-flex gap-4'>
                <Form.Check
                  type='radio'
                  label='Male'
                  id='radio1'
                  name='radioGroup' />
                <Form.Check
                  type='radio'
                  label='Female'
                  id='radio2'
                  name='radioGroup' />
                <Form.Check
                  type='radio'
                  label='Prefer not to say'
                  id='radio3'
                  name='radioGroup' />
              </Form.Group>
            </div>
            <Button variant="success" className='w-100'>Save</Button>
          </Form>
        </Col>
      </Row>
    </Container >
  )
}

export default Personalinfo