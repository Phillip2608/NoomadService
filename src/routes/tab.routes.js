import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import AddService from "../screens/AddService";
import CustomTabBar from "../components/tabBar/CustomTabBar";
import DrawerRoutes from "./drawer.routes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddService" component={AddService} />
      <Tab.Screen name="Menu">
        {(props) => <DrawerRoutes {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
