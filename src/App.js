import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Intro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
