import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MobileModalContainer = styled.main`
  display: none;
  z-index: 7;
  top: 70px;
  right: 0;
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-top: none;
  border-style: groove;
  @media screen and (max-width: 1024px) {
    display: flex;
    position: absolute;
    flex-direction: column;
  }
`;

const Menu = styled.div`
  display: table;
  flex: 1;
  height: 50px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: table-cell;
  vertical-align: middle;
  text-decoration: none;
  font-weight: bold;
  color: black;
  :hover {
    background-color: #ACC1F3;
  }
`;

const MobileModal = ({ handleModal }) => {
  return (
    <MobileModalContainer onClick={handleModal}>
      <Menu>
        <StyledLink to='/alarm'>Alarm</StyledLink>
      </Menu>
      <Menu>
        <StyledLink to='/timer'>Timer</StyledLink>
      </Menu>
    </MobileModalContainer>
  );
};

export default MobileModal;
