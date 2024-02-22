import { Highlight, Header, Button, Input } from "@components";

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

        <Input placeholder="Nome da turma" />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
};
