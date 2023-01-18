import React from 'react';
import Key from './Key';

function Keyboard() {
  const KEY1= ["Q","W","E","R","T","Y","U","I","O","P"];
  const KEY2= ["A","S","D","F","G","H","J","K","L"];
  const KEY3= ["Z","X","C","V","B","N","M"];
  return (
    <>
      <div className="keyboard">
            <div className="line1">
              {KEY1.map((k)=>(<Key keyVal={k}/>))}
              </div>
            <div className="line2">
              {KEY2.map((k)=>(<Key keyVal={k}/>))}
            </div>
            <div className="line3">
              <Key keyVal={"ENTER"} bigKey/>
              {KEY3.map((k)=>(<Key keyVal={k}/>))}
              <Key keyVal={"DELETE"} bigKey/>
            </div>
      </div>
    </>
  )
}

export default Keyboard;
