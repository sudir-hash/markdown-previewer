import React from 'react'
import "./Editor.css"
const Editor = ({handleChange}:{handleChange:React.FormEventHandler<HTMLTextAreaElement>}) => {
  return (
    <div className='editor-wrapper'>
      <div className='heading'>Editor</div>
      <textarea id="editor" onInput={handleChange} >
      </textarea >
    </div>
  )
}

export default Editor;