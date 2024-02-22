import { Highlight, Header, Button } from "@components";

import { Container, Content, Icon } from "./styles";

export const NewGroup = () => {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          subTitle="Cria a turma para adicionar as pessoas"
          title="Nova turma"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  );
};
