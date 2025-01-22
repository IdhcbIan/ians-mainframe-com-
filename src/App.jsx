import React, { useState } from 'react'
import './App.css'
import LangButton from './Legos/LangButton'
import headerImage from './assets/Back.jpg'
import twitterLogo from './assets/twitter.png'
import githubLogo from './assets/github.png'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0a0a0a;
    color: #e0e0e0;
    margin: 0;
    padding: 0;
  }
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  padding: 1rem;
  position: relative;
  min-height: 80vh;
  
  @media (min-width: 768px) {
    padding: 2rem;
    flex-direction: row;
    justify-content: space-between;
  }
`

const HeroContent = styled.div`
  flex: 1;
  text-align: center;
  margin: 2rem 0;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #a0a0a0;
  }

  @media (min-width: 768px) {
    text-align: left;
    margin: 0;
  }
`

const HeroImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 1rem 0;
  filter: brightness(0.8);

  @media (min-width: 768px) {
    max-width: 40%;
    margin: 1rem;
  }

  @media (min-width: 1200px) {
    max-width: 500px;
  }
`

const FloatingText = styled.div`
  position: relative;
  z-index: 1;
`

const ContentContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  background-color: #0a0a0a;
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`

const Section = styled.section`
  padding: 1.5rem;
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`

const LanguageButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
`

const LanguageLabel = styled.span`
  margin-right: 0.5rem;
  color: #e0e0e0;
`

const ProjectsSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding-bottom: 120px;
`

const ProjectsTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: #f0f0f0;
  font-size: 1.8rem;
  border-bottom: 2px solid #333;
  padding-bottom: 0.5rem;
  width: 100%;
`

const ProjectsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0.5rem;
  text-align: left;
  width: 100%;
`

const ProjectItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 1rem;
  background-color: #222;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2a2a2a;
    transform: translateX(5px);
  }
`

const ProjectName = styled.div`
  font-weight: bold;
  color: #e0e0e0;
  font-size: 1.1rem;
  flex: 1;
`

const ProjectButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`

const ProjectButton = styled.a`
  text-decoration: none;
  color: #e0e0e0;
  padding: 8px 16px;
  border-radius: 6px;
  background-color: #333;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  
  &:hover {
    background-color: #444;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  img {
    width: 16px;
    height: 16px;
    opacity: 0.9;
  }
`

const BlogLink = styled(Link)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  color: #e0e0e0;
  padding: 12px 30px;
  width: 80%;
  text-align: center;
  background-color: #222;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 1.1em;

  &:hover {
    background-color: #333;
  }
`

const LabLink = styled(BlogLink)`
  bottom: 60px;
`

const JustifiedText = styled.p`
  text-align: justify;
  color: #d0d0d0;
`

const SocialLinksList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 1rem;
`

const SocialLinkItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const SocialLink = styled.a`
  text-decoration: none;
  color: #d0d0d0;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }
`

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  filter: brightness(0.8);
`

const EmailLink = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  text-decoration: none;
  color: #ffffff;
  background-color: #2d2d2d;
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #3d3d3d;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 0;
    text-align: center;
  }
`

const AboutLink = styled(Link)`
  text-decoration: none;
  color: #d0d0d0;
  display: inline-block;
  width: 100%;
  padding: 5px 0;

  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }
`

const ResumeContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const HoverBox = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  transform: none;
  background-color: #2d2d2d;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: ${props => props.show ? 'flex' : 'none'};
  gap: 1rem;
  z-index: 100;
`;

const LanguageButton = styled.a`
  text-decoration: none;
  color: #ffffff;
  background-color: #404040;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #505050;
  }
`;

function App() {
  const [language, setLanguage] = useState('en');
  const [showLanguages, setShowLanguages] = useState(false);

  const enResumeUrl = "https://raw.githubusercontent.com/IdhcbIan/ians-mainframe-com-/master/src/Legos/Resume/En/Ian_Resume_En.pdf";
  const ptResumeUrl = "https://raw.githubusercontent.com/IdhcbIan/ians-mainframe-com-/master/src/Legos/Resume/Pt/Ian_Resume_Pt.pdf";

  const handleLanguageChange = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'pt' : 'en');
  };

  const content = {
    en: {
      welcome: "Hello! Im Ian, Welcome to my personal website!",
      tagline: "Get to know my projects and ideas on this page!",
      aboutTitle: "About Me",
      aboutText: "Hello! I'm an Applied Math and Computer Science Student at ICMC USP, I am really passionate about working on hard problems and building the future. In university I took an interest in AI and computer science. Mainly, the use of smarter systems to push the frontier of human knowledge and achievements greatly interests me! I'm a deep believer in efficiency and simplicity, fast execution and iterative improvements will take us to the stars. Get to know my projects and ideas on this page!",
      resumeLink: "View My Resume",
      projectsTitle: "Projects",
      projects: [
        { 
          name: "Neural Networks for IR Spectroscopy in Organic Chemistry", 
          summary: "https://raw.githubusercontent.com/USPCodeLabSanca/ML_Chem/master/Documentation/Documentation.pdf", 
          code: "https://github.com/USPCodeLabSanca/ML_Chem" 
        },
        { 
          name: "MNIST Classification with PyTorch and AWS SageMaker deployment", 
          code: "https://github.com/IdhcbIan/MLP_MNIST" 
        }
      ],
      viewSummary: "View Summary",
      viewCode: "View Code",
      tryItOut: "Try it out!",
      blogLink: "Read My Blog",
      labLink: "Visit My Lab",
      socialLinks: "Find me on X.com and GitHub:",
      changeLanguage: "Change Language",
      challengeMe: "Challenge me on",
      chessLink: "chess.com",
      emailMe: "Email Me"
    },
    pt: {
      welcome: "Olá! Eu sou Ian, Bem-vindo ao meu site pessoal!",
      tagline: "Conheça meus projetos e ideias nesta página!",
      aboutTitle: "Sobre Mim",
      aboutText: "Sou um estudante de Matemática Aplicada e Ciência da Computação no ICMC USP, apaixonado por resolver problemas difíceis e construir o futuro. Na universidade desenvolvi grande interesse em IA e computação o que me levou a explorar o uso de sistemas mais inteligentes na expansão do conhecimento e das conquistas humanas. Acredito na eficiência e simplicidade, valorizando a execução rápida e melhorias iterativas para alcançar grandes feitos.",
      resumeLink: "Ver Meu Currículo",
      projectsTitle: "Projetos",
      projects: [
        { 
          name: "Redes Neurais para Espectroscopia IR em Química Orgânica", 
          summary: "https://raw.githubusercontent.com/USPCodeLabSanca/ML_Chem/master/Documentation/Documentation.pdf", 
          code: "https://github.com/USPCodeLabSanca/ML_Chem" 
        },
        { 
          name: "MNIST Classification with PyTorch and AWS SageMaker deployment", 
          code: "https://github.com/IdhcbIan/MLP_MNIST" 
        }
      ],
      viewSummary: "Ver Resumo",
      viewCode: "Ver Código",
      tryItOut: "Experimente!",
      blogLink: "Leia Meu Blog",
      labLink: "Visite Meu Lab",
      socialLinks: "Me encontre no X.com e GitHub:",
      changeLanguage: "Mudar Idioma",
      challengeMe: "Me desafie:",
      chessLink: "chess.com",
      emailMe: "Me Envie um Email"
    }
  };

  return (
    <>
      <GlobalStyle />
      <HeroContainer>
        <LanguageButtonContainer>
          <LanguageLabel>{content[language].changeLanguage}:</LanguageLabel>
          <LangButton onLanguageChange={handleLanguageChange} />
        </LanguageButtonContainer>
        <HeroContent>
          <FloatingText>
            <h1>{content[language].welcome}</h1>
            <p>{content[language].tagline}</p>
          </FloatingText>
        </HeroContent>
        <HeroImage src={headerImage} alt="Header" />
      </HeroContainer>
      <ContentContainer>
        <ProjectsSection className="projects">
          <ProjectsTitle>{content[language].projectsTitle}</ProjectsTitle>
          <ProjectsList>
            {content[language].projects.map((project, index) => (
              <ProjectItem key={index}>
                <ProjectName>{project.name}</ProjectName>
                <ProjectButtonsContainer>
                  {project.summary && (
                    <ProjectButton 
                      href={project.summary} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {content[language].viewSummary}
                    </ProjectButton>
                  )}
                  {!project.summary && (
                    <ProjectButton 
                      href="/lab" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {content[language].tryItOut}
                    </ProjectButton>
                  )}
                  <ProjectButton 
                    href={project.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {content[language].viewCode}
                    <img src={githubLogo} alt="GitHub" style={{width: '16px', height: '16px'}} />
                  </ProjectButton>
                </ProjectButtonsContainer>
              </ProjectItem>
            ))}
          </ProjectsList>
          <LabLink to="/lab">
            {content[language].labLink}
          </LabLink>
          <BlogLink to="/blog">
            {content[language].blogLink}
          </BlogLink>
        </ProjectsSection>
        <Section className="introduction">
          <h2>{content[language].aboutTitle}</h2>
          <JustifiedText>{content[language].aboutText}</JustifiedText>
          <ProjectsList>
            <ProjectItem>
              <ResumeContainer 
                onMouseEnter={() => setShowLanguages(true)}
                onMouseLeave={() => setShowLanguages(false)}
              >
                <AboutLink as="span">{content[language].resumeLink}</AboutLink>
                <HoverBox show={showLanguages}>
                  <LanguageButton 
                    href={enResumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EN
                  </LanguageButton>
                  <LanguageButton 
                    href={ptResumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PT
                  </LanguageButton>
                </HoverBox>
              </ResumeContainer>
            </ProjectItem>
            <ProjectItem>
              <AboutLink as="a" href="https://www.chess.com/member/ian_dhcb" target="_blank" rel="noopener noreferrer">
                {content[language].challengeMe} {content[language].chessLink}
              </AboutLink>
            </ProjectItem>
          </ProjectsList>
          <h3>{content[language].socialLinks}</h3>
          <SocialLinksList>
            <SocialLinkItem>
              <SocialLink href="https://x.com/IIdhcb" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={twitterLogo} alt="X.com" />
                X.com
              </SocialLink>
            </SocialLinkItem>
            <SocialLinkItem>
              <SocialLink href="https://github.com/IdhcbIan" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={githubLogo} alt="GitHub" />
                GitHub
              </SocialLink>
            </SocialLinkItem>
          </SocialLinksList>
        </Section>
      </ContentContainer>
      <EmailLink href="mailto:idhcb.ian@usp.br">{content[language].emailMe}</EmailLink>
    </>
  )
}

export default App
