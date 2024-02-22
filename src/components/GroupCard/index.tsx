import type { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export const GroupCard: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon />

      <Title>{title}</Title>
    </Container>
  );
};
