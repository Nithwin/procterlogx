import React from 'react'
import { CiSearch } from "react-icons/ci";
import './StudentList.css';

const StudentList = () => {
  let list = [];
  function many(){
    for (let i = 0; i < 10; i++) {
      list.push(<div className='card p-2'>
      <p className='h2'>Nithwin V M</p>
      <p className='h4'>22CS055</p>
      <p>8825957733</p>
      <button className='btn card-btn text-light'>Preview</button>
    </div>)

    }
    return list;
  }
  return (
    <section className='StudentList-main'>
      <div className='container-lg mt-3 d-flex justify-content-center flex-column'>
        <div className='d-flex justify-content-center'>
          <input type="search" name="" id="" className='form-control search me-2' />
          <CiSearch className='bg-dark text-light rounded-2' size={35}/>
        </div>
        <div className='card-student mt-3'>
          {
            many()
          }
        </div>
      </div>
    </section>
  )
}

export default StudentList
