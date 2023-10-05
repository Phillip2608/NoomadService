import { View, Text, StyleSheet } from "react-native";

import commonStyles from "../commonStyles";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: commonStyles.colors.azulPrincipal,
  },
  text: {
    fontSize: 20,
    color: "#FFF",
  },
});
