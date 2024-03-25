import React from 'react'
import './NewRecord.css'
function NewRecord() {
  return (
    <div>
      <div className="newrecord-container">
        <div className='newrecord-left'>
          <div className="newrecord-left-heading">
            New Record
          </div>
          <form className='newrecord-inputs'>
            <label>
              Student ID
            </label>
            <input type='text' className='newrecord-studentid'/>
            <label>
              Institute Name
            </label>
            <input type='text' className='newrecord-instituteid'/>
            <label>
              Record Name
            </label>
            <input type='text' className='newrecord-recordname'/>
            <div className='newrecord-section-btn'>
              <button className='newrecord-btn'>Upload to DataBase</button>
            </div>
          </form>
        </div>
        <div className="newrecord-right">
          <div className='newrecord-right-heading'>
            Enter the Description
          </div>
          <textarea className='newrecord-right-textarea'/>
        </div>
      </div>
    </div>
  )
}

export default NewRecord