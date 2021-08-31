import Institution from '../components/Institution';

const rawExperiences = [
  {
    date: `AUGUST 2021 - PRESENT`,
    institution: `GroupApp`,
    body: `GroupApp is a platform for online communities and content creators. Working remotely as a Frontend developer,
     I help with adding new features to the GroupApp web app.
    I corporate with my teammates to ensure a smooth user experience for GroupApp users.`,
    linkText: `VISIT GROUPAPP HOME PAGE`,
    link: `https://group.app`,
  },
  {
    date: `JUNE 2021 - PRESENT`,
    institution: `Upwork`,
    body: `I receive either one time or long term projects from clients as a freelancer. I 
        also do work on audio transcription.`,
    linkText: `VISIT MY UPWORK PROFILE`,
    link: `https://www.upwork.com/freelancers/~016190fe020ab1c06a`,
  },
  {
    date: `AUGUST 2020 - AUGUST 2021`,
    institution: `Iconic King`,
    body: `Iconic King is a software company that majors on betting systems and internet games. I work as
        a part time software developer. I help develop and maintain backend code for their main products.`,
    linkText: `SEE OFFICIAL ICONIC KING WEBSITE`,
    link: `https://iconicking.com/`,
  },
  {
    date: `SEPTEMBER 2019 - DECEMBER 2019`,
    institution: `Aura Safira Consulting`,
    body: `ASC is a software company that majors on health systems. I worked as a developer intern.
         I worked on a few projects while at ASC, including contributing to the implementation of cStockV2,
         which is a mobile app that helps manage the distribution of drugs by community health units. We
         used ReactJS, React Native and DHIS2 as our major tech stack. I helped in code maintenance and testing.`,
    linkText: `SEE OFFICIAL ASC WEBSITE`,
    link: `https://aurasafira.co.ke/`,
  },
];

const experiences = rawExperiences.map((experience) => (
  <Institution details={experience} />
));

export default experiences;
