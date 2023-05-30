import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./css/app.css";

function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/" element={<p>Hello!</p>} />
          <Route path="/bob" element={<p>Bob</p>} />
          <Route path="/yeah" element={<p>Yeah</p>} />
        </Routes>
      </Navbar>
    </Router>
  );
}
export default App;
