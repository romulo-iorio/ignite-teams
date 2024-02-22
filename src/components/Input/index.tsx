import type { TextInputProps } from "react-native";

import { Container } from "./styles";

export const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};
