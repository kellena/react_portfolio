import "./assets/Resume.css";

export default function Resume() {

    return (

        <div className="resume-container">

            <object>
                <img
                    className="resume-display"
                    src={require("../assets/resume/Kellen_Andrea_resume.png")}
                    alt="resume"/>
                    Resume
            </object>

        </div>

    );

};