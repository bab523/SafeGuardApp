import { View, Text, FlatList, StyleSheet } from "react-native";
import ContactItem from "../Components/ContactItem";
import { dummyContacts } from "../Services/dummyContacts";

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trusted Contacts</Text>
      <FlatList
        data={dummyContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactItem name={item.name} phone={item.phone} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 16 },
});