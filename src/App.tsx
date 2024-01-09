import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import PostCreation from './pages/post-creation'
import PostDetail from './pages/post-detail'
import SignUpForm from './pages/sign-up/SignupForm'
import Search from './pages/search'
import PostEdit from './pages/post-edit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/sign-up"
          element={<SignUpForm />}
        />
        <Route
          path="/post-creation"
          element={<PostCreation />}
        />
        <Route
          path="/search"
          element={<Search />}
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
