import React, { Component } from 'react'
import '../css/Drum.css';


export default class Drum extends Component {
    constructor(props) {
        super(props);
        
        this.audio = React.createRef();
      }
      
      componentDidMount() {
        this.audio.current.addEventListener('ended', (e) => {
          const parent = e.target.parentNode;
          parent.classList.remove('active');
        });
      }
      
      playSound = () => {
        this.audio.current.play();
        
        const id = this.audio.current.id;
        
        const parent = this.audio.current.parentNode;
        parent.classList.add('active');
        
        const display = parent.parentNode;
        display.querySelector('h1').innerText = `Presionaste la ${id}`;
      }
      
      render() {
        const { text, audio } = this.props;
        
        return (
          <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
            {text}
            <audio ref={this.audio} src={audio} className="clip" id={text} />
          </div>
        )
      }
    }