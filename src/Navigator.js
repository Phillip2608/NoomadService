import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./routes/drawer.routes";

export default function Navigator() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
