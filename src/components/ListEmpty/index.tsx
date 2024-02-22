import { Container, Message } from "./styles";

interface Props {
  message: string;
}

export const ListEmpty: React.FC<Props> = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};
