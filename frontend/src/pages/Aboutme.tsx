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
                I always have lots of projects going on; as of now, I am trying to build this website. I've never done web dev before
                or used JS lol...I wanted a place to put my projects. Soon I plan to update the personal projects page with all of my 
                random projects. I also wanted a place for my friends to play around with stuff that I build. Most of my ideas are inspired by
                my roommates and friends (and cat).
            </p>
            <p className="about-me-text">
                Outside of coding, I like to read. Currently, I'm reading Who Runs the World. I also like watching movies; in 2023, I watched
                over 500 movies...I also always start some random hobbby. I recently bought some cherry wood scraps from Tropical 
                American Timber in Gainesville; I wanted to make some wood sculptures idk. 

            </p>
            <p className="about-me-text">
                I'm planning to pursue an MS in Computer Science and eventually work in a field where I can combine
                my interests in math, cs, and linguistics. 
            </p>
        </div>
    );
};

export default AboutMe;
