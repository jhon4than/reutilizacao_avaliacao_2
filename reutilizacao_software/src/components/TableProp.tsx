import styled from "styled-components";
import {
  BorderProps,
  BorderRadiusProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  space,
  flexbox,
  layout,
  color,
  borderRadius,
  border,
  position,
  overflow
} from "styled-system";

type TableProps = LayoutProps &
  ColorProps &
  BorderRadiusProps &
  BorderProps &
  SpaceProps & {};

export const TableProp = styled.table<TableProps>`
  font-size: "Poppins";
  position: absolute;
  ${overflow}
  ${flexbox}
  ${layout}
  ${space}
  ${color}
  ${borderRadius}
  ${border}
  ${position}
`;
