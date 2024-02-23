import { Highlight, Header, Button, Input } from "@components";
import { useState } from "react";

import { useRoutes } from "@routes/useRoutes";
import { createGroup } from "@storage/group";
import { AppError } from "@utils/AppError";

import { Container, Content, Icon } from "./styles";
import { Alert } from "react-native";

export const NewGroup = () => {
  const { navigateToPlayers } = useRoutes();
  const [groupName, setGroupName] = useState<string>("");

  const handleNewGroup = async () => {
    const trimmedGroupName = groupName.trim();

    try {
      if (!trimmedGroupName)
        throw new AppError("O nome da turma é obrigatório.");

      await createGroup(trimmedGroupName);
      navigateToPlayers(trimmedGroupName);
    } catch (error) {
      const isAppError = error instanceof AppError;

      if (isAppError) return Alert.alert("Nova Turma", error.message);

      console.error(error);
      Alert.alert("Nova Turma", "Não foi possível criar um nova turma.");
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
          onSubmitEditing={handleNewGroup}
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
