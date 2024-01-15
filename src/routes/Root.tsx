import { Route, Routes } from 'react-router-dom'
import LoginForm from '../pages/login/LoginForm'
import Home from '../pages/home'
import SignUpForm from '../pages/sign-up/SignupForm'
import PostCreation from '../pages/post-creation'
import Search from '../pages/search'
import Profile from '../pages/profile'
import PostDetail from '../pages/post-detail'
import PostEdit from '../pages/post-edit'
import AuthRouteModal from '../components/auth-route-modal'
import { useAuthModalStore } from '../stores/useAuthModalStore'

function Root() {
  const { isOpen, closeModal } = useAuthModalStore()
  return (
    <>
      {isOpen && <AuthRouteModal closeModal={closeModal} />}
      <Routes>
        <Route
          path="/"
          element={<LoginForm />}
        />
        <Route
          path="/login"
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
      </Routes>
    </>
  )
}

export default Root
