import { ComponentProps } from 'react';
import { StyledComponent } from 'styled-components';
import { CheckBoxContainer, HiddenCheckbox, StyledCheckbox } from '../styles/CheckBox';

type Props = ComponentProps<StyledComponent<'input', any, {}>>;

const Checkbox: React.FC<Props> = ({ checked, ...props }) => (
  <CheckBoxContainer>
    <HiddenCheckbox {...props} type='checkbox' checked={checked} />
    <StyledCheckbox checked={checked} />
  </CheckBoxContainer>
);

export default Checkbox;
