import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
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
                    <ListTitle>General</ListTitle>
                    <ListParagraph>
                        1. <br />
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Prize</ListTitle>
                    <ListParagraph>
                        1. <br />
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>HackerWar 3.0</ListTitle>
                    <ListParagraph>
                        1. This is a team competition in which a minimum 2 and maximum of 4 participants are required with 1 girl compulsory. <br />
                        2. There is a registration fee of ₹50 for each participants. <br />
                        3. When the contest is live 1 member of the team should always be there at the desk.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Capture the Flag</ListTitle>
                    <ListParagraph>
                        1. This is an Individual competition. <br />
                        2. There is a registration fee of ₹30 for each participants. <br />
                        3. Attacking the web server is strictly prohibited and will get you disqualified. <br />
                        4. Brute forcing flags on this platform is not allowed and will not lead to success.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Switch `n` Code</ListTitle>
                    <ListParagraph>
                        1. This is a team competition in which 2 participants are required. <br />
                        2. There is a registration fee of ₹25 for each participants.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Chug `n` code</ListTitle>
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
