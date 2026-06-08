import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeatureIcon from "../../components/FeatureIcon";
import COLORS from "../../constants/colors";
import styles from "./styles";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View>
          <Image
            source={require("../../../assets/images/todo_top_illustration.png")}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.welcome}>Welcome to </Text>
          <Text style={styles.title}>Todo App</Text>
          {/* <View style={styles["mt-10"]}> */}
          <View style={styles.mt10}>
            <Text style={styles.paragraph}>Your simple and smart solution</Text>
            <Text style={styles.paragraph}>to organize your daily task.</Text>
          </View>
        </View>

        <View style={styles.welcomeContainer}>
          <View style={styles.boxes}>
            <View style={styles.boxImg}>
              <FeatureIcon bgColor="#ebe8fb">
                <AntDesign name="check-circle" size={24} color="#675aeb" />
              </FeatureIcon>
            </View>
            <View style={styles.boxContent}>
              <Text style={styles.boxTitle}>Stay Organized</Text>
              <Text style={styles.boxDesc}>
                Keep all your tasks in one place and never miss a thing.
              </Text>
            </View>
          </View>

          <View style={styles.boxes}>
            <View style={styles.boxImg}>
              <FeatureIcon bgColor="#e5f7ed">
                <FontAwesome name="calendar" size={24} color="#4cc78a" />
              </FeatureIcon>
            </View>
            <View style={styles.boxContent}>
              <Text style={styles.boxTitle}>Get Things Done</Text>
              <Text style={styles.boxDesc}>
                Set priorities and track your progress easily.
              </Text>
            </View>
          </View>

          <View style={[styles.boxes, styles.lastBox]}>
            <View style={styles.boxImg}>
              <FeatureIcon bgColor="#feeed8">
                <FontAwesome name="bell" size={24} color="#ffa30d" />
              </FeatureIcon>
            </View>
            <View style={styles.boxContent}>
              <Text style={styles.boxTitle}>Stay Reminded</Text>
              <Text style={styles.boxDesc}>
                Get reminders for important tasks and deadlines.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <Pressable
            onPress={(e) => Alert.alert("hii")}
            style={styles.getStartedBtn}
          >
            <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
              Get Started
            </Text>
            <FontAwesome
              name="arrow-right"
              size={24}
              color="#fff"
              style={styles.arrowRight}
            />
          </Pressable>

          <Pressable
            onPress={(e) => Alert.alert("hiittt")}
            style={styles.laterBtn}
          >
            <Text>I'll Do It Later</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={{ fontSize: 12, color: COLORS.gray }}>
            By continuing, you agree to our{" "}
            <Text
              onPress={() => router.push("/terms")}
              style={{ color: COLORS.blue }}
            >
              Terms of Services
            </Text>{" "}
            and{" "}
            <Text
              onPress={() => router.push("/policy")}
              style={{ color: COLORS.blue }}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
        <View style={styles.bottomLine} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
