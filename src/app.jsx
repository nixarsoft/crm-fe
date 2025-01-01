import { useEffect, useState } from "react";
import AdditionalInfoForm from "./components/forms/additional-info-form";
import Header from "./components/header";
import TableGenerator from "./components/TableGenerator/TableGenerator";
import { Box } from "@mui/material";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./app.css"


/*
Soru: JS'de export default ile export const arasındaki farklar nelerdir?

Soru: Reactjs'de component oluşturma yöntemleri nelerdir?
Cevap: 1. yöntem: const olarak fonksiyonu tanımlayıp onu export default yapmak.
2. yöntem: normal bir fonksiyon tanımlayıp onu en altta export default yapmak.
3. yöntem: tek satırda export default function FonksiyonAdi şeklinde yazmak.

Soru: Reactjsde bir fonksiyonun hook olup olmadığını neye göre ayırt ederiz
      (yada neye göre anlarız)?
Cevap: use ile başlayan fonksiyonlar hook kurallarına tabiidir.

Soru: React'ta hook ne anlama gelir?
Cevap: Hook kelime anlamı kanca demektir, reactta componentlerin life cycle'ları esnasında
bazı durumlarda çağrılan fonksiyonlar vardır ve bunların ismi hook'tur.

Soru: mount ve unmount olayları nedir?
Cevap: React'ta componentler DOM'a yazılması ve DOM'daki componentin çıkartılması işlemleri
vardır. DOM'a yazılma işlemine mount, DOM'dan çıkartılma işlemine de unmount event'ı denir.

Soru: React'ta fragment nedir?

Soru: JSX nedir?
Cevap: Javascript XML'in kısaltılmışı.

*/

export default function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  /*
  Hook ne anlama gelir?
  Componentlerin lifecycle'larındaki aşamalar arasına çalışması için eklenen fonksiyonlardır.
  Örneğin useEffect'i ele alırsak.
  
  use ile başlayan fonksiyonlar reactjs'de hook olarak tanımlanır. ve bu fonksiyonlar
  hook kuralarına bağlıdır. Sık kullanılan hooklar useState, useEffect, useRef, 
  useLayoutEffect. Diğer hooklar ileri konularda işlenecektir.
  
  Hook kuralları:
  1- use ifadesiyle başlayan fonksiyonlar hook'tur.
  2- Componentlerde hiçbir şart veya döngü içerisinde olmamak şartıyla doğrudan component
     içerisinde kullanılmalı.
  */
  

  const data = [
    {
      id: 35,
      purpose: "Client",
      label: "Odoo Id",
      Key: "odoo_id",
      Status: "Active",
      CreatedAt: "2024-12-2 09:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "success" },
        { name: "Delete", onClick: () => handleDelete(1), color: "error" },
      ]
    },
    {
      id: 35,
      purpose: "Client",
      label: "Odoo Id",
      Key: "odoo_id",
      Status: "Active",
      CreatedAt: "2024-12-2 09:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "warning" },
        { name: "Delete", onClick: () => handleDelete(1), color: "info" },
      ]
    },
    {
      id: 35,
      purpose: "Client",
      label: "Odoo Id",
      Key: "odoo_id",
      Status: "Active",
      CreatedAt: "2024-12-2 09:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "primary" },
        { name: "Delete", onClick: () => handleDelete(1), color: "secondary" },
      ]
    },
    {
      id: 35,
      purpose: "Client",
      label: "Odoo Id",
      Key: "odoo_id",
      Status: "Active",
      CreatedAt: "2024-12-2 09:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "success" },
        { name: "Delete", onClick: () => handleDelete(1), color: "error" },
      ]
    },
    {
      id: 35,
      purpose: "Client",
      label: "Odoo Id",
      Key: "odoo_id",
      Status: "Active",
      CreatedAt: "2024-12-2 09:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "warning" },
        { name: "Delete", onClick: () => handleDelete(1), color: "info" },
      ]
    },
    {
      id: 35,
      purpose: "Client",
      label: "Odoo Id",
      Key: "odoo_id",
      Status: "Active",
      CreatedAt: "2024-12-2 09:00",
      actions: [
        { name: "Edit", onClick: () => handleEdit(1), color: "primary" },
        { name: "Delete", onClick: () => handleDelete(1), color: "secondary" },
      ]
    },
  ]

  const headers = ["ID", "Purpose", "Label", "Key", "Status", "Created At", "Actions"]

  const exampleFn = () => {
    return () => {
      // burası unmount olduğunda çalışır
    };
  };
  const dependencies = [];

  useEffect(exampleFn, dependencies);

  const handleEdit = (id) => {
    console.log("Edit clicked for ID:", id);
    // Edit işlemleri...
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for ID:", id);
    // Delete işlemleri...
  };
  
  const [key, setKey] = useState('home');

  return (
    <>
      <div class="container py-3 d-flex flex-column ">
        <Header />

        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="display-4 fw-normal text-body-emphasis">
            ReactJS Dersleri
          </h1>
          <p class="fs-5 text-body-secondary">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="personalinfo" title="Personal Info">
            Tab content for Personal Info
          </Tab>
          <Tab eventKey="socialmedia" title="Social Media">
            Tab content for Social Media
          </Tab>
          <Tab eventKey="conversationhistory" title="Conversation History" >
            Tab content for Conversation History
          </Tab>
          <Tab eventKey="assignagents" title="Assigned Agents">
            Tab content for Assigned Agents
          </Tab>
        </Tabs>
        <AdditionalInfoForm />
        <Box sx={{margin: 2}}>
          <TableGenerator headers={headers} data={data} />
        </Box>
      </div>
    </>
  );
}
