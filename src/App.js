import { Route, Routes } from 'react-router-dom';
import './App.css';
import Protected from './components/Protected';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Edit from './components/Edit';

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
        <Route
          path='/signup'
          element={<Signup />}
        />
        <Route
          path='/edit/:id'
          element={<Edit />}
        />

      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
