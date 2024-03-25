import React from 'react'
import './CertificatePage.css'
function CertificatePage() {
  return (
    <div>
        <div className="container">
            <div className="heading">
                List of records
            </div>
            <div className='heading-underline'></div>
            <div className="section">
                <div className="section-heading">
                    <div>Institute ID</div>
                    <div>Record Name</div>
                    <div>Description</div>
                    <div>Created Time</div>
                </div>
                <div className="section-request">
                    <div>SEC1210</div>
                    <div>Academic Certificate</div>
                    <div>Verified the certificate of Student ID</div>
                    <div>Date</div>
                </div>
            </div>
        </div>
        <button className='container-btn'>Download</button>
    </div>
  )
}

export default CertificatePage