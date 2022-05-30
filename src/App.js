import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import { useState } from 'react';

const fotoFundo = new  URL ("./imagens/a.jpg", import.meta.url)

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className="button" onClick={handleClick}>{count} gosto</button>
  );
}

function Sobre () {
  return (
  <div class="about-section">
  <h1>Sobre o Site</h1>
  <p>Alguns textos sobre quem somos e o que fazemos.</p>
  <p>Redimensione a janela do navegador para ver se esta página é responsiva.</p>
</div>)
}

function Card () {
  return (
    <>
      <div class="column">
        <div class="card">
          <img src={fotoFundo} alt="Gilson"/>
          <div class="container">
            <h2>Programador</h2>
            <p class="title">CEO & Dikulo Soluction</p>
            <p>Cards literalmente responsivas</p>
            <p>primeiroteste@gmail.com</p>
            <MyButton/>
          </div>
        </div>
      </div>

      <div class="column">
    <div class="card">
      <img src={fotoFundo} alt="Gilson"/>
      <div class="container">
        <h2>Web-Designer</h2>
        <p class="title">CEO & Dikulo Soluction</p>
            <p>Cards literalmente responsivas</p>
            <p>primeiroteste@gmail.com</p>
        <MyButton/>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={fotoFundo} alt="Gilson" />
      <div class="container">
        <h2>Consultor de TI</h2>
        <p class="title">CEO & Dikulo Soluction</p>
            <p>Cards literalmente responsivas</p>
            <p>primeiroteste@gmail.com</p>
        <MyButton/>
      </div>
    </div>
  </div>

</>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Sobre/>
        <h2 className="tamanho">Contrate-me</h2>
        <Card/>
        <Card/>
      </div>

      
      
      
    </>
  );
}

export default App;
