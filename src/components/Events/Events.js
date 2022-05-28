import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './EventsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { events } from '../../constants/constants';
import { AiFillPhone } from 'react-icons/ai';
import { LinkItem } from '../Footer/FooterStyles';

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
              {/* <HeaderThree title>{p.title}</HeaderThree> */}
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <br></br>
              <TitleContent style={{textDecoration: 'underline', fontWeight: 'bold', fontSize: 'large'}}>Prize</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <TitleContent style={{ textAlign: 'left', marginLeft: '20px' }}>Timing: - </TitleContent>
            <TagList>
              {p.tags2.map((t, i) => {
                return <Tag key={i}>{t}</Tag>;
              })}
            </TagList>
            <TitleContent style={{ textAlign: 'left', marginLeft: '20px' }}>Contact: -</TitleContent>
            <TagList>
              {p.tags1.map((t, i) => {
                return <Tag key={i}><LinkItem href={[`tel:${t.substring(t.length - 11,t.length-1)}`]}><AiFillPhone />{t}</LinkItem></Tag>;
              })}
            </TagList>
            <UtilityList>
              <ExternalLinks href={p.visit} target ="_blank">Register</ExternalLinks>
              {/* <ExternalLinks href={p.source}>Images</ExternalLinks> */}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Events;