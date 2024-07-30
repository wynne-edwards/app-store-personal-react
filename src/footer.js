import React from 'react';
import './App.css'; // Make sure to import your CSS file
import certificatePdf from './images/Certificate_NVIDIA_FundamentalsOfAcceleratedComputingWithCuda_WynneEdwards.pdf'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <ul>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Certificates</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li><a href="mailto:wynnee02@gmail.com"><u>Email</u></a></li>
            <li>Phone:</li>
            <li>0713610524</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
        </ul>
        <p>&copy; 2024 Wynne Edwards. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
