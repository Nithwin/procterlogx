import React from 'react'
import './Events.css';
const Events = () => {
  return (
    <section className='events d-flex justify-content-center align-items-center'>
      <div className='container-fluid container-lg'>
        <form action="" className='eventForms'>
          <div className='event-details'>
            <div className='px-5'>
              <label htmlFor="college-name" className='form-label'>College Name</label>
              <input type="text" className='form-control' name='college-name' id='college-name' />
            </div>
            <div className='px-5'>
              <label htmlFor="tech-name" className='form-label'>Tech Event Name</label>
              <input type="text" className='form-control' name='tech-name' id='tech-name' />
            </div>
            <div className='px-5'>
              <label htmlFor="nonTech-name" className='form-label'>Non Tech Name</label>
              <input type="text" className='form-control' name='nonTech-name' id='nonTech-name' />
            </div>
            <div className='px-5'>
              <label htmlFor="college-address" className='form-label'>College Address</label>
              <input type="text" className='form-control' name='college-address' id='college-address' />
            </div>
            <div className='px-5'>
              <label htmlFor="event-date" className='form-label'>College Address</label>
              <input type="date" className='form-control' name='event-date' id='event-date' />
            </div>
            <div className='px-5'>
              <label htmlFor="drive-link" className='form-label'>Drive Link</label>
              <input type="text" className='form-control' name='drive-link' id='drive-link' />
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='btn event-btn text-light'> Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Events
