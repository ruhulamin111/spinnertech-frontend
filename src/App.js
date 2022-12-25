import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './components/Signin';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sigin' element={<Signin />} />

      </Routes>
    </div>
  );
}

export default App;
