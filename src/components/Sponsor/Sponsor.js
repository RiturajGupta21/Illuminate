import React from 'react';

import { BlogCard, GridContainer, Img, HeaderThree, Hr } from './SponsorStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { sponsors } from './Sponsprdata';

const Organizers = () => (
  <Section nopadding id="sponsors">
    <SectionTitle main>Partners & Sponsors</SectionTitle>
    <GridContainer>
      {sponsors.map((p, i) => {
        return (
          <BlogCard key={i}>
            <a href={p.visit} target="_blank"><Img src={p.image} /></a>
            <HeaderThree title>{p.title}</HeaderThree>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Organizers;