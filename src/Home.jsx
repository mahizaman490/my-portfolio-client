import Banner from "./Banner";
import Contact from "./Contact";

import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div  className="bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/k2n9zQr/6706373-3395620.jpg")',
        }}>
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