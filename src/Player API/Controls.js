import React, { useState } from "react";

const Controls = () => {
  return (
    <div className='controller'>
      <button className='directions'>◄</button>
      <button className='directions'>▲</button>
      <button className='directions'>▼</button>
      <button className='directions'>►</button>
    </div>
  );
};
export default Controls;
