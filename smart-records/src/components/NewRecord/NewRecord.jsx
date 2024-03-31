import React from 'react'
import './NewRecord.css'
import UserLoginPage from '../UserLoginPage/UserLoginPage'
function NewRecord() {
  return (
    <div>
      <div className="newrecord-container">
        <div className='newrecord-left'>
          <div className="newrecord-heading">
            New Record
          </div>
          <form className='newrecord-inputs'>
            <label>
              Student ID
            </label>
            <input type='text' className='newrecord-studentid' placeholder='Enter the Student Id'/>
            <label>
              Institute Name
            </label>
            <input type='text' className='newrecord-instituteid' placeholder='Enter the Institute Id'/>
            <label>
              Record Name
            </label>
            <input type='text' className='newrecord-recordname' placeholder='Enter the Certificate Name'/>
           <label>
           Description
          </label>
          <textarea className='newrecord-textarea' placeholder='What is the Purpose of wanting the certificate?'/>
          <div className='newrecord-section-btn'>
              <button className='newrecord-btn'>Upload to DataBase</button>
            </div>
          </form>
        </div>
      </div>
      <UserLoginPage/>
    </div>
  )
}

export default NewRecord