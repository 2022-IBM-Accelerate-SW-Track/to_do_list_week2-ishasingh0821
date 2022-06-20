import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Isha Singh</div>
            <div className="brief_description">
            I'm a rising junior attending Virginia Tech, studying Computational Modeling and Data Analytics.
            Outside of work, I enjoy painting, dance, fashion, and health/fitness!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
