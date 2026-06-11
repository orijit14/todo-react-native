import { StyleSheet } from "react-native";
import FONTS from "../../constants/fonts";
import { SCREEN_WIDTH } from "../../utils/responsive";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf9fe",
    paddingHorizontal: 20,
  },
  scrollViewContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
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
    fontFamily: FONTS.regular,
    fontWeight: "bold",
  },
  headerDesc: {
    fontFamily: FONTS.regular,
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
    fontFamily: FONTS.regular,
    fontSize: 13,
    fontWeight: "bold",
    color: "#757a94",
  },
  taskDesc: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: "#8d95a3",
  },
  taskCount: {
    // fontSize: 18,
    fontFamily: FONTS.extraBold,
    fontSize: 26,
    fontWeight: "700",
  },

  taskListCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 100, // space for bottom tab
  },

  allTaskWrapper: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  font20: {
    fontFamily: FONTS.extraBold,
    fontSize: 16,
  },
  fontWeightBold: {
    fontWeight: "bold",
  },

  tabButton: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 12,
    marginLeft: 3,
  },
  activeTab: {
    backgroundColor: "#6245e8",
  },
  tabText: {
    color: "#757a94",
    fontFamily: FONTS.regular,
    fontWeight: "bold",
    fontSize: 12,
  },

  taskBody: {
    backgroundColor: "#fefefe",
    padding: 10,
    borderRadius: 20,
  },
  bodyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#f1f1f7",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  calendarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  calendarFontSize: {
    fontSize: 10,
  },
  taskBodyTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  bodyLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  deletedText: {
    textDecorationLine: "line-through",
  },
});
