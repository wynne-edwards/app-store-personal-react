import React, { useState } from 'react';
import smartsheetsImg from './images/smartsheets.png';
import googleSheetsImg from './images/googleSheets.png';
import googleCalendarImg from './images/googleCalendarLogo.png';
import googleSheetsMp4 from "./images/googlesheets.mp4";
import smartSheetsMp4 from "./images/smartsheets.mp4";
import googleCalendarBigImg from "./images/googleCalendar.png";
import rhodesLogo from "./images/rhodesLogo.png";
import ProjectModal from './ProjectModal';
import rhodesBP from './images/rhodesBP.png'
import rhodesData from './images/rhodesData.png'
import './App.css'; // Make sure to import the CSS file

const recommendedData = [
  {
    id: 1,
    name: 'Smartsheets to Sheets',
    category: 'Take information from smartsheets and move into the Google ecosystem',
    rating: 4.2,
    logo: smartsheetsImg,
    video: smartSheetsMp4,
    type: 'video'
  },
  {
    id: 2,
    name: 'Sheets to Calendar',
    category: 'Filter relevant data in google sheets and push to Google Calendar',
    rating: 4.2,
    logo: googleSheetsImg,
    video: googleSheetsMp4,
    type: 'video'
  },
  {
    id: 3,
    name: 'Dynamic Calendar',
    category: 'Dynamic calendar that pushes each individual\'s dates to their own calendar',
    rating: 4.2,
    logo: googleCalendarImg,
    video: googleCalendarBigImg,
    type: 'image'
  },
  {
    id: 4,
    name: 'Rhodes Maintenance Dataset',
    category: 'Performing Data Cleaning and Analytics on the Rhodes Maintenance Dataset to combine it with building plans.',
    rating: 4.2,
    logo: rhodesLogo,
    video: rhodesData,
    type: 'image'
  },
  {
    id: 5,
    name: 'Rhodes Building Plans',
    category: 'Extracting information from svgs and combining it with the maintenance dataset',
    rating: 4.2,
    logo: rhodesLogo,
    video: rhodesBP,
    type: 'image'
  },
  {
    id: 6,
    name: 'Rhodes Data Visualisation',
    category: 'Building a new visualisation tool to show data in a more user friendly way',
    rating: 4.2,
    logo: rhodesLogo,
    video: googleCalendarBigImg,
    type: 'image'
  },
];

function Recommended() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="recommendedContainer">
      <div className="recommendedOverall">
        <div className="recommendedForYou">Recommended for you</div>
        <div className="recommendedSubHeading">Breakdown of applications created by me</div>
        <div className="recommendedGrid">
          {recommendedData.map((project) => (
            <div key={project.id} className="recommendedItem" onClick={() => setSelectedProject(project)}>
              {project.type === 'video' ? (
                <video className="recommendedMedia" autoPlay muted loop>
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : (
                <img src={project.video} alt={project.name} className="recommendedMedia" />
              )}
              <div className="projectsHeaderGrouping">
                <div className="projectsImage">
                  <img src={project.logo} alt={project.name} className="recommendedMedia2" />
                </div>
                <div className="projectsHeaderGrouping2">
                  <div className="projectsHeader">{project.name}</div>
                  <div className="projectsGenre">{project.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onRequestClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
}

export default Recommended;
