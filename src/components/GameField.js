import { useState } from 'react';
import gameFun from './gameFun';

const arrayCell = ['', '', '', '', '', '', '', '', '']

const GameField = () => {
   const [symbol, setSymbol] = useState(arrayCell)
   const [gameSymbol, setGameSymbol] = useState('X');
   const [end, setEnd] = useState(false)

   const handlerCellClick = (index) => {

      // console(index)
      const newSymbol = [...symbol]
      if (newSymbol[index] === '') {
         newSymbol[index] = gameSymbol
         setSymbol(newSymbol)

         if (gameFun(newSymbol)) {
            setEnd(true)
         } else {
            setGameSymbol(gameSymbol === 'X' ? 'O' : 'X');
         }
      }
   }

   const gameStart = () => {
      setSymbol(['', '', '', '', '', '', '', '', '']);
      setEnd(false)
   }
   return (
      <>
         <h1>Game Tic tac toe</h1>
         {end
            ? <div>
               <h1>{`Player ${gameSymbol} wins!`}</h1>
               <button onClick={gameStart}>Restart</button>
            </div>
            : <div className="GameField">
               <table className="GameFieldTable">
                  <tbody>
                     <tr className="Game-row">
                        <th className="cell" onClick={() => { handlerCellClick(0) }}>{symbol[0]}</th>
                        <th className="cell" onClick={() => { handlerCellClick(1) }}>{symbol[1]}</th>
                        <th className="cell" onClick={() => { handlerCellClick(2) }}>{symbol[2]}</th>
                     </tr>
                     <tr className="Game-row">
                        <th className="cell" onClick={() => { handlerCellClick(3) }}>{symbol[3]}</th>
                        <th className="cell" onClick={() => { handlerCellClick(4) }}>{symbol[4]}</th>
                        <th className="cell" onClick={() => { handlerCellClick(5) }}>{symbol[5]}</th>
                     </tr>
                     <tr className="Game-row">
                        <th className="cell" onClick={() => { handlerCellClick(6) }}>{symbol[6]}</th>
                        <th className="cell" onClick={() => { handlerCellClick(7) }}>{symbol[7]}</th>
                        <th className="cell" onClick={() => { handlerCellClick(8) }}>{symbol[8]}</th>
                     </tr>
                  </tbody>
               </table>
            </div >
         }
      </>
   )
}

export default GameField
