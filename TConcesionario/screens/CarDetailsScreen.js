import * as React from "react";
import {ScrollView, Image, StyleSheet, Pressable, Text, View, Linking,} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {FontFamily, FontSize, Color, Border, Padding} from "../GlobalStyles";

const CarDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.iconLayout, styles.titleFlexBox]}>
        <Pressable
          style={styles.bxbxMenuLayout}
          onPress={() => navigation.navigate("HomeScreen")}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bxbxmenu.png")}
          />
        </Pressable>
        <Text style={[styles.hypicars, styles.hypicarsTypo]}>HypiCars</Text>
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
      <View style={[styles.galleryOfSelectedCar, styles.autoFlexBox]}>
        <View style={[styles.galleryOfCar, styles.titleFlexBox]}>
          <Image
            style={styles.image4Icon}
            resizeMode="cover"
            source={require("../assets/image-4.png")}
          />
          <Image
            style={styles.maskGroupIcon}
            resizeMode="cover"
            source={require("../assets/mask-group.png")}
          />
          <Image
            style={styles.maskGroupIcon}
            resizeMode="cover"
            source={require("../assets/mask-group1.png")}
          />
        </View>
        <View style={styles.carCircles}>
          <View style={styles.galleryCircles}>
            <Image
              style={styles.circleLayout}
              resizeMode="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.galleryCirclesItem, styles.circleLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-12.png")}
            />
            <Image
              style={[styles.galleryCirclesItem, styles.circleLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-12.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.carDescription, styles.carTitleFlexBox]}>
        <Text style={styles.carDescriptionTextContainer}>
          {
            "El BMW i4 es un coche eléctrico de cinco puertas que mide 4,78 metros de largo. Es la versión eléctrica del BMW Serie 4 Gran Coupé. El BMW i4 está disponible en dos versiones: eDrive40 y M50. El BMW i4 eDrive40 cuenta con un único motor eléctrico que, situado bajo el maletero, desarrolla 340 CV y entrega 430 Nm de par. La potencia se transmite exclusivamente al eje trasero y es capaz de acelerar de 0 a 100 km/h en 5,7 segundos."
          }
          <Text style={styles.bmwi4Prices}>{"Precio BMW i4"}</Text>
          <Text style={styles.bmwi4Prices}>{"Versión BMW i4"}</Text>
          <Text style={styles.bmwi4Prices}>{"Pruebas, noticias y comparaciones"}</Text>
        </Text>
      </Text>
      <View style={[styles.infoSelectedCar, styles.carDescriptionPosition]}>
        <Text style={[styles.carTitle, styles.priceTypo]}>BMW i4 Belinda</Text>
        <View style={styles.carState}>
          <Text style={[styles.new, styles.newTypo]}>New</Text>
        </View>
        <Text style={styles.reference}>Rs. 18,00,000.00</Text>
      </View>
      <View style={[styles.price, styles.titleFlexBox]}>
        <Text style={[styles.price1, styles.priceTypo]}>{"Precio: "}</Text>
        <Text style={[styles.price2, styles.priceTypo]}>
          276,598,383.13 COP
        </Text>
      </View>
      <View style={[styles.carDescriptionButtons, styles.autoFlexBox]}>
        <Pressable
          style={styles.buttonLayout1}
          onPress={() => navigation.navigate("TestDriveCarScreen")}>
          <View style={[styles.testDriveButtonChild, styles.buttonLayout]} />
          <Text style={[styles.testDrive, styles.newTypo]}>Prueba de manejo</Text>
        </Pressable>
        <Pressable
          style={[styles.testDriveButton1, styles.buttonLayout1]}
          onPress={() => navigation.navigate("QuotationCarScreen")}>
          <View style={[styles.testDriveItemLayout, styles.buttonLayout]} />
          <Text style={[styles.testDrive, styles.newTypo]}>Cotizar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    paddingBottom: 20,
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  titleFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  hypicarsTypo: {
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
  },
  bxbxMenuLayout: {
    height: 24,
    width: 24,
  },
  autoFlexBox: {
    left: 23,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  circleLayout: {
    width: 11,
    height: 11,
  },
  carTitleFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  carDescriptionPosition: {
    left: 27,
    position: "absolute",
  },
  priceTypo: {
    fontFamily: FontFamily.arial,
    fontWeight: "700",
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  newTypo: {
    color: Color.colorWhite1,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
  },
  buttonLayout: {
    borderRadius: Border.br_xl,
    height: 55,
    width: 173,
    top: 0,
    left: 0,
    position: "absolute",
  },
  buttonLayout1: {
    height: 55,
    width: 173,
  },
  icon: {
    height: "100%",
  },
  hypicars: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    color: Color.colorSteelblue_100,
    marginLeft: 104,
    fontFamily: FontFamily.poppins,
  },
  codiconbellDot: {
    marginLeft: 104,
  },
  title: {
    top: 44,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    left: 0,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  image4Icon: {
    borderRadius: 27,
    width: 364,
    height: 360,
  },
  maskGroupIcon: {
    marginLeft: 6,
    width: 366,
    height: 360,
  },
  galleryOfCar: {
    zIndex: 0,
    justifyContent: "center",
  },
  galleryCirclesItem: {
    marginLeft: 6,
  },
  galleryCircles: {
    top: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  carCircles: {
    top: 331,
    left: 162,
    width: 45,
    zIndex: 1,
    height: 11,
    position: "absolute",
  },
  galleryOfSelectedCar: {
    top: 60,
  },
  carDescriptionTextContainer: {
    width: "100%",
  },
  carDescription: {
    top: 544,
    fontSize: FontSize.size_3xs,
    height: 194,
    opacity: 0.4,
    textAlign: "left",
    color: Color.black,
    display: "flex",
    left: 27,
    position: "absolute",
    width: 366,
    fontFamily: FontFamily.poppins,
  },
  carTitle: {
    width: 296,
    height: 30,
    display: "flex",
    alignItems: "center",
    color: Color.black,
  },
  new: {
    fontWeight: "500",
    textAlign: "left",
  },
  carState: {
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_9xs,
    marginLeft: 5,
    backgroundColor: Color.colorSteelblue_100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  reference: {
    textAlign: "right",
    opacity: 0.5,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    marginLeft: 5,
    color: Color.black,
    fontFamily: FontFamily.poppins,
  },
  infoSelectedCar: {
    top: 493,
    width: 374,
    flexWrap: "wrap",
    flexDirection: "row",
    left: 27,
  },
  price1: {
    color: "#41424e",
  },
  price2: {
    color: "#829bc7",
    marginLeft: 12,
  },
  price: {
    top: 650,
    left: 71,
    justifyContent: "center",
    position: "absolute",
  },
  testDriveButtonChild: {
    backgroundColor: Color.colorSteelblue_100,
    borderRadius: Border.br_xl,
  },
  testDrive: {
    top: 17,
    left: 17,
    width: 140,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
    justifyContent: "center",
    position: "absolute",
  },
  testDriveItemLayout: {
    backgroundColor: Color.colorDimgray_100,
  },
  testDriveButton1: {
    marginLeft: 12,
  },
  carDescriptionButtons: {
    top: 710,
  },
  carDetailsScreen: {
    flex: 1,
    height: 896,
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
  },
});

export default CarDetailsScreen;
