import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatarWrapper}>
              <Image
                source={require("../../../assets/images/man.png")}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
                style={styles.avatarImg}
              />
            </View>
            <View style={styles.headerContent}>
              <Text style={styles.headerWelcome}>Hello, Arijit! 🖐</Text>
              <Text style={styles.headerDesc}>
                Stay productive and get things done.
              </Text>
            </View>
          </View>

          <Pressable style={styles.notificationContainer}>
            <FontAwesome name="bell-o" size={28} color="#111827" />
            <View style={styles.notificationDot} />
          </Pressable>
        </View>

        <View style={styles.taskContainer}>
          <View style={[styles.taskBoxes, { backgroundColor: "#f2effd" }]}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#e1d9fa" }]}
            >
              <MaterialCommunityIcons
                name="clipboard-text"
                color="#6b4bea"
                size={24}
              />
            </View>
            <View style={styles.taskContent}>
              <Text style={styles.taskTitle}>Total Task</Text>
              <Text style={[styles.taskCount, { color: "#6b4bea" }]}>12</Text>
              <Text style={styles.taskDesc}>All your tasks</Text>
            </View>
          </View>

          <View style={[styles.taskBoxes, { backgroundColor: "#ecf9f4" }]}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#d0f6e5" }]}
            >
              <Ionicons name="checkmark-circle" color="#36c17c" size={24} />
            </View>
            <View style={styles.taskContent}>
              <Text style={styles.taskTitle}>Completed</Text>
              <Text style={[styles.taskCount, { color: "#36c17c" }]}>8</Text>
              <Text style={styles.taskDesc}>Great Progress!</Text>
            </View>
          </View>
          <View style={[styles.taskBoxes, { backgroundColor: "#fdf7ec" }]}>
            <View
              style={[styles.taskIconContainer, { backgroundColor: "#fdebcc" }]}
            >
              <MaterialCommunityIcons name="clock" color="#fe9501" size={24} />
            </View>
            <View style={styles.taskContent}>
              <Text style={styles.taskTitle}>Pending</Text>
              <Text style={[styles.taskCount, { color: "#fe980a" }]}>4</Text>
              <Text style={styles.taskDesc}>Keep going!</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
