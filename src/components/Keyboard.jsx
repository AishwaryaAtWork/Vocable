import React , {useContext, useEffect} from 'react';
import { useCallback } from 'react';
import { AppContext } from '../App';
import Key from './Key';

function Keyboard() {
  const { onSelectLetter, onDelete, onEnter, disabledLetters} = useContext(AppContext);

  const KEY1= ["Q","W","E","R","T","Y","U","I","O","P"];
  const KEY2= ["A","S","D","F","G","H","J","K","L"];
  const KEY3= ["Z","X","C","V","B","N","M"];

  const handleKeyboard=useCallback((event)=>{
    if(event.key==="Enter"){
      onEnter();
    }
    else if(event.key==="Backspace"){
      onDelete();
    }
    else{
      KEY1.forEach((k)=>{
        if(event.key.toLowerCase() === k.toLowerCase()){
          onSelectLetter(k);
        }
      });
      KEY2.forEach((k)=>{
        if(event.key.toLowerCase() === k.toLowerCase()){
          onSelectLetter(k);
        }
      });
      KEY3.forEach((k)=>{
        if(event.key.toLowerCase() === k.toLowerCase()){
          onSelectLetter(k);
        }
      });
    }
  });
  useEffect(()=>{
    document.addEventListener("keydown",handleKeyboard);
    return ()=>{
      document.removeEventListener("keydown",handleKeyboard);
    };
  },[handleKeyboard]);
  return (
    <>
      <div className="keyboard" onKeyDown={handleKeyboard}>
            <div className="line1">
              {KEY1.map((k)=>(<Key key={k} keyVal={k} disabled={disabledLetters.includes(k)}/>))}
              </div>
            <div className="line2">
              {KEY2.map((k)=>(<Key key={k} keyVal={k} disabled={disabledLetters.includes(k)}/>))}
            </div>
            <div className="line3">
              <Key keyVal={"ENTER"} bigKey/>
              {KEY3.map((k)=>(<Key key={k} keyVal={k} disabled={disabledLetters.includes(k)}/>))}
              <Key keyVal={"DELETE"} bigKey/>
            </div>
      </div>
    </>
  )
}

export default Keyboard;
