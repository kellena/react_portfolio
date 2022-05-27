import './assets/Projects.css'

export default function Projects () {

    const projects = [

        {
            title: 'Anime Search',
            deployed: 'https://nicoled1999.github.io/project-1/',
            repo: 'https://github.com/NicoleD1999/project-1',
            img: 'anime_search_home'
        },


        {
            title: 'Weather Dashboard',
            deployed: 'https://github.com/kellena/weather_dashboard',
            repo: 'https://kellena.github.io/weather_dashboard/',
            img: 'weather-dashboard'
        },

        {
            title: 'Password Generator',
            deployed: 'https://github.com/kellena/password_generator',
            repo: 'https://kellena.github.io/password_generator/',
            img: 'password-generator'
        },

        {
            title: 'E-Commerce Back-End',
            deployed: 'https://drive.google.com/file/d/1DXeHTJbEtBlaTCFdu_Pknhq_cmddYihT/view',
            repo: 'https://github.com/kellena/e-commerce_back_end',
            img: 'e-commerce'
        },

    ]

    return (

        <div className='projects-container'>

            <div className='project-header'>
                <h1>Projects</h1>
                <hr />
            </div>

            <div className='project-content'>

                {projects.map((project) =>

                    <div className='project-card' key={project.title}>

                        <h1>{project.title}</h1>
                        <img alt='app screenshot' src={`images/projects/${project.img}.png`} />

                        <div className='project-card-links-container'>
                            <a href={project.deployed}>Deployed App -- </a>
                            <a href={project.repo}>GitHub Repository</a>
                        </div>

                        <hr />
                        
                    </div>
                    
                )};

            </div>

        </div>
        
    );

};