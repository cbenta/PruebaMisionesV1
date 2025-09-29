import { StyleSheet, Text, View } from "react-native";

export default function MissionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Misiones</Text>
      <Text style={styles.body}>Proximamente veras tus misiones aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
