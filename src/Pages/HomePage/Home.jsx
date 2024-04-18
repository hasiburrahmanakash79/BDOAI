import Hero from './Hero/Hero';
import HomeAbout from './HomeAbout/HomeAbout';
import JoinBDOAI from './JoinBDOAI/JoinBDOAI';
import OlympiadCard from './OlympiadCard/OlympiadCard';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero/>
            <HomeAbout/>
            <JoinBDOAI/>
            <OlympiadCard/>
        </div>
    );
};

export default Home;