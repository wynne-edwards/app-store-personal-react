import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './reset.css';
import NavBar from './NavBar';
import ResolutionButtons from './ResolutionButtons';
import TopCharts from './TopCharts';
import Recommended from './Recommended';
import FooterN from './FooterNew';

function App() {
  const [mediaClass, setMediaClass] = useState('media-pc');

  return (
    <Router>
      <div className={`App ${mediaClass}`}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ResolutionButtons setMediaClass={setMediaClass} />
                <TopCharts />
                <Recommended />
              </>
            }
          />
          <Route path="/projects/levelUpMerch" element={<ExternalLink url={`${process.env.PUBLIC_URL}/projects/levelUpMerch/index.html`} />} />
          <Route path="/projects/emeraldConsulting" element={<ExternalLink url={`${process.env.PUBLIC_URL}/projects/emeraldConsulting/index3.html`} />} />
          <Route path="/projects/scrimBot" element={<ExternalLink url={`${process.env.PUBLIC_URL}/projects/scrimBot/index.html`} />} />
          <Route path="/projects/diggit" element={<ExternalLink url="https://www.figma.com/design/LsY9XY1kwlCVqv1FL6McEE/DiggIt_v2?node-id=89-813&t=IddqOngSrDlbrwtE-1" />} />
        </Routes>
        <FooterN /> {/* Add Footer */}
      </div>
    </Router>
  );
}

const ExternalLink = ({ url }) => {
  window.location.href = url;
  return null;
};

export default App;
