import React from 'react';
import './Display.css';
import UpcomingExperience from '../UpcomingExperience';
import UpcomingCourse from './upcoming-Course/UpcomingCourse'; 

const Display = () => {
  return (
    <div>
    <div className='container'>
    {/* Main Content */}
    <div className='mt-4'>
      <h3>Welcome back,Vinay</h3>
      <p>How are we Edvolving today?</p>
      </div>

    {/* Upcoming Experience */}
    <div className='grid'>
        <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-12'>
                <UpcomingExperience></UpcomingExperience>

                <div className='row'>
                    <div className='col-12'>
                <UpcomingCourse></UpcomingCourse>

                    </div>
                </div>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12 border ' style={{height:'15rem'}} >
                <h4>Your Stats</h4>
                <div className='row p-3'>
                    <div className='col-md-4 border p-3' >
                        <h5>12</h5>
                        <p>Experience in this week</p>
                    </div>
                    <div className='col-md-4 border p-3'>
                    <h5>12</h5>
                        <p>Experience in this week</p>
                    </div>
                    <div className='col-md-4 border p-3'>
                    <h5>12</h5>
                        <p>Experience in this week</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

      </div>
    </div>
  )
}

export default Display;
