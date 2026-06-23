import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf9fe",
    paddingHorizontal: 20,
  },

  header: {
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerDesc: {
    fontSize: 14,
  },

  addCatBtn: {
    backgroundColor: "#fff",
  },
});
