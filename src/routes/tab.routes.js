import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import AddService from "../screens/AddService";
import Menu from "../screens/Menu";
import CustomTabBar from "../components/tabBar/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        freezeOnBlur: true,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddService" component={AddService} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
}
