import Bio from "./About/Bio";
import Reasons from "./About/Reasons";
import Reviews from "./About/Reviews";
import Skills from "./About/Skills";

const About = () => {
    return (
        <section id="about" className="about">
            <h2>Обо мне</h2>
            <Bio />
            <Skills />
            <Reasons />
            <Reviews/>
        </section>
    );


}

export default About;