import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Yeon+Sung&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap');
  * {
    box-sizing: border-box;
  };

  body {
    font-family: 'Do Hyeon', sans-serif;
    font-size: 20px;
    background-color: rgb(240, 240, 240);
  };
`;

export default GlobalStyles;
