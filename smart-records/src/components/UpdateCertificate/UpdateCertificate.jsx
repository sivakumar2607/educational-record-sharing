import React from 'react'
import './UpdateCertificate.css'
function UpdateCertificate() {
  return (
    <div>
      <div className='upload-container'>
        <div className='upload-heading'>Upload Education Reports</div>
        <div className='heading-underline'></div>
        <form className="myForm">
          <label>INSTITUTE ID</label>
          <input type='text' className='upload-institute-id'/>
          <label>STUDENT ID</label>
          <input type='text' className='upload-student-id' />
          <label>RECORD NAME</label>
          <input type='text' className='upload-record-name' />
          <label>DESCRIPTION</label>
          <input type='text' className='upload-description' />
          <label>DOCUMENTS (UPLOAD IN .ZIP OR .RAR FORMAT)</label>
          <input type='file' className='upload-documents'/>
          <label>TIMESTAMP</label>
          <input type='text' className='upload-timestamp'/>
        </form>
        <div className="update-section-btn">
        <button className='upload-btn'>Upload To Database</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateCertificate