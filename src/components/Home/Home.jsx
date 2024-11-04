import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Header from './Header';
import Events from './Events/Events';
import StudentList from './StudentList/StudentList';

const Home = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/events' element={<Events/>} />
        <Route path='/list' element={<StudentList/>} />
      </Routes>
    </>
  )
}

export default Home
