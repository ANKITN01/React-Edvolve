import React from "react";
import Cards from "./Container/Cards/Card";
import UserExperiences from './UpcomingExperience.css';


const UpcomingExperience = () => {
  return (
    <div className="p-3 rounded border"  style={{backgroundColor:"white"}}>
    <ul className="p-0" style={{listStyle:"none",display:"flex"}}>
    <li ><h5>Your Upcoming Experiences</h5></li>
    <li style={{float:"left", marginLeft:"10px"}}><a>See All</a></li>
    </ul>
      <div className="grid">
        <div className="row" style={{}}>
          <div className="col-lg-4 col-sm-6 col-6">
            <Cards date={"16 February 2021, 9am"} data={"Courses Virtual Camps Community approved global mentors to choose"} nature={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsroyD3foIkE4D_vO2sM54a45Kyty1ZNVxww&usqp=CAU"}></Cards>
          </div>
          <div className="col-lg-4 col-sm-6 col-6">
          <Cards  date={"21 March 2021, 10pm"} data={"Tuitions Classes Courses Virtual Camps Community approved global mentors to choose from"} nature={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3dTZ07NNwqIRZRwrtRbRl13Zdy1NPSyLTsA&usqp=CAU"}></Cards>
          </div>
          <div id="section3" className="col-lg-4 d-xs-none d-lg-block d-sm-none col-sm-6">
          <Cards date={"21 December 2021, 6pm"} data={"University and college students, learn job-ready skills for free with EDVOLVE for Campus"}  nature="https://media.istockphoto.com/photos/portrait-of-pretty-indian-high-school-student-in-classroom-picture-id511353109?b=1&k=20&m=511353109&s=170667a&w=0&h=_8I1JZWss2no7cy1TMReR5nRk-2K-7GQqcNOzux6GDQ="></Cards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingExperience;
