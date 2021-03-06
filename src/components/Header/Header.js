import Link from 'next/link';
import React from 'react';

import { Container, Div1, Div2, NavLink } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a >
          <img src="./images/logo.svg" alt="logo" />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#events">
          <NavLink>Events</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#domain">
          <NavLink>Domain</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
