import React from 'react';

import { BlogCard, GridContainer, Hr, TitleContent, UtilityList, Img, HeaderThree } from './OrganizersStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { organizers } from './Organizersdata';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Organizers = () => (
  <Section nopadding id="organizers">
    <SectionTitle main>Organizers</SectionTitle>
    <GridContainer>
      {organizers.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <UtilityList>
              <a href={p.github} target ="_blank" style={{color: '#9cc9e3'}}><AiFillGithub size="2.5rem" /></a>
              <a href={p.linkedin} target ="_blank" style={{color: '#9cc9e3'}}><AiFillLinkedin size="2.5rem" /></a>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <SectionDivider />
  </Section>
);

export default Organizers;