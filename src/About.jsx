import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
             <h1 className="text-3xl font-bold mb-6 py-10 text-center text-cyan-600">Want to know About me!? Ask here!</h1>
  
<iframe id="chat-widget" src="http://dev-magnusai.otoride.co:8033/?brainId=8acf4b89-e687-4999-b5ac-1aa29afe8271" width="100%" height="500"></iframe>
       <Link to='https://chatwith.tools/embed/e307c023-39f5-4f1e-ab38-424f4024c716'>About me?</Link>
        </div>
    );
};

export default About;