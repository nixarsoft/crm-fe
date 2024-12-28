import React from 'react'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function SocialTableRow(props) {
  return (
    <tr>
      <td>1</td>
      <td>{props.platform}</td>
      <td>{props.identifier}</td>
      <td>{props.status}</td>
      <td>{props.createdAt} </td>
      <td className='d-flex gap-2 align-items-center justify-content-center'>
        <Button variant='success' className='flex-grow-1'>Edit</Button>
        <Button variant='danger' className='flex-grow-1'>Delete</Button>
      </td>
    </tr>
  )
}

export default SocialTableRow