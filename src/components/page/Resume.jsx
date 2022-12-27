/**
 * Resume
 */
import React from "react";
import ResumeCard from "../core/cards/ResumeCard";
import { CvData } from "../../db/CvData";
import '../../styles/page/Resume.scss'
import '../../styles/common/common.scss'

function Resume() {
  return <div id="Resume">
    <div className="resume-container">
      <h1 className="page-title">Resume</h1>
      <div className="resume-content">
        {
          CvData.map((data) => (
            <div>
              <ResumeCard
                title={data.title}
                heading={data.heading}
                date={data.date}
                address={data.address}
                items={data.items}
              />
              
            </div>
          ))

        }</div>
    </div>
  </div>;
}

export default Resume;
