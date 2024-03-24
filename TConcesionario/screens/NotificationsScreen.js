import * as React from "react";
import { ScrollView, Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const NotificationsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.notificacionesScreen}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Pressable
          style={styles.bxbxMenuLayout}
          onPress={() => navigation.navigate("ItemsMenuScreen")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bxbxmenu1.png")}
          />
        </Pressable>
        <Text style={styles.hypicars}>HypiCars</Text>
        <Pressable
          style={[styles.codiconbellDot, styles.bxbxMenuLayout]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/codiconbelldot1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.titulo, styles.titleFlexBox]}>
        <Text style={[styles.notificaciones, styles.borrarTodoTypo]}>
          Notificaciones
        </Text>
      </View> 
      <View style={styles.navegation}>
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
            source={require("../assets/star1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.union}
          onPress={() => navigation.navigate("ContactScreen")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/union.png")}
          />
        </Pressable>
      </View>
      <View style={styles.subtituloNotificaciones}>
        <Text
          style={[styles.recientes, styles.recientesTypo]}
        >{"Recientes "}</Text>
        <Text style={[styles.borrarTodo, styles.borrarTodoTypo]}>
          Borrar todo
        </Text>
      </View>
      <View style={[styles.tarjetaDeNotificacion, styles.tarjetaBorder]}>
        <Image
          style={styles.tarjetaDeNotificacionChild}
          resizeMode="cover"
          source={require("../assets/rectangle-118.png")}
        />
        <View style={styles.textoNotificacion}>
          <Text style={[styles.tituloNotificacin, styles.recientesTypo]}>
            Bienvenido a HypiCars
          </Text>
          <Text style={[styles.infoDeNotificacion, styles.recientesTypo]}>
            Aquí podrás encontrar el carro de tus sueños con las mejores
            ofertas.
          </Text>
        </View>
      </View>
      <View style={[styles.tarjetaDeNotificacion1, styles.tarjetaBorder]}>
        <Image
          style={styles.tarjetaDeNotificacionChild}
          resizeMode="cover"
          source={require("../assets/rectangle-1181.png")}
        />
        <View style={styles.textoNotificacion}>
          <Text style={[styles.tituloNotificacin, styles.recientesTypo]}>
            Testa Model X en Oferta
          </Text>
          <Text style={[styles.infoDeNotificacion, styles.recientesTypo]}>
            Aprovecha y llévate un Tesla Model X totalmente nuevo y siente el
            poder de la aceleración al ritmo de la luz.
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
  borrarTodoTypo: {
    fontWeight: "500",
    color: Color.black,
    fontFamily: FontFamily.poppins,
  },
  homeLayout: {
    height: 32,
    width: 32,
  },
  recientesTypo: {
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
  },
  tarjetaBorder: {
    padding: Padding.p_8xs,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xl,
    left: 21,
    alignItems: "center",
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
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.colorWhite1,
    justifyContent: "center",
  },
  notificaciones: {
    fontSize: FontSize.size_xl,
    color: Color.black,
    textAlign: "center",
  },
  titulo: {
    top: 115,
    left: 100,
    width: 214,
    height: 45,
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
    top: 816,
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
    left: 21,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  recientes: {
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_base,
  },
  borrarTodo: {
    textAlign: "right",
    opacity: 0.4,
    marginLeft: 191,
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  subtituloNotificaciones: {
    top: 184,
    left: 29,
    flexDirection: "row",
    position: "absolute",
  },
  tarjetaDeNotificacionChild: {
    width: 137,
    height: 118,
    borderRadius: Border.br_xl,
  },
  tituloNotificacin: {
    display: "flex",
    width: 210,
    height: 38,
    fontSize: FontSize.size_base,
    color: Color.black,
    alignItems: "center",
    textAlign: "left",
  },
  infoDeNotificacion: {
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_100,
    width: 203,
    height: 62,
    marginTop: 3,
  },
  textoNotificacion: {
    marginLeft: 7,
  },
  tarjetaDeNotificacion: {
    top: 233,
  },
  tarjetaDeNotificacion1: {
    top: 384,
  },
  notificacionesScreen: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite1,
  },
});

export default NotificationsScreen;
