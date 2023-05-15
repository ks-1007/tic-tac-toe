import { useEffect, useState } from 'react';
import styles from './index.module.css'
import Cell from './Cell';

function App() {
  const [cells, setCells] = useState(["","","","","","","","",""])
  const [go, setGo] = useState("circle")
  const [winner, setWinner] = useState(null)
  const winningCombinations = [[0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

  useEffect(() => {
    // console.log('useEffect')
    winningCombinations.map(combination=>{
      // console.log('combination', combination)
      const circleWins = combination.every(idx=> cells[idx]==='O')
      console.log('circleWins', circleWins, combination, cells)
      if(circleWins) setWinner("Circle") 
      const crossWins = combination.every(idx=> cells[idx]==='X')
      if(crossWins) setWinner("Cross") 
    })
  }, [go])
  
  const handleReset=()=>{
    setCells(["","","","","","","","",""])
    setWinner(null)
    setGo("circle")
  }

  return (
    <div className={styles.mainCont}>
      <div className={styles.boardContainer}>
      {
        cells.map((cell, i)=><Cell key={i} setGo={setGo} setCells={setCells} cells={cells} go={go} cell={cell} idx={i} winner={winner}/>)
      }
      </div>
      <p>It's {go}'s go</p>
      {winner && <h1>{winner} won the match</h1>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
