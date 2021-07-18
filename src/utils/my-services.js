import React from 'react';

//font-awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faJs,
  faAndroid,
  faApple,
  faFigma,
  faReact,
  faNodeJs,
  faPhp,
} from '@fortawesome/free-brands-svg-icons';

import MyService from '../components/MyService';

const determineServiceIcons = (index) => {
  switch (index) {
    case 0:
      return [
        <FontAwesomeIcon icon={faHtml5} size="3x" className="fa-icon" />,
        <FontAwesomeIcon icon={faJs} size="3x" className="fa-icon" />,
      ];
    case 1:
      return [
        <FontAwesomeIcon icon={faAndroid} size="3x" className="fa-icon" />,
        <FontAwesomeIcon icon={faApple} size="3x" className="fa-icon" />,
      ];
    case 2:
      return [
        <FontAwesomeIcon icon={faFigma} size="3x" className="fa-icon" />,
        <FontAwesomeIcon icon={faReact} size="3x" className="fa-icon" />,
      ];
    case 3:
      return [
        <FontAwesomeIcon icon={faNodeJs} size="3x" className="fa-icon" />,
        <FontAwesomeIcon icon={faPhp} size="3x" className="fa-icon" />,
      ];
    default:
      return;
  }
};

const rawServices = [
  {
    title: `Web Development`,
    description: `I build all kinds of websites, from simple advertisement websites, to dynamic data centered sites, to analysis and 
        presentational sites, and pretty much any site you can imagine. I also deploy websites and set up hosting for my clients.`,
  },
  {
    title: `Mobile App Development`,
    description: `I build mobile based systems for carrying out all sorts of businesses, point of sale, google maps integrations, e-commerce etc., that can run both on android and iOS 
        operating systems. I also do app distribution services like app marketing and publishing to various stores (google play store, app store) `,
  },
  {
    title: `UI/UX Design`,
    description: `I develop interactive user interface prototypes, both as a process of development and as a separate service.`,
  },
  {
    title: `Backend Development`,
    description: `I write backend code for systems, using NodeJS runtime, and both SQL and NoSQL databases.`,
  },
];

const myServices = rawServices.map((service, index) => (
  <MyService service={service} icons={determineServiceIcons(index)} />
));

export default myServices;
