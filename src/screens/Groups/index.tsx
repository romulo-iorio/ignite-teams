import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";

import { Highlight, Header, GroupCard, ListEmpty, Button } from "@components";
import { getAllGroups } from "@storage/group";
import { useRoutes } from "@routes/useRoutes";
import { Group } from "src/@types/Group";

import { Container } from "./styles";

const fetchGroups = async (
  setGroups: React.Dispatch<React.SetStateAction<Group[]>>
) => {
  const groups = await getAllGroups();
  const orderedGroups = groups.sort((a, b) => b.createdAt - a.createdAt);
  setGroups(orderedGroups);
};

export const Groups = () => {
  const { navigateToNewGroup, navigateToPlayers } = useRoutes();

  const [groups, setGroups] = useState<Group[]>([]);

  useFocusEffect(
    useCallback(() => {
      fetchGroups(setGroups);
    }, [])
  );

  const handleOpenGroup = (groupName: string) => navigateToPlayers(groupName);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subTitle="Jogue com a sua turma" />

      <FlatList
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada. Que tal cadastrar a primeira turma?" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        renderItem={({ item }) => (
          <GroupCard
            onPress={() => handleOpenGroup(item.name)}
            title={item.name}
          />
        )}
        keyExtractor={(item) => item.id}
        data={groups}
      />

      <Button title="Criar nova turma" onPress={navigateToNewGroup} />
    </Container>
  );
};
