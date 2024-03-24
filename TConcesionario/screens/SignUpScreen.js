import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <LinearGradient
      style={[styles.signUpScreen, styles.loginBg]}
      locations={[0, 1]}
      colors={["#3b63a8", "#f5f6f8"]}
      useAngle={true}
      angle={180}
    >
      <LinearGradient
        style={[styles.login, styles.loginLayout]}
        locations={[0, 1]}
        colors={["#3b63a8", "#f5f6f8"]}
        useAngle={true}
        angle={180}
      >
        <View style={[styles.statusBar, styles.loginLayout]}>
          <Image
            style={styles.leftSideIcon}
            resizeMode="cover"
            source={require("../assets/left-side.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/battery.png")}
            />
            <Image
              style={[styles.wifiIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={[styles.mobileSignalIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/mobile-signal.png")}
            />
          </View>
        </View>
        <View style={styles.infoFlexBox}>
          <Image
            style={styles.userPhotoIcon}
            resizeMode="cover"
            source={require("../assets/user-photo.png")}
          />
          <Text style={styles.registrarse}>Registrarse</Text>
          <Text style={styles.encuentraTuCarro}>
            ¡Encuentra tu carro soñado!
          </Text>
        </View>
        <View style={[styles.infoContainer, styles.infoFlexBox]}>
          <View style={styles.nombresLayout}>
            <View style={styles.childShadowBox} />
            <Image
              style={[styles.ggprofileIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ggprofile.png")}
            />
            <Text style={[styles.nombres1, styles.nombres1Typo]}>Nombres</Text>
          </View>
          <View style={[styles.apellidos, styles.nombresLayout]}>
            <View style={styles.childShadowBox} />
            <Image
              style={[styles.ggprofileIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ggprofile.png")}
            />
            <Text style={[styles.nombres1, styles.nombres1Typo]}>
              Apellidos
            </Text>
          </View>
          <View style={[styles.apellidos, styles.nombresLayout]}>
            <View style={styles.childShadowBox} />
            <Image
              style={[styles.ggprofileIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ggprofile1.png")}
            />
            <Text style={[styles.nombres1, styles.nombres1Typo]}>Celular</Text>
          </View>
          <View style={[styles.apellidos, styles.nombresLayout]}>
            <View style={styles.childShadowBox} />
            <Image
              style={[styles.ggprofileIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/ggprofile2.png")}
            />
            <Text style={[styles.nombres1, styles.nombres1Typo]}>Correo</Text>
          </View>
          <View style={[styles.apellidos, styles.nombresLayout]}>
            <View style={styles.childShadowBox} />
            <Image
              style={[styles.ggprofileIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rilockpasswordline.png")}
            />
            <Text
              style={[styles.contrasea1, styles.nombres1Typo]}
            >{`Contraseña `}</Text>
          </View>
          <View style={[styles.apellidos, styles.nombresLayout]}>
            <Pressable
              style={styles.groupChild}
              onPress={() => navigation.navigate("HomeScreen")}
            />
            <Text style={styles.registrarse1}>Registrarse</Text>
          </View>
        </View>
      </LinearGradient>
    </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginBg: {
    backgroundColor: "transparent",
    justifyContent: "center",
    height: 896,
  },
  loginLayout: {
    width: 414,
    overflow: "hidden",
    alignItems: "center",
  },
  iconLayout: {
    width: 24,
    position: "absolute",
  },
  iconPosition: {
    top: 0,
    height: 11,
  },
  infoFlexBox: {
    marginTop: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  nombres1Typo: {
    color: Color.colorDarkgray_100,
    left: 64,
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    lineHeight: 22,
    position: "absolute",
    alignItems: "center",
  },
  nombresLayout: {
    height: 64,
    width: 366,
  },
  leftSideIcon: {
    width: 54,
    height: 21,
  },
  batteryIcon: {
    right: 0,
    top: 0,
    height: 11,
  },
  wifiIcon: {
    right: 29,
    width: 15,
    position: "absolute",
    top: 0,
  },
  mobileSignalIcon: {
    right: 50,
    width: 17,
    position: "absolute",
    top: 0,
  },
  rightSide: {
    width: 67,
    marginLeft: 258,
    height: 11,
  },
  statusBar: {
    backgroundColor: Color.colorGray_500,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_2xs,
    height: 41,
    overflow: "hidden",
  },
  userPhotoIcon: {
    width: 91,
    height: 91,
  },
  registrarse: {
    fontSize: FontSize.size_xl,
    marginTop: 12,
    textAlign: "left",
    color: Color.colorWhite1,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    lineHeight: 22,
  },
  encuentraTuCarro: {
    textAlign: "center",
    width: 298,
    display: "flex",
    fontSize: FontSize.size_base,
    marginTop: 12,
    color: Color.colorWhite1,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    lineHeight: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(12, 26, 75, 0.24)",
    backgroundColor: Color.colorWhite1,
    borderRadius: Border.br_xl,
    left: 0,
    height: 64,
    width: 366,
    top: 0,
    position: "absolute",
  },
  ggprofileIcon: {
    top: 20,
    left: 24,
    height: 24,
    overflow: "hidden",
  },
  nombres1: {
    top: 11,
    width: 293,
    height: 41,
  },
  apellidos: {
    marginTop: 21,
  },
  contrasea1: {
    top: 10,
    width: 281,
    height: 43,
  },
  groupChild: {
    backgroundColor: Color.colorLightskyblue,
    borderRadius: Border.br_xl,
    left: 0,
    height: 64,
    width: 366,
    top: 0,
    position: "absolute",
  },
  registrarse1: {
    top: 21,
    left: 119,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite1,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    lineHeight: 22,
    position: "absolute",
  },
  infoContainer: {
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorGray_600,
    borderStyle: "solid",
    borderColor: Color.colorWhite1,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 28,
  },
  login: {
    overflow: "hidden",
    backgroundColor: "transparent",
    justifyContent: "center",
    height: 896,
    width: 414,
  },
  signUpScreen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 896,
  },
});

export default SignUpScreen;
