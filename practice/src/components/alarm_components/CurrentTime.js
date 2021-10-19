import styled from 'styled-components';
import { useState, useEffect } from 'react';

const CurrentTimeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TimerContainer = styled.section`
  text-align: center;
  height: 50vh;
  line-height: 60vh;
`;

const Time = styled.div`
  display: inline-block;
  padding-left: 10px;
  font-size: 150px;
  @media screen and (max-width: 1024px) {
    font-size: 13vw;
  }
`;

const DayOrNight = styled.span`
  font-size: 35px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

const CurrentTime = () => {
  const [current, setCurrent] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const currentTime = () => {
      setCurrent(new Date().toLocaleTimeString());
    };
    setInterval(currentTime, 1000);
    return () => clearInterval(currentTime);
  });

  return (
    <CurrentTimeContainer>
      <TimerContainer>
        <DayOrNight>
          {current.slice(-2)}
        </DayOrNight>
        <Time>
          {current.slice(0, -3)}
        </Time>
      </TimerContainer>
    </CurrentTimeContainer>
  );
};

export default CurrentTime;
