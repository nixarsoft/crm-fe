import React from 'react';
import './App.css';

function App() {
  const conversation = [
    { id: 35, Purpose :'Client', Label: 'Odoo Id', Key: 'Odoo_Id', status: 'Active', createdAt: '2024-12-24 09:00' },
    { id: 16, Purpose :'Client', Label: 'Odoo Username ', Key: 'Odoo_Username', status: 'Active', createdAt: '2024-12-24 10:00' },
    { id: 14, Purpose :'Group', Label:  'Value 7', Key: '', status: 'Active', createdAt: '2024-12-24 10:00' },
    { id: 8,  Purpose :'Agent', Label:  'Logo Employee ID', Key: 'Logo_Employee_ID', status: 'Active', createdAt: '2024-12-24 10:00' },
    { id: 5,  Purpose :'Client', Label: 'Value 7', Key:'', status: 'Active', createdAt: '2024-12-24 10:00' },
    { id: 2,  Purpose :'Agent', Label:  'Value 10', Key: '', status: 'Active', createdAt: '2024-12-24 10:00' },
  ];

  return (
    <div className="container">
      <h1 className="table-title">Additional info</h1>
      <table className="conversation-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Purpose</th>
            <th>Label</th>
            <th>Key</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {conversation.map((item, index) => (
            <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#EAF7EA' : '#FFFFFF' }}>
              <td>{item.id}</td>
              <td>{item.Purpose}</td>
              <td>{item.Label}</td>
              <td style={{ color:'#000000' }}>{item.Key}</td>
              <td style={{ color: item.status === 'Active' ? '#000000' : '#DC3545' }}>{item.status}</td>
              <td>{item.createdAt}</td>
              <td>
                <div className="action-buttons">
                  <button className="open-button">E</button>
                  <button className="del-button">X</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;