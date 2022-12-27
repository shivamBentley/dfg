/**
 * About author
 */


import React from "react";
import { personData } from "../../db/person";
import '../../styles/page/About.scss'
import '../../styles/common/common.scss'
function About() {
  return <div id="About">
    <div className="about-container">
      <div className="about-header">
        <h1 className="page-title">About</h1>
        <p className="about-text">{personData.aboutText.slice(0, Math.floor(personData.aboutText.length / 2 + 1))}</p>
      </div>
      <div className="about-content">
        <div>
          <img src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="Person-Image" sizes="" srcset="" />
        </div>
        <div className="about-subheading">
          <div>
            {/* <h2>Header for short description sub-heading </h2> */}
            {/* <p>Lorem, ipsum dolor sit amet coa non ipsam, incidunt itaque. consectetur adipisicing elit. Autem dolor sed cum inventore corporis sequi, reprehenderit rerum sint fugiat? Facere ratione est doloribus mollitia ab minima officia. Consequatur, quibusdam magni.</p> */}
          </div>
          <div className="bio-data">
            <div>
              <ul>
                <li>Birth : 1 May 1989 . </li>
                <li>website : www.google.com</li>
                <li>phone : +91 3448743873</li>
                <li>city : Kalyani, West Banga</li>
                <li>city : Kalyani, West Banga</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Age : 34</li>
                <li>Degree : Btech , Mtech , Phd</li>
                <li>PhEmail : parth@gmail.com</li>
                <li>Address : kalyani university</li>
                <li>city : Kalyani, West Banga</li>
              </ul>
            </div>
          </div>
          {/* <p>Lorem, ipsum dolor sit ais delectus suscipit cumque, facere quisquam eius eveniet velit ad veniam doloribus eaque repudiandae, cum totam facilis modi est eum maiores?</p> */}

        </div>
      </div>
      <div>
        <p className="about-text">{personData.aboutText.slice(Math.ceil(personData.aboutText.length / 2), personData.aboutText.length)}</p>
      </div>
    </div>
  </div>;
}

export default About;
