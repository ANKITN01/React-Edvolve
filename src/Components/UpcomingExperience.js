import React from "react";
import Cards from "./Container/Cards/Card";


const UpcomingExperience = () => {
  return (
    <div style={{border:"1px solid"}}>
    <ul style={{listStyle:"none",display:"flex"}}>
    <li>Your Upcoming Experiences</li>
    <li style={{float:"left", marginLeft:"10px"}}><a>See All</a></li>
    </ul>
      <div className="grid">
        <div className="row" style={{}}>
          <div className="col-lg-4 col-sm-6 col-6">
            <Cards nature={"https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320"}></Cards>
          </div>
          <div className="col-lg-4 col-sm-6 col-6">
          <Cards nature={"https://img.freepik.com/premium-photo/beautiful-moraine-lake-banff-national-park-alberta-canada_131985-98.jpg?w=2000"}></Cards>
          </div>
          <div className="col-lg-4 col-sm-6 col-6">
          <Cards nature="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png"></Cards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingExperience;
