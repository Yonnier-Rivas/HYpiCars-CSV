import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const PreloadScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.preloadScreen}
      locations={[0, 0.37, 0.69]}
      colors={["#d9dbff", "#3b63a8", "#050835"]}
      useAngle={true}
      angle={180}
    >
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("WelcomeAppScreen")}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.welcomeScreen}>
            <LinearGradient
              style={[styles.splashScreen, styles.logoFlexBox]}
              locations={[0, 0.37, 0.69]}
              colors={["#d9dbff", "#3b63a8", "#050835"]}
              useAngle={true}
              angle={180}
            >
              <View style={[styles.logo, styles.logoFlexBox]}>
                <Image
                  style={styles.appLogoIcon}
                  resizeMode="cover"
                  source={require("../assets/app-logo1.png")}
                />
                <Text style={styles.appTitle}>HypiCars</Text>
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  appLogoIcon: {
    width: 230,
    height: 79,
  },
  appTitle: {
    fontSize: FontSize.size_17xl,
    letterSpacing: -1.4,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 176,
    height: 51,
    marginTop: -14,
  },
  logo: {
    height: 139,
    paddingHorizontal: Padding.p_42xl,
    justifyContent: "center",
    paddingVertical: 0,
  },
  splashScreen: {
    width: 412,
    paddingHorizontal: 0,
    paddingVertical: 340,
    backgroundColor: "transparent",
    height: 896,
  },
  welcomeScreen: {
    width: 411,
    justifyContent: "center",
    alignItems: "center",
    height: 896,
  },
  pressable: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 2,
    backgroundColor: "transparent",
    paddingVertical: 0,
    alignItems: "center",
    width: "100%",
  },
  preloadScreen: {
    height: 896,
    width: "100%",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default PreloadScreen;
