import styled from 'styled-components';

const TimerDescContainer = styled.section`
  height: 35vh;
`;

const TimerTitle = styled.div`
`;

const TimerDesc = () => {
  return (
    <TimerDescContainer>
      <TimerTitle>
        Timer
      </TimerTitle>
    </TimerDescContainer>
  );
};

export default TimerDesc;
