import * as React from "react";
import { ScrollView, Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const ContactoScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.contactoScreen}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Pressable
          style={styles.bxbxMenuLayout}
          onPress={() => navigation.navigate("ItemsMenuScreen")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/bxbxmenu1.png")}
          />
        </Pressable>
        <Text style={styles.hypicars}>HypiCars</Text>
        <Pressable
          style={[styles.codiconbellDot, styles.bxbxMenuLayout]}
          onPress={() => navigation.navigate("NotificationsScreen")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/codiconbelldot.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.titulo, styles.titleFlexBox]}>
        <Text style={styles.holaHypifan}>¡Hola, HypiFan!</Text>
      </View>
      <View style={[styles.navegation, styles.titleFlexBox]}>
        <Pressable
          style={styles.homeLayout}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.star, styles.homeLayout]}
          onPress={() => navigation.navigate("SaveCarScreen")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/star.png")}
          />
        </Pressable>
        <Image
          style={styles.unionIcon}
          resizeMode="cover"
          source={require("../assets/union1.png")}
        />
      </View>
      <View style={[styles.userPhoto, styles.titleFlexBox]}>
        <Image
          style={styles.userPhotoChild}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={styles.unionIcon1}
          resizeMode="cover"
          source={require("../assets/union2.png")}
        />
      </View>
      <View style={[styles.informacionUsuario, styles.titleFlexBox]}>
        <View style={styles.nombreParent}>
          <Text style={[styles.nombre, styles.nombreTypo]}>{`Nombre: `}</Text>
          <Text
            style={[styles.yonnierDavid, styles.nombreTypo]}
          >{`Yonnier David `}</Text>
        </View>
        <View style={styles.apellidosParent}>
          <Text
            style={[styles.nombre, styles.nombreTypo]}
          >{`Apellidos: `}</Text>
          <Text style={[styles.yonnierDavid, styles.nombreTypo]}>
            Rivas Mosquera
          </Text>
        </View>
        <View style={styles.apellidosParent}>
          <Text style={[styles.nombre, styles.nombreTypo]}>{`Correo: `}</Text>
          <Text style={[styles.yonnierDavid, styles.nombreTypo]}>
            YonnierHypiCars@gmail.com
          </Text>
        </View>
        <View style={styles.apellidosParent}>
          <Text style={[styles.nombre, styles.nombreTypo]}>{`Célular: `}</Text>
          <Text style={[styles.yonnierDavid, styles.nombreTypo]}>
            321888999
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  bxbxMenuLayout: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  homeLayout: {
    height: 32,
    width: 32,
  },
  nombreTypo: {
    display: "flex",
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppins,
    alignItems: "center",
  },
  hypicars: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    color: Color.colorSteelblue_100,
    marginLeft: 104,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  codiconbellDot: {
    marginLeft: 104,
  },
  title: {
    top: 41,
    left: 0,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    backgroundColor: Color.colorWhite1,
    alignItems: "center",
    position: "absolute",
  },
  holaHypifan: {
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  titulo: {
    top: 242,
    left: 100,
    width: 214,
    height: 45,
    flexDirection: "row",
  },
  icon2: {
    borderRadius: Border.br_xl,
  },
  star: {
    marginLeft: 89,
  },
  unionIcon: {
    width: 28,
    height: 31,
    marginLeft: 89,
  },
  navegation: {
    bottom: 18,
    left: 24,
    borderRadius: Border.br_25xl,
    backgroundColor: Color.colorGray_400,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_28xl,
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
  },
  userPhotoChild: {
    height: 116,
    width: 116,
  },
  unionIcon1: {
    width: 62,
    height: 68,
    left: 26,
    position: "absolute",
  },
  userPhoto: {
    top: 112,
    left: 146,
    opacity: 0.8,
    flexDirection: "row",
  },
  nombre: {
    color: Color.colorDimgray_200,
    width: 116,
  },
  yonnierDavid: {
    color: Color.colorGray_200,
    width: 186,
    marginLeft: 6,
  },
  nombreParent: {
    flexDirection: "row",
  },
  apellidosParent: {
    marginTop: 13,
    flexDirection: "row",
  },
  informacionUsuario: {
    top: 311,
    left: 35,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: Padding.p_lgi,
  },
  contactoScreen: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite1,
  },
});

export default ContactoScreen;
