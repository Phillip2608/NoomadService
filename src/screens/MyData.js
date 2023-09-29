import { View, Text, StyleSheet } from "react-native";

export default function MyData() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meus Dados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#222",
  },
});
