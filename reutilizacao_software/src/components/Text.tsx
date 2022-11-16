import styled from 'styled-components';
import { ColorProps, flex, FlexProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';

type TextProps = TypographyProps & SpaceProps & ColorProps & FlexProps;

export const Text = styled.p<TextProps>`
  font-family: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  border-bottom: 1px solid #D9D9D9;
  ${flex}
  ${typography}
  ${space}
`;