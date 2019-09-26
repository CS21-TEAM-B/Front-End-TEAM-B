import React, { useState } from "react";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Token 9cc02eba9fa61e9154c47ebfe0bb99591d17faa9";

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
