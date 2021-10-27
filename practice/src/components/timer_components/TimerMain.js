import { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerMainContainer = styled.main`
  height: 15vh;
`;

const TimerClock = styled.section`
  padding-top: 15px;
  text-align: center;
  font-size: 130px;
  @media screen and (max-width: 1024px) {
    font-size: 13vw;
  }
`;

const TimerMain = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (parseInt(second) > 0) {
        setSecond(parseInt(second) - 1);
      }
      if (parseInt(second) === 0) {
        if (parseInt(minute) > 0) {
          setMinute(parseInt(minute) - 1);
          setSecond(59);
        } else {
          clearInterval(timer);
        }
      }
      if (parseInt(minute) === 0) {
        if (parseInt(hour) > 0) {
          setHour(parseInt(hour) - 1);
          setMinute(59);
          setSecond(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [hour, minute, second]);

  return (
    <TimerMainContainer>
      <TimerClock>
        {hour > 9 ? hour : `0${hour}`} : {minute > 9 ? minute : `0${minute}`} : {second > 9 ? second : `0${second}`}
      </TimerClock>
    </TimerMainContainer>
  );
};

export default TimerMain;
