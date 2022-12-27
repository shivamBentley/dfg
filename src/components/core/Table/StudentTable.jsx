import React from 'react'
import '../../../styles/core/table/StudentTable.scss'
export default function StudentTable({data}) {

  return (
    <div className='student-table'>
      <table>
        <thead>
          <tr className='table-head'>
            <th>SL</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Status</th>
            <th>Passing Year</th>            
            <th>Thesis</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((student , index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td><img src={require('../../../db/images/sample-img.png')} width={60} alt="Not Available" /></td>
                <td>{student.name}</td>
                <td>{student.award}</td>
                <td>{student.year}</td>
                <td>{student.thesis}</td>
                <td>{student.status}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

