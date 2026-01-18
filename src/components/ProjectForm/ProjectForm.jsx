import { useState } from 'react';
import './ProjectForm.css';

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    githubUrl: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
        if (!formData.title || !formData.githubUrl) return;

    const projectWithImage = {
      ...formData,
      image: formData.image.trim() === '' 
        ? 'https://via.placeholder.com/400x250' 
        : formData.image
    };

    onAddProject(projectWithImage);

    setFormData({
      title: '',
      description: '',
      githubUrl: '',
      image: 'https://via.placeholder.com/400x250',
    });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>
      <input
        type="text"
        placeholder="Project Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Short Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL "
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
      />
      <input
        type="url"
        placeholder="GitHub Repository URL"
        value={formData.githubUrl}
        onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
        required
      />
      <button type="submit">Add to Portfolio</button>
    </form>
  );
};

export default ProjectForm;