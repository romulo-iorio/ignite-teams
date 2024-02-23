import type { TextInput } from "react-native";
import { Alert, FlatList } from "react-native";
import { useRef, useState } from "react";

import {
  Button,
  ButtonIcon,
  Filter,
  Highlight,
  Header,
  Input,
  ListEmpty,
  PlayerCard,
} from "@components";

import type { RouteParams } from "@routes/useRoutes";
import type { PlayerTeam } from "@storage/players";
import { useRoutes } from "@routes/useRoutes";
import { removeGroup as removeGroupStorage } from "@storage/group";

import { Container, Form, ListHeader, NumberOfPlayers } from "./styles";
import { useNewPlayer } from "./hooks/useNewPlayer";
import { usePlayers } from "./hooks";

export const Players = () => {
  const { route, navigateToGroups } = useRoutes();
  const { groupName } = route.params as RouteParams;
  const newPlayerNameInputRef = useRef<TextInput | null>(null);

  const [selectedTeam, setSelectedTeam] = useState<PlayerTeam>("Time A");

  const { players, setPlayers, handleRemovePlayerFromGroup } = usePlayers({
    selectedTeam,
  });
  const { handleAddNewPlayerToTeam, newPlayerName, setNewPlayerName } =
    useNewPlayer({ selectedTeam, setPlayers, newPlayerNameInputRef });

  const removeGroup = async (groupName: string) => {
    try {
      await removeGroupStorage(groupName);

      navigateToGroups();
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Remover Grupo",
        "Não foi possível remover esse grupo. Tente novamente."
      );
    }
  };

  const handleRemoveGroup = () => {
    Alert.alert("Remover", "Tem certeza que deseja remover esse grupo?", [
      {
        text: "Não, cancelar!",
        style: "cancel",
      },
      {
        onPress: () => removeGroup(groupName),
        text: "Sim, remover!",
        style: "destructive",
      },
    ]);
  };

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        subTitle="Adicione a galera e separe os times"
        title={groupName}
      />

      <Form>
        <Input
          onSubmitEditing={handleAddNewPlayerToTeam}
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          autoCorrect={false}
          placeholder="Nome da pessoa"
        />

        <ButtonIcon iconName="add" onPress={handleAddNewPlayerToTeam} />
      </Form>

      <ListHeader>
        <FlatList
          renderItem={({ item }) => (
            <Filter
              onPress={() => setSelectedTeam(item)}
              isActive={selectedTeam === item}
              title={item}
            />
          )}
          data={["Time A", "Time B"] as PlayerTeam[]}
          keyExtractor={(item) => String(item)}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </ListHeader>

      <FlatList
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada. Que tal cadastrar a primeira turma?" />
        )}
        renderItem={({ item }) => (
          <PlayerCard
            onRemovePlayer={() => handleRemovePlayerFromGroup(item.id)}
            name={item.name}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          players.length === 0 && { flex: 1 },
          { paddingBottom: 100 },
        ]}
        data={players}
      />

      <Button
        onPress={handleRemoveGroup}
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  );
};
