import styled from 'styled-components';
import { colors } from '../globalStyles';

export const Button = styled.button`
  background: ${colors.primary};
  border: none;
  border-radius: 6px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #000;
  height: 46px;
  padding-inline: 30px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
`;

export const TextButton = styled.button`
  background: none;
  border: none;
  font-size: 19px;
  font-weight: bold;
  color: #fff;
`;
