import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Hr } from '../Events/EventsStyles';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './RulesStyles';

const Technologies = () => (
    <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Rules</SectionTitle>
        <SectionText>
            There is a specific set of protocols for every event make sure to follow all of them.
        </SectionText>
        <List>
            <ListItem>
                <ListContainer>
                    <ListTitle>HackerWar 3.0</ListTitle>
                    <Hr />
                    <ListParagraph>
                        1. This is a team competition in which a minimum 2 and maximum of 4 participants are required with 1 girl compulsory. <br />
                        2. There is a registration fee of ₹100 per team. <br />
                        3. When the contest is live 1 member of the team should always be there at the desk.<br />
                        4. Participants are supposed to bring their own laptops.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Capture the Flag</ListTitle>
                    <Hr />
                    <ListParagraph>
                        1. This is an Individual competition. <br />
                        2. Attacking the web server is strictly prohibited and will get you disqualified. <br />
                        3. Brute forcing flags on this platform is not allowed and will not lead to success.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Switch `n` Code</ListTitle>
                    <Hr />
                    <ListParagraph>
                        1. This is a team competition in which 2 participants are required. <br />
                        2. There is a registration fee of ₹50 per team.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Chug `n` code</ListTitle>
                    <Hr />
                    <ListParagraph>
                        1. This is an Individual competition. <br />
                        2. There is a registration fee of ₹30 for each participants.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
        <SectionDivider colorAlt />
    </Section>
);

export default Technologies;
