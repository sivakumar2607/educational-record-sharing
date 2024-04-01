import React, { useState } from 'react';
import './UserLoginPage.css';
import CertificatePage from '../CertificatePage/CertificatePage';
import NewRecord from '../NewRecord/NewRecord';

function UserLoginPage() {
  const [showCertificatePage, setShowCertificatePage] = useState(false);
  const [showNewRecord, setShowNewRecord] = useState(false);

  const handleNewRecordClick = () => {
    setShowNewRecord(true);
  };

  const handleNewRequestClick = () => {
    setShowCertificatePage(false);
    setShowNewRecord(false);
  };

  const handleDownloadClick = () => {
    setShowCertificatePage(true);
    setShowNewRecord(false);
  };

  return (
    <div>
      <nav className='userLogin-navbar'>
        <div onClick={handleNewRequestClick}>New Request</div>
        <div onClick={handleDownloadClick}>Download</div>
      </nav>
      {!showCertificatePage && !showNewRecord ? (
        <div className='userLogin-container'>
          <div className='userLogin-section'>
            <div className='userLogin-btn' onClick={handleNewRecordClick}>
              <button>+</button>
            </div>
            <div>
              <div className='userLogin-btn-desc'>Create a New Request</div>
            </div>
          </div>
        </div>
      ) : (
        showNewRecord && <NewRecord />
      )}
      {showCertificatePage && <CertificatePage />}
    </div>
  );
}

export default UserLoginPage;
