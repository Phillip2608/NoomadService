import { Tabs } from "expo-router";
import MenuTabBar from "../../components/menuTabBar";

export default function TabRoutesLayout() {
  return (
    <Tabs
      tabBar={(props) => <MenuTabBar {...props} />}
      initialRouteName="index"
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
        }}
      />
      <Tabs.Screen name="addService" />
      <Tabs.Screen
        name="menuProfile"
        options={{
          title: "Perfil",
        }}
      />
    </Tabs>
  );
}
