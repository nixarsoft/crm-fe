import React from "react";
import { Button, Table } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

//örnek veri
const agents = [
  {
    id: 1,
    name: "Mark Spancer",
    status: "Active",
    createdAt: "2024-01-01 09:50",
  },
  { id: 2, name: "Jacob Nes", status: "Active", createdAt: "2024-01-02 08:30" },
  {
    id: 3,
    name: "Larry the Bird",
    status: "Active",
    createdAt: "2024-01-03 12:05",
  },
  {
    id: 4,
    name: "Daniel Marrowich",
    status: "Active",
    createdAt: "2024-01-03 22:42",
  },
  { id: 5, name: "Ivan Kary", status: "Active", createdAt: "2024-01-03 01:35" },
  {
    id: 6,
    name: "Swelte Suarer",
    status: "Active",
    createdAt: "2024-01-03 14:50",
  },
];

const headerStyle = {
  backgroundColor: "#059669",
  color: "white",
};

export default function AssignedAgents() {
  return (
    <div className="container">
      <h5>Assigned Agents</h5>
      <div className="d-flex justify-content-between mb-3">
        <InputGroup style={{ width: "92%" }}>
          <Form.Control placeholder="Search..." aria-label="Search" />
        </InputGroup>
        <Button style={{ backgroundColor: "#059669", border: 0 }}>
          Assign
        </Button>
      </div>
      <Table striped bordered hover responsive>
        <thead className="table-success text-white">
          <tr className="text-center">
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Agent</th>
            <th style={headerStyle}>Status</th>
            <th style={headerStyle}>Created At</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {agents.map((agent) => (
            <tr key={agent.id}>
              <td>{agent.id}</td>
              <td style={{ color: "blue" }}>{agent.name}</td>
              <td>{agent.status}</td>
              <td>{agent.createdAt}</td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
