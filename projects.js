// Add to projects.js
document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');
  function revealProjects() {
    projects.forEach(project => {
      const rect = project.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        project.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealProjects);
  revealProjects();
});