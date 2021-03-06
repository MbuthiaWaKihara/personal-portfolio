import Institution from '../components/Institution';

const rawExperiences = [
    {
        date: `AUGUST 2020 - PRESENT`,
        institution: `Iconic King`,
        body: `Iconic King is a software company that majors on betting systems and internet games. I work as
        a part time software developer. I help develop and maintain backend code for their main products.`,
    },
    {
        date: `SEPTEMBER 2019 - DECEMBER 2019`,
        institution: `Aura Safira Consulting`,
        body: `ASC is a software company that majors on health systems. I worked as a developer intern.
         I worked on a few projects while at ASC, including contributing to the implementation of cStockV2,
         which is a mobile app that helps manage the distribution of drugs by community health units. We
         used ReactJS, React Native and DHIS2 as our major tech stack. I helped in code maintenance and testing.`,
    },
];

const experiences = rawExperiences.map(experience => (
    <Institution
    details={experience}
    />
));

export default experiences;