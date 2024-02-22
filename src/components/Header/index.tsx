import logoSrc from "@assets/logo.png";

import { BackButton, BackIcon, Container, Logo } from "./styles";

interface Props {
  showBackButton?: boolean;
}

export const Header: React.FC<Props> = ({ showBackButton = false }) => {
  return (
    <Container showBackButton={showBackButton}>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoSrc} />
    </Container>
  );
};
