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
} from "@components";

import { Container, Form, ListHeader, NumberOfPlayers } from "./styles";

interface PlayerProps {
  name: string;
  id: string;
}

export const Players = () => {
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
  ]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        subTitle="Adicione a galera e separe os times"
        title="Nome da turma"
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
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemovePlayer={() => {}} />
        )}
        keyExtractor={(item) => item.id}
        data={players}
      />
    </Container>
  );
};
