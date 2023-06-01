import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../globalStyles';

export const Nav = styled.nav`
  display: flex;
  margin-block-end: 45px;
`;

export const Button = styled(NavLink)`
  align-items: center;
  background: #000;
  color: #fff;
  display: flex;
  width: 120px;
  height: 62px;
  justify-content: center;
  text-decoration: none;

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  &.active {
    background: ${colors.primary};
    color: #000;
  }
`;
