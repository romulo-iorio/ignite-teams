import { Highlight, Header, Button, Input } from "@components";

import { useRoutes } from "@routes/useRoutes";

import { Container, Content, Icon } from "./styles";

export const NewGroup = () => {
  const { navigateToPlayers } = useRoutes();

  const handleNewGroup = () => {
    navigateToPlayers("1");
  };

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

        <Button
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
          title="Criar"
        />
      </Content>
    </Container>
  );
};
