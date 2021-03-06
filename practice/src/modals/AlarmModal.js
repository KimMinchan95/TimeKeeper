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

  // Select Box??? ?????? ?????? ??????
  const hours = [];
  const minutes = [];
  for (let i = 1; i <= 12; i++) {
    hours.push(i);
  }
  for (let i = 0; i <= 59; i++) {
    minutes.push(i);
  }

  // ????????? ?????? ?????????
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

  // ?????????
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
        <Header>?????? ??????
          <ModalX src='images/modalX.png' onClick={handleAlarmModal} />
        </Header>
        <TimeDesc>
          <div>AM|PM</div>
          <div>??????</div>
          <div>???</div>
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
              <option value=''>??????</option>
              {hours.map(el => <option value={el} key={el}>{el}</option>)}
            </SelectBox>
          </SelectArea>
          <SelectArea>
            <SelectBox name='hour' onChange={handleMinute}>
              <option value=''>???</option>
              {minutes.map(el => <option value={el} key={el}>{el}</option>)}
            </SelectBox>
          </SelectArea>
        </TimeSelect>
        <TimeCheck>
          {day !== '' && hour !== '' && minute !== '' ? `????????????: ${day} ${hour}??? ${minute}???` : '?????? ????????? ??????????????????'}
        </TimeCheck>
        <ChangeSound>
          <div>???????????? ??????</div>
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
          {err ? '?????? ????????? ?????????????????? ?????????.' : null}
        </ErrMessage>
        <ButtonArea>
          {day !== '' && hour !== '' && minute !== '' ? <Submit onClick={handleInsertAlarm}>?????? ??????</Submit> : <CantSubmit onClick={handleErr}>?????? ??????</CantSubmit>}
        </ButtonArea>
      </Content>
    </AlarmModalContainer>,
    document.getElementById('portal')
  );
};

export default AlarmModal;
