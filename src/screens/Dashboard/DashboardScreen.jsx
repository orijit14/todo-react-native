import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/colors";
import styles from "./styles";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const taskTabs = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Pending",
  },
  {
    id: 3,
    title: "Completed",
  },
];

const tasks = [
  {
    id: 1,
    title: "Design Todo App UI",
    subTitle: "Create beautiful and minimal UI",
    icon: "checkbox-blank-circle-outline",
    taskDate: "Today",
    status: "pending",
  },
  {
    id: 2,
    title: "Learn React Native",
    subTitle: "Create beautiful and minimal UI",
    icon: "checkbox-marked-circle",
    taskDate: "Yesterday",
    status: "pending",
  },
  {
    id: 3,
    title: "Buy Groceries",
    subTitle: "Create beautiful and minimal UI",
    icon: "checkbox-blank-circle-outline",
    taskDate: "Tomorrow",
    status: "completed",
  },
  {
    id: 4,
    title: "Learn React Native",
    subTitle: "Create beautiful and minimal UI",
    icon: "checkbox-marked-circle",
    taskDate: "Tomorrow",
    status: "pending",
  },
  {
    id: 5,
    title: "Design Todo App UI",
    subTitle: "Create beautiful and minimal UI",
    icon: "checkbox-blank-circle-outline",
    taskDate: "Yesterday",
    status: "pending",
  },
  {
    id: 6,
    title: "Buy Groceries",
    subTitle: "Create beautiful and minimal UI",
    icon: "checkbox-blank-circle-outline",
    taskDate: "Today",
    status: "completed",
  },
  {
    id: 7,
    title: "Learn React Native",
    subTitle: "Create beautiful and minimal UI",
    icon: "checkbox-marked-circle",
    taskDate: "Tomorrow",
    status: "pending",
  },
  {
    id: 8,
    title: "Learn React Native",
    subTitle: "Create beautiful and minimal UI",
    icon: "checkbox-marked-circle",
    taskDate: "Yesterday",
    status: "pending",
  },
];

const TaskItem = ({ item, index, totalItems }) => (
  <View
    style={[styles.bodyContainer, index === totalItems - 1 && styles.lastItem]}
  >
    <View style={styles.bodyLeft}>
      <MaterialCommunityIcons name={item.icon} color="#6b4bea" size={24} />

      <View style={styles.taskBodyContent}>
        <Text
          style={[
            styles.taskBodyTitle,
            item.taskDate === "Yesterday" && styles.deletedText,
          ]}
        >
          {item.title}
        </Text>

        <Text
          style={[
            styles.calendarFontSize,
            item.taskDate === "Yesterday" && styles.deletedText,
          ]}
        >
          {item.subTitle}
        </Text>
      </View>
    </View>

    <View style={styles.calendarContainer}>
      <MaterialCommunityIcons
        name="calendar-month-outline"
        color={item.taskDate === "Yesterday" ? "gray" : "#6b4bea"}
        size={15}
      />

      <Text
        style={[
          styles.calendarFontSize,
          {
            color: item.taskDate === "Yesterday" ? "gray" : "#6b4bea",
          },
        ]}
      >
        {item.taskDate}
      </Text>
    </View>

    <MaterialCommunityIcons
      name="flag-variant"
      color={item.status === "completed" ? "#2fc97c" : "#fe9708"}
      size={24}
    />
  </View>
);

const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTasks =
    activeTab === "All"
      ? tasks
      : tasks.filter((task) => task.status === activeTab.toLowerCase());

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
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

      {/* Statistics Cards */}
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

      {/* Tabs */}
      <View style={styles.allTaskWrapper}>
        <Text style={[styles.font20, styles.fontWeightBold]}>
          Today's Tasks
        </Text>
        <View>
          <FlatList
            data={taskTabs}
            horizontal
            scrollEnabled={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => setActiveTab(item.title)}
                style={[
                  styles.tabButton,
                  activeTab === item.title && styles.activeTab,
                ]}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === item.title && {
                      color: COLORS.white,
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </View>
      {/* Scrollable Task Section */}
      <View style={styles.taskListCard}>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TaskItem
              item={item}
              index={index}
              totalItems={filteredTasks.length}
            />
          )}
          contentContainerStyle={{
            paddingBottom: 30,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
