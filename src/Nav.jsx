import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className="navbar  text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="rounded-lg border-b-2 border-cyan-700 mr-1">
            <Link to={'https://www.linkedin.com/in/fatematuz-jannat-mahi-9315b52a0/'}>
              <FaLinkedin /> LinkedIn
            </Link>
          </li>
          <li className="rounded-lg border-b-2 border-cyan-700">
            <Link to={'https://github.com/mahizaman490'}>
              <FaGithub /> Github
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
