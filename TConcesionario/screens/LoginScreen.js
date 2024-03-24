import * as React from "react";
import {ScrollView,Image, StyleSheet, View, Text, Pressable} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {useNavigation} from "@react-navigation/native";
import {FontSize, FontFamily, Color, Padding, Border} from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <LinearGradient
        style={[styles.loginScreen, styles.loginBg]}
        locations={[0, 1]}
        colors={["#3b63a8", "#f5f6f8"]}
        useAngle={true}
        angle={180}>
        <LinearGradient
          style={[styles.login, styles.loginLayout]}
          locations={[0, 1]}
          colors={["#3b63a8", "#f5f6f8"]}
          useAngle={true}
          angle={180}>
          <View style={styles.statusBar}>
            <Image
              style={styles.leftSideIcon}
              resizeMode="cover"
              source={require("../assets/left-side1.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={[styles.batteryIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/battery1.png")}
              />
              <Image
                style={[styles.wifiIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/wifi1.png")}
              />
              <Image
                style={[styles.mobileSignalIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/mobile-signal1.png")}
              />
            </View>
          </View>
          <View style={[styles.infoLogIn, styles.infoFlexBox]}>
            <Image
              style={styles.userPhotoIcon}
              resizeMode="cover"
              source={require("../assets/user-photo1.png")}
            />
            <Text style={[styles.inicioDeSesin, styles.inicioDeSesinTypo]}>
              Inicio de Sesión
            </Text>
            <Text style={styles.inicioDeSesinTypo}>
              <Text style={styles.bienvenidoA}>{"Bienvenido a "}</Text>
              <Text style={styles.hypicars}>HypiCars</Text>
            </Text>
          </View>
          <View style={[styles.infoContainer, styles.infoFlexBox]}>
            <View style={styles.correoLayout}>
              <View style={styles.childShadowBox} />
              <Image
                style={[styles.ggprofileIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/ggprofile3.png")}
              />
              <Text style={[styles.email, styles.emailTypo]}>{"Correo "}</Text>
            </View>
            <View style={[styles.password, styles.correoLayout]}>
              <View style={styles.childShadowBox} />
              <Image
                style={[styles.ggprofileIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rilockpasswordline1.png")}
              />
              <Text style={[styles.contrasea, styles.emailTypo]}>
                {"Contraseña "}
              </Text>
            </View>
            <Text style={[styles.olvidSuContrasea, styles.noTienesUnaTypo]}>
              ¿Olvidó su contraseña?
            </Text>
            <Pressable
              style={[styles.password, styles.correoLayout]}
              onPress={() => navigation.navigate("HomeScreen")}>
              <View style={styles.groupChild} />
              <Text style={styles.iniciarSesin}>Iniciar Sesión</Text>
            </Pressable>
            <View style={styles.group}>
              <Text style={[styles.noTienesUna, styles.noTienesUnaTypo]}>
                ¿No tienes una cuenta?
              </Text>
              <Pressable
                style={[styles.registrarse, styles.iconPosition]}
                onPress={() => navigation.navigate("SignUpScreen")}>
                <Text style={styles.noTienesUnaTypo}>Registrarse</Text>
              </Pressable>
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
    height: 896,
  },
  loginLayout: {
    width: 414,
    left: 0,
  },
  iconLayout: {
    width: 24,
    position: "absolute",
  },
  iconPosition: {
    position: "absolute",
    top: 0,
  },
  infoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  inicioDeSesinTypo: {
    marginTop: 24,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    lineHeight: 22,
  },
  emailTypo: {
    display: "flex",
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_base,
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    lineHeight: 22,
    alignItems: "center",
    position: "absolute",
  },
  correoLayout: {
    height: 64,
    width: 366,
  },
  noTienesUnaTypo: {
    textAlign: "center",
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
  },
  leftSideIcon: {
    width: 54,
    height: 21,
  },
  batteryIcon: {
    right: 0,
    height: 11,
    top: 0,
  },
  wifiIcon: {
    right: 29,
    width: 15,
    height: 11,
    top: 0,
  },
  mobileSignalIcon: {
    right: 50,
    width: 17,
    height: 11,
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
    alignItems: "center",
    height: 41,
    overflow: "hidden",
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  userPhotoIcon: {
    width: 116,
    height: 116,
  },
  inicioDeSesin: {
    color: Color.colorWhite1,
  },
  bienvenidoA: {
    color: Color.colorWhite1,
  },
  hypicars: {
    color: "#7afff7",
  },
  infoLogIn: {
    top: 144,
    left: 92,
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
    height: 64,
    width: 366,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ggprofileIcon: {
    top: 20,
    left: 24,
    height: 24,
    overflow: "hidden",
  },
  email: {
    top: 11,
    width: 293,
    height: 41,
    display: "flex",
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_base,
    left: 64,
  },
  contrasea: {
    top: 10,
    width: 281,
    height: 43,
  },
  password: {
    marginTop: 25,
  },
  olvidSuContrasea: {
    marginTop: 25,
    lineHeight: 22,
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  groupChild: {
    backgroundColor: Color.colorLightskyblue,
    borderRadius: Border.br_xl,
    height: 64,
    width: 366,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iniciarSesin: {
    top: 21,
    left: 119,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    color: Color.colorWhite1,
    lineHeight: 22,
    position: "absolute",
  },
  noTienesUna: {
    opacity: 0.4,
    left: 0,
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  registrarse: {
    left: 174,
    top: 0,
  },
  group: {
    width: 254,
    marginTop: 25,
    height: 21,
  },
  infoContainer: {
    top: 455,
    borderTopLeftRadius: Border.br_9xl,
    borderTopRightRadius: Border.br_9xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorGray_600,
    borderStyle: "solid",
    borderColor: Color.colorWhite1,
    borderWidth: 1,
    paddingHorizontal: 23,
    paddingVertical: 53,
    width: 414,
    left: 0,
  },
  login: {
    overflow: "hidden",
    top: 0,
    position: "absolute",
    backgroundColor: "transparent",
    height: 896,
  },
  loginScreen: {
    flex: 1,
    width: "100%",
  },
});

export default LoginScreen;
