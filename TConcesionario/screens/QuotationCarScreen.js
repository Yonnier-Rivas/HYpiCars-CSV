import * as React from "react";
import { ScrollView, Image, StyleSheet, Pressable, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const QuotationCarScreen = () => {
  const navigation = useNavigation();

  const handleConfirmation = () => {
    Alert.alert(
      "Cotizacion",
      "La cotizacion se ha realizado de manera exitosa",
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
    <View style={[styles.cotizacionScreen, styles.iconLayout]}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Pressable
          style={styles.bxbxMenuLayout}
          onPress={() => navigation.navigate("CarDetailsScreen")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bxbxmenu.png")}
          />
        </Pressable>
        <Text style={[styles.hypicars, styles.cotizarTypo]}>HypiCars</Text>
        <Pressable
          style={[styles.codiconbellDot, styles.bxbxMenuLayout]}
          onPress={() => navigation.navigate("NotificationsScreen")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/codiconbelldot.png")}
          />
        </Pressable>
      </View>
      <View style={styles.tituloParent}>
        <View style={[styles.titulo, styles.titleFlexBox]}>
          <Text
            style={[styles.realizarCotizacin, styles.cotizarTypo]}
          >{`Realizar Cotización `}</Text>
        </View>
        <Text style={[styles.tituloCarro, styles.text2FlexBox]}>
          <Text style={styles.tituloCarroTxtContainer}>
            <Text style={styles.deseasCotizarEsteBmwI4Bel}>
              <Text
                style={styles.deseasCotizarEste}
              >{`Deseas cotizar este `}</Text>
              <Text style={styles.bmwI4Belinda}>BMW i4 Belinda</Text>
              <Text style={styles.deseasCotizarEste}>
                . Llena el siguiente formulario.
              </Text>
            </Text>
            <Text style={styles.deseasCotizarEste}>
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
          <View style={[styles.imputFormulario, styles.imputPosition]}>
            <Text
              style={[styles.nmeroDeCelular, styles.text2Typo]}
            >{`Número de Celular: `}</Text>
            <Image
              style={styles.imputFormularioChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1215.png")}
            />
            <Text style={[styles.text2, styles.text2Typo]}>300565980</Text>
          </View>
          <View style={[styles.imputFormulario1, styles.imputPosition]}>
            <Text style={[styles.nmeroDeCelular, styles.text2Typo]}>
              Documento de Identidad:
            </Text>
            <Image
              style={styles.imputFormularioChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1216.png")}
            />
            <Text style={[styles.text2, styles.text2Typo]}>1000123456</Text>
          </View>
          <View style={[styles.imputFormulario2, styles.imputPosition]}>
            <Text
              style={[styles.nmeroDeCelular, styles.text2Typo]}
            >{`Nombres: `}</Text>
            <Image
              style={styles.imputFormularioChild}
              resizeMode="cover"
              source={require("../assets/rectangle-121.png")}
            />
            <Text
              style={[styles.text2, styles.text2Typo]}
            >{`Yonnier David `}</Text>
          </View>
          <View style={[styles.imputFormulario3, styles.imputPosition]}>
            <Text
              style={[styles.nmeroDeCelular, styles.text2Typo]}
            >{`Apellidos: `}</Text>
            <Image
              style={styles.imputFormularioChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1217.png")}
            />
            <Text style={[styles.text2, styles.text2Typo]}>Rivas Mosquera</Text>
          </View>
        </View>
        <Pressable onPress={handleConfirmation}>
        <View style={[styles.botonPrueba, styles.botonLayout]}>
          <View style={[styles.botonPruebaChild, styles.botonLayout]} />
          <Text style={[styles.cotizar, styles.text2Typo]}>Cotizar</Text>
        </View>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  titleFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  cotizarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  bxbxMenuLayout: {
    height: 24,
    width: 24,
  },
  text2FlexBox: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  contenedorLayout: {
    height: 593,
    width: 414,
    left: 0,
    position: "absolute",
  },
  imputPosition: {
    height: 75,
    left: 0,
    position: "absolute",
  },
  text2Typo: {
    fontSize: FontSize.size_sm,
    lineHeight: 22,
  },
  botonLayout: {
    height: 54,
    width: 173,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  hypicars: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    color: Color.colorSteelblue_100,
    marginLeft: 104,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 22,
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
  realizarCotizacin: {
    fontWeight: "500",
    color: Color.black,
    fontSize: FontSize.size_xl,
  },
  titulo: {
    left: 11,
    width: 331,
    height: 45,
    top: 0,
    justifyContent: "center",
  },
  deseasCotizarEste: {
    fontFamily: FontFamily.arial,
  },
  bmwI4Belinda: {
    fontWeight: "700",
    fontFamily: FontFamily.arial,
  },
  deseasCotizarEsteBmwI4Bel: {
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
  nmeroDeCelular: {
    color: Color.colorDimgray_200,
    zIndex: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  imputFormularioChild: {
    borderRadius: Border.br_xs,
    height: 46,
    zIndex: 1,
    width: 342,
  },
  text2: {
    top: 27,
    left: 10,
    width: 312,
    height: 38,
    zIndex: 2,
    fontFamily: FontFamily.arial,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    textAlign: "left",
    color: Color.colorGray_200,
  },
  imputFormulario: {
    top: 268,
  },
  imputFormulario1: {
    top: 179,
  },
  imputFormulario2: {
    top: 0,
  },
  imputFormulario3: {
    top: 89,
  },
  inputsFormulario: {
    top: 56,
    left: 36,
    height: 343,
    width: 342,
    position: "absolute",
  },
  botonPruebaChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSteelblue_100,
    top: 0,
    left: 0,
  },
  cotizar: {
    top: 17,
    left: 17,
    color: Color.colorWhite1,
    width: 140,
    height: 22,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    justifyContent: "center",
  },
  botonPrueba: {
    top: 456,
    left: 120,
  },
  contenedorFormulario: {
    top: 310,
  },
  cotizacionScreen: {
    flex: 1,
    height: 896,
    backgroundColor: Color.colorWhite1,
  },
});

export default QuotationCarScreen;
