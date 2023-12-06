import Button from "../common/Button";
import styled from "styled-components";

const HomeHeader = () => {
  return <StyledHomeHeader>
    <StyledLogo onClick={() => location.reload()}>
      <span>
        &lt;/&gt;
      </span>
      YeON
    </StyledLogo>
  </StyledHomeHeader>
};

const StyledHomeHeader = styled.header`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.a`
  display: inline-block;
  font-weight: 800;
  font-size: 28px;
  color: #f5f7fa;
  user-select: none;
  cursor: pointer;
  transform: skewX(-2deg);

  span {
    color: #4ea5ff;
  }
`;

export default HomeHeader;