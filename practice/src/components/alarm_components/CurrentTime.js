import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { alarmSelector } from '../../app/modules/hooks';

const CurrentTimeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TimerContainer = styled.section`
  text-align: center;
  height: 45vh;
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

  const alarm = useSelector(alarmSelector);
  const { day, hour, minute, sound } = alarm.info;
  const alarmTime = `${hour}:${minute}`;

  useEffect(() => {
    const currentTime = () => {
      setCurrent(new Date().toLocaleTimeString());
    };
    setInterval(currentTime, 1000);
    return () => clearInterval(currentTime);
  });

  if (day !== '') {
    current.slice(0, -6) === alarmTime && current.slice(-2) === day
      ? document.title = '알람시간 입니다!'
      : document.title = `${day} ${hour}시 ${minute}분 알람`;
  } else {
    document.title = 'Time Keeper';
  }

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
      {current.slice(0, -6) === alarmTime && current.slice(-2) === day
        ? <audio src={sound} autoPlay loop>
          <source type='audio/mpeg' />
          </audio> // eslint-disable-line
        : null}
    </CurrentTimeContainer>
  );
};

export default CurrentTime;
