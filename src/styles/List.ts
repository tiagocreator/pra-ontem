import styled from 'styled-components';

import { IconButton } from './Buttons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 460px;
`;

export const ListContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;

  @media (min-width: 460px) {
    padding: 45px 24px;
  }
`;

export const ListItem = styled.label`
  align-items: center;
  display: flex;
  font-size: 18px;
  padding: 4px 0;
`;

export const DeleteButton = styled(IconButton)`
  visibility: visible;
  @media (min-width: 460px) {
    visibility: hidden;
    ${ListItem}:hover & {
      visibility: visible;
    }
  }
`;

export const TaskInput = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 6px;
  color: #fff;
  padding: 20px 24px;
`;
