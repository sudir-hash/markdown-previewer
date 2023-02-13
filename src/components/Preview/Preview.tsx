import "./Preview.css"
import ReactMarkdown from 'react-markdown'

const Preview = ({markdown}:{markdown:string}) => {
  return (
        <div className="preview-wrapper">
            <div className='heading'>Preview</div>
            <ReactMarkdown
            className="preview"
            >{markdown}
            </ReactMarkdown>
        </div>
  )
}

export default Preview;