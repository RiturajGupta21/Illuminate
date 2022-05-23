import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          ITER's 1st Tech Fest
        </SectionTitle>
        <SectionText>
          Club CODEX  brings you the most awaited Tech Event of the year consisting of multiple exciting events. Students across all branches and years will be involved in this day long event and winners will be getting prizes thus bringing excitement and encouragement.
          This event is restricted only to ITER Students.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;