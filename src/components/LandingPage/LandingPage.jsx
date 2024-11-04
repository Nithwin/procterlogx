import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <section className='landingPage'>
      <div className="header">
        <div className="header-title">
          <div className=''>
          </div>
          <div className='ms-4'>
            <p className='h3'>NANDHA ENGINEERING COLLEGE</p>
            <p className='h5'>(AUTONOMOUS)</p>
          </div>
        </div>
      </div>
      <div className='landingPageContent'>
        <p className='h2 text-center text-green' >Proctorlogx</p>
        <p className='langar-regular text-center text-green landingPage-welcome'>Welcome</p>

        <div>
          <Link to={'/login'} className='btn mx-3 landingPage-btn fw-bold'>User</Link>
          <Link to={'/login'} className='btn mx-3 landingPage-btn fw-bold'>Admin</Link>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
