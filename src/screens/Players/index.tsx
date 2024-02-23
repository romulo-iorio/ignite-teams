import { Alert, FlatList } from "react-native";
import { useState } from "react";

import {
  Highlight,
  Header,
  Button,
  Input,
  ButtonIcon,
  Filter,
  PlayerCard,
  ListEmpty,
} from "@components";

import type { PlayerStorageDTO, PlayerTeam } from "@storage/players";
import { Container, Form, ListHeader, NumberOfPlayers } from "./styles";
import { generateRandomId } from "@utils/generateRandomId";
import { addPlayerByGroup } from "@storage/players";
import { useRoutes } from "@routes/useRoutes";
import { AppError } from "@utils/AppError";

interface PlayerProps {
  name: string;
  id: string;
}

type RouteParams = {
  groupName: string;
};

export const Players = () => {
  const { route } = useRoutes();
  const { groupName } = route.params as RouteParams;

  const [selectedTeam, setSelectedTeam] = useState<PlayerTeam>("Time A");
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [players, setPlayers] = useState<PlayerProps[]>([]);

  const handleAddNewPlayerToTeam = async () => {
    const trimmedPlayerName = newPlayerName.trim();

    try {
      if (!trimmedPlayerName)
        throw new AppError("O nome do jogador é obrigatório.");

      const newPlayer: PlayerStorageDTO = {
        createdAt: Date.now(),
        team: selectedTeam,
        name: trimmedPlayerName,
        id: generateRandomId(),
      };

      await addPlayerByGroup(newPlayer, groupName);

      setPlayers((oldPlayers) => [...oldPlayers, newPlayer]);
      setNewPlayerName("");
    } catch (error) {
      const isAppError = error instanceof AppError;

      if (isAppError) return Alert.alert("Nova Pessoa", error.message);

      console.error(error);
      Alert.alert(
        "Nova Pessoa",
        "Não foi possível adicionar uma pessoa a esse time desse grupo."
      );
    }
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
          <PlayerCard name={item.name} onRemovePlayer={() => {}} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          players.length === 0 && { flex: 1 },
          { paddingBottom: 100 },
        ]}
        data={players}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
};
