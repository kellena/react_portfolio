import './assets/Footer.css'

export default function Footer () {

    return (

        <footer>

        <a href="mailto:kellen.andrea.416@gmail.com">
            <img
            className="link-tree-logo"
            src={require("../assets/img/email-icon.png")}
            alt="email icon"/>
        </a>

        <a href="https://github.com/kellena">
            <img className="link-tree-logo"
            src={require("../assets/img/github-icon.png")}
            alt="github icon"/>
        </a>

        <a href="https://www.linkedin.com/in/kellen-andrea-359b2583/">
            <img
            className="link-tree-logo"
            src={require("../assets/img/linkedin-icon.png")}
            alt="linkedIn icon"/>
        </a>

        <a href="tel:+6512955639">
            <img
            className="link-tree-logo"
            src={require("../assets/img/phone-icon.png")}
            alt="phone icon"/>
        </a>

        </footer>

    );

};