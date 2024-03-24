import * as React from "react";
import {ScrollView, Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const NewCarScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.CarrosNuevosScreen}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Pressable
          style={styles.bxbxMenuLayout}
          onPress={() => navigation.navigate("ItemsMenuScreen")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
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
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/codiconbelldot.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.titulo, styles.titleFlexBox]}>
        <Text
          style={[styles.vehculosQueTe, styles.rs547782373Typo]}
        >{"Vehículos Nuevos"}</Text>
      </View>
      <View style={styles.carrosGuardados}>
        <Pressable
          style={styles.rectangleBorder}
          onPress={() => navigation.navigate("CarDetailsScreen")}
        >
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-85.png")}
          />
          <Text style={[styles.porscheCayenneGts, styles.teslaModelXTypo]}>
            Porsche Cayenne GTS 2022
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-119.png")}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaIcon, styles.bxbxMenuLayout]}
            resizeMode="cover"
            source={require("../assets/me-gusta.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.rectangleGroup, styles.rectangleBorder]}
          onPress={() => navigation.navigate("CarDetailsScreen")}
        >
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-854.png")}
          />
          <Text style={[styles.teslaModelX, styles.teslaModelXTypo]}>
            TESLA Model X
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-119.png")}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaIcon, styles.bxbxMenuLayout]}
            resizeMode="cover"
            source={require("../assets/me-gusta1.png")}
          />
        </Pressable>
        <View style={[styles.rectangleGroup, styles.rectangleBorder]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-852.png")}
          />
          <Text style={[styles.teslaModelX, styles.teslaModelXTypo]}>
            TESLA Model X
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-119.png")}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaIcon, styles.bxbxMenuLayout]}
            resizeMode="cover"
            source={require("../assets/me-gusta.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleBorder]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/rectangle-855.png")}
          />
          <Text style={[styles.porscheCayenneGts, styles.teslaModelXTypo]}>
            Porsche Cayenne GTS 2022
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/group-119.png")}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaIcon, styles.bxbxMenuLayout]}
            resizeMode="cover"
            source={require("../assets/me-gusta1.png")}
          />
        </View>
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
        <Image
          style={[styles.starIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/star3.png")}
        />
        <Pressable
          style={styles.union}
          onPress={() => navigation.navigate("ContactScreen")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/union.png")}
          />
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  bxbxMenuLayout: {
    height: 24,
    width: 24,
  },
  rs547782373Typo: {
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  teslaModelXTypo: {
    zIndex: 1,
    color: Color.colorBlack,
    fontFamily: FontFamily.arial,
    fontWeight: "700",
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    marginLeft: 1,
    textAlign: "left",
  },
  rectangleBorder: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingHorizontal: Padding.p_9xs,
    width: 180,
    borderColor: Color.colorGray_300,
    flexWrap: "wrap",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorWhite1,
  },
  iconLayout: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  icon: {
    overflow: "hidden",
  },
  hypicars: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    color: Color.colorSteelblue_100,
    textAlign: "center",
    marginLeft: 104,
    fontFamily: FontFamily.poppins,
    lineHeight: 22,
    letterSpacing: 0,
  },
  codiconbellDot: {
    marginLeft: 104,
  },
  title: {
    top: 35,
    left: 0,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorWhite1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  vehculosQueTe: {
    fontSize: FontSize.size_xl,
  },
  titulo: {
    top: 120,
    left: 74,
  },
  frameChild: {
    borderRadius: Border.br_lg,
    width: 172,
    height: 117,
    zIndex: 0,
  },
  porscheCayenneGts: {
    marginLeft: 1,
  },
  frameItem: {
    width: 0,
    height: 0,
    zIndex: 2,
    marginLeft: 1,
  },
  rs547782373: {
    fontSize: FontSize.size_3xs,
    opacity: 0.5,
    zIndex: 3,
    marginLeft: 1,
    lineHeight: 22,
    letterSpacing: 0,
    color: Color.black,
    fontWeight: "500",
  },
  meGustaIcon: {
    top: 11,
    left: 146,
    zIndex: 4,
    position: "absolute",
    width: 24,
  },
  teslaModelX: {
    width: 103,
    height: 17,
    marginLeft: 1,
  },
  rectangleGroup: {
    marginLeft: 11,
  },
  carrosGuardados: {
    top: 200,
    left: 15,
    backgroundColor: Color.colorWhitesmoke_200,
    borderColor: Color.colorGainsboro_100,
    width: 383,
    paddingHorizontal: 6,
    paddingVertical: Padding.p_mini,
    flexWrap: "wrap",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    flexDirection: "row",
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  homeLayout: {
    height: 32,
    width: 32,
  },
  starIcon: {
    marginLeft: 89,
    height: 32,
    width: 32,
  },
  union: {
    width: 28,
    height: 31,
    marginLeft: 89,
  },
  navegation: {
    top: 816,
    left: 25,
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
  },
  CarrosNuevosScreen: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite1,
  },
});

export default NewCarScreen;
