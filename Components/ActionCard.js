import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ActionCard({ title, subtitle, color, onPress }) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 14,
    marginBottom: 16,
  },
  title: { fontSize: 18, fontWeight: "700", color: "#fff" },
  subtitle: { fontSize: 13, color: "#f0f0f0", marginTop: 4 },
});