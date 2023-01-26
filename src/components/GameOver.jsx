import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

function GameOver() {
    const {gameOver, currAttempt, correctWord}= useContext(AppContext);
  return (
    <>
    <div className="gameOver">
        <h1>{gameOver.guessedWord ? "You correctly guessed the word!!!" : "You failed to guessed the word!!!"}</h1>
        <h3>Correct Word : {correctWord.toUpperCase()}</h3>
        {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts.</h3>)}
    </div> 
    </>
  )
}

export default GameOver;