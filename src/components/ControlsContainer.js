import React from "react";

const ControlsContainer = ({
  stop,
  name,
  power,
  volume,
  handleVolumeChange,
  changeSoundGroup,
  selectType
}) => (
    <div className="controls-container">
      <div className="control-power">
        <h5>Power {power ? ": ON" : ": OFF"}</h5>
        <input
          style={{ display: "none" }}
          id="power"
          type="checkbox"
          onChange={stop}
          checked={power}
        />
        <label htmlFor="power" className="select">
          <div className="box"></div>
        </label>
      </div>
      <div className="name-display">
        <p id="display">{name}</p>
      </div>
      <input
        max="1"
        min="0"
        step="0.01"
        type="range"
        value={volume}
        onChange={handleVolumeChange}
      />
      <h5>Bank</h5>
      <div className="control-type">
        <input
          style={{ display: "none" }}
          id="soundtype"
          type="checkbox"
          onChange={changeSoundGroup}
          checked={selectType}
        />
        <label htmlFor="soundtype" className="select">
          <div className="box"></div>
        </label>
      </div>
    </div>
  );

export default ControlsContainer;
