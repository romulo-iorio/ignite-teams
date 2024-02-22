import { Highlight, Header, Button, Input, ButtonIcon } from "@components";

import { Container } from "./styles";

export const Players = () => {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        subTitle="Adicione a galera e separe os times"
        title="Nome da turma"
      />

      <Input placeholder="Nome da turma" />

      <ButtonIcon iconName="add" />
    </Container>
  );
};
