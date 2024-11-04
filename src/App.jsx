import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserLogin from './components/UserLogin/UserLogin';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ <UserLogin/>}/>
        <Route path='/' element={ <LandingPage/>}/>
        <Route path='/home/*' element={ <Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
