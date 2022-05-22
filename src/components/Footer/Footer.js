import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:706-183-1074">706-183-1074</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:illuminate.iter@gmail.com">
          illuminate.iter@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating the Experience</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/codex-iter">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/company/codex-iter/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/codexiter/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/codexiter/">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
