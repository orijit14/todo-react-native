import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";
import FONTS from "../../constants/fonts";

export default StyleSheet.create({
  scrollViewContainer: {
    paddingBottom: 20,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  welcome: {
    color: COLORS.gray,
    fontFamily: FONTS.regular,
    fontSize: 22,
    textAlign: "center",
  },

  title: {
    color: COLORS.text,
    fontFamily: FONTS.extraBold,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  paragraph: {
    color: "#a7a9b8",
    fontFamily: FONTS.regular,
    fontSize: 18,
    textAlign: "center",
  },
  /* "mt-10": {
    marginTop: 10,
  }, */
  mt10: {
    marginTop: 10,
  },

  welcomeContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    margin: 20,
    width: "90%",
  },

  boxes: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececf2",
    alignItems: "center",
    paddingVertical: 20,
  },

  lastBox: {
    borderBottomWidth: 0,
  },

  boxImg: {
    width: 70,
  },

  boxContent: {
    flex: 1,
    marginLeft: 15,
  },

  boxTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  boxDesc: {
    fontSize: 14,
    color: "#a7a9b8",
    marginTop: 5,
    lineHeight: 20,
  },

  btnWrapper: {
    width: "90%",
  },

  getStartedBtn: {
    flexDirection: "row",
    backgroundColor: COLORS.blue,
    height: 60,
    paddingHorizontal: 24,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  laterBtn: {
    backgroundColor: "transparent",
    height: 60,
    paddingHorizontal: 24,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.blue,
    borderWidth: 1,
    marginTop: 10,
  },

  arrowRight: {
    position: "absolute",
    right: 24,
  },

  footer: {
    width: "80%",
    fontSize: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  bottomLine: {
    height: 5,
    backgroundColor: "#090909",
    borderRadius: 10,
    width: 120,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 20,
  },
});
