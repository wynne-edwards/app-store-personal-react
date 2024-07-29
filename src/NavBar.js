import React, { useState } from 'react';
import Modal from 'react-modal';
import meImg from './images/meimg.png';
import meCV from './images/WynneEdwards_CV.pdf';
import certificatePdf from './images/Certificate_NVIDIA_FundamentalsOfAcceleratedComputingWithCuda_WynneEdwards.pdf'; 
import './App.css'; // Make sure to import your CSS file

function NavBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveModal(null);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'profile':
        return <iframe src={meCV} className="cvIframe" title="Profile CV"></iframe>;
      case 'games':
        return <div>Games Content</div>; // Replace with actual content for games
      case 'apps':
        return <div>Apps Content</div>; // Replace with actual content for apps
      case 'movies':
        return <div>Movies Content</div>; // Replace with actual content for movies
      case 'books':
        return <iframe src={certificatePdf} className="cvIframe" title="Certificate"></iframe>;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="navLogoContainer">
          <div className="navLogo">
            <div className="logo">&lt;&nbsp;&gt;</div>
            <div className="logoName">
              <div className="firstname">Wynne Edwards</div>
            </div>
          </div>
        </div>
        <div className="navGenresContainer">
          <div className="navGenresOverall">
            <div className="navGenres" id="games" onClick={() => openModal('games')}>Games</div>
            <div className="navGenres" id="apps" onClick={() => openModal('apps')}>Apps</div>
            <div className="navGenres" id="movies" onClick={() => openModal('movies')}>Movies</div>
            <div className="navGenres" id="books" onClick={() => openModal('books')}>Books</div>
          </div>
        </div>
        <div className="navProfileContainer">
          <div className="navProfileOverall">
            <div className="navProfile" id="search">
              <svg id="profileIcons" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </div>
            <div className="navProfile" id="help">
              <svg id="profileIcons" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <line x1="12" y1="17" x2="12" y2="17.01" />
                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
              </svg>
            </div>
            <div className="navProfile" id="profile" onClick={() => openModal('profile')}>
              <img src={meImg} alt="Profile" height="35px" className="profile" />
            </div>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Profile Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {renderModalContent()}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default NavBar;
