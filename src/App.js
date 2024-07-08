import '@popperjs/core/';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
