import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 50%;
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  text-align: center;
  margin: 2px;
  width: 100px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70px;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  font-size: ${(props) => props.title ? '2rem' : '2rem'};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: #d0bb57;
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;
