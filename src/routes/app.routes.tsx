import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups, NewGroup, Players } from "@screens";

const { Navigator, Screen } = createNativeStackNavigator();

interface ScreenProps {
  name: string;
  component: React.FC;
}

const screens: ScreenProps[] = [
  { name: "groups", component: Groups },
  { name: "players", component: Players },
  { name: "new-group", component: NewGroup },
];

export const AppRoutes: React.FC = () => {
  const renderScreens = screens.map((screen) => (
    <Screen key={screen.name} name={screen.name} component={screen.component} />
  ));

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {renderScreens}
    </Navigator>
  );
};
