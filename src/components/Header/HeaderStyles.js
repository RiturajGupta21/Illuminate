import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 1 / 2;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 6 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 4 / 3 / 5;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  margin: 3px;
  border-bottom: solid #212d45;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`