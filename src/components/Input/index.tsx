import type { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

interface Props extends TextInputProps {
  inputRef: React.MutableRefObject<TextInput | null>;
}

export const Input: React.FC<Props> = ({ inputRef, ...rest }) => {
  const { COLORS } = useTheme();

  return (
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      ref={inputRef}
      {...rest}
    />
  );
};
