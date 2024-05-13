import styled from '@emotion/styled';

const FirstRound = styled.div`
  width: 900px;
  height: 900px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    var(--color-navy),
    var(--color-revolver)
  );
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1023px) {
    width: 700px;
    height: 700px;
  }

  @media (max-width: 767px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

const SecondRound = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 1000px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #2a2545, var(--color-revolver));

  @media (max-width: 1023px) {
    width: 800px;
    height: 800px;
  }

  @media (max-width: 767px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 500px) {
    width: 400px;
    height: 400px;
  }
`;

const ThirdRound = styled.div`
  position: relative;
  margin-top: 165px;
  width: 1100px;
  height: 1100px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #241a38, var(--color-revolver));

  @media (max-width: 1023px) {
    width: 900px;
    height: 900px;
  }

  @media (max-width: 767px) {
    width: 700px;
    height: 700px;
  }

  @media (max-width: 500px) {
    width: 500px;
    height: 500px;
  }
`;

const MainRound = () => {
  return (
    <>
      <ThirdRound>
        <SecondRound>
          <FirstRound />
        </SecondRound>
      </ThirdRound>
    </>
  );
};

export default MainRound;
