import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import styles from "./styles";

const CategoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ gap: 4, width: "auto" }}>
          <Text style={styles.headerTitle}>Cateogries</Text>
          <Text style={styles.headerDesc}>Manage your task category</Text>
        </View>
        <View style={styles.addCatBtn}>
          <Pressable onPress={() => router.push("/add-category")}>
            <MaterialCommunityIcons name="plus" color={COLORS.blue} size={28} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
