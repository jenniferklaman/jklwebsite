import "./Aboutme.css";

const AboutMe: React.FC = () => {
    return (
        <div className="about-me-container">
            <h1 className="about-me-title">About Me</h1>
            <p className="about-me-text">
                Hi! I'm Jen, a linguistics major with minors in math and computer science at UF. I'm passionate about
                the intersection of technology, language, and data science. My academic journey has led me to explore
                everything from computational linguistics and AI to web development and geospatial analysis. Originally,
                I started college as a pre-med biology major...interesting how things can change huh? 
            </p>
            <p className="about-me-text">
                I always have lots of projects going on; as of now, I'm chipping away at this website. I wanted a place to put my projects. 
                I also wanted a place for my friends to play around with stuff that I build. Most of my ideas are inspired by
                my roommates and friends (and cat), and most of these projects that I build are for my roommates and my's enjoyment. It felt 
                fitting to make a home for these amusements.
            </p>
            <p className="about-me-text">
                I'm planning to pursue an MS in Computer Science and eventually work in a field where I can combine
                my interests in math, cs, and linguistics. 
            </p>
        </div>
    );
};

export default AboutMe;
