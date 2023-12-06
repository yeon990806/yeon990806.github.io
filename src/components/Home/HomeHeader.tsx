import Button from "../common/Button";
import styled from "styled-components";
import HomeNavigation from "./HomeNavigation";

const HomeHeader = () => {
  return <StyledHomeHeader>
    <StyledLogo onClick={() => location.reload()}>
      <span>
        &lt;/&gt;
      </span>
      YeON
    </StyledLogo>
    <HomeNavigation />
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
`;

export default HomeHeader;