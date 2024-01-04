import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PostCreation from './pages/PostCreation';
import Profile from '@/pages/profile'
        
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/postcreation" element={<PostCreation/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
  </BrowserRouter>
  );
}
        
export default App
