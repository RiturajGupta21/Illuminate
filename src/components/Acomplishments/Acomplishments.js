import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '24 hrs', text: 'Event Duration', },
  { number: 500, text: 'Registerd Participants (till date)'},
  // { number: , text: '', },
  { number: '₹ 35000', text: 'Prizes Worth', }
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
