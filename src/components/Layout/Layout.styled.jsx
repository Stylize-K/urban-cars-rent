import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const StyledLink = styled(NavLink)`
  padding-top: 24px;
  padding-bottom: 24px;

  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;

  &.active {
    color: #3470ff;
    cursor: default;
  }

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
