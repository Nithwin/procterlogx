import React from 'react'
import Image from '/src/asserts/image.png';
import './UserLogin.css'
const UserLogin = () => {
  return (
    <section className='p-5 loginPage'>
      <div className='bg-light p-3 rounded-4 d-flex justify-content-between'>
        <section className='logo me-4 w-50'>
          <img src={Image} alt="image" className='logoImage' />
        </section>
        <section className='logo formOutLine w-50 rounded-4'>
          <form action="" className='loginForm'>
            <p className='h4 fw-bold text-center'>Sign In</p>
            <div className=''>
              <label htmlFor="email" className='form-label'>Email</label>
              <input type="email" name="email" id="email" className='form-control ' />
            </div>
            <div className=''>
              <label htmlFor="password" className='form-label'>Password</label>
              <input type="password" name="password" id="password" className='form-control ' />
            </div>
            <div className='d-flex justify-content-center mt-5'>
              <button className='btn login-btn text-light fw-semibold' >Login</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  )
}

export default UserLogin
