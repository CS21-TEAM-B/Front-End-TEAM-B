import React from "react";

const Controls = props => {
  return (
    <div className='controller'>
      <button
        className='directions'
        onClick={e => props.handleClick(e)}
        value='w'
      >
        ◄
      </button>
      <button
        className='directions'
        onClick={e => props.handleClick(e)}
        value='n'
      >
        ▲
      </button>
      <button
        className='directions'
        onClick={e => props.handleClick(e)}
        value='s'
      >
        ▼
      </button>
      <button
        className='directions'
        onClick={e => props.handleClick(e)}
        value='e'
      >
        ►
      </button>
    </div>
  );
};
export default Controls;
