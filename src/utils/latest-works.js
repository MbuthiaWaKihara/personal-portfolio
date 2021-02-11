import LatestWork from '../components/LatestWork';

const rawLatestWorks = [
    {
        name: 'Tension Chess Clock',
        links: [
            {
                title: "VIEW ON GOOGLE PLAY STORE",
                url: "https://play.google.com/store/apps/details?id=com.tensionchessclock",
            },
            {
                title: "VIEW GITHUB REPO",
                url: "https://github.com/MbuthiaWaKihara/TensionChessClock",
            }
        ],
        readMore: `
        Probably due to competition, I noticed that most chess clock android apps have overdone features. 
        As a result, being a chess player myself, it takes time to learn the interfaces and processes of a chess
        clock app before being able to exhaust its features, or even set up a quick game. This is what inspired 
        me to make a simple chess clock, with quick game set up. Tension chess clock capitalizes on a chess
        player's ability to set up a game fast. It ships with simple interfaces, zero ads and 100% offline feature availability. App powered
        by React Native (react-native-cli)
        `
    },
    {
        name: 'Sorting Algorithms Visualizer',
        links: [
            {
                title: "VIEW ORIGINAL DEMO (DESIGNED DESKTOP ONLY)",
                url: "https://mbuthiawakihara.github.io/sorting-algorithms-visualizer",
            },
            {
                title: "VIEW ALTERNATIVE DEMO (DESIGNED DESKTOP ONLY)",
                url: "https://mbuthiawakihara.github.io/sorting-algorithms-visualizer-2",
            },
            {
                title: "VIEW GITHUB REPO",
                url: "https://github.com/MbuthiaWaKihara/sorting-algorithms-visualizer-2",
            }
        ],
        readMore: `
        As a Computer Science student, studying algorithms can be intimidating, at least initially. 
        Being able to visualize the algorithms at work, can help a great deal towards reaching an understanding of the algs,
        enough to answer questions in exams and interviews. This app visualizes sorting algorithms specifically. There are plenty of 
        sorting algorithms visualizers out there, what makes this one different is the ability to change visualization speed,
        and size of the array, on the fly, even during sorting. App powered by React and Redux.
        `
    },
    {
        name: 'Covid-19 Live Feed',
        links: [
            {
                title: "VIEW DEMO",
                url: "https://mbuthiawakihara.github.io/covid-live",
            },
            {
                title: "VIEW GITHUB REPO",
                url: "https://github.com/MbuthiaWaKihara/covid-live",
            }
        ],
        readMore: `
        This was me trying to make a covid-19 numbers live feed app. I used NovelCOVID API which has an interesting
        entry for country flags, which I decided to base my design on. I made this app as a souvenir for the tragic COVID 19
        pandemic. App powered by React + React Suite and Redux.
        `
    },
    {
        name: 'Ohnest Point of Sale',
        links: [
            {
                title: "VIEW FIGMA INTERACTIVE PROTOTYPE",
                url: "https://www.figma.com/file/wMHQPeTbD9Wa3yMaH6pDNr/ohnestpos?node-id=0%3A1",
            },
        ],
        readMore: `
        Most POS systems work well with large Product Based or Service Based businesses, like supermarkets,
        or online retails, which creates a huge gap for small businesses, which form majority of Kenyan businesses setups. Ohnest POS
        is my idea of one way this gap can be bridged. This POS is different because first it is based on android/ios. Majority
        of business owners and employees already own smart phones. Second, it stores products with images, besides textual data,
        which makes interacting with it similar to shopping online, which is a familiar experience for most Kenyans. Ohnest POS is still
        a work in progress. App powered by React Native (react-native-cli) and Firebase.
        `
    },
    {
        name: 'Chess Bet/Chess MVP',
        links: [
            {
                title: "VIEW CHESS BET HOME PAGE",
                url: "https://chess-bet.com/",
            },
        ],
        readMore: `
        Chess Bet and Chess MVP are both Iconic Kings products. Although I was not at all involved in client side development of these 
        products, I helped develop and maintain response points for the products' client side requests.
        `
    },
];

const latestWorks = rawLatestWorks.map(latestWork => (
    <LatestWork
    latestWork={latestWork}
    />
));

export default latestWorks;