import { useEffect, useState } from 'react';
import styles from './index.module.css'
import TicTacToe from './tic-tac-toe/TicTacToe';
import FileExplorer from './file-explorer/FileExplorer';

function App() {
  return (
    <>
      {/* <TicTacToe/> */}
      <FileExplorer/>
      
    </>
  );
}

export default App;
