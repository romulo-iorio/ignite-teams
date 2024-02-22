import { FlatList } from "react-native";
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

import { Container, Form, ListHeader, NumberOfPlayers } from "./styles";
import { useRoutes } from "@routes/useRoutes";

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

  const [selectedTeam, setSelectedTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<PlayerProps[]>([
    { name: "Júlio", id: "1" },
    { name: "César", id: "2" },
    { name: "Júlia", id: "3" },
    { name: "Rafael", id: "4" },
    { name: "Lucas", id: "5" },
    { name: "Larissa", id: "6" },
    { name: "Márcia", id: "7" },
    { name: "Fernanda", id: "8" },
    { name: "João", id: "9" },
    { name: "Maria", id: "10" },
    { name: "Pedro", id: "11" },
    { name: "Paulo", id: "12" },
  ]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        subTitle="Adicione a galera e separe os times"
        title={groupName}
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon iconName="add" />
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
          keyExtractor={(item) => String(item)}
          data={["Time A", "Time B"]}
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
