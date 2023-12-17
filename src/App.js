import React, { useState } from "react";
import ControlsContainer from "./components/ControlsContainer";
import Keyboard from "./components/Keyboard";
import { firstSoundsGroup, secondSoundsGroup } from "./util/music";
import './App.css'

const App = () => {
  const soundsGroup = {
    heaterKit: firstSoundsGroup,
    smoothPianoKit: secondSoundsGroup
  }

  const soundsName = {
    heaterKit: "Heater Kit",
    smoothPianoKit: "Smooth Piano Kit"
  };

  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [soundName, setSoundName] = useState("");
  const [soundType, setSoundType] = useState("");
  const [sounds, setSounds] = useState(soundsGroup['heaterKit']);
  const [selectType, setSelectType] = useState(false);
  
  const styleActiveKey = (key) => {
    key.parentElement.classList.add('active');
  }
 
 const deactivateAudio = (audio) => {
   setTimeout(() => {
     audio.parentElement.classList.remove('active') || audio.parentElement.classList.remove('nopower');
   }, 300)
 }

  const play = (key, sound) => {
    setSoundName(sound)
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    if(audio.getAttribute("src") !== '#'){
      styleActiveKey(audio);
      audio.volume = volume;
      audio.play();
    } else {
      audio.parentElement.classList.add('nopower');
    }
    deactivateAudio(audio)
  }

  const stop = () => {
     setPower(!power)
  }
  
  const changeSoundGroup = () => {
    setSelectType(!selectType)
    setSoundName("")
    if (soundType === 'heaterKit' || soundType === "") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  }
  
  const handleVolumeChange = e => {
    setSoundType("");
    setSoundName(`Volume: %${Math.round(volume * 100)}`)
    setVolume(e.target.value);
    setTimeout(() => {
      setSoundName("")
    }, 1000)
  } 
  
  return (
    <div id="drum-machine">
      <div className="inner-container">
        <Keyboard sounds={sounds} play={play} power={power} deactivateAudio={deactivateAudio} />
        <ControlsContainer 
          stop={stop}
          power={power}
          volume={volume} 
          name={soundName || soundsName[soundType]} 
          changeSoundGroup={changeSoundGroup}
          handleVolumeChange={handleVolumeChange} 
          selectType={selectType}
         />
      </div>
    </div>
  )
};

export default App;
