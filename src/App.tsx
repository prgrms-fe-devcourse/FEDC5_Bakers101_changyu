import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import PostCreation from './pages/post-creation'
import Profile from './pages/profile'
import LoginForm from './pages/login/LoginForm'
import SignUpForm from './pages/sign-up/SignupForm'
import Search from './pages/search'

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
          path="/postcreation"
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
