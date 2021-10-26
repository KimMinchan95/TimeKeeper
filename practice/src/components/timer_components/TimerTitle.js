import styled from 'styled-components';

const TimerTitleContainer = styled.main`
  display: table-cell;
  height: 25vh;
  width: 100vw;
  text-align: center;
  font-size: 40px;
  vertical-align: bottom;
`;

const TimerTitle = () => {
  return (
    <TimerTitleContainer>
      타이머
    </TimerTitleContainer>
  );
};

export default TimerTitle;
