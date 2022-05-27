import React from 'react';

import { Section1 } from '../../styles/GlobalComponents';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons1 } from '../Header/HeaderStyles';
import { SocialContainer1 } from '../Footer/FooterStyles';

const Hero = () => (
  <>
    <Section1>
      <img src="./images/background.png" alt="new" />
      <SocialContainer1>
        <SocialIcons1 href="https://www.instagram.com/codexiter/" target="_blank">
          <AiFillInstagram size="3rem" />
        </SocialIcons1>
        <SocialIcons1 href="https://www.facebook.com/codexiter/" target="_blank">
          <AiFillFacebook size="3rem" />
        </SocialIcons1>
        <SocialIcons1 href="https://github.com/codex-iter" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons1>
        <SocialIcons1 href="https://www.linkedin.com/company/codex-iter/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons1>
        <SocialIcons1 href="https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA" target="_blank">
          <AiFillYoutube size="3rem" />
        </SocialIcons1>
      </SocialContainer1>
    </Section1>
  </>
);

export default Hero;