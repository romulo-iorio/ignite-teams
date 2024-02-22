import { Container, Icon, Name } from "./styles";
import { ButtonIcon } from "../ButtonIcon";

interface Props {
  onRemovePlayer: () => void;
  name: string;
}

export const PlayerCard: React.FC<Props> = ({ name, onRemovePlayer }) => {
  return (
    <Container>
      <Icon name="person" />

      <Name>{name}</Name>

      <ButtonIcon iconName="close" type="SECONDARY" onPress={onRemovePlayer} />
    </Container>
  );
};
