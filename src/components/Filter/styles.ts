import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export interface FilterProps {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterProps>`
  margin-right: 12px;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 70px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
      border-radius: 4px;
    `}
`;

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.WHITE};
    `}
`;
