import { Highlight, Header, GroupCard } from "@components";

import { Container } from "./styles";

export const Groups = () => {
  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subTitle="Jogue com a sua turma" />

      <GroupCard title="Galera do Ignite" />
    </Container>
  );
};
