import { View, Text, StyleSheet } from "react-native";

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Serviços</Text>
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