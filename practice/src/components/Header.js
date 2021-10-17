import styled from 'styled-components';

const HeaderBar = styled.header`
  display: flex;
  z-index: 10;
  width: 100%;
  height: 85px;
  background-color: rgb(173, 193, 243);
`;

const Logo = styled.img`
  display: inline-block;
  height: 100%;
  padding: 10px 0 10px 30px;
`;

const Header = () => {
  return (
    <HeaderBar>
      <Logo src='/images/Logo.png' />
    </HeaderBar>
  );
};

export default Header;
