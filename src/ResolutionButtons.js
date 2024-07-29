import React, { useState } from 'react';
import './App.css';

function ResolutionButtons({ setMediaClass }) {
  const [activeButton, setActiveButton] = useState('PC');

  const handleButtonClick = (button, mediaClass) => {
    setActiveButton(button);
    setMediaClass(mediaClass);
  };

  return (
    <div className="ResolutionButtons resolutionContainer">
      <div className="resButtonsOverall">
        <div
          className={`resButtons ${activeButton === 'PC' ? 'active' : ''}`}
          onClick={() => handleButtonClick('PC', 'media-pc')}
        >
          <button>
            <p className="resText">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-laptop" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="3" y1="19" x2="21" y2="19" />
                <rect x="5" y="6" width="14" height="10" rx="1" />
              </svg>
              PC
            </p>
          </button>
        </div>
        <div
          className={`resButtons ${activeButton === 'Tablet' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Tablet', 'media-tablet')}
        >
          <button>
            <p className="resText">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tablet" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="5" y="3" width="14" height="18" rx="1" />
                <circle cx="12" cy="17" r="1" />
              </svg>
              Tablet
            </p>
          </button>
        </div>
        <div
          className={`resButtons ${activeButton === 'Phone' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Phone', 'media-phone')}
        >
          <button>
            <p className="resText">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="6" y="3" width="12" height="18" rx="2" />
                <line x1="11" y1="4" x2="13" y2="4" />
                <line x1="12" y1="17" x2="12" y2="17.01" />
              </svg>
              Phone
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResolutionButtons;
