import React from 'react';

const ButtonsController = (props) => {
  return (
    <div>
      <button
        onClick={props.clickStartStop}
      >{props.start ? 'Start' : 'Stop'}</button>

      <button
        onClick={props.clickReset}
      >Reset</button>
    </div>
  );
}

export default ButtonsController;