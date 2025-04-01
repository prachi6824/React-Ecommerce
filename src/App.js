import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Products from './pages/Products/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={< Dashboard />} />
        <Route path = "/products" element={< Products />} />
      </Routes>
    </Router>
  );
}

export default App;
