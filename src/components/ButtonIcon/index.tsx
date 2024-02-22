import type { TouchableOpacityProps } from "react-native";
import type { MaterialIcons } from "@expo/vector-icons";

import { ButtonIconStyle, Container, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  type?: ButtonIconStyle;
  iconName: keyof typeof MaterialIcons.glyphMap;
}

export const ButtonIcon: React.FC<Props> = ({
  type = "PRIMARY",
  iconName,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Icon name={iconName} type={type} />
    </Container>
  );
};
