import React from 'react';
import './Display.css';
import UpcomingExperience from '../UpcomingExperience';
import UpcomingCourse from './upcoming-Course/UpcomingCourse'; 
import NewMentorCard from './newMentors/CardNewMentor';

const Display = () => {
  return (
    <div>
    <div className='container'>
    {/* Main Content */}
    <div>
    <div className='mt-3'>
      <h3 m-3>Welcome back,Vinay</h3>
      <p>How are we Edvolving today?</p>
      </div>
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
            <div className='col-lg-5 col-md-6 col-sm-12  ' >

            {/* Your stats */}
            <div className='border mb-3'  style={{backgroundColor:"white"}}>
                <h4 className='p-3'>Your Stats</h4>
                <div className='row p-3 '>
                    <div className='col-md-4 border p-3' >
                        <h5>12</h5>
                        <p>Experience in this week</p>
                    </div>
                    <div className='col-md-4  border p-3'>
                    <h5>24</h5>
                        <p>Experience Overall</p>
                    </div>
                    <div className='col-md-4 border p-3'>
                    <h5>12</h5>
                        <p>Course this Week</p>
                    </div>
                </div>
               


              {/* New Mentor */}

              </div>
              <div className='row  mt-4 p-4' style={{backgroundColor:"white"}}>
                <h4>New mentor on Evolve</h4>
                <NewMentorCard name={"BHARAT SINGH"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLd5c3sLbFxBXh2WwyJVEqzmsF3KUofPdsLQ&usqp=CAU"}></NewMentorCard>
                <NewMentorCard name={"GOVIND BHATAD"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCVofjZHnlLVBgTi0ND9ogAo7XWQ7siLEUg&usqp=CAU"}></NewMentorCard>
                <NewMentorCard name={"ADITYA PAWAR"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU"}></NewMentorCard>
                
              </div> 


            </div>
        </div>
    </div>

      </div>
    </div>
  )
}

export default Display;
