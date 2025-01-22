import React, { useState } from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const HoverBox = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
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

const MyResume = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const enResumeUrl = "https://raw.githubusercontent.com/IdhcbIan/ians-mainframe-com-/master/src/Legos/Resume/En/Ian_Resume_En.pdf";
  const ptResumeUrl = "https://raw.githubusercontent.com/IdhcbIan/ians-mainframe-com-/master/src/Legos/Resume/Pt/Ian_Resume_Pt.pdf";

  return (
    <ResumeContainer 
      onMouseEnter={() => setShowLanguages(true)}
      onMouseLeave={() => setShowLanguages(false)}
    >
      <span>Resume</span>
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
  );
};

export default MyResume;
