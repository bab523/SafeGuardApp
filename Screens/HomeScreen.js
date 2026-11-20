import { View, Text, StyleSheet, ScrollView } from "react-native";
import ActionCard from "../Components/ActionCard";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hi, stay safe today 👋</Text>

      <ActionCard
        title="🚨 SOS Emergency"
        subtitle="Send your location instantly to trusted contacts"
        color="#d32f2f"
        onPress={() => navigation.navigate("SOS")}
      />

      <ActionCard
        title="📇 Trusted Contacts"
        subtitle="Manage your emergency contacts"
        color="#1976d2"
        onPress={() => navigation.navigate("Contacts")}
      />

      <ActionCard
        title="🔍 Scam Checker"
        subtitle="Check if a message or link is a scam"
        color="#388e3c"
        onPress={() => navigation.navigate("ScamChecker")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  greeting: { fontSize: 22, fontWeight: "700", marginBottom: 20, marginTop: 10 },
});