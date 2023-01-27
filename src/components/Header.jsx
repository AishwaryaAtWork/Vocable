import React from 'react';
import { useState } from 'react';

function Header() {
  const Rules=[{n:1, r:"Guess 5 letter word in 6 attempts."},{n:2, r:"Gray --> wrong guess."},{n:3, r:"Yellow --> correct letter wrong position."},
  {n:4, r:"Green --> correct guess."},{n:5, r:"ENTER --> to go to next attempt."},{n:6, r:"DELETE --> to remove letters."},
  {n:7, r:"F5 --> to restart the game."}]

  const [openRules, setOpenRules]= useState(false);
  return (
    <>
      <div className='header'>
        <div className='logo'>Vocable</div>
        <div className="rules">
          <h5 onClick={()=>setOpenRules(!openRules)}>Rules <span className="fas fa-scroll" ></span></h5>
          {openRules && (
            <div className="rulesList">
            <ul>
              {Rules.map((rule)=>(
                <li key={rule.n}><p>{rule.n}. {rule.r}</p></li>
              ))}
            </ul>
          </div> 
          )}
        </div>
      </div>
    </>
  )
}

export default Header;
