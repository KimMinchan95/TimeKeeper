import { useState } from 'react';
import styled from 'styled-components';
import AlarmModal from '../../modals/AlarmModal';
import AlarmTime from './AlarmTime';

import { useDispatch, useSelector } from 'react-redux';
import { removeAlarm } from '../../app/modules/alarm';
import { alarmSelector } from '../../app/modules/hooks';

const SelectTimeContainer = styled.section`
  width: 100%;
  text-align: center;
`;

const AlarmButton = styled.button`
  text-align: center;
  font-size: 25px;
  padding: 5px 10px;
  margin-bottom: 10px;
  background-color: #acc1f3;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #A6A8E0;
  }
  @media screen and (max-width: 1024px) {
    font-size: 3vw;
  }
`;

const RemoveAlarmButton = styled(AlarmButton)`
  background-color: #d34a4a;
  :hover {
    background-color: #aa2929;
  }
`;

const SelectTime = () => {
  const dispatch = useDispatch();
  const alarm = useSelector(alarmSelector);
  const [visible, setVisible] = useState(false);

  const handleAlarmModal = () => {
    setVisible(prevState => {
      return !prevState;
    });
  };

  const handleRemoveAlarm = () => {
    dispatch(removeAlarm());
  };

  return (
    <SelectTimeContainer>
      {alarm.info.day === '' ? null : <AlarmTime />}
      {alarm.info.day === '' ? <AlarmButton onClick={handleAlarmModal}>Alarm</AlarmButton> : <RemoveAlarmButton onClick={handleRemoveAlarm}>Remove</RemoveAlarmButton>}
      {visible ? <AlarmModal handleAlarmModal={handleAlarmModal} /> : null}
    </SelectTimeContainer>
  );
};

export default SelectTime;
