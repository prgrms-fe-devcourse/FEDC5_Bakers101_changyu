import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import PostEdit from './pages/PostEdit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/post-detail/:id"
          element={<PostDetail />}
        />
        <Route
          path="/post-edit/:id"
          element={<PostEdit />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
