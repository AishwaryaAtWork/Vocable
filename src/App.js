import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault, generateWordSet } from '../src/components/Words';
import {createContext,useState} from 'react';
import { useEffect } from 'react';
import GameOver from './components/GameOver';
import Header from './components/Header';

export const AppContext = createContext();

function App() {
  const [board, setBoard]= useState(boardDefault);
  const [currAttempt, setCurrAttempt]= useState({attempt :0, letterPos :0});
  const [wordSet, setWordSet]= useState(new Set());
  const [correctWord, setCorrectWord]= useState("");
  const [disabledLetters, setDisabledLetters]= useState([]);
  const [gameOver, setGameOver]= useState({gameOver: false, guessedWord: false});

  useEffect(()=>{
    generateWordSet().then((words)=>{
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  },[]);
  
  const onSelectLetter=(keyVal)=>{
    if (currAttempt.letterPos >4) return;
    const newBoard= [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos]=keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt,letterPos : currAttempt.letterPos+1});
  };
  
  const onDelete=()=>{
    if (currAttempt.letterPos ===0) return;
    const newBoard= [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos-1]="";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt,letterPos : currAttempt.letterPos-1});
  };
  
  const onEnter=()=>{
    if (currAttempt.letterPos !== 5) return;
    let currWord="";
    for (let i = 0; i < 5; i++) {
      currWord+=board[currAttempt.attempt][i];
    }
    if(wordSet.has(currWord.toLowerCase())){
      setCurrAttempt({attempt: currAttempt.attempt+1, letterPos: 0});
    }
    if(currWord === correctWord){
      setGameOver({gameOver: true, guessedWord: true});
      return;
    }
    if(currAttempt.attempt===5){
      setGameOver({gameOver: true, guessedWord: false});
    }
  };
  return (
    <div className="App">
      <Header/>
      <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, 
        onDelete, onEnter, correctWord, disabledLetters, setDisabledLetters, gameOver}}>
        <div className="game">
          <Board/>
          {gameOver.gameOver ? <GameOver/> :<Keyboard/>}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
