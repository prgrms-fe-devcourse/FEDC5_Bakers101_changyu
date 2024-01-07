import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type TextEditorType = {
  className?: string
  setText: React.Dispatch<React.SetStateAction<string>>
  value?: string
}

function TextEditor({ setText, value, className }: TextEditorType) {
  const modules = {
    toolbar: {
      container: [
        ['image'],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'underline']
      ]
    }
  }

  function handleCange(editor) {
    console.log(className)
    setText(editor)
  }

  return (
    <div className={className}>
      <ReactQuill
        className="h-full w-full"
        value={value}
        onChange={handleCange}
        modules={modules}
      />
    </div>
  )
}

export default TextEditor
