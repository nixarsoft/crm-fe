
import React from 'react';
import './App.css';

function App() {
  const conversation = [
    { id: 25, platform: 'Whatsapp', identifier: '+90 850 308 0335', agent: 'John Employee', status: 'Active', createdAt: '2024-12-24 09:00' },
    { id: 16, platform: 'Whatsapp', identifier: '+90 537 493 7766', agent: 'John Employee', status: 'Active', createdAt: '2024-12-24 10:00' },
    { id: 14, platform: 'Cellphone', identifier: '+90 533 666 7788', agent: 'Jane Agent', status: 'Active', createdAt: '2024-12-24 10:00' },
    { id: 8, platform: 'Instagram', identifier: 'nixarsoft', agent: 'John Employee', status: 'Active', createdAt: '2024-12-24 10:00' },
    { id: 7, platform: 'Telegram', identifier: 'example_username', agent: 'John Employee', status: 'Active', createdAt: '2024-12-24 10:00' },
    { id: 4, platform: 'Facebook', identifier: 'nixarsoft', agent: 'Jane Agent', status: 'Active', createdAt: '2024-12-24 10:00' },
    { id: 3, platform: 'Telegram', identifier: 'foo_bar_baz', agent: 'Jane Agent', status: 'Active', createdAt: '2024-12-24 10:00' },
    { id: 2, platform: 'Instagram', identifier: 'nixarsoft', agent: 'John Employee', status: 'Active', createdAt: '2024-12-24 10:00' },
  ];

  return (
    <div className="container">
      <h1 className="table-title">Conversation History</h1>
      <table className="conversation-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Platform</th>
            <th>Identifier</th>
            <th>Agent</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {conversation.map((item, index) => (
            <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#EAF7EA' : '#FFFFFF' }}>
              <td>{item.id}</td>
              <td>{item.platform}</td>
              <td>{item.identifier}</td>
              <td style={{ color: '#0056b3', fontWeight: 'bold' }}>{item.agent}</td>
              <td style={{ color: item.status === 'Active' ? '#28A745' : '#DC3545' }}>{item.status}</td>
              <td>{item.createdAt}</td>
              <td>
                {item.id === 25 && (
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="open-button">Open</button>
                    <button className="del-button">Del</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;