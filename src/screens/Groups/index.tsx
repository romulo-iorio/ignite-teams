import { useState } from "react";

import { Highlight, Header, GroupCard } from "@components";

import { Container } from "./styles";
import { FlatList } from "react-native";

interface GroupProps {
  groupName: string;
  id: string;
}

export const Groups = () => {
  const [groups, setGroups] = useState<GroupProps[]>([
    { id: "1", groupName: "Galera do Ignite" },
    { id: "2", groupName: "Galera do React" },
    { id: "3", groupName: "Galera do Node" },
  ]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subTitle="Jogue com a sua turma" />

      <FlatList
        renderItem={({ item }) => <GroupCard title={item.groupName} />}
        keyExtractor={(item) => item.id}
        data={groups}
      />
    </Container>
  );
};
