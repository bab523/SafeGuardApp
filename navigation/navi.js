import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";
import SOSScreen from "../Screens/SOSScreen";
import ContactsScreen from "../Screens/ContactsScreen";
import ScamCheckerScreen from "../Screens/ScamCheckerScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "SafeGuard" }} />
        <Stack.Screen name="SOS" component={SOSScreen} options={{ title: "Emergency SOS" }} />
        <Stack.Screen name="Contacts" component={ContactsScreen} options={{ title: "Trusted Contacts" }} />
        <Stack.Screen name="ScamChecker" component={ScamCheckerScreen} options={{ title: "Scam Checker" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}