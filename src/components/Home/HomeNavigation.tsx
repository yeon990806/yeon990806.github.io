import { m } from "framer-motion";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const MENU_LIST = [
  "home",
  "abount",
  "blog",
  "portfolio",
  "contact",
];

const HomeNavigation = () => {
  const location = useLocation();

  return (
    <StyledNav>
      {MENU_LIST.map((v, i) => (
        <StyledLink
          href={`#${v}`}
          key={`home-nav-item-${i}`}
          className={location.hash.indexOf(v) > -1 ? "active" : ""}
        >
          {v}
        </StyledLink>
      ))}
  </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  font-inherit;
  font-size: 20px;
  color: #b3c2d9;
  overflow: hidden;

  &:not(.active):hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #b3c2d9;
    border-radius: 2px;
    animation-duration: 0.4s;
    animation-timing-function: ease-in;
    animation-name: anim;
  }

  &.active {
    color: #d4dde9;
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #f5f7fa;
    border-radius: 2px;
  }

  @keyframes anim {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0%);
    }
  }

  a::
`;

export default HomeNavigation;