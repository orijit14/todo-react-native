import { StyleSheet } from "react-native";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";

export default function Index() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f9f8fd",
  },
  welcome: {
    color: "#a7a9b8",
    textAlign: "center",
  },
});
