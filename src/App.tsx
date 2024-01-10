import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthModalStore } from '@/stores/useAuthModalStore'
import AuthRouteModal from './components/to-auth-route-modal'

import Home from './pages/home'
import PostCreation from './pages/post-creation'
import PostDetail from './pages/post-detail'
import SignUpForm from './pages/sign-up/SignupForm'
import Search from './pages/search'
import PostEdit from './pages/post-edit'
import Profile from './pages/profile'
import LoginForm from './pages/login/LoginForm'

function App() {
  const {isOpen,closeModal}= useAuthModalStore()
  
  return (
    <BrowserRouter>
      {isOpen &&  <AuthRouteModal closeModal={closeModal}/>  }
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
          path="/search"
          element={<Search />}
        />
        <Route
          path="/profile/:id"
          element={<Profile />}
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
