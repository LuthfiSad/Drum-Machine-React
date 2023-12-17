import React from "react";
import KeyboardKey from "./keyboardKey";

const Keyboard = ({ sounds, play, power, deactivateAudio }) =>  (
    <div className="keyboard">
      {power 
        ? sounds.map((sound) => <KeyboardKey sound={sound} key={sound.id} play={play} deactivateAudio={deactivateAudio} />)
        : sounds.map((sound) => <KeyboardKey sound={{...sound, url: "#" }} key={sound.id} play={play} deactivateAudio={deactivateAudio} />)        
      }
    </div>
  );

  export default Keyboard;