import "./assets/Content.css";

import { Route, Routes } from "react-router-dom";

import About from "./About";
import Homepage from "./Homepage";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

export default function Content() {

    return (
        
        <div className="content-main">
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>
        </div>

    );

};