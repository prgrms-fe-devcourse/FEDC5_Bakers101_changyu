import ReactQuill from 'react-quill'

import { useState, useEffect } from 'react'
import 'react-quill/dist/quill.snow.css'

type TextEditorType = {
  className?: string
  setText: React.Dispatch<React.SetStateAction<string>>
  initialValue?: string
}

function TextEditor({ setText, initialValue, className }: TextEditorType) {
  const [editorValue, setEditorValue] = useState('')

  const modules = {
    toolbar: {
      container: [
        ['image'],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'underline']
      ]
    }
  }

  useEffect(() => {
    if (initialValue) {
      setEditorValue(initialValue)
    }
  }, [initialValue])

  function handleCange(inputText: string) {
    setEditorValue(inputText)
    setText(inputText)
  }

  return (
    <div className={className}>
      <ReactQuill
        className="h-full w-full"
        value={editorValue}
        onChange={handleCange}
        modules={modules}
      />
    </div>
  )
}

export default TextEditor
