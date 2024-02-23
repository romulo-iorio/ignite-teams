import { Alert, FlatList } from "react-native";
import { useEffect, useMemo, useState } from "react";

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

import type { PlayerTeam } from "@storage/players";
import type { RouteParams } from "@routes/useRoutes";
import { useRoutes } from "@routes/useRoutes";

import { Container, Form, ListHeader, NumberOfPlayers } from "./styles";
import { useNewPlayer } from "./hooks/useNewPlayer";
import { usePlayers } from "./hooks";

export const Players = () => {
  const { route } = useRoutes();
  const { groupName } = route.params as RouteParams;

  const [selectedTeam, setSelectedTeam] = useState<PlayerTeam>("Time A");

  const { players, setPlayers } = usePlayers({ selectedTeam });
  const { handleAddNewPlayerToTeam, newPlayerName, setNewPlayerName } =
    useNewPlayer({ selectedTeam, setPlayers });

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
