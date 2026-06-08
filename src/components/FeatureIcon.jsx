import { View } from "react-native";

const FeatureIcon = ({ children, bgColor }) => {
  return (
    <View
      style={{
        width: 60,
        height: 60,
        backgroundColor: bgColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }}
    >
      {children}
    </View>
  );
};

export default FeatureIcon;
