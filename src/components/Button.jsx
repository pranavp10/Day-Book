import styled from '@emotion/styled';

import { COLOR_PRIMARY, CUBIC_BEZIER_TRANSITION } from '../utils/theme';

const Button = styled('button')(props => ({
  marginLeft: '15px',
  borderRadius: props.circular ? '50%' : 4,
  border: `1px solid ${props.theme.borderColor}`,
  transition: CUBIC_BEZIER_TRANSITION,
  cursor: 'pointer',
  color: 'inherit',
  '&:hover, &:focus': {
    outline: 0,
    color: COLOR_PRIMARY,
    borderColor: props.theme.borderHoverColor,
  },
}));

export default Button;
