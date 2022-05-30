import React from "react";
import './App.css';
import Navbar from "./components/navbar";

const fotoFundo = new  URL ("./imagens/a.jpg", import.meta.url)


function Sobre () {
  return (
  <div class="about-section">
  <h1>About Us Page</h1>
  <p>Alguns textos sobre quem somos e o que fazemos.</p>
  <p>Redimensione a janela do navegador para ver se esta página é responsiva.</p>
</div>)
}

function Card () {
  return (
    <>
    <h2 className="tamanho">Our Team</h2>
    
      <div class="column">
        <div class="card">
          <img src={fotoFundo} alt="Gilson"/>
          <div class="container">
            <h2>Jane Doe</h2>
            <p class="title">CEO & Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>jane@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
    <div class="card">
      <img src={fotoFundo} alt="Gilson"/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={fotoFundo} alt="Gilson" />
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
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
        <Card/>
      </div>

      
      
      
    </>
  );
}

export default App;
