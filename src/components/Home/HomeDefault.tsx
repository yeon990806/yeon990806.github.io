import styled from "styled-components";

const HomeDefault = () => (
  <section className="home-section" id="home">
    <StyledContainer className="container">
      <StyledImg />
      <StyledTitle>
        Doyeon Kim
      </StyledTitle>
      <StyledSubTitle>
        Web Front Developer
      </StyledSubTitle>
    </StyledContainer>
  </section>
);

const StyledContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImg = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 40%;
  aspect-ratio: 8/7;
  background-image: url('/assets/images/home_img.jpg');
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  background-position: center center;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`;

const StyledTitle = styled.h1`
  margin-left: 24px;
  font-size: 48px;
  font-weight: 700;
  color: #f5f7fa;
`;

const StyledSubTitle = styled.h2`
  margin-left: 24px;
  margin-top: 8px;
  font-size: 28px;
  font-weight: 400;
  color: #e7e7e7;
`;

export default HomeDefault;