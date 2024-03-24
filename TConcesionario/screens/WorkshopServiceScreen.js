import * as React from "react";
import {ScrollView, Image, StyleSheet, Pressable, Text, View, Alert,} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {FontFamily, Color, FontSize, Padding, Border} from "../GlobalStyles";

const WorkshopServiceScreen = () => {
  const navigation = useNavigation();
  const handleConfirmation = () => {
    Alert.alert(
      "Servicio al Taller",
      "Se agendo la cita exitosamente",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"), //  agregar una acción al botón OK
        },
      ],
      {cancelable: false}, // evita que se pueda cerrar la alerta tocando fuera de ella
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.servicioTallerScreen}>
        <View style={styles.titleParent}>
          <View style={[styles.title, styles.opccinFlexBox]}>
            <Pressable
              style={styles.bxbxMenuLayout}
              onPress={() => navigation.navigate("HomeScreen")}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/bxbxmenu.png")}
              />
            </Pressable>
            <Text style={[styles.hypicars, styles.hypicarsTypo]}>HypiCars</Text>
            <Pressable
              style={[styles.codiconbellDot, styles.bxbxMenuLayout]}
              onPress={() => navigation.navigate("NotificationsScreen")}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/codiconbelldot.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.titulo, styles.opccinFlexBox]}>
            <Text style={[styles.servicioTaller, styles.hypicarsTypo]}>
              Servicio Taller
            </Text>
          </View>
          <Text style={[styles.tituloCarro, styles.solicitarFlexBox]}>
            <Text style={styles.tituloCarroTxtContainer}>
              <Text
                style={
                  styles.deseasAccederAl
                }>{"¿Deseas acceder al servicio de taller de "}</Text>
              <Text style={styles.hypicars1}>HypiCars</Text>
              <Text
                style={
                  styles.deseasAccederAl
                }>{"? Llena el siguiente formulario. "}</Text>
            </Text>
          </Text>
          <View style={[styles.contenedorFormulario, styles.contenedorLayout]}>
            <View
              style={[
                styles.contenedorFormularioChild,
                styles.contenedorLayout,
              ]}
            />
            <View style={[styles.inputsFormulario, styles.opccinFlexBox]}>
              <View style={styles.opcionesDeServicio}>
                <Text style={[styles.seleccionaElTipo, styles.nombresTypo]}>
                  {"Selecciona el tipo de servicio: "}
                </Text>
                <View style={styles.opcionesServicio}>
                  <View style={[styles.opccinServicio, styles.opccinFlexBox]}>
                    <Image
                      style={styles.opccinServicioChild}
                      resizeMode="cover"
                      source={require("../assets/ellipse-14.png")}
                    />
                    <Text style={[styles.mantenimiento, styles.solicitarTypo]}>
                      Mantenimiento
                    </Text>
                  </View>
                  <View style={[styles.opccinServicio1, styles.opccinFlexBox]}>
                    <Image
                      style={styles.opccinServicioChild}
                      resizeMode="cover"
                      source={require("../assets/ellipse-141.png")}
                    />
                    <Text style={[styles.mantenimiento, styles.solicitarTypo]}>
                      Revisión Técnica
                    </Text>
                  </View>
                  <View style={[styles.opccinServicio2, styles.opccinFlexBox]}>
                    <Image
                      style={styles.opccinServicioChild}
                      resizeMode="cover"
                      source={require("../assets/ellipse-141.png")}
                    />
                    <Text style={[styles.mantenimiento, styles.solicitarTypo]}>
                      Reparación
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.imputFormulario}>
                <Text
                  style={[
                    styles.nombres,
                    styles.nombresTypo,
                  ]}>{"Nombres: "}</Text>
                <Image
                  style={styles.imputFormularioChild}
                  resizeMode="cover"
                  source={require("../assets/rectangle-121.png")}
                />
                <Text
                  style={[
                    styles.yonnierDavid,
                    styles.text2Position,
                  ]}>{"Yonnier David "}</Text>
              </View>
              <View style={styles.imputFormulario}>
                <Text style={[styles.nombres, styles.nombresTypo]}>
                  {"Apellidos: "}
                </Text>
                <Image
                  style={styles.imputFormularioChild}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1211.png")}
                />
                <Text style={[styles.yonnierDavid, styles.text2Position]}>
                  Rivas Mosquera
                </Text>
              </View>
              <View style={styles.imputFormulario}>
                <Text style={[styles.nombres, styles.nombresTypo]}>
                  Documento de Identidad:
                </Text>
                <Image
                  style={styles.imputFormularioChild}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1212.png")}
                />
                <Text style={[styles.yonnierDavid, styles.text2Position]}>
                  1000123456
                </Text>
              </View>
              <View style={styles.imputFormulario}>
                <Text
                  style={[
                    styles.nombres,
                    styles.nombresTypo,
                  ]}>{"Número de Celular: "}</Text>
                <Image
                  style={styles.imputFormularioChild}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1213.png")}
                />
                <Text style={[styles.yonnierDavid, styles.text2Position]}>
                  300565980
                </Text>
              </View>
              <View style={styles.imputFormularioWrapper}>
                <View>
                  <Text style={[styles.nombres, styles.nombresTypo]}>
                    Fecha:
                  </Text>
                  <Image
                    style={styles.imputFormularioChild}
                    resizeMode="cover"
                    source={require("../assets/rectangle-1214.png")}
                  />
                  <Text style={[styles.text2, styles.text2Position]}>
                    05/05/2024
                  </Text>
                  <Image
                    style={styles.icon2}
                    resizeMode="cover"
                    source={require("../assets/icon.png")}
                  />
                </View>
              </View>
            </View>
            <Pressable onPress={handleConfirmation}>
              <View style={[styles.botonPrueba, styles.botonLayout]}>
                <View style={[styles.botonPruebaChild, styles.botonLayout]} />
                <Text style={[styles.solicitar, styles.solicitarTypo]}>
                  Solicitar
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  opccinFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  hypicarsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  bxbxMenuLayout: {
    height: 24,
    width: 24,
  },
  solicitarFlexBox: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  contenedorLayout: {
    height: 649,
    width: 414,
    left: 0,
    position: "absolute",
  },
  nombresTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    lineHeight: 22,
  },
  solicitarTypo: {
    fontSize: FontSize.size_sm,
    lineHeight: 22,
  },
  text2Position: {
    zIndex: 2,
    height: 38,
    left: 10,
    top: 27,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.arial,
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_200,
    lineHeight: 22,
    alignItems: "center",
    position: "absolute",
  },
  botonLayout: {
    height: 55,
    width: 173,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  hypicars: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    color: Color.colorSteelblue_100,
    marginLeft: 104,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    lineHeight: 22,
  },
  codiconbellDot: {
    marginLeft: 104,
  },
  title: {
    top: 51,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    backgroundColor: Color.colorWhite1,
  },
  servicioTaller: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.black,
  },
  titulo: {
    top: 117,
    left: 42,
    width: 331,
    height: 45,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  deseasAccederAl: {
    fontFamily: FontFamily.arial,
  },
  hypicars1: {
    fontWeight: "700",
    fontFamily: FontFamily.arial,
  },
  tituloCarroTxtContainer: {
    width: "100%",
  },
  tituloCarro: {
    top: 172,
    left: 23,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    width: 369,
    height: 72,
    textAlign: "left",
    color: Color.colorGray_200,
  },
  contenedorFormularioChild: {
    borderTopLeftRadius: Border.br_20xl,
    borderTopRightRadius: Border.br_20xl,
    backgroundColor: Color.colorWhitesmoke_200,
    top: 0,
  },
  seleccionaElTipo: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  opccinServicioChild: {
    width: 12,
    height: 12,
  },
  mantenimiento: {
    marginLeft: 6,
    fontFamily: FontFamily.arial,
    textAlign: "left",
    color: Color.colorGray_200,
  },
  opccinServicio: {
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    top: 0,
  },
  opccinServicio1: {
    left: 228,
    flexDirection: "row",
    alignItems: "center",
    top: 0,
  },
  opccinServicio2: {
    left: 124,
    flexDirection: "row",
    alignItems: "center",
    top: 0,
  },
  opcionesServicio: {
    top: 30,
    height: 22,
    width: 353,
    left: 0,
    position: "absolute",
  },
  opcionesDeServicio: {
    height: 52,
    width: 353,
  },
  nombres: {
    zIndex: 0,
  },
  imputFormularioChild: {
    borderRadius: Border.br_xs,
    width: 342,
    height: 46,
    zIndex: 1,
  },
  yonnierDavid: {
    width: 312,
  },
  imputFormulario: {
    height: 66,
    marginTop: 11,
  },
  text2: {
    width: 303,
  },
  icon2: {
    top: 38,
    left: 317,
    width: 16,
    height: 16,
    zIndex: 3,
    position: "absolute",
    overflow: "hidden",
  },
  imputFormularioWrapper: {
    height: 85,
    padding: Padding.p_3xs,
    marginTop: 11,
  },
  inputsFormulario: {
    top: 33,
    left: 24,
  },
  botonPruebaChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSteelblue_100,
    left: 0,
    top: 0,
  },
  solicitar: {
    top: 17,
    left: 17,
    color: Color.colorWhite1,
    width: 140,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    justifyContent: "center",
  },
  botonPrueba: {
    top: 529,
    left: 120,
  },
  contenedorFormulario: {
    top: 254,
  },
  titleParent: {
    height: 903,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  servicioTallerScreen: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite1,
  },
});

export default WorkshopServiceScreen;
