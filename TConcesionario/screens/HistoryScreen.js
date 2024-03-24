import * as React from "react";
import {ScrollView, Image, StyleSheet, Pressable, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {FontFamily, Padding, Color, Border, FontSize} from "../GlobalStyles";

const HistoryScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.historialScreen}>
        <View style={[styles.title, styles.titleFlexBox]}>
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
        <View style={[styles.titulo, styles.titleFlexBox]}>
          <Text style={styles.historialDeServicio}>
            {"Historial de Servicio "}
          </Text>
        </View>
        <View style={styles.subtituloNotificaciones}>
          <Text style={[styles.recientes, styles.recientesTypo]}>
            {"Recientes "}
          </Text>
        </View>
        <View style={[styles.tarjetaDeNotificacion, styles.tarjetaBorder]}>
          <Text style={[styles.servicioRealizado, styles.recientesTypo]}>
            Mantenimiento
          </Text>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>{"Lugar: "}</Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              HypiCars, Sede pricipal Medellín.
            </Text>
          </View>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>{"Fecha: "}</Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              10/09/2023
            </Text>
          </View>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>
              {"Vehículo: "}
            </Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              BMW i4 Berlina.
            </Text>
          </View>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>Referencia:</Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              Rs. 18,00,000.00
            </Text>
          </View>
          <View style={styles.descripcionServicio}>
            <View style={styles.lugar5}>
              <Text style={[styles.lugar1, styles.lugar1Typo]}>
                {"Descripción: "}
              </Text>
            </View>
            <View
              style={[
                styles.descripcionContainer,
                styles.descripcionContainerLayout,
              ]}>
              <View
                style={[
                  styles.descripcionContainerChild,
                  styles.descripcionContainerLayout,
                ]}
              />
              <Text style={[styles.seRealizaronAlgunos, styles.recientesTypo]}>
                {
                  "Se realizaron algunos ajustes como: Cambio de aceite y filtroRevisión de nivelesRotación de neumáticosRevisión de frenos, suspensión y luces"
                }
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.tarjetaDeNotificacion1, styles.tarjetaBorder]}>
          <Text style={[styles.servicioRealizado, styles.recientesTypo]}>
            Revisión
          </Text>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>{"Lugar: "}</Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              HypiCars, Sede pricipal Medellín.
            </Text>
          </View>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>{"Fecha: "}</Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              04/07/2023
            </Text>
          </View>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>
              {"Vehículo: "}
            </Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              BMW i4 Berlina.
            </Text>
          </View>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>Referencia:</Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              Rs. 18,00,000.00
            </Text>
          </View>
          <View style={styles.descripcionServicio}>
            <View style={styles.lugar5}>
              <Text style={[styles.lugar1, styles.lugar1Typo]}>
                {"Descripción: "}
              </Text>
            </View>
            <View
              style={[
                styles.descripcionContainer,
                styles.descripcionContainerLayout,
              ]}>
              <View
                style={[
                  styles.descripcionContainerChild,
                  styles.descripcionContainerLayout,
                ]}
              />
              <Text style={[styles.seRealizaronAlgunos, styles.recientesTypo]}>
                {
                  "Se realizaron algunos ajustes como: Cambio de aceite y filtroRevisión de nivelesRotación de neumáticosRevisión de frenos, suspensión y luces"
                }
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.tarjetaDeNotificacion, styles.tarjetaBorder]}>
          <Text style={[styles.servicioRealizado, styles.recientesTypo]}>
            Mantenimiento
          </Text>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>{"Lugar: "}</Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              HypiCars, Sede pricipal Medellín.
            </Text>
          </View>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>{"Fecha: "}</Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              10/09/2023
            </Text>
          </View>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>
              {"Vehículo: "}
            </Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              BMW i4 Berlina.
            </Text>
          </View>
          <View style={styles.lugar}>
            <Text style={[styles.lugar1, styles.lugar1Typo]}>Referencia:</Text>
            <Text style={[styles.hypicarsSedePricipal, styles.lugar1Typo]}>
              Rs. 18,00,000.00
            </Text>
          </View>
          <View style={styles.descripcionServicio}>
            <View style={styles.lugar5}>
              <Text style={[styles.lugar1, styles.lugar1Typo]}>
                {"Descripción: "}
              </Text>
            </View>
            <View
              style={[
                styles.descripcionContainer,
                styles.descripcionContainerLayout,
              ]}>
              <View
                style={[
                  styles.descripcionContainerChild,
                  styles.descripcionContainerLayout,
                ]}
              />
              <Text style={[styles.seRealizaronAlgunos, styles.recientesTypo]}>
                {
                  "Se realizaron algunos ajustes como: Cambio de aceite y filtroRevisión de nivelesRotación de neumáticosRevisión de frenos, suspensión y luces"
                }
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.navegation}>
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
              source={require("../assets/star.png")}
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: Color.colorWhite1,
    paddingBottom: 20, 
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  bxbxMenuLayout: {
    height: 24,
    width: 24,
  },
  recientesTypo: {
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  tarjetaBorder: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_lgi,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xl,
    left: 24,
    position: "absolute",
  },
  lugar1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  descripcionContainerLayout: {
    height: 154,
    width: 325,
  },
  homeLayout: {
    height: 32,
    width: 32,
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
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    left: 0,
    backgroundColor: Color.colorWhite1,
    justifyContent: "center",
  },
  historialDeServicio: {
    fontSize: FontSize.size_xl,
    color: Color.black,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  titulo: {
    top: 115,
    left: 100,
    width: 214,
    height: 45,
  },
  recientes: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkgray_200,
  },
  subtituloNotificaciones: {
    top: 184,
    left: 29,
    flexDirection: "row",
    position: "absolute",
  },
  servicioRealizado: {
    fontSize: FontSize.size_lg,
    display: "flex",
    width: 210,
    height: 38,
    color: Color.black,
    alignItems: "center",
    textAlign: "left",
  },
  lugar1: {
    color: Color.colorDimgray_200,
  },
  hypicarsSedePricipal: {
    color: Color.colorGray_200,
    marginLeft: 5,
  },
  lugar: {
    marginTop: 12,
    flexDirection: "row",
  },
  lugar5: {
    flexDirection: "row",
  },
  descripcionContainerChild: {
    top: 0,
    backgroundColor: Color.colorGray_600,
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
  },
  seRealizaronAlgunos: {
    top: 10,
    left: 9,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    width: 307,
    height: 134,
    position: "absolute",
  },
  descripcionContainer: {
    marginTop: 7,
  },
  descripcionServicio: {
    marginTop: 12,
  },
  tarjetaDeNotificacion: {
    top: 232,
  },
  tarjetaDeNotificacion1: {
    top: 637,
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
    left: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  historialScreen: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite1,
  },
});

export default HistoryScreen;
