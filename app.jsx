Form.js

import React from 'react';
import { Form, Button } from 'react-bootstrap';

function CustomForm() {
  return (
    <div className="p-4" style={{ backgroundColor: '#1c1c1c', maxWidth: '400px', margin: 'auto', borderRadius: '8px' }}>
      <Form>
        {/* Purpose */}
        <Form.Group className="mb-3">
          <Form.Label style={{ color: 'white', fontSize: '1.2rem' }}>Purpose:</Form.Label>
          <div className="d-flex gap-3">
            <Form.Check
              type="radio"
              name="purpose"
              id="purpose_client"
              label="Client"
              value="client"
              defaultChecked
              className="text-light"
            />
            <Form.Check
              type="radio"
              name="purpose"
              id="purpose_group"
              label="Group"
              value="group"
              className="text-light"
            />
            <Form.Check
              type="radio"
              name="purpose"
              id="purpose_agent"
              label="Agent"
              value="agent"
              className="text-light"
            />
          </div>
        </Form.Group>

        {/* Label */}
        <Form.Group className="mb-3">
          <Form.Label style={{ color: 'white', fontSize: '1.2rem' }}>label:</Form.Label>
          <Form.Control
            type="text"
            name="label"
            placeholder="Please write label to here."
          />
        </Form.Group>

        {/* Key */}
        <Form.Group className="mb-3">
          <Form.Label style={{ color: 'white', fontSize: '1.2rem' }}>key:</Form.Label>
          <Form.Control
            type="text"
            name="key"
            placeholder="Please write key to here."
          />
        </Form.Group>

        {/* Status */}
        <Form.Group className="mb-3">
          <Form.Label style={{ color: 'white', fontSize: '1.2rem' }}>Status:</Form.Label>
          <div className="d-flex gap-3">
            <Form.Check
              type="radio"
              name="status"
              id="status_active"
              label="Active"
              value="active"
              defaultChecked
              className="text-light"
            />
            <Form.Check
              type="radio"
              name="status"
              id="status_passive"
              label="Passive"
              value="passive"
              className="text-light"
            />
          </div>
        </Form.Group>

        {/* Save Button */}
        <Button type="submit" variant="success" className="d-flex align-items-center gap-2">
          <i className="bi bi-save"></i> Save
        </Button>
      </Form>
    </div>
  );
}

export default CustomForm;
