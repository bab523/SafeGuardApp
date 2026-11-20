import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { checkScam } from "../utils/scamDetector";

export default function ScamCheckerScreen() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (!message.trim()) return;
    const res = checkScam(message);
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paste a message to check</Text>
      <TextInput
        style={styles.input}
        placeholder="Paste SMS or message here..."
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleCheck}>
        <Text style={styles.buttonText}>Check for Scam</Text>
      </TouchableOpacity>

      {result && (
        <View
          style={[
            styles.resultBox,
            { backgroundColor: result.isScam ? "#ffebee" : "#e8f5e9" },
          ]}
        >
          <Text style={styles.resultText}>
            {result.isScam ? "⚠️ Suspicious Message" : "✅ Looks Safe"}
          </Text>
          <Text style={styles.riskText}>Risk Level: {result.riskLevel}</Text>
          {result.matchedWords.length > 0 && (
            <Text style={styles.matched}>
              Flagged words: {result.matchedWords.join(", ")}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 14,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#388e3c",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
  resultBox: { marginTop: 20, padding: 16, borderRadius: 10 },
  resultText: { fontSize: 16, fontWeight: "700" },
  riskText: { fontSize: 14, marginTop: 4 },
  matched: { fontSize: 13, color: "#555", marginTop: 6 },
});