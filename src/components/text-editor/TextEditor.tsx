import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type TextEditorType = {
  setText: React.Dispatch<React.SetStateAction<string>>
  value?: string
}

function TextEditor({ setText, value }: TextEditorType) {
  const modules = {
    toolbar: {
      container: [
        ['image'],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'underline']
      ]
    }
  }

  function handleChange(editor) {
    setText(editor)
  }

  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      modules={modules}
    />
  )
}

export default TextEditor
