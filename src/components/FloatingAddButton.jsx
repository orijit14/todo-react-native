import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const FloatingAddButton = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.glow, { bottom: insets.bottom + 80 }]}>
      <Pressable style={styles.button} onPress={() => router.push("/add-task")}>
        <MaterialCommunityIcons name="plus" color="#fff" size={40} />
      </Pressable>
    </View>
  );
};

export default FloatingAddButton;

const styles = StyleSheet.create({
  glow: {
    position: "absolute",
    backgroundColor: "rgba(103, 90, 235, 0.12)",
    alignSelf: "center",
    /* bottom: 115, */
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#675AEB",
    borderRadius: 35,
    alignSelf: "center",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    // zIndex: 999,
    elevation: 12,
    shadowColor: "#675AEB",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});
