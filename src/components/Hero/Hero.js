import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a software engineer with a passion for building web applications.
        I am currently working as a software engineer at <a href="https://www.3dlook.com/">3DLOOK </a>
        where I am building a web application that allows users to create 3D models of themselves.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.google.com/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;