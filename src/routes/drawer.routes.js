import { createDrawerNavigator } from "@react-navigation/drawer";
import Servicos from "../screens/Servicos";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Servicos">
      <Drawer.Screen name="Services" component={Servicos} />
    </Drawer.Navigator>
  );
}
