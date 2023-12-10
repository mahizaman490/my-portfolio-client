import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Nav = () => {
  return (
    <div className="navbar bg-base-100 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'https://www.linkedin.com/in/fatematuz-jannat-mahi-9315b52a0/'}>
              <FaLinkedin /> LinkedIn
            </Link>
          </li>
          <li>
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
