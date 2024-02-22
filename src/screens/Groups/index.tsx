import { FlatList } from "react-native";
import { useState } from "react";

import { Highlight, Header, GroupCard, ListEmpty, Button } from "@components";

import { Container } from "./styles";
import { useRoutes } from "@routes/useRoutes";

interface GroupProps {
  groupName: string;
  id: string;
}

export const Groups = () => {
  const { navigateToNewGroup } = useRoutes();

  const [groups, setGroups] = useState<GroupProps[]>([
    { id: "1", groupName: "Galera do Ignite" },
    { id: "2", groupName: "Galera do React" },
    { id: "3", groupName: "Galera do Node" },
  ]);

  const handleNewGroup = () => navigateToNewGroup();

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subTitle="Jogue com a sua turma" />

      <FlatList
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada. Que tal cadastrar a primeira turma?" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        renderItem={({ item }) => <GroupCard title={item.groupName} />}
        keyExtractor={(item) => item.id}
        data={groups}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
};
