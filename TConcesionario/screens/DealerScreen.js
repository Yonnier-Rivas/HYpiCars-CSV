import React from "react";
import { ScrollView, Image, StyleSheet, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const DealerScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.concesionarioScreen}>
      <View style={styles.title}>
        <Pressable
          style={styles.bxbxMenuLayout}
          onPress={() => navigation.navigate("ItemsMenuScreen")}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bxbxmenu1.png")}
          />
        </Pressable>
        <Text style={styles.hypicars}>HypiCars</Text>
        <Pressable
          style={[styles.codiconbellDot, styles.bxbxMenuLayout]}
          onPress={() => navigation.navigate("NotificationsScreen")}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/codiconbelldot.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.navegation, styles.ubicacionPosition]}>
        <Pressable
          style={styles.homeLayout}
          onPress={() => navigation.navigate("HomeScreen")}>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.star, styles.homeLayout]}
          onPress={() => navigation.navigate("SaveCarScreen")}>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/star1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.union}
          onPress={() => navigation.navigate("ContactScreen")}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/union.png")}
          />
        </Pressable>
      </View>
      <LinearGradient
        style={styles.bannerConcesionario}
        locations={[0.16, 0.65, 1]}
        colors={["#111a9c", "#3b63a8", "#d6d9fe"]}
        useAngle={true}
        angle={90}>
        <View style={styles.logo}>
          <Image
            style={styles.appLogoIcon}
            resizeMode="cover"
            source={require("../assets/app-logo.png")}
          />
          <Text style={[styles.appTitle, styles.appTitleTypo]}>HypiCars</Text>
        </View>
        <Text style={[styles.concesionario, styles.appTitleTypo]}>
          Concesionario
        </Text>
      </LinearGradient>
      <View style={styles.servicioRealizadoParent}>
        <Text style={[styles.servicioRealizado, styles.servicioTypo]}>
          ¿Quiénes somos?
        </Text>
        <Text style={[styles.hypicarsEsMsContainer, styles.containerTypo]}>
          <Text style={styles.hypicars1}>{"HypiCars "}</Text>
          <Text style={styles.esMsQue}>
            {
              "es más que un concesionario, es un estilo de vida. Ven a visitarnos y descubre el futuro de la conducción.Un nuevo concesionario que ofrece una experiencia de compra de autos única y revolucionaria. Nos especializamos en vehículos última generación, con diseños futuristas y tecnología de punta."
            }
          </Text>
        </Text>
      </View>
      <View style={[styles.ubicacion, styles.ubicacionPosition]}>
        <Text style={[styles.servicioRealizado1, styles.servicioTypo]}>
          ¿Dónde estamos ubicados?
        </Text>
        <Text
          style={[styles.direccinCarrera82Container, styles.containerTypo]}>
          <Text style={styles.hypicars1}>{"Dirección:  "}</Text>
          <Text style={styles.esMsQue}>Carrera 82 # 32-115, Medellín.</Text>
        </Text>
        <Image
          style={styles.ubicacionChild}
          resizeMode="cover"
          source={require("../assets/rectangle-123.png")}
        />
      </View>
      <View style={[styles.telefono, styles.telefonoFlexBox]}>
        <Text style={[styles.servicioRealizado2, styles.servicioTypo]}>
          Teléfono:
        </Text>
        <Text style={styles.text}>604 5656695</Text>
      </View>
      <View style={[styles.telefono1, styles.telefonoFlexBox]}>
        <Text style={[styles.servicioRealizado3, styles.servicioTypo]}>
          {"Correo Electrónico:   "}
        </Text>
        <Text style={styles.text}>atencion.hypicars@gmail.com</Text>
      </View>
    </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: Color.colorWhite1,
    paddingBottom: 20, // Agrega espacio adicional al final para permitir el scroll
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  bxbxMenuLayout: {
    height: 24,
    width: 24,
  },
  ubicacionPosition: {
    left: 24,
    position: "absolute",
  },
  homeLayout: {
    height: 32,
    width: 32,
  },
  appTitleTypo: {
    color: Color.colorWhite1,
    letterSpacing: -0.8,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  servicioTypo: {
    height: 38,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppins,
    alignItems: "center",
  },
  containerTypo: {
    width: 355,
    letterSpacing: -0.6,
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  telefonoFlexBox: {
    flexWrap: "wrap",
    left: 28,
    flexDirection: "row",
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
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
    top: 35,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  icon2: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  star: {
    marginLeft: 89,
  },
  union: {
    width: 28,
    height: 31,
    marginLeft: 89,
  },
  navegation: {
    bottom: 18,
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
    justifyContent: "center",
    flexDirection: "row",
    left: 24,
    alignItems: "center",
  },
  appLogoIcon: {
    width: 149,
    height: 44,
  },
  appTitle: {
    width: 176,
    height: 51,
    marginTop: -14,
  },
  logo: {
    width: 139,
    height: 73,
    paddingHorizontal: Padding.p_42xl,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  concesionario: {
    marginLeft: 29,
  },
  bannerConcesionario: {
    top: 115,
    borderStyle: "solid",
    borderColor: "#e4e4e4",
    borderWidth: 1,
    paddingVertical: 12,
    backgroundColor: "transparent",
    borderRadius: Border.br_mini,
    left: 28,
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  servicioRealizado: {
    width: 210,
  },
  hypicars1: {
    fontWeight: "700",
    fontFamily: FontFamily.poppins,
  },
  esMsQue: {
    fontFamily: FontFamily.poppins,
  },
  hypicarsEsMsContainer: {
    height: 177,
  },
  servicioRealizadoParent: {
    top: 222,
    left: 27,
    position: "absolute",
  },
  servicioRealizado1: {
    width: 268,
  },
  direccinCarrera82Container: {
    height: 28,
    marginTop: 1,
  },
  ubicacionChild: {
    width: 357,
    height: 140,
    marginTop: 1,
    borderRadius: Border.br_mini,
  },
  ubicacion: {
    top: 431,
    height: 218,
  },
  servicioRealizado2: {
    width: 93,
  },
  text: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
  },
  telefono: {
    top: 649,
    width: 164,
    alignItems: "center",
  },
  servicioRealizado3: {
    width: 173,
  },
  telefono1: {
    top: 714,
    width: 364,
  },
  concesionarioScreen: {
    backgroundColor: Color.colorWhite1,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default DealerScreen;
