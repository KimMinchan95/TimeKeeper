import { useState } from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import { insertAlarm } from '../app/modules/alarm';

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
  @media screen and (max-width: 650px) {
    width: 100vw;
  }
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

const ChangeSound = styled.section`
  display: flex;
  width: 100%;
  height: 10%;
  font-size: 15px;
  text-align: right;
  div {
    flex: 3;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
  }
`;

const SoundSelectBox = styled(SelectBox)`
  flex: 5;
`;

const SoundButtonArea = styled.section`
  flex: 1;
  text-align: center;
`;

const SoundButton = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-top: 7.5px;
`;

const ErrMessage = styled.div`
  width: 100%;
  height: 10%;
  padding-top: 15px;
  text-align: center;
  border-top: 1px solid;
`;

const ButtonArea = styled.section`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
`;

const Submit = styled.button`
  text-align: center;
  font-size: 15px;
  padding: 5px 10px;
  background-color: #acc1f3;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #A6A8E0;
  }
`;

const CantSubmit = styled(Submit)`
  background-color: gray;
  :hover {
    background-color: gray;
  }
`;

const AlarmModal = ({ handleAlarmModal }) => {
  const [day, setDay] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [sound, setSound] = useState('/sounds/basic.mp3');
  const [play, setPlay] = useState(false);
  const [err, setErr] = useState(false);

  const dispatch = useDispatch();

  // Select Box를 위한 배열 생성
  const hours = [];
  const minutes = [];
  for (let i = 1; i <= 12; i++) {
    hours.push(i);
  }
  for (let i = 0; i <= 59; i++) {
    minutes.push(i);
  }

  // 실행을 위한 함수들
  const handleHour = (event) => {
    setHour(event.target.value);
  };
  const handleMinute = (event) => {
    setMinute(event.target.value);
  };
  const handleDay = (event) => {
    setDay(event.target.value);
  };
  const handleSound = (event) => {
    setSound(event.target.value);
    handlePlayFalse();
  };
  const handlePlayFalse = () => {
    setPlay(false);
  };
  const handlePlaySample = () => {
    setPlay(true);
    setTimeout(handlePlayFalse, 1000);
  };
  const handleErr = () => {
    setErr(true);
    const handleErrFalse = () => setErr(false);
    setTimeout(handleErrFalse, 2000);
  };

  // 리덕스
  const handleInsertAlarm = () => {
    dispatch(insertAlarm({
      day, hour, minute, sound
    }));
    handleAlarmModal();
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
          {day !== '' && hour !== '' && minute !== '' ? `알람시간: ${day} ${hour}시 ${minute}분` : '알람 시간을 입력해주세요'}
        </TimeCheck>
        <ChangeSound>
          <div>알람소리 설정</div>
          <SoundSelectBox name='sound' onChange={handleSound}>
            <option value='/sounds/basic.mp3'>basic</option>
            <option value='/sounds/school.mp3'>school</option>
            <option value='/sounds/tableClock.mp3'>tableClock</option>
            <option value='/sounds/warning.mp3'>warning</option>
          </SoundSelectBox>
          <SoundButtonArea>
            <SoundButton src='/images/play.png' onClick={handlePlaySample} />
          </SoundButtonArea>
          {play ? <audio src={sound} autoPlay><source type='audio/mpeg' /></audio> : null}
        </ChangeSound>
        <ErrMessage>
          {err ? '알람 시간을 선택해주셔야 합니다.' : null}
        </ErrMessage>
        <ButtonArea>
          {day !== '' && hour !== '' && minute !== '' ? <Submit onClick={handleInsertAlarm}>설정 완료</Submit> : <CantSubmit onClick={handleErr}>설정 필수</CantSubmit>}
        </ButtonArea>
      </Content>
    </AlarmModalContainer>,
    document.getElementById('portal')
  );
};

export default AlarmModal;
