import "./assets/Header.css";

import { Link }  from 'react-router-dom'

export default function Header() {

    return (
        <header>

        <div className="header-top">

            <img src={require("../assets/img/kellen1.png")} alt="Kellen"/>

            <div>
                <h1 className="header-name">Kellen Andrea</h1>
                <h3 className="header-title">Junior Full-Stack Developer</h3>
            </div>

        </div>

        <div className="header-bottom">

            <nav className="header-nav">

                <Link to="/">
                    <button>Home</button>
                </Link>

                <Link to="/about">
                    <button>About</button>
                </Link>

                <Link to="/projects">
                    <button>Projects</button>
                </Link>

                <Link to="/resume">
                    <button>Resume</button>
                </Link>

                <Link to="/skills">
                    <button>Skills</button>
                </Link>

            </nav>

        </div>
    
        </header>

    );

};