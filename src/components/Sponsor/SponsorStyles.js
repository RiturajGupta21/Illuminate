import styled from 'styled-components';

export const Img = styled.img`
  width: 130px;
  border-radius: 15px;
  object-fit: cover;
  margin: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 50px;
  }
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
margin-bottom: 30px;
@media ${(props) => props.theme.breakpoints.sm} {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  text-align: center;
  margin: 20px;
  width: 150px;
  height: 150px;
  background: #212D45;
  border-radius: 12px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70px;
    height: 70px;
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