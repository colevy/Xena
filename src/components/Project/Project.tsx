import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  const projects = [
    {
      title: 'EchoEcho',
      description: 'A social media and ecommerce platform for sharing all things music.',
      repo: 'https://github.com/colelevy08/EchoEcho',
    },
    {
      title: 'HappyTrails',
      description: 'A hiking trail finder and review application for outdoor lovers.',
      repo: 'https://github.com/rachelsteiner91/HappyTrails',
    },
    {
      title: 'Closet Organizer',
      description: 'An app to organize and plan your wardrobe. Never worry about what to wear again!',
      repo: 'https://github.com/colelevy08/Closet-Organizer',
    },
    {
      title: 'Corny Joke Generator',
      description: 'A simple app to generate corny jokes. The perfect app for fathers day.',
      repo: 'https://github.com/ThisBackpackersLife/phase-1-group-project',
    },
    {
      title: 'Phase 1 Group Project',
      description: 'A collaborative project for phase 1. Worked in a small group to learn basic development.',
      repo: 'https://github.com/ThisBackpackersLife/phase-1-group-project',
    },
    {
      title: 'My Portfolio V1',
      description: 'My original personal portfolio website. See how much I have learned by comparing this site to my original!',
      repo: 'https://github.com/colelevy08/my_portfolio',
    },
  ];

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <div
              className="project"
              onClick={() => window.open(project.repo, '_blank')}
            >
              <header>
                <h3>{project.title}</h3>
              </header>
              <p>{project.description}</p>
              <footer>
                <div className="tech-list">
                  {/* Add any tech stack icons or details here if needed */}
                </div>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}