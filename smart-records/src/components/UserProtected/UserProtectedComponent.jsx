import React from 'react'
import './UserProtectedComponent.css'
import UserListOfRequest from '../UserListOfRequest/UserListOfRequest'
function UserProtectedComponent() {
  return (
    <div className='UserProtected-container'>
      <h1 className='UserProtected-heading'>Admin Page</h1>
      <div>
       <UserListOfRequest/>
      </div>
    </div>
  )
}

export default UserProtectedComponent