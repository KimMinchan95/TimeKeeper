import styled from 'styled-components';

const FooterBar = styled.footer`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: black;
  text-align: center;
  a {
    flex: 1;
    line-height: 50px;
    text-decoration: none;
    color: white;
    font-weight: bold;
  };
  span {
    font-weight: normal;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <FooterBar>
      <a href='mailto:hialscks@gmail.com'>Email<span>: hialscks@gmail.com</span></a>
      <a href='https://github.com/KimMinchan95' target='_blank' rel='noreferrer'>Github<span>: KimMinchan95</span></a>
      <a href='https://velog.io/@pest95' target='_blank' rel='noreferrer'>Velog<span>: pest95.log</span></a>
    </FooterBar>
  );
};

export default Footer;
