import logoSrc from "@assets/logo.png";

import { Container, SubTitle, Title } from "./styles";

interface Props {
  subTitle: string;
  title: string;
}

export const Highlight: React.FC<Props> = ({ subTitle, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};
