import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import Navigation from "./pages/Navigation/Navigation";
import Homepage from './pages/Home/Homepage';
import TypingGame from './pages/TypingGame/TypingGame';
import NoPage from "./pages/NoPage/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="typing-game" element={<TypingGame />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  );
