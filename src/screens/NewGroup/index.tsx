import { Highlight, Header, Button, Input } from "@components";
import { useState } from "react";

import { createGroup } from "@storage/group/createGroup";
import { useRoutes } from "@routes/useRoutes";

import { Container, Content, Icon } from "./styles";

export const NewGroup = () => {
  const { navigateToPlayers } = useRoutes();
  const [groupName, setGroupName] = useState<string>("");

  const handleNewGroup = async () => {
    await createGroup(groupName);
    navigateToPlayers(groupName);
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

        <Input
          placeholder="Nome da turma"
          onChangeText={setGroupName}
          value={groupName}
        />

        <Button
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
          title="Criar"
        />
      </Content>
    </Container>
  );
};
