import React from "react";
import { Button, Table } from "react-bootstrap";

const conversations = [
    {
        id: 25,
        platform: "Whatsapp",
        identifier: "+90 850 308 0335",
        agent: "John Employee",
        status: "Active",
        createdAt: "2024-12-24 09:00",
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
        agent: "Jane Agent",
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
        id: 4,
        platform: "Facebook",
        identifier: "nixarsoft",
        agent: "Jane Agent",
        status: "Active",
        createdAt: "2024-12-24 10:00",
    },
    {
        id: 3,
        platform: "Telegram",
        identifier: "foo_bar_baz",
        agent: "Jane Agent",
        status: "Active",
        createdAt: "2024-12-24 10:00",
    },
    {
        id: 2,
        platform: "Instagram",
        identifier: "nixarsoft",
        agent: "John Employee",
        status: "Active",
        createdAt: "2024-12-24 10:00",
    },
];

const headerStyle = {
    backgroundColor: "#A7C942",
    color: "white",
    fontWeight: "normal",
    border: "2px solid #A7C942",
};

const cellStyle = {
    border: "2px solid #A7C942",
};

const buttonStyle = {
    padding: "2px 10px",
    margin: "0 2px",
    fontSize: "14px",
};

export default function ConversationHistory() {
    return (
        <div className="container mt-4">
            <h2>Conversation History</h2>
            <Table responsive bordered>
                <thead>
                <tr>
                    <th style={headerStyle}>ID</th>
                    <th style={headerStyle}>Platform</th>
                    <th style={headerStyle}>Identifier</th>
                    <th style={headerStyle}>Agent</th>
                    <th style={headerStyle}>Status</th>
                    <th style={headerStyle}>Created At</th>
                    <th style={headerStyle}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {conversations.map((conversation, index) => {
                    const rowStyle = {
                        ...cellStyle,
                        backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#EAF2D3",
                    };
                    return (
                        <tr key={conversation.id}>
                            <td style={rowStyle}>{conversation.id}</td>
                            <td style={rowStyle}>{conversation.platform}</td>
                            <td style={rowStyle}>{conversation.identifier}</td>
                            <td style={{ ...rowStyle, color: "blue" }}>{conversation.agent}</td>
                            <td style={rowStyle}>{conversation.status}</td>
                            <td style={rowStyle}>{conversation.createdAt}</td>
                            <td style={rowStyle}>
                                <Button
                                    variant="success"
                                    style={{ ...buttonStyle, backgroundColor: "#28a745", borderColor: "#28a745" }}
                                >
                                    Open
                                </Button>
                                <Button
                                    variant="danger"
                                    style={{ ...buttonStyle, backgroundColor: "#dc3545", borderColor: "#dc3545" }}
                                >
                                    Del
                                </Button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
}