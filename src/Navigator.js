import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./routes/drawer.routes";
import TabRoutes from "./routes/tab.routes";

export default function Navigator() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
