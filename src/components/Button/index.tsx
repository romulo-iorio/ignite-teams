import type { TouchableOpacityProps } from "react-native";

import { ButtonStyle, Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonStyle;
}

export const Button: React.FC<Props> = ({
  type = "PRIMARY",
  title,
  ...rest
}) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
