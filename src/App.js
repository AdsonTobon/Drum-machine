import React from "react";
import Drum from './components/Drum'
import Audios from './services/Audios'
import '../src/App.css'

const sounds=Audios;


  const app = () => (
    <div id="display" className="display">
      <h2>Drum Machine</h2>
      <h1>Presiona las teclas del teclado</h1>
      <div className="keyboard">
      {sounds.map((sound, idx) => (
        <Drum text={sound.key} key={idx} audio={sound.mp3} />
      ))}
      </div>
      
    </div>
  );
  document.addEventListener('keydown', (e) => {
    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);
    
    if(audio) {
      audio.currentTime = 0;
      const parent = audio.parentNode;
      parent.classList.add('active');
      
      const display = parent.parentNode;
      display.querySelector('h1').innerText = `Presionaste la ${id}  `;
      audio.play();
    }
  });
  export default app;