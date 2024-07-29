import React, { useState } from 'react';
import './App.css';
import levelUpMerchLogo from './images/levelUpMerchLogo.png';
import EmeraldConsultingNewLogo from './images/EmeraldConsultingNewLogo.png';
import ScrimBotimage from './images/ScrimBotimage.jpg';
import javaImage from './images/java.png';
import DiggitLogo from './images/diggit.png';
import ComingSoonLogo from './images/comingSoon.png';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 1,
    name: 'Level Up Merch',
    category: 'Merch',
    rating: 4.0,
    logo: levelUpMerchLogo,
    desc: 'Level Up Merch is a merch store that sells clothing and accessories for gamers and streamers. I was requested to create a website template that would allow the client to easily add new products and manage their inventory. Although it was not adopted it was a great way to learn new skills.',
    github: 'https://github.com/wynne-edwards/levelupmerch',
    link: '/projects/levelUpMerch/index.html'
  },
  {
    id: 2,
    name: 'Emerald Consulting',
    category: 'Consulting',
    rating: 3.9,
    logo: EmeraldConsultingNewLogo,
    desc: 'Emerald Consulting is a consulting firm that implements software solutions for Elite3E. I was tasked with creating a website as a proof of concept for a more modern look. It was not meant to be adopted but it was however used as inspiration for future projects.',
    github: 'https://github.com/wynne-edwards/emerald-consulting',
    link: '/projects/emeraldConsulting/index3.html'
  },
  {
    id: 3,
    name: 'Scrim Bot',
    category: 'Discord Bot',
    rating: 3.0,
    logo: ScrimBotimage,
    desc: 'Scrim Bot is a discord bot that allows users to create and manage scrimages for Rocket League teams. This was a personal project in an attempt to improve the local Rocket League community. This was completed but never gained enough traction to be widely used.',
    github: 'https://github.com/wynne-edwards/ScrimBot'
  },
  {
    id: 4,
    name: 'CV',
    category: 'Personal Website',
    rating: 4.0,
    logo: javaImage,
    desc: 'This is the website that you are currently looking at, it was used to showcase my skills and projects. It was created using React and is hosted via AWS. It was a great way to learn new skills and showcase my projects.',
    github: 'app.js'
  },
  {
    id: 5,
    name: 'Diggit',
    category: 'Hamilton Hermits',
    rating: 4.5,
    logo: DiggitLogo,
    desc: 'Diggit is a Digs rating website that allows users to rate and review different digs withint South Africa. This was a group project that was created for a university assignment. Me and my 4 team-mates competed and achieved 2nd place along with a cash prize for its performance. The website link will link to a Figma document as the website requires a backend database and this is being hosted statically.',
    github: 'https://github.com/HamiltonHermits/Diggit/tree/FixingTHisTrashCode',
    link: 'https://www.figma.com/design/LsY9XY1kwlCVqv1FL6McEE/DiggIt_v2?node-id=89-813&t=IddqOngSrDlbrwtE-1'
  },
  {
    id: 6,
    name: 'Coming Soon',
    category: 'Coming Soon',
    rating: 0.0,
    logo: ComingSoonLogo,
  },
];

function TopCharts() {
  const [sortedProjects, setSortedProjects] = useState(projectsData);
  const [activeButton, setActiveButton] = useState('Top Grossing');
  const [selectedProject, setSelectedProject] = useState(null);

  const sortProjects = (criteria) => {
    setActiveButton(criteria);
    const sorted = [...sortedProjects];
    if (criteria === 'Top Rated') {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (criteria === 'Top Grossing') {
      sorted.sort((a, b) => a.id - b.id);
    } else if (criteria === 'Top Down') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setSortedProjects(sorted);
  };

  return (
    <div className="TopCharts chartContainer" id="test">
      <div className="chartOverall">
        <div className="topChart">Top charts</div>
        <div className="selectorChart">
          {['Top Rated', 'Top Grossing', 'Top Down'].map((criteria) => (
            <div key={criteria} className={`chartButtons ${activeButton === criteria ? 'active' : ''}`} onClick={() => sortProjects(criteria)}>
              <button>
                <p className="chartText">{criteria}</p>
              </button>
            </div>
          ))}
        </div>
        <div className="projectsGrid">
          {sortedProjects.map((project, index) => (
            <div key={project.id} className="gridItem" onClick={() => setSelectedProject(project)}>
              <div className="projectsGrouping">
                <div className="projectsNumber">{index + 1}</div>
                <div className="projectsImage"><img src={project.logo} alt={project.name} /></div>
              </div>
              <div className="projectsGrouping2">
                <div className="projectsHeader">{project.name}</div>
                <div className="projectsGenre">{project.category}</div>
                <div className="projectsRating">{project.rating}
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24" height="10" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
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

export default TopCharts;
