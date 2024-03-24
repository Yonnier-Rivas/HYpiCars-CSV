import * as React from "react";
import {ScrollView, Image, StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import {Color, FontFamily, FontSize, Padding, Border} from "../GlobalStyles";
import {useNavigation} from "@react-navigation/native";

const WelcomeAppScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("LoginScreen"); // Navegar a la pantalla LoginScreen al hacer clic
  };

  const handleSignUpPress = () => {
    navigation.navigate("SignUpScreen"); // Navegar a la pantalla LoginScreen al hacer clic
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <LinearGradient
        style={styles.welcomeAppScreen}
        locations={[0, 0.52, 0.91]}
        colors={["#d9dbff", "#3b63a8", "#050835"]}
        useAngle={true}
        angle={180}>
        <View style={styles.infoWelcomeApp}>
          <View style={styles.logo}>
            <Image
              style={styles.appLogoIcon}
              resizeMode="cover"
              source={require("../assets/app-logo.png")}
            />
            <Text style={[styles.appTitle, styles.appTitleTypo]}>HypiCars</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text
              style={[
                styles.tusAutosFavoritos,
                styles.buttonsContainerFlexBox,
              ]}>
              Tus autos favoritos en un solo lugar.
            </Text>
            <View
              style={[styles.buttonsContainer, styles.buttonsContainerFlexBox]}>
              <Button
                disabled={false}
                uppercase={false}
                mode="contained"
                labelStyle={styles.btnBtn}
                contentStyle={styles.btnBtn1}
                onPress={handleLoginPress}>
                Iniciar Sesión
              </Button>
              <Button
                style={styles.btn1}
                mode="contained"
                labelStyle={styles.btn1Btn}
                contentStyle={styles.btn1Btn1}
                onPress={handleSignUpPress}>
                Registrarse
              </Button>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btnBtn: {
    color: "#393b5f",
    fontSize: 20,
    fontFamily: "Segoe UI Variable",
  },
  btnBtn1: {
    height: 56,
    width: 180,
  },
  btn1Btn: {
    color: "#393b5f",
    fontSize: 20,
    fontFamily: "Segoe UI Variable",
  },
  btn1Btn1: {
    height: 56,
    width: 180,
  },
  appTitleTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  buttonsContainerFlexBox: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  appLogoIcon: {
    width: 230,
    height: 79,
  },
  appTitle: {
    fontSize: FontSize.size_17xl,
    letterSpacing: -1.4,
    width: 176,
    height: 51,
    marginTop: -14,
  },
  logo: {
    height: 123,
    paddingHorizontal: Padding.p_42xl,
    justifyContent: "center",
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  tusAutosFavoritos: {
    top: 102,
    left: 40,
    fontSize: 25,
    letterSpacing: -1,
    display: "flex",
    width: 334,
    height: 117,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  btn1: {
    marginLeft: 17,
  },
  buttonsContainer: {
    top: 267,
    left: 18,
    flexDirection: "row",
    position: "absolute",
  },
  infoContainer: {
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    height: 436,
    marginTop: 177,
    width: 413,
  },
  infoWelcomeApp: {
    height: 579,
    width: 413,
    alignItems: "center",
  },
  welcomeAppScreen: {
    flex: 1,
    width: "100%",
    height: 896,
    justifyContent: "space-between",
    paddingHorizontal: 1,
    backgroundColor: "transparent",
    paddingVertical: 0,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default WelcomeAppScreen;
