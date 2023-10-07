import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";

import { MenuItemProfile } from "../../components/menuItemProfile";

import commonStyles from "../../commonStyles";

export default function MenuProfile() {
  return (
    <ScrollView style={styles.container}>
      <Link href="/profile/Conversation" asChild>
        <MenuItemProfile
          title="Conversas"
          subtitle="Visualizar novas conversas"
          iconName="home"
        />
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles.colors.azulPrincipal,
  },
  text: {
    fontSize: 40,
    fontWeight: "700",
    color: commonStyles.colors.brancoPrincipal,
  },
});
