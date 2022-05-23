import React from 'react';

import { Section1 } from '../../styles/GlobalComponents';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { SocialContainer } from '../Footer/FooterStyles';

const Hero = () => (
  <>
    <Section1>
      <img src="./images/background.png" alt="new" />
      <SocialContainer>
        <SocialIcons href="https://www.instagram.com/codexiter/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/codexiter/">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/codex-iter">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/company/codex-iter/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA">
          <AiFillYoutube size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </Section1>
  </>
);

export default Hero;