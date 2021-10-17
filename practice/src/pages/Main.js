import styled from 'styled-components';

const MainContainer = styled.main`
  padding-top: 85px;
  height: 100%;
  @media screen and (max-height: 1024) {
    padding-top: 70px;
  }
`;

const Main = () => {
  return (
    <MainContainer>
    </MainContainer>
  );
};

export default Main;
