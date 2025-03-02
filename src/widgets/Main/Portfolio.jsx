import Project from "./Project";

const Portfolio = ({ projects, setActiveIndex, activeIndex }) => {


  return (
    <section id="portfolio" className="portfolio">
      <h2>Проекты</h2>
      <div className="tabs">
        <div className="portfolio__tabs">
          {projects.map((project, index) => (
            <button
              key={index}
              className={activeIndex == index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
      <Project project={projects[activeIndex]} />
    </section>
  );
};

export default Portfolio;