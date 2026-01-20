import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} className="image" />
      <div className="info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.githubUrl} target="_blank" className="githublink">
          View Code on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;