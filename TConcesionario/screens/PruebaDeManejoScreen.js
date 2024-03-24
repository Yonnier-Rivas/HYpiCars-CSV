import * as React from "react";
import { ScrollView, Image, StyleSheet, Pressable, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const PruebaDeManejoScreen = () => {
  const navigation = useNavigation();

  const handleConfirmation = () => {
    Alert.alert(
      "Prueba de Manejo",
      "La prueba de manejo se ha agendado de manera exitosa",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"), // Puedes agregar una acción al botón OK si lo deseas
        },
      ],
      { cancelable: false } // Esto evita que se pueda cerrar la alerta tocando fuera de ella
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.pruebaDeManejoScreen}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Pressable
          style={styles.bxbxMenuLayout}
          onPress={() => navigation.navigate("CarDetailsScreen")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/bxbxmenu.png")}
          />
        </Pressable>
        <Text style={[styles.hypicars, styles.hypicarsTypo]}>HypiCars</Text>
        <Pressable
          style={[styles.codiconbellDot, styles.bxbxMenuLayout]}
          onPress={() => navigation.navigate("NotificacionesScreen")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/codiconbelldot.png")}
          />
        </Pressable>
      </View>
      <View style={styles.tituloParent}>
        <View style={[styles.titulo, styles.titleFlexBox]}>
          <Text style={[styles.solicitarDePrueba, styles.hypicarsTypo]}>
            Solicitar de Prueba de Manejo
          </Text>
        </View>
        <Text style={[styles.tituloCarro, styles.solicitarFlexBox]}>
          <Text style={styles.tituloCarroTxtContainer}>
            <Text style={styles.deseasConducirEsteBmwI4Be}>
              <Text
                style={styles.deseasConducirEste}
              >{`Deseas conducir este `}</Text>
              <Text style={styles.bmwI4Belinda}>BMW i4 Belinda</Text>
              <Text style={styles.deseasConducirEste}>
                . Llena el siguiente formulario.
              </Text>
            </Text>
            <Text style={styles.deseasConducirEste}>
              <Text style={styles.text1}>{` `}</Text>
            </Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.contenedorFormulario, styles.contenedorLayout]}>
        <View
          style={[styles.contenedorFormularioChild, styles.contenedorLayout]}
        />
        <View style={styles.inputsFormulario}>
          <View style={styles.imputFormularioWrapper}>
            <View>
              <Text style={[styles.fecha, styles.fechaTypo]}>Fecha:</Text>
              <Image
                style={styles.imputFormularioChild}
                resizeMode="cover"
                source={require("../assets/rectangle-121.png")}
              />
              <Text style={[styles.text2, styles.textPosition]}>
                05/05/2024
              </Text>
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/icon1.png")}
              />
            </View>
          </View>
          <View style={[styles.imputFormulario1, styles.imputPosition]}>
            <Text
              style={[styles.fecha, styles.fechaTypo]}
            >{`Número de Celular: `}</Text>
            <Image
              style={styles.imputFormularioChild}
              resizeMode="cover"
              source={require("../assets/rectangle-121.png")}
            />
            <Text style={[styles.text3, styles.textPosition]}>300565980</Text>
          </View>
          <View style={[styles.imputFormulario2, styles.imputPosition]}>
            <Text style={[styles.fecha, styles.fechaTypo]}>
              Documento de Identidad:
            </Text>
            <Image
              style={styles.imputFormularioChild}
              resizeMode="cover"
              source={require("../assets/rectangle-121.png")}
            />
            <Text style={[styles.text3, styles.textPosition]}>1000123456</Text>
          </View>
          <View style={[styles.imputFormulario3, styles.imputPosition]}>
            <Text style={[styles.fecha, styles.fechaTypo]}>{`Nombres: `}</Text>
            <Image
              style={styles.imputFormularioChild}
              resizeMode="cover"
              source={require("../assets/rectangle-121.png")}
            />
            <Text
              style={[styles.text3, styles.textPosition]}
            >{`Yonnier David `}</Text>
          </View>
          <View style={[styles.imputFormulario4, styles.imputPosition]}>
            <Text
              style={[styles.fecha, styles.fechaTypo]}
            >{`Apellidos: `}</Text>
            <Image
              style={styles.imputFormularioChild}
              resizeMode="cover"
              source={require("../assets/rectangle-121.png")}
            />
            <Text style={[styles.text3, styles.textPosition]}>
              Rivas Mosquera
            </Text>
          </View>
        </View>
        <Pressable onPress={handleConfirmation}>
        <View style={[styles.botonPrueba, styles.botonLayout]}>
          <View style={[styles.botonPruebaChild, styles.botonLayout]} />
          <Text style={[styles.solicitar, styles.fechaTypo]}>Solicitar</Text>
        </View>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  hypicarsTypo: {
    fontFamily: FontFamily.poppins,
    textAlign: "center",
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
    height: 605,
    width: 414,
    left: 0,
    position: "absolute",
  },
  fechaTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    lineHeight: 22,
  },
  textPosition: {
    zIndex: 2,
    height: 38,
    top: 27,
    left: 10,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.arial,
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_200,
    lineHeight: 22,
    alignItems: "center",
    position: "absolute",
  },
  imputPosition: {
    left: 10,
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
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 22,
    fontFamily: FontFamily.poppins,
  },
  codiconbellDot: {
    marginLeft: 104,
  },
  title: {
    top: 31,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    left: 0,
    backgroundColor: Color.colorWhite1,
  },
  solicitarDePrueba: {
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  titulo: {
    left: 11,
    width: 331,
    height: 45,
    top: 0,
    justifyContent: "center",
  },
  deseasConducirEste: {
    fontFamily: FontFamily.arial,
  },
  bmwI4Belinda: {
    fontWeight: "700",
    fontFamily: FontFamily.arial,
  },
  deseasConducirEsteBmwI4Be: {
    fontSize: FontSize.size_base,
  },
  text1: {
    fontSize: FontSize.size_xl,
  },
  tituloCarroTxtContainer: {
    width: "100%",
  },
  tituloCarro: {
    top: 69,
    height: 72,
    textAlign: "left",
    color: Color.colorGray_200,
    display: "flex",
    width: 369,
    left: 0,
  },
  tituloParent: {
    top: 111,
    left: 27,
    height: 141,
    width: 369,
    position: "absolute",
  },
  contenedorFormularioChild: {
    borderTopLeftRadius: Border.br_20xl,
    borderTopRightRadius: Border.br_20xl,
    backgroundColor: Color.colorWhitesmoke_200,
    top: 0,
  },
  fecha: {
    color: Color.colorDimgray_200,
    zIndex: 0,
    textAlign: "left",
  },
  imputFormularioChild: {
    borderRadius: Border.br_xs,
    width: 342,
    height: 46,
    zIndex: 1,
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
    top: 304,
    padding: Padding.p_3xs,
    left: 0,
    position: "absolute",
  },
  text3: {
    width: 312,
  },
  imputFormulario1: {
    top: 228,
  },
  imputFormulario2: {
    top: 152,
  },
  imputFormulario3: {
    top: 0,
  },
  imputFormulario4: {
    top: 76,
  },
  inputsFormulario: {
    top: 45,
    left: 26,
    width: 362,
    height: 392,
    position: "absolute",
  },
  botonPruebaChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSteelblue_100,
    top: 0,
    left: 0,
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
    justifyContent: "center",
  },
  botonPrueba: {
    top: 465,
    left: 120,
  },
  contenedorFormulario: {
    top: 298,
  },
  pruebaDeManejoScreen: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite1,
  },
});

export default PruebaDeManejoScreen;
