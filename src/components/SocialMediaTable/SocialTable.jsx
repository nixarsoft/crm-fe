import React from 'react'
import { Table } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import SocialTableRow from './SocialTableRow'


function SocialTable() {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center'>
      <div className='text-start w-75'>
        <h2 >Social Media</h2>
      </div>
      <div className='table-responsive w-75'>
        <Table striped bordered hover className='w-100'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Platform</th>
              <th>Identifier</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <SocialTableRow
              platform={'Whatsapp'}
              identifier={'555 555 55 55'}
              status={'Active'}
              createdAt={'99.99.1999'} />
            <SocialTableRow
              platform={'Whatsapp'}
              identifier={'555 555 55 55'}
              status={'Active'}
              createdAt={'99.99.1999'} />
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

export default SocialTable