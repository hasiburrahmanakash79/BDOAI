import Hero from './Hero/Hero';
import HomeAbout from './HomeAbout/HomeAbout';
import JoinBDOAI from './JoinBDOAI/JoinBDOAI';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero/>
            <HomeAbout/>
            <JoinBDOAI/>
        </div>
    );
};

export default Home;