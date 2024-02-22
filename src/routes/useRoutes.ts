import { useNavigation } from "@react-navigation/native";

export const useRoutes = () => {
  const { navigate } = useNavigation();

  return {
    navigateToPlayers: (groupId: string) => navigate("players", { groupId }),
    navigateToGroups: () => navigate("groups"),
    navigateToNewGroup: () => navigate("new-group"),
  };
};
