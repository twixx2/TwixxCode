const Project = ({ project }) => {
    return (
        <div className="project-wrapper container">
            <div className="project__content">
                <h3>{project.title}</h3>
                <div className="project">

                    <div className="project__photos">
                        <img src={project.image} alt="" />

                    </div>

                    <p>{project.descr}</p>


                    <div className="project__links">
                        <a href={project.github}><span>Открыть на GitHub</span></a>
                        <a href={project.chek}><span>Просмотр</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
