import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { alarmSelector } from '../../app/modules/hooks';

const AlarmTimeContianer = styled.main`
  margin-bottom: 20px;
  div {
    font-size: 25px;
    padding-bottom: 10px;
  }
  img {
    height: 23px;
    margin-right: 10px;
  }
`;

const SnoozeTime = styled.section`
  font-size: 30px;
  span {
    font-size: 20px;
  }
`;

const AlarmTime = () => {
  const alarm = useSelector(alarmSelector);
  const { day, hour, minute } = alarm.info;

  return (
    <AlarmTimeContianer>
      <div>알람 시간</div>
      <SnoozeTime><img src='/images/alarm.png' alt='/favion.ico' />
        <span>{day}</span> {hour}시 {minute}분
      </SnoozeTime>
    </AlarmTimeContianer>
  );
};

export default AlarmTime;
