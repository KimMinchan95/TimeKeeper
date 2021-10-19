import { useState } from 'react';
import styled from 'styled-components';
import AlarmModal from '../../modals/AlarmModal';

const SelectTimeContainer = styled.section`
  width: 100%;
  text-align: center;
`;

const AlarmButton = styled.button`
  text-align: center;
  font-size: 25px;
  padding: 5px 10px;
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

const SelectTime = () => {
  const [visible, setVisible] = useState(false);

  const handleAlarmModal = () => {
    setVisible(prevState => {
      return !prevState;
    });
  };

  return (
    <SelectTimeContainer>
      <AlarmButton onClick={handleAlarmModal}>Alarm</AlarmButton>
      {visible ? <AlarmModal handleAlarmModal={handleAlarmModal} /> : null}
    </SelectTimeContainer>
  );
};

export default SelectTime;
