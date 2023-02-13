import { useState,useRef, useEffect } from 'react'
import './App.css'
import Preview from './components/Preview/Preview'
import Editor from './components/Editor/Editor'




function App() {
  const [text, setText] = useState('')
  return (
    <div className="App">
      
      <Editor
        handleChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
      />
      <Preview
        markdown={text}
      />

    </div>
  )
}

export default App
