import React from 'react';

const Card = ({ title, imageUrl }) => {
  return (
    <div className="card m-2" style={{ width: '18rem', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <img
          src={imageUrl}
          className="card-img-top rounded-circle"
          alt="Business Person"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="card-body mt-6 mb-3">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
