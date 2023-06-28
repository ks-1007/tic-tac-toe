import React, { useState } from 'react'
import styles from "../style/index.module.css"
const Folder = ({explorer}) => {
    const [expandFolder, setExpandFolder] = useState(false)
    if(explorer.isFolder) {
        return (
            <div className={styles.folder}>
                <span onClick={()=>setExpandFolder(!expandFolder)} style={{cursor: 'pointer'}}>
                📁
                {explorer.name}
                </span>
                {expandFolder ? <div style={{paddingLeft: '20px'}}>
                    {explorer.items.map((explorerData, idx)=>{
                        return <Folder key={idx} explorer={explorerData}/>
                    })}
                </div> : <></>}
            </div>
          )
    } else {
        return <div className={styles.file}> 📄 {explorer.name}</div>
    }
  
}

export default Folder