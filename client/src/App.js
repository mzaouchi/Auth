import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorsC from './Components/ErrorsC';
import Home from './Components/Home';
import Login from './Components/Login';
import NavUser from './Components/NavUser';
import PrivateRoute from './Components/PrivateRoute';
import Profil from './Components/Profil';
import Register from './Components/Register';

function App() {
  return (
    <div>
      <NavUser/>
      <ErrorsC/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
