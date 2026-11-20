import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import { dummyContacts } from "../Services/dummyContacts";

export default function SOSScreen() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSOS = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied", "Location access is needed for SOS.");
      setLoading(false);
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc.coords);
    setLoading(false);

    Alert.alert(
      "SOS Sent!",
      `Your location has been shared with ${dummyContacts.length} trusted contacts.`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.warning}>Press the button below in case of emergency</Text>

      <TouchableOpacity style={styles.sosButton} onPress={handleSOS} disabled={loading}>
        <Text style={styles.sosText}>{loading ? "Sending..." : "SOS"}</Text>
      </TouchableOpacity>

      {location && (
        <View style={styles.locationBox}>
          <Text style={styles.locationText}>📍 Lat: {location.latitude.toFixed(4)}</Text>
          <Text style={styles.locationText}>📍 Long: {location.longitude.toFixed(4)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  warning: { fontSize: 15, color: "#555", marginBottom: 30, textAlign: "center" },
  sosButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#d32f2f",
    alignItems: "center",
    justifyContent: "center",
  },
  sosText: { color: "#fff", fontSize: 28, fontWeight: "bold" },
  locationBox: { marginTop: 30, alignItems: "center" },
  locationText: { fontSize: 14, color: "#333" },
});