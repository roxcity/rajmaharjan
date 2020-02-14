import React from "react";

import './home.scss'

function Home(props) {
  return (
    <div className="home_page">
      <div className="left_panel">
        <div className="profile">
          <img src={"raj.jpeg"} alt="raj" />
            <p className="name">Raj Krishna Maharjan</p>
            <p className="title">Software Engineer </p>
            <p className="company">YoungInnovations Pvt. Ltd.</p>
        </div>
        <div className="links">
          <p>HOME</p>
          <p>ABOUT</p>
          <p>SERVICES</p>
          <p>SKILLS</p>
          <p>EDUCATION</p>
          <p>EXPERIENCE</p>
          <p>WORK</p>
          <p>BLOG</p>
          <p>CONTACT</p>
        </div>
        <div className="footer">
        &#169; CopyRight 2020, All right reserved.
        </div>
      </div>
      <div className="right_panel">
        {/* <img className="cover-photo" src="raj_wall.jpg" alt="" /> */}
      </div>
    </div>
  );
}

Home.propTypes = {};
export default Home;
