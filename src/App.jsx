import { useState } from 'react'
import { initialProjects } from './data';
import SearchBar from './components/SearchBar/SearchBar';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectForm from './components/ProjectForm/ProjectForm';
import './App.css'

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search input to include both caps
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to add new project
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  return (
    <>
      <div className="app-container">
        <header className="header">
          <h1>Geo Agency Portfolio</h1>
          <p>Showcasing our best work</p>
          <SearchBar onSearchChange={setSearchTerm}/>
        </header>

        <main>
          <section className="form-section">
              <ProjectForm onAddProject={addProject} />
          </section>
  
          <hr className="divider" />

          <section className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>

          <section className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
          
          {filteredProjects.length === 0 && (
            <p className="no-results">No projects found matching "{searchTerm}"</p>
          )}
        </main>
      </div>
    </>
  )
}

export default App
