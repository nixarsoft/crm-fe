import Table from "./components/Table/Table";
import React, { useState } from "react";

function App() {
  const headers = [
    "ID",
    "Platform",
    "Identifier",
    "Agent",
    "Status",
    "Created At",
    "Actions",
  ];

  const [data, setData] = useState([
    {
      id: 25,
      platform: "Whatsapp",
      identifier: "+90 850 308 0335",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
    },
    {
      id: 16,
      platform: "Whatsapp",
      identifier: "+90 537 493 7766",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
    },
    {
      id: 14,
      platform: "Cellphone",
      identifier: "+90 533 666 77 88",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
    },
    {
      id: 8,
      platform: "Instagram",
      identifier: "nixarsoft",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
    },
    {
      id: 7,
      platform: "Telegram",
      identifier: "example_username",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
    },
    {
      id: 25,
      platform: "Whatsapp",
      identifier: "+90 850 308 0335",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
    },
    {
      id: 16,
      platform: "Whatsapp",
      identifier: "+90 537 493 7766",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
    },
    {
      id: 14,
      platform: "Cellphone",
      identifier: "+90 533 666 77 88",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
    },
  ]);

  const handleOpen = (id) => {
    console.log(`Open row with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  return (
    <div className="app">
      <Table
        headers={headers}
        data={data}
        onOpen={handleOpen}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
