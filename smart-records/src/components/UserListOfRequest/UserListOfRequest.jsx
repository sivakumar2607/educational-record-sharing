import React from 'react'
import './UserListOfRequest.css'
function UserListOfRequest() {
  return (
    <div>
     <div className="userlist-heading">
      List of Record Requests
     </div>
     <div className='heading-underline'></div>
     <div className='userlist-container'>
      <div className='userlist-section-heading'>
        <div>Student ID</div>
        <div>Record Name</div>
        <div>Description</div>
        <div>Created Timestamp</div>
      </div>
      <div className="userlist-section-content">
        <div>17IT270</div>
        <div>Academic certificate</div>
        <div>Required for scholarship application</div>
        <div>Date</div>
      </div>
      </div>
      <div className='userlist-section-btn'>
        <button className='userlist-btn'>Add</button>
      </div>
    </div>
  )
}

export default UserListOfRequest