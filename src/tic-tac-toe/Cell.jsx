import React from 'react'
import styles from './index.module.css'
const Cell = ({setGo, setCells, go, cell, idx, cells, winner}) => {

    const handleClick = (e) => {
        if(winner) return
        if(!cell) {
            if(go === 'circle') {
                cells[idx] = "O"
                setCells([...cells])
                setGo("cross")
            } else {
                cells[idx] = "X"
                setCells([...cells])
                setGo("circle")
            }
        }
    }
  return (
    <div className={styles.cellCont} onClick={handleClick}>{cell}</div>
  )
}

export default Cell