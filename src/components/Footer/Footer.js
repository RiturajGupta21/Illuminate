import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';
import { SectionTitle } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionTitle main>Contact Us</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:706-183-1074">Rituraj [7061831074]</LinkItem>
          <LinkItem href="tel:824-925-9671">Rahul [6372827400]</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:illuminate.iter@gmail.com" >illuminate.iter@gmail.com</LinkItem>
          <LinkItem href="mailto:codexiter@gmail.com">codexiter@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan><img src="./images/logo.svg" alt="new"/><br />with ❤️ by<br /><a href="https://codex-iter.in/" target="_blank"><img src="./images/logo_codex.svg" alt="new"/></a></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/codex-iter" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/company/codex-iter/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/codexiter/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA" target="_blank">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/codexiter/" target="_blank">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
