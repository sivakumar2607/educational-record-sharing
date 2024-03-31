import React from 'react'
import './UserLoginPage.css'
function UserLoginPage() {
  return (
    <div>
         <nav className='userLogin-navbar'>
                <div>New Request</div>
                <div>Download</div>
            </nav>
        <div className='userLogin-container'>
            <div className='userLogin-section'>
            <div className='userLogin-btn'><button>+</button></div>
            <div><div className='userLogin-btn-desc'>Create a New Request</div></div>
            </div>
        </div>
    </div>
  )
}

export default UserLoginPage