import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../utils/responsive";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf9fe",
  },
  scrollViewContainer: {
    paddingBottom: 20,
    justifyContent: "center",
  },
  /* header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  }, */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  /* headerContent: {
    marginLeft: 10,
    width: "auto",
  }, */
  headerContent: {
    flex: 1,
    marginLeft: 12,
  },
  headerWelcome: {
    fontSize: 22,
    fontWeight: "bold",
  },
  headerDesc: {
    fontSize: 13,
    color: "#757a94",
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  avatarWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#e1d8fb",
    justifyContent: "center",
    alignItems: "center",
  },
  /* avatarImg: { // My css
    width: 50,
    backgroundColor: "#e1d8fb",
    padding: 10,
    borderRadius: 30,
  }, */
  // Chat gpt help
  avatarImg: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  notificationContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  notificationDot: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#6147e7",
  },

  /* taskContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-between",
  }, */

  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 20,
  },

  taskBoxes: {
    width: (SCREEN_WIDTH - 48) / 3,
    padding: 12,
    borderRadius: 16,
    minHeight: 180,
  },
  taskIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  taskContent: {
    marginTop: 16,
    // justifyContent: "space-between",
    // height: 65,
  },
  taskTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#757a94",
  },
  taskDesc: {
    fontSize: 11,
    color: "#8d95a3",
  },
  taskCount: {
    // fontSize: 18,
    fontSize: 26,
    fontWeight: "700",
  },
});
