import React from 'react'
import Calender from './Calender';
import TotalPatients from './TotalPatients';

const Appointments = () => {
  return (
    <div className='appointment_wrapper'>

      <div><Calender/></div>
      <div>
        <TotalPatients/>
      </div>

    </div>
    
  )
}

export default Appointments;