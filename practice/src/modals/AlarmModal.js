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
  display: flex;
  position: fixed;
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
  top: 28px;
  right: 10px;
  width: 20px;
  cursor: pointer;
`;

const AlarmModal = ({ handleAlarmModal }) => {
  return ReactDom.createPortal(
    <AlarmModalContainer>
      <ModalBack onClick={handleAlarmModal} />
      <Content>
        <Header>알람 설정
          <ModalX src='images/modalX.png' onClick={handleAlarmModal} />
        </Header>
      </Content>
    </AlarmModalContainer>,
    document.getElementById('portal')
  );
};

export default AlarmModal;
