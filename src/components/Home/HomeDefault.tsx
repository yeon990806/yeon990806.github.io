import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeDefault = () => (
  <section className="home-section" id="home">
    <StyledContainer className="container">
      <StyledImg />
      <StyledInfo>
          <StyledBar />
          <h1>
            Doyeon Kim
          </h1>
          <h2>
            Web Front Developer
          </h2>
          <p>
            I like to improve the user experience and<br />
            study new technologies that are on the trend.
          </p>
        </StyledInfo>
        <StyledArticleContainer>
          <article>
            <h6>ABOUT ME</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
            </p>
            <Link to="">
              LEARN MORE
            </Link>
          </article>
          <article>
            <h6>MY WORK</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
            </p>
            <Link to="">
              LEARN MORE
            </Link>
          </article>
        </StyledArticleContainer>
    </StyledContainer>
  </section>
);

const StyledContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  p {
    margin-top: 16px;
    font-size: 20px;
    font-weight: 500;
    color: #b9b9b9;
    line-height: 1.25;
    max-width: 480px;
  }
`;

const StyledImg = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 40%;
  aspect-ratio: 8/7;
  /*background-image: url('/assets/images/home_img.jpg');*/
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  background-position: center center;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`;

const StyledBar = styled.div`
  margin-bottom: 16px;
  width: 8vw;
  height: 4px;
  background-color: #f5f7fa;
  border-radius: 1px;
`;

const StyledInfo = styled.div`
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #f5f7fa;
  }

  h2 {
    margin-top: 8px;
    font-size: 28px;
    font-weight: 400;
    color: #e7e7e7;
  }
`;

const StyledArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  article {
    h6 {
      font-size: 24px;
      font-weight: 700;
      color: #f5f7fa;
    }

    a {
      position: relative;
      display: inline-block;
      padding: 8px 4px;
      margin-top: 24px;
      font: inherit;
      color: #f5f7fa;
      text-decoration: none;
      overflow: hidden;

      &:hover::after {
        animation-duration: 0.8s;
        animation-timing-function: ease-in;
        animation-name: anim;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #f5f7fa;
      }
    }
  }

  @keyframes anim {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0%);
    }
  }
`;

export default HomeDefault;