import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Recorder from './components/Recorder';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recorder />} />
      </Routes>
    </Router>
  );
}
