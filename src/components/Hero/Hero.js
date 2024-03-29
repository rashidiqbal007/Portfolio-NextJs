// import resume from "../../../public/resume.pdf";
// import {Document, Page, pdfjs} from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import React from 'react';
// import resume from "../Resume/Resume"
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section  nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi!
        <br />
        I'm Rashid!
      </SectionTitle>
      <SectionText>
        A MERN Stack developer with a passion for building 
         intuitive web applications with excellent user experiences👨‍💻
      </SectionText>
      <Button target="_blank" onClick={() => window.location = 'https://drive.google.com/file/d/1_sBcVlV1tiHVEKvAX8bzabqNMRRzo1QD/view?usp=share_link'  }>Resume</Button>
      {/* <Document file = "../" onLoadError={console.error} style={{width: '100%', height: 'auto'}}/> */}
    </LeftSection>
  </Section>
);

export default Hero;