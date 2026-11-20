import { View, Text, StyleSheet } from "react-native";

export default function ContactItem({ name, phone }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { fontSize: 16, fontWeight: "600" },
  phone: { fontSize: 14, color: "#666", marginTop: 2 },
});