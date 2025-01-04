import React from "react";
import TableGenerator from "./TableGenerator/TableGenerator";

const ConversationHistory = () => {
  const data = [
    {
      id: 25,
      platform: "Whatsapp",
      identifier: "+90 850 308 0335",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 09:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "primary" },
        { name: "Delete", onClick: () => handleDelete(1), color: "error" },
      ],
    },
    {
      id: 16,
      platform: "Whatsapp",
      identifier: "+90 537 493 7766",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "primary" },
        { name: "Delete", onClick: () => handleDelete(1), color: "error" },
      ],
    },
    {
      id: 14,
      platform: "Cellphone",
      identifier: "+90 533 666 77 88",
      agent: "Jane Agent",
      status: "Active",
      createdAt: "2024-12-24 10:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "primary" },
        { name: "Delete", onClick: () => handleDelete(1), color: "error" },
      ],
    },
    {
      id: 8,
      platform: "Instagram",
      identifier: "nixarsoft",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "primary" },
        { name: "Delete", onClick: () => handleDelete(1), color: "error" },
      ],
    },
    {
      id: 7,
      platform: "Telegram",
      identifier: "example_username",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "primary" },
        { name: "Delete", onClick: () => handleDelete(1), color: "error" },
      ],
    },
    {
      id: 4,
      platform: "Facebook",
      identifier: "nixarsoft",
      agent: "Jane Agent",
      status: "Active",
      createdAt: "2024-12-24 10:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "primary" },
        { name: "Delete", onClick: () => handleDelete(1), color: "error" },
      ],
    },
    {
      id: 3,
      platform: "Telegram",
      identifier: "foo_bar_baz",
      agent: "Jane Agent",
      status: "Active",
      createdAt: "2024-12-24 10:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "primary" },
        { name: "Delete", onClick: () => handleDelete(1), color: "error" },
      ],
    },
    {
      id: 2,
      platform: "Instagram",
      identifier: "nixarsoft",
      agent: "John Employee",
      status: "Active",
      createdAt: "2024-12-24 10:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "primary" },
        { name: "Delete", onClick: () => handleDelete(1), color: "error" },
      ],
    },
  ];
  const headers = [
    "ID",
    "Platform",
    "Identifier",
    "Agent",
    "Status",
    "Created At",
    "Actions",
  ];

  return <TableGenerator headers={headers} data={data} />;
};

export default ConversationHistory;
