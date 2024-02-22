import logoSrc from "@assets/logo.png";

import { BackButton, BackIcon, Container, Logo } from "./styles";
import { useRoutes } from "@routes/useRoutes";

interface Props {
  showBackButton?: boolean;
}

export const Header: React.FC<Props> = ({ showBackButton = false }) => {
  const { navigateToGroups } = useRoutes();

  return (
    <Container showBackButton={showBackButton}>
      {showBackButton && (
        <BackButton onPress={navigateToGroups}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoSrc} />
    </Container>
  );
};
