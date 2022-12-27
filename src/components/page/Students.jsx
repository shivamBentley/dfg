/**
 * List out all type student Master-student , Ph.D-student with proper details.
 */

import {useEffect, useState} from "react";
import '../../styles/page/Students.scss'
import '../../styles/common/common.scss'
import { Link } from "react-router-dom";
import { getAllStudents } from "../../api";
import StudentTable from "../core/Table/StudentTable";

function Students() {

//stuType: student type - {Master's:false ,  or Ph.d: true;}
  const [stuData, setData] = useState([]);
  const [stuType, setStuType] = useState('Ph.d')
   
  const handleClick = (e) =>{
    setStuType(e.target.innerText)
  }

  useEffect(() => {
    setData(getAllStudents(stuType))
  }, [ stuType])
  

  return <div id="Students">
    <div className="student-container">
      <h1 className="page-title">Student Lists</h1>
      <div className="student-content">
        <div className="student-category">
          <ul>
            <li onClick={handleClick} style={ stuType == 'Ph.d' ? {backgroundColor:'gray', color:'white'}:{} } >Ph.d</li>
            <li onClick={handleClick}  style={ stuType == 'Masters' ? {backgroundColor:'gray', color:'white'}:{} }>Masters</li>
          </ul>
        </div>
        <div className="student-list">
          <StudentTable data={stuData} />
        </div>
        <div className="student-card">

        </div>
      </div>
    </div>
  </div>;
}

export default Students;
