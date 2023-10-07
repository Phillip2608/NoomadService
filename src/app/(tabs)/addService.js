import { Text, View, StyleSheet } from "react-native";

export default function AddService() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Adicionar Serviço</Text>
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
    fontSize: 40,
    fontWeight: "700",
  },
});
