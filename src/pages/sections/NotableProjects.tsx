// UI Components
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

// Images
import notable1Image from '../../assets/images/notable-projects/notable_img_01.jpg';
import notable2Image from '../../assets/images/notable-projects/notable_img_02.jpg';
import notable3Image from '../../assets/images/notable-projects/notable_img_03.jpg';
import notable4Image from '../../assets/images/notable-projects/notable_img_04.jpg';

// Data
import notableProjectsData from '../../data/notable-projects.json';

// ------------------

function  NotableProjects() {

  return (
    <section id="about" className="section">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <h2 className="entry-title">{notableProjectsData.title}</h2>
        </div>

        <div className="content-wrapper">
        <div className="image-grid">
            <div className="image-container">
              <img src={notable1Image} alt="Notable Project 1" />
              <div className="hover-text">{notableProjectsData.projects[0].description}</div>
            </div>
            <div className="image-container">
              <img src={notable2Image} alt="Notable Project 2" />
              <div className="hover-text">{notableProjectsData.projects[1].description}</div>
            </div>
            <div className="image-container">
              <img src={notable3Image} alt="Notable Project 3" />
              <div className="hover-text">{notableProjectsData.projects[2].description}</div>
            </div>
            <div className="image-container">
              <img src={notable4Image} alt="Notable Project 4" />
              <div className="hover-text">{notableProjectsData.projects[3].description}</div>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default  NotableProjects;
