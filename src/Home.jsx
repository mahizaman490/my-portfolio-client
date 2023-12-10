import Banner from "./Banner";
import Contact from "./Contact";
import ContactForm from "./Contactform";

import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
       
            <Footer></Footer>
        </div>
    );
};

export default Home;