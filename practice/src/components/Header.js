import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MobileModal from '../modals/MobileModal';

const HeaderBar = styled.header`
  display: flex;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 85px;
  justify-content: space-between;
  background-color: #acc1f3;
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
  @media screen and (max-width: 1024px) {
    margin-right: 30px;
  }
`;

const Menu = styled.div`
  display: inline-block;
  padding: 0 30px;
  line-height: 85px;
  font-size: 25px;
  font-weight: bold;
  color: black;
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
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(prevState => {
      return !prevState;
    });
  };

  return (
    <HeaderBar>
      <Link to='/'>
        <Logo src='/images/Logo.png' />
      </Link>
      <Nav>
        <Link to='/alarm'>
          <Menu>Alarm</Menu>
        </Link>
        <Link to='/timer'>
          <Menu>Timer</Menu>
        </Link>
        <MobileMenu onClick={handleModal} src='/images/hamburgerMenu.png' />
      </Nav>
      {modal ? <MobileModal handleModal={handleModal} /> : null}
    </HeaderBar>
  );
};

export default Header;
