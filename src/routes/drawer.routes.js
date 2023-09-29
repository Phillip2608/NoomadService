import { createDrawerNavigator } from "@react-navigation/drawer";
import Servicos from "../screens/Servicos";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  <Drawer.Navigator initialRouteName="Servicos">
    <Drawer.Screen name="Servicos" component={Servicos} />
  </Drawer.Navigator>;
}
