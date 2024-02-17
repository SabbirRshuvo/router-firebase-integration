
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Header from './Components/Header/Header';
import Registar from './Components/Registar/Registar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/registar' element={<Registar></Registar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
