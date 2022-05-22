import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './EventsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { events } from '../../constants/constants';

const Events = () => (
  <Section nopadding id="events">
    <SectionDivider />
    <SectionTitle main>Events</SectionTitle>
    <GridContainer>
      {events.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Prize</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Register</ExternalLinks>
              <ExternalLinks href={p.source}>Images</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Events;