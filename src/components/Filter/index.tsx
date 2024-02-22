import type { TouchableOpacityProps } from "react-native";

import type { FilterProps } from "./styles";
import { Container, Title } from "./styles";

type Props = TouchableOpacityProps &
  FilterProps & {
    title: string;
  };

export const Filter: React.FC<Props> = ({
  title,
  isActive = false,
  ...rest
}) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
