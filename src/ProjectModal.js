import React from 'react';
import Modal from 'react-modal';

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Modal"
      className="modal2"
      overlayClassName="overlay2"
    >
      <h2>{project.name}</h2>
      <img src={project.logo} alt={project.name} width="100px" />
      <p className='projectDesc'>{project.desc}</p>
      <div className="ModalButtons">
        <a href={project.github}><button>View GitHub</button></a>
        <a href={project.link}><button>View Website</button></a>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ProjectModal;
