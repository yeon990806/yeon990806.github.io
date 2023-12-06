import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useHomeNavigation from "../../hook/useHome";

interface HomeNavigationProps {
  isMobile?: boolean;
}

const MENU_LIST = [
  "home",
  "about",
  "blog",
  "portfolio",
  "contact",
];

const HomeNavigation = ({
  isMobile
}: HomeNavigationProps) => {
  const location = useLocation();

  return (
    <StyledNav className={isMobile ? "mobile" : "desktop"}>
      {MENU_LIST.map((v, i) => (
        <a
          href={`#${v}`}
          key={`home-nav-item-${i}`}
          className={location.hash.indexOf(v) > -1 ? "active" : ""}
        >
          {v}
        </a>
      ))}
  </StyledNav>
  )
}

const StyledNav = styled.nav`
  &.desktop {
    display: flex;
    flex-direction: row;
    gap: 24px;

    a {
      position: relative;
      font-size: 20px;
      overflow: hidden;
      transition: 0.4s ease-in;
      letter-spacing: 0.8px;
    
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
    }
  }

  &.mobile {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    background-color: #292f36;

    a {
      padding: 17px 0;
      font-size: 12px;
    }
  }

  a {
    text-decoration: none;
    font-inherit;
    color: #b3c2d9;

    &.active {
      color: #d4dde9;
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
export default HomeNavigation;