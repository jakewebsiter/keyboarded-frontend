import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path='/' element={<p className='text-3xl'>Hello!</p>} />
          <Route path='/bob' element={<p className='text-3xl'>Bob</p>} />
          <Route path='/yeah' element={<p className='text-3xl'>Yeah</p>} />
        </Routes>
      </Navbar>
    </Router>
  );
}
export default App;
