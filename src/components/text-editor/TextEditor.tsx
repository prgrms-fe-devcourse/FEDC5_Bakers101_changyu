import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type TextEditorType = {
  setText: React.Dispatch<React.SetStateAction<string>>
}

function TextEditor({ setText }: TextEditorType) {
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
      onChange={handleChange}
      modules={modules}
    />
  )
}

export default TextEditor
