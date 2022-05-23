import Link from 'next/link';
import React from 'react';

import { Container, Div1, Div2, NavLink } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        <img src="./images/logo.png" alt="new"/>
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
    </Div2>
    </Container>
);

export default Header;
