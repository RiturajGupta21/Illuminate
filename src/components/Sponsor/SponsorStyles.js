import styled from 'styled-components';

export const Img = styled.img`
  width: 180px;
  border-radius: 15px;
  object-fit: cover;
  margin: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100px;
  }
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
margin-bottom: 30px;
@media ${(props) => props.theme.breakpoints.sm} {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  text-align: center;
  margin: 2px;
  width: 200px;
  height: 200px;
  background: #212D45;
  border-radius: 12px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 120px;
    height: 120px;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;