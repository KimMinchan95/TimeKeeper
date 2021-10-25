import styled from 'styled-components';

const AlarmDescContainer = styled.section`
  height: 42vh;
  border-bottom: 1px solid;
`;

const AlarmTitle = styled.div`
`;

const AlarmDesc = () => {
  return (
    <AlarmDescContainer>
      <AlarmTitle>
        Alarm
      </AlarmTitle>
    </AlarmDescContainer>
  );
};

export default AlarmDesc;
