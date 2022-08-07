import React from "react";
// import Cards from 'react-bootstrap/Card';
import Cards from "../Cards/Card";
import UpcomingCourses from './UpcomingCourse.css'

const UpcomingCourse = () => {
  return (
    <div className="border rounded p-3" style={{marginTop:"10px",backgroundColor:"white"}}>
    <ul className="p-0" style={{listStyle:"none",display:"flex"}}>
    <li ><h5>Your Upcoming Classes of Courses</h5></li>
    <li style={{float:"left", marginLeft:"10px"}}><a>See All</a></li>
    </ul>
      <div className="grid">
        <div className="row" style={{}}>
          <div className="col-lg-4 col-sm-6 col-6">
            <Cards date={"21 December 2021, 6pm"} data={"University and college students, learn job-ready skills for free with EDVOLVE for Campus"} nature={"https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320"}></Cards>
          </div>
          <div className="col-lg-4 col-sm-6 col-6">
          <Cards date={"21 March 2021, 10pm"} data={"Tuitions Classes Courses Virtual Camps Community approved global mentors to choose from"} nature={"https://img.freepik.com/premium-photo/beautiful-moraine-lake-banff-national-park-alberta-canada_131985-98.jpg?w=2000"}></Cards>
          </div>
          <div id="section3" className="col-lg-4 col-sm-6 col-6">
          <Cards date={"16 February 2021, 9am"} data={"Classes Courses Virtual Camps Community approved global mentors to choose"} nature="https://www.jefferson.edu/content/academic/academics/colleges-schools-institutes/health-professions/departments-programs/health-sciences/_jcr_content/root/article/responsivegrid/text_and_image_1267957671/image.img.jpg"></Cards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCourse;
