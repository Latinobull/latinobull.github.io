import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
function App() {
  // const base = window.location.host;
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/main" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
