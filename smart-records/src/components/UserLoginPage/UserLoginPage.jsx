import React, { useState } from 'react';
import './UserLoginPage.css';
import CertificatePage from '../CertificatePage/CertificatePage';

function UserLoginPage() {
  const [showCertificatePage, setShowCertificatePage] = useState(false);

  const handleNewRequestClick = () => {
    setShowCertificatePage(false);
  };

  const handleDownloadClick = () => {
    setShowCertificatePage(true);
  };

  return (
    <div>
      <nav className='userLogin-navbar'>
        <div onClick={handleNewRequestClick}>New Request</div>
        <div onClick={handleDownloadClick}>Download</div>
      </nav>
      {!showCertificatePage && (
        <div className='userLogin-container'>
          <div className='userLogin-section'>
            <div className='userLogin-btn'><button>+</button></div>
            <div><div className='userLogin-btn-desc'>Create a New Request</div></div>
          </div>
        </div>
      )}
      {showCertificatePage && <CertificatePage />}
    </div>
  );
}

export default UserLoginPage;
