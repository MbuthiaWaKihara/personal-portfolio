import Skill from '../components/Skill';

const rawSkills = [
    {
        name: 'JavaScript',
        value: 77,
        notes: ['VanillaJS', 'ES6', 'JQuery', 'Lodash', 'Polymer'],
    },
    {
        name: 'TypeScript',
        value: 75,
        notes: ['With NodeJS @types/node', 'With React', 'With React Native'],
    },
    {
        name: 'NodeJS',
        value: 79,
        notes: ['npm', 'nvm', 'Core', 'Express', 'With TypeScript @types/node'],
    },
    {
        name: 'React',
        value: 92,
        notes: ['CRA', 'NextJS', 'Material UI', 'React Bootstrap', 'Styled Components', 'React Suite', 'React Redux', , 'React Query', 'General React Ecosystem'],
    },
    {
        name: 'React Native',
        value: 85,
        notes: ['Expo CLI', 'React Native CLI', 'React Native Redux', 'React Query', 'Styled Components', 'General React Native Ecosystem'],
    },
    {
        name: 'Redux',
        value: 90,
        notes: ['React Redux', 'React Native Redux', 'Redux Thunk', 'Redux Devtools'],
    },
    {
        name: 'Firebase',
        value: 75,
        notes: ['Realtime Database', 'Firestore Database', 'Mobile App Intergration', 'Web App Intergration', 'Hosting', 'Cloud Functions', 'Distribution'],
    },
    {
        name: 'PHP',
        value: 69,
        notes: ['Procedural PHP', 'OOP PHP', 'Laravel'],
    },
    {
        name: 'Collaboration',
        value: 70,
        notes: ['Git', 'Github', 'Gitlab', 'Trello', 'Slack', 'Jira', 'Confluence', 'Ngrok'],
    },
]

const skills = rawSkills.map(skill => (
    <Skill
    skill={skill}
    />
));

export default skills;