import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FloatingAddButton from "../../components/FloatingAddButton";

const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#675AEB",
          tabBarInactiveTintColor: "#9CA3AF",
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "#fff",
            position: "absolute",
            bottom: insets.bottom + 10,
            left: 20,
            right: 20,
            borderRadius: 25,
            marginHorizontal: 15,
            height: 80,
            paddingTop: 8,
            paddingBottom: 8,
            borderTopWidth: 0,
            elevation: 8, // Android
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginBottom: 5,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            title: "Tasks",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="calendar"
          options={{
            title: "Calendar",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar-month-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="categories"
          options={{
            title: "Cateogiries",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="view-grid-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tabs>
      <FloatingAddButton />
    </View>
  );
};

export default TabsLayout;
