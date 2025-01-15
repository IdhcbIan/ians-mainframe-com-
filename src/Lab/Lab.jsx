import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import L1 from './L1/L1'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #000;
  background-image: 
    radial-gradient(#0f0 1px, transparent 1px),
    linear-gradient(to right, #020 1px, transparent 1px),
    linear-gradient(to bottom, #020 1px, transparent 1px);
  background-size: 32px 32px, 16px 16px, 16px 16px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Share Tech Mono', monospace;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`

const BackButton = styled(Link)`
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: #0f0;
  text-decoration: none;
  border: 1px solid #0f0;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.2s;
  z-index: 100;

  &:hover {
    background: rgba(0, 255, 0, 0.1);
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
    color: #fff;
  }

  &:before {
    content: '< ';
    opacity: 0.7;
  }
`

const OuterBox = styled.div`
  width: 40%;
  height: 90vh;
  margin-left: 2rem;
  background: rgba(0, 20, 0, 0.9);
  border: 2px solid #0f0;
  border-radius: 4px;
  box-shadow: 0 0 25px rgba(0, 255, 0, 0.3);
  padding: 1rem;
  overflow-y: auto;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid rgba(0, 255, 0, 0.3);
    border-radius: 5px;
    pointer-events: none;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #000;
  }

  &::-webkit-scrollbar-thumb {
    background: #0f0;
  }
`

const LeftBox = styled(OuterBox)`
  margin-left: 0;
  margin-right: 2rem;
  padding: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem;
  width: 100%;
  padding: 0;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const ProjectCard = styled.div`
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #0f0;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #0f0, transparent);
  }

  &:hover {
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.4);
    transform: translateX(-2px);
  }
`

const ProjectTitle = styled.h2`
  color: #0f0;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  font-family: 'Share Tech Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  
  &:before {
    content: '> ';
    opacity: 0.7;
  }
`

const ProjectDescription = styled.p`
  color: #0f0;
  line-height: 1.4;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`

const ProjectLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: transparent;
  color: #0f0;
  text-decoration: none;
  border: 1px solid #0f0;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(0, 255, 0, 0.1);
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(0, 255, 0, 0.1);
    box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
    color: #fff;
    
    &:before {
      transform: translateX(100%);
    }
  }
`

const Lab = () => {
  const [selectedProject, setSelectedProject] = React.useState(null)

  const projects = [
    {
      title: "AI MNIST",
      description: "[SYS.AI.001] Neural network handwriting recognition interface. Draw digits and watch the AI predict in real-time.",
      link: "/L1"
    },
    {
      title: "Quantum Pixels", 
      description: "[SYS.QC.002] Quantum state simulator with visual qubit manipulation. Supports up to 8 entangled states per operation.",
      link: "/project2"
    },
    {
      title: "Art Bot Arena",
      description: "[SYS.GEN.003] AI-powered procedural art generation system. Multiple style matrices available for creative synthesis.",
      link: "/project3"
    }
  ]

  return (
    <Container>
      <BackButton to="/">RETURN</BackButton>
      <LeftBox>
        <Grid>
          {selectedProject === 'L1' && <L1 />}
        </Grid>
      </LeftBox>
      <OuterBox>
        <Grid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink 
                to="#" 
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProject(project.link.substring(1));
                }}
              >
                INITIALIZE
              </ProjectLink>
            </ProjectCard>
          ))}
        </Grid>
      </OuterBox>
    </Container>
  )
}

export default Lab
