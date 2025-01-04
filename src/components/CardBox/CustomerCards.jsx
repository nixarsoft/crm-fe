import React from 'react';
import Card from './Card';

const customers = [
  { id: 1, name: 'Albert Einstein', imageUrl: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1c3RvbWVyJTIwcGVyc29ufGVufDB8fDB8fHwy' },
  { id: 2, name: 'Isaac Newton', imageUrl: 'https://images.unsplash.com/photo-1623605931891-d5b95ee98459?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Marie Curie', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Ada Lovelace', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGN1c3RvbWVyJTIwcGVyc29uJTIwd29tYW58ZW58MHx8MHx8fDI%3D' },
];

const CustomerCards = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Customer Cards</h2>
      <div className="row justify-content-center gap-md-4 gap-lg-5">
        {customers.map((customer) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={customer.id}>
            <div className="card shadow-sm" style={{ borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-center">
                  <img
                    className="img-fluid rounded-circle mt-3 mb-4"
                    src={customer.imageUrl}
                    alt={customer.name}
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                </div>
                <h5 className="card-title mb-3">{customer.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerCards;
