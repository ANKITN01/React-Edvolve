import React from 'react';
import newMentor from './newMentors.css'

const CardNewMentor = (props) => {
  return (
    <div >
      <div class="row" >
            <div class="">
                <div class="card mb-2">
                    <div class="row card-body">
                        <img class="col-sm-6 rounded" src={props.img} style={{width:"170px"}} alt="sans"/>
                        <div class="col-sm-6">
                          <h5 class="card-title">Ahila Pillai</h5>
                           <p class="card-text">Fitness enthusiast,and </p>
                           <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default CardNewMentor
