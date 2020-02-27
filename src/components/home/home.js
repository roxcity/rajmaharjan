import React from "react";

import "./home.scss";

function Home(props) {
  return (
    <div className="home_page">
      <div className="personal">
        <div className="picture">
          <img src={"raj.jpeg"} alt="raj" />
        </div>
        <div className="info">
          <p className="name">Raj Krishna Maharjan</p>
          <p className="title">
            <span>Software Engineer</span> at YOUNGINNOVATIONS
          </p>
        </div>
      </div>
      <div className="links">
        <p><a href="https://github.com/roxcity" target="_blank" rel="noopener noreferrer">Github</a></p>
        <p><a href="https://www.linkedin.com/in/rajmaharjan" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><a href="https://medium.com/@Roxcity" target="_blank" rel="noopener noreferrer">Medium</a></p>
        <p><a href="https://twitter.com/esportsraj" target="_blank" rel="noopener noreferrer">Twitter</a></p>
      </div>
    </div>
  );
}

Home.propTypes = {};
export default Home;
