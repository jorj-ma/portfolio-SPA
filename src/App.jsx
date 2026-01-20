import { useState } from 'react'
import { initialProjects } from './data';
import SearchBar from './components/SearchBar/SearchBar';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectForm from './components/ProjectForm/ProjectForm';
import './App.css'

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");

  const filterProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  // Function to add new project
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: projects.length + 1}]);
  };

  return (
    <>
      <div className="app-container">
        <header className="header">
          <h1>Geo Agency Portfolio</h1>
          <p>Showcasing our best work</p>
          <SearchBar onSChange={setSearch}/>
        </header>

        <main>
          <section className="form-section">
              <ProjectForm onAddProject={addProject} />
          </section>
  
          <hr className="divider" />

          <section className="project-grid">
            {filterProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
          
          {filterProjects.length === 0 && (
            <p className="no-results">No projects found matching "{search}"</p>
          )}
        </main>
      </div>
    </>
  )
}

export default App
