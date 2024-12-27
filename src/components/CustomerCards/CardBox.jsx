import React from 'react'
import { Container } from 'react-bootstrap'
import './Customer.css'

function CardBox(props) {

  return (

    <div className='card-box w-100 overflow-hidden rounded d-flex flex-column justify-content-between m-1' >
      <div className='card-top-bg position-relative d-flex justify-content-center'>
        <div className='p-3 position-absolute'>
          <img className='customer-image img-fluid rounded-pill' src="/avatar.png" alt="" />
        </div>
      </div>
      <div className='text-center'>
        <h2 className='mb-4'>Arthur Morgan</h2>
      </div>
    </div>

  )
}

export default CardBox