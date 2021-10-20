import { useState } from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';

const AlarmModalContainer = styled.article`
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  justify-content: center;
  align-items: center;
`;

const ModalBack = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 5;
`;

const Content = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 450px;
  background-color: white;
  z-index: 6;
`;

const Header = styled.section`
  width: 100%;
  height: 20%;
  line-height: 80px;
  padding-left: 20px;
  font-size: 25px;
  font-weight: bold;
  color: white;
  background-color: #ACC1F3;
`;

const ModalX = styled.img`
  position: absolute;
  top: 25px;
  right: 10px;
  width: 30px;
  cursor: pointer;
`;

const TimeDesc = styled.section`
  display: flex;
  width: 100%;
  height: 13%;
  border-bottom: 1px solid;
  padding-right: 10px;
  div {
    flex: 1;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const TimeSelect = styled.section`
  display: flex;
  width: 100%;
  height: 10%;
`;

const SelectArea = styled.article`
  flex: 1;
`;

const SelectBox = styled.select`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 15px;
  border: 1px solid;
  background-color: white;
`;

const TimeCheck = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  line-height: 80px;
  border-bottom: 1px solid;
`;

const AlarmModal = ({ handleAlarmModal }) => {
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  
  // Select Box를 위한 배열 생성
  const hours = [];
  const minutes = [];
  for (let i = 1; i <= 12; i++) {
    hours.push(i);
  }
  for (let i = 0; i <= 59; i++) {
    minutes.push(i);
  }

  const handleHour = (event) => {
    setHour(event.target.value);
  };
  const handleMinute = (event) => {
    setMinute(event.target.value);
  };
  const handleDay = (event) => {
    setDay(event.target.value);
  };

  return ReactDom.createPortal(
    <AlarmModalContainer>
      <ModalBack onClick={handleAlarmModal} />
      <Content>
        <Header>알람 설정
          <ModalX src='images/modalX.png' onClick={handleAlarmModal} />
        </Header>
        <TimeDesc>
          <div>AM|PM</div>
          <div>시간</div>
          <div>분</div>
        </TimeDesc>
        <TimeSelect>
          <SelectArea>
            <SelectBox name='select' onChange={handleDay}>
              <option value=''>AM|PM</option>
              <option value='AM'>AM</option>
              <option value='PM'>PM</option>
            </SelectBox>
          </SelectArea>
          <SelectArea>
            <SelectBox name='hour' onChange={handleHour}>
              <option value=''>시간</option>
              {hours.map(el => <option value={el} key={el}>{el}</option>)}
            </SelectBox>
          </SelectArea>
          <SelectArea>
          <SelectBox name='hour' onChange={handleMinute}>
              <option value=''>분</option>
              {minutes.map(el => <option value={el} key={el}>{el}</option>)}
            </SelectBox>
          </SelectArea>
        </TimeSelect>
        <TimeCheck>
          {day !== '' && hour !== '' && minute !== '' ? `알람시간: ${day} ${hour}시 ${minute}분` : '시간을 입력해주세요'}
        </TimeCheck>
      </Content>
    </AlarmModalContainer>,
    document.getElementById('portal')
  );
};

export default AlarmModal;
