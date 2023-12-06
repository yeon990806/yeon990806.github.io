import styled from "styled-components";

const HomeHeader = () => {
  return <StyledHomeHeader>
    <StyledLogo onClick={() => location.reload()}>YeON</StyledLogo>
  </StyledHomeHeader>
};

const StyledHomeHeader = styled.header`
  padding: 16px;
`;

const StyledLogo = styled.a`
  display: inline-block;
  font-weight: 800;
  font-size: 28px;
  color: #272643;
  user-select: none;
  cursor: pointer;
  transform: skewX(-2deg);
`;

export default HomeHeader;