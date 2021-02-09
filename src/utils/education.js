import Institution from '../components/Institution';

const rawEducation = [
    {
        date: `SEPTEMBER 2016 - PRESENT`,
        institution: `Moi University`,
        body: `Bachelor of Science (Computer Science). Continuing`,
    },
    {
        date: `JULY 2016 - AUGUST 2016`,
        institution: `Institute of Advanced Technology`,
        body: `Certificate, International Computer Driving License. Certificate, User Support Profession.`,
    },
    {
        date: `FEBRUARY 2012 - NOVEMBER 2015`,
        institution: `Kagumo High School`,
        body: `High School Education. KCSE grade A`,
    },
];

const education = rawEducation.map(education => (
    <Institution
    education
    details={education}
    />
));

export default education;