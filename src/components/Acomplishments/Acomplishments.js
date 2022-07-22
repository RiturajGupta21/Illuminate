import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '30 hrs', text: 'Event Duration', },
  // { number: 800, text: 'Registerd Participants'},
  { number: 500, text: 'Students Participated', },
  { number: '₹ 45000', text: 'Prizes Worth', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Stats</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
