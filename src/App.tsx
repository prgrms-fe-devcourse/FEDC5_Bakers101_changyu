import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PostCreation from './pages/PostCreation';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/postcreation" element={<PostCreation/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
