import styled from 'styled-components';

const HeaderBar = styled.header`
  display: flex;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 85px;
  justify-content: space-between;
  background-color: rgb(173, 193, 243);
  @media screen and (max-width: 1024px) {
    height: 70px;
  }
`;

const Logo = styled.img`
  display: inline-block;
  height: 100%;
  padding: 10px 0 10px 30px;
  cursor: pointer;
`;

const Nav = styled.nav`
  height: 100%;
  padding-right: 30px;
`;

const Menu = styled.div`
  display: inline-block;
  padding: 0 20px;
  line-height: 85px;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
  };
  @media screen and (max-width: 1024px) {
    display: none;
  };
`;

const MobileMenu = styled.img`
  display: none;
  height: 100%;
  padding: 20px 0;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: block;
  };
`;

const Header = () => {
  return (
    <HeaderBar>
      <Logo src='/images/Logo.png' />
      <Nav>
        <Menu>Alarm</Menu>
        <Menu>Timer</Menu>
        <MobileMenu src='/images/hamburgerMenu.png'/>
      </Nav>
    </HeaderBar>
  );
};

export default Header;
