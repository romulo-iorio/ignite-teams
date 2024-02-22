import { Container, Logo } from "./styles";

import logoSrc from "@assets/logo.png";

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo source={logoSrc} />
    </Container>
  );
};
