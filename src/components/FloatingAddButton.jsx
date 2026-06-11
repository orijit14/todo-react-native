import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

const FloatingAddButton = () => {
  return (
    <Pressable style={styles.button} onPress={() => router.push("/add-task")}>
      <MaterialCommunityIcons name="plus" color="#fff" size={40} />
    </Pressable>
  );
};

export default FloatingAddButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "#675AEB",
    bottom: 60,
    borderRadius: 35,
    alignSelf: "center",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    elevation: 15,
    shadowColor: "#675AEB",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});
