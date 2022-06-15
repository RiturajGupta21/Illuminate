import React from 'react';

import { Section1 } from '../../styles/GlobalComponents';
import { FaTelegramPlane, FaInstagram, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

import { SocialIcons1 } from '../Header/HeaderStyles';
import { SocialContainer1 } from '../Footer/FooterStyles';

const Hero = () => (
  <>
    <Section1>
      <img src="./images/background.png" alt="new" />
      <SocialContainer1>
        <SocialIcons1 href="https://www.instagram.com/illuminate.iter/" target="_blank">
          <FaInstagram size="3rem" />
        </SocialIcons1>
        <SocialIcons1 href="https://t.me/illuminateiter" target="_blank">
          <FaTelegramPlane size="3rem" />
        </SocialIcons1>
        <SocialIcons1 href="https://www.youtube.com/channel/UCu1S3gm2ODknxDlkpPX2RrA" target="_blank">
          <FaYoutube size="3rem" />
        </SocialIcons1>
        <SocialIcons1 href="https://github.com/codex-iter" target="_blank">
          <FaGithub size="3rem" />
        </SocialIcons1>
        <SocialIcons1 href="https://www.linkedin.com/company/codex-iter/" target="_blank">
          <FaLinkedin size="3rem" />
        </SocialIcons1>
      </SocialContainer1>
    </Section1>
  </>
);

export default Hero;