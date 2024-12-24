import { useEffect, useState } from "react";
import AdditionalInfoForm from "./components/forms/additional-info-form";
import Header from "./components/header";

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

  const exampleFn = () => {
    return () => {
      // burası unmount olduğunda çalışır
    };
  };
  const dependencies = [];

  useEffect(exampleFn, dependencies);

  return (
    <>
      <div class="container py-3">
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

        <AdditionalInfoForm />
      </div>
    </>
  );
}
