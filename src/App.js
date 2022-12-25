import { Route, Routes } from 'react-router-dom';
import './App.css';
import Protected from './components/Protected';
import Signin from './components/Signin';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Protected><Home /></Protected>}
        />
        <Route
          path='/signin'
          element={<Signin />}
        />

      </Routes>
    </div>
  );
}

export default App;
