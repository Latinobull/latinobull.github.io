import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/main" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
