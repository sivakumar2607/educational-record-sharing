import React, { useState } from 'react';
import './UserListOfRequest.css';
import UpdateCertificate from '../UpdateCertificate/UpdateCertificate';

function UserListOfRequest() {
  const [requestData, setRequestData] = useState(false);

  const handleClick = () => {
    setRequestData(true);
  };

  return (
    <div>
      {!requestData ? (
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
            <button className='userlist-btn' onClick={handleClick}>Add</button>
          </div>
        </div>
      ) : (
        <UpdateCertificate />
      )}
    </div>
  );
}

export default UserListOfRequest;
