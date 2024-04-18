import Hero from './Hero/Hero';
import HomeAbout from './HomeAbout/HomeAbout';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero/>
            <HomeAbout/>
        </div>
    );
};

export default Home;