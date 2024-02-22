import { useNavigation, useRoute } from "@react-navigation/native";

export const useRoutes = () => {
  const { navigate, goBack: navigateToPreviousScreen } = useNavigation();
  const route = useRoute();

  return {
    navigateToPlayers: (groupName: string) =>
      navigate("players", { groupName }),
    navigateToGroups: () => navigate("groups"),
    navigateToNewGroup: () => navigate("new-group"),
    navigateToPreviousScreen,
    route,
  };
};
