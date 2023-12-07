import Button from "../common/Button";
import styled from "styled-components";
import HomeNavigation from "./HomeNavigation";
import useHomeNavigation from "../../hook/useHome";

const HomeHeader = () => {
  const { innerWidth } = useHomeNavigation();

  return <StyledHomeHeader>
    <StyledLogo onClick={() => location.reload()}>
      <span>
        &lt;/&gt;
      </span>
      YeON
    </StyledLogo>
    { innerWidth >= 600 && <HomeNavigation /> }
  </StyledHomeHeader>
};

const StyledHomeHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  z-index: 10;
`;

const StyledLogo = styled.a`
  display: inline-block;
  font-weight: 400;
  font-size: 28px;
  color: #f5f7fa;
  user-select: none;
  cursor: pointer;
  transform: skewX(-2deg);

  span {
    margin-right: 8px;
    color: #4ea5ff;
  }

  @media (max-width: 599px) {
    font-size: 20px;
  }
`;

export default HomeHeader;