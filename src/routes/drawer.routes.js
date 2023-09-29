import { createDrawerNavigator } from "@react-navigation/drawer";

//Customização do Drawer
import CustomDrawerContent from "../components/CustomDrawer";

//Minhas telas
import Services from "../screens/Services";
import Conversations from "../screens/Conversations";
import MyData from "../screens/MyData";
import Notifications from "../screens/Notifications";
import commonStyles from "../commonStyles";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Services"
      screenOptions={{ drawerStyle: { width: "80%" } }}
    >
      <Drawer.Screen name="Conversations" component={Conversations} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="MyData" component={MyData} />
    </Drawer.Navigator>
  );
}
