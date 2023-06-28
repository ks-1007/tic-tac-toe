import React, { useState } from 'react'
import explorer from './data/folderData'
import Folder from './component/Folder'

const FileExplorer = () => {
    const [fileData, setFileData] = useState(explorer)
  return (
    <Folder explorer={explorer}/>
  )
}

export default FileExplorer