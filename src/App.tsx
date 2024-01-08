import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import PostCreation from './pages/post-creation'
import Profile from './pages/profile'
import PostDetail from './pages/post-detail'
import LoginForm from './pages/login/LoginForm'
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
          path="/login"
          element={<LoginForm />}
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
          path="/profile/:id"
          element={<Profile />}
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
        <Route
          path="/postcreation"
          element={<PostCreation />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
