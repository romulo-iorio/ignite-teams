import { Highlight, Header, Button, Input } from "@components";
import { useState } from "react";

import { createGroup } from "@storage/group/createGroup";
import { useRoutes } from "@routes/useRoutes";
import { AppError } from "@utils/AppError";

import { Container, Content, Icon } from "./styles";
import { Alert } from "react-native";

export const NewGroup = () => {
  const { navigateToPlayers } = useRoutes();
  const [groupName, setGroupName] = useState<string>("");

  const handleNewGroup = async () => {
    try {
      if (!groupName.trim())
        throw new AppError("O nome do grupo é obrigatório.");

      await createGroup(groupName);
      navigateToPlayers(groupName);
    } catch (error) {
      const isAppError = error instanceof AppError;

      if (isAppError) return Alert.alert("Novo Grupo", error.message);

      console.error(error);
      Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
    }
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
