import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/PostDetail/:id" element={<PostDetail/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
