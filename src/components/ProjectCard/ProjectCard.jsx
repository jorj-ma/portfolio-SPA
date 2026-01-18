import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
          View Code on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;