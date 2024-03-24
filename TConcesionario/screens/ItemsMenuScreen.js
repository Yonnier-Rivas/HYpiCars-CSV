import * as React from 'react';
import {Image, StyleSheet, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Border, FontFamily, FontSize, Color, Padding} from '../GlobalStyles';

const ItemsMenuScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemsMenuScreen}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Pressable
          style={styles.gustaLayout}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require('../assets/bxbxmenu2.png')}
          />
        </Pressable>
        <Text style={styles.hypicars}>HypiCars</Text>
        <Pressable
          style={[styles.codiconbellDot, styles.gustaLayout]}
          onPress={() => navigation.navigate('NotificationsScreen')}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require('../assets/codiconbelldot.png')}
          />
        </Pressable>
      </View>
      <View style={styles.lookForBar}>
        <Image
          style={styles.lupaIcon}
          resizeMode="cover"
          source={require('../assets/lupa.png')}
        />
        <Text style={styles.buscaHondaPilot}>
          {' '}
          Busca Honda Pilot 7-Passenger
        </Text>
      </View>
      <Image
        style={styles.filtrarIcon}
        resizeMode="cover"
        source={require('../assets/filtrar.png')}
      />
      <Image
        style={[styles.bmwIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require('../assets/bmw.png')}
      />
      <View style={[styles.carrosDestacados, styles.recomendadosFlexBox]}>
        <View style={styles.destacado1}>
          <View style={[styles.cornerRibbon, styles.cornerRibbonPosition]}>
            <Image
              style={[styles.cornerRibbon, styles.cornerRibbonPosition]}
              resizeMode="cover"
              source={require('../assets/vector-3.png')}
            />
            <Text style={styles.featuredTypo}>Destacado</Text>
            <Image
              style={styles.cornerRibbonItem}
              resizeMode="cover"
              source={require('../assets/vector-4.png')}
            />
            <Image
              style={styles.cornerPosition}
              resizeMode="cover"
              source={require('../assets/vector-4.png')}
            />
          </View>
          <Text style={[styles.bmwI4Berlinda, styles.teslaModelSTypo]}>
            BMW i4 Berlinda
          </Text>
        </View>
        <View style={styles.destacado2}>
          <Image
            style={[styles.mercedesIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/mercedes.png')}
          />
          <View style={[styles.cornerRibbon, styles.cornerRibbonPosition]}>
            <Image
              style={[styles.cornerRibbon, styles.cornerRibbonPosition]}
              resizeMode="cover"
              source={require('../assets/vector-3.png')}
            />
            <Text style={styles.featuredTypo}>Destacado</Text>
            <Image
              style={styles.cornerRibbonItem}
              resizeMode="cover"
              source={require('../assets/vector-4.png')}
            />
            <Image
              style={styles.cornerPosition}
              resizeMode="cover"
              source={require('../assets/vector-4.png')}
            />
          </View>
          <Text style={[styles.mercedesBenzClaseC, styles.teslaModelSTypo]}>
            MERCEDES-BENZ Clase C Descapotable
          </Text>
        </View>
        <View style={styles.destacado2}>
          <Image
            style={[styles.mercedesIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/bmw1.png')}
          />
          <View style={[styles.cornerRibbon, styles.cornerRibbonPosition]}>
            <Image
              style={[styles.cornerRibbon, styles.cornerRibbonPosition]}
              resizeMode="cover"
              source={require('../assets/vector-3.png')}
            />
            <Text style={styles.featuredTypo}>Destacado</Text>
            <Image
              style={styles.cornerRibbonItem}
              resizeMode="cover"
              source={require('../assets/vector-4.png')}
            />
            <Image
              style={[styles.cornerRibbonChild5, styles.cornerPosition]}
              resizeMode="cover"
              source={require('../assets/vector-4.png')}
            />
          </View>
          <Text style={[styles.teslaModelS, styles.teslaModelSTypo]}>
            BMW i4 Berlinda
          </Text>
        </View>
        <View style={styles.destacado2}>
          <Image
            style={[styles.mercedesIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/bmw2.png')}
          />
          <View style={[styles.cornerRibbon, styles.cornerRibbonPosition]}>
            <Image
              style={[styles.cornerRibbon, styles.cornerRibbonPosition]}
              resizeMode="cover"
              source={require('../assets/vector-3.png')}
            />
            <Text style={styles.featuredTypo}>Destacado</Text>
            <Image
              style={styles.cornerRibbonItem}
              resizeMode="cover"
              source={require('../assets/vector-4.png')}
            />
            <Image
              style={[styles.cornerRibbonChild5, styles.cornerPosition]}
              resizeMode="cover"
              source={require('../assets/vector-4.png')}
            />
          </View>
          <Text style={[styles.teslaModelS, styles.teslaModelSTypo]}>
            BMW i4 Berlinda
          </Text>
        </View>
      </View>
      <View style={[styles.recomendados, styles.recomendadosFlexBox]}>
        <Text style={[styles.recomendados1, styles.rs547782373Typo]}>
          Recomendados
        </Text>
        <Text style={[styles.verTodos, styles.verTypo]}>Ver todos</Text>
      </View>
      <View style={[styles.losMasVendidos, styles.losMasVendidosBorder]}>
        <View style={styles.rectangleParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/rectangle-85.png')}
          />
          <Text style={[styles.porscheCayenneGts, styles.teslaModelXTypo]}>
            Porsche Cayenne GTS 2022
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require('../assets/group-119.png')}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaIcon, styles.gustaPosition]}
            resizeMode="cover"
            source={require('../assets/me-gusta.png')}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/rectangle-851.png')}
          />
          <Text style={[styles.porscheCayenneGts, styles.teslaModelXTypo]}>
            BMW M8 Competition
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require('../assets/group-119.png')}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaNoSeleccionado, styles.gustaPosition]}
            resizeMode="cover"
            source={require('../assets/me-gusta-no-seleccionado.png')}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleSpaceBlock]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/rectangle-852.png')}
          />
          <Text style={[styles.teslaModelX, styles.teslaModelXTypo]}>
            TESLA Model X
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require('../assets/group-119.png')}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaIcon, styles.gustaPosition]}
            resizeMode="cover"
            source={require('../assets/me-gusta.png')}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/rectangle-853.png')}
          />
          <Text style={[styles.porscheCayenneGts, styles.teslaModelXTypo]}>
            Mercedes Benz Clase G
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require('../assets/group-119.png')}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaNoSeleccionado, styles.gustaPosition]}
            resizeMode="cover"
            source={require('../assets/me-gusta-no-seleccionado.png')}
          />
        </View>
      </View>
      <View style={styles.losMasVendidos1}>
        <Text style={[styles.verTodos1, styles.verTypo]}>Ver todos</Text>
        <Text style={[styles.losMsVendidos, styles.rs547782373Typo]}>
          Los más vendidos
        </Text>
      </View>
      <View style={[styles.carrosRecomendados, styles.losMasVendidosBorder]}>
        <View style={styles.rectangleParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/rectangle-85.png')}
          />
          <Text style={[styles.porscheCayenneGts, styles.teslaModelXTypo]}>
            Porsche Cayenne GTS 2022
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require('../assets/group-119.png')}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaIcon, styles.gustaPosition]}
            resizeMode="cover"
            source={require('../assets/me-gusta.png')}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/rectangle-851.png')}
          />
          <Text style={[styles.porscheCayenneGts, styles.teslaModelXTypo]}>
            BMW M8 Competition
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require('../assets/group-119.png')}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaNoSeleccionado, styles.gustaPosition]}
            resizeMode="cover"
            source={require('../assets/me-gusta-no-seleccionado.png')}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleSpaceBlock]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/rectangle-852.png')}
          />
          <Text style={[styles.teslaModelX, styles.teslaModelXTypo]}>
            TESLA Model X
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require('../assets/group-119.png')}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaIcon, styles.gustaPosition]}
            resizeMode="cover"
            source={require('../assets/me-gusta.png')}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/rectangle-853.png')}
          />
          <Text style={[styles.porscheCayenneGts, styles.teslaModelXTypo]}>
            Mercedes Benz Clase G
          </Text>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require('../assets/group-119.png')}
          />
          <Text style={[styles.rs547782373, styles.rs547782373Typo]}>
            Rs. 54,77,823.73
          </Text>
          <Image
            style={[styles.meGustaNoSeleccionado, styles.gustaPosition]}
            resizeMode="cover"
            source={require('../assets/me-gusta-no-seleccionado.png')}
          />
        </View>
      </View>
      <View style={[styles.contenedorItemsMenu, styles.titleFlexBox]}>
        <Image
          style={styles.contenedorFiltroIcon}
          resizeMode="cover"
          source={require('../assets/contenedor-filtro.png')}
        />
        <Pressable
          style={[styles.buttonButtonPrimary, styles.buttonLayout]}
          onPress={() => navigation.navigate('WorkshopServiceScreen')}>
          <Text style={styles.button}>{'Servicio Taller  '}</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonButtonPrimary1, styles.buttonLayout]}
          onPress={() => navigation.navigate('HistoryScreen')}>
          <Text style={styles.button}>{'Historial Servicio '}</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonButtonPrimary2, styles.buttonLayout]}
          onPress={() => navigation.navigate('DealerScreen')}>
          <Text style={styles.button}>{'Información Concesionario '}</Text>
        </Pressable>
        <Pressable
          style={[styles.vector, styles.gustaPosition]}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            style={[styles.icon2, styles.iconLayout1]}
            resizeMode="cover"
            source={require('../assets/vector.png')}
          />
        </Pressable>
      </View>
      <View style={[styles.navegation, styles.titleFlexBox]}>
        <Pressable
          style={styles.homeLayout}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            style={[styles.icon3, styles.iconLayout1]}
            resizeMode="cover"
            source={require('../assets/home1.png')}
          />
        </Pressable>
        <Pressable
          style={[styles.star, styles.homeLayout]}
          onPress={() => navigation.navigate('SaveCarScreen')}>
          <Image
            style={[styles.icon3, styles.iconLayout1]}
            resizeMode="cover"
            source={require('../assets/star2.png')}
          />
        </Pressable>
        <Pressable
          style={styles.union}
          onPress={() => navigation.navigate('ContactScreen')}>
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require('../assets/union.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  iconLayout1: {
    height: '100%',
    width: '100%',
  },
  gustaLayout: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    height: 170,
    width: 292,
    borderRadius: Border.br_3xs,
    top: '50%',
    position: 'absolute',
  },
  recomendadosFlexBox: {
    flexDirection: 'row',
    position: 'absolute',
  },
  cornerRibbonPosition: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
  teslaModelSTypo: {
    height: 29,
    width: 245,
    fontFamily: FontFamily.arial,
    textTransform: 'capitalize',
    fontSize: FontSize.size_sm,
    color: Color.colorWhite1,
    fontWeight: '700',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    position: 'absolute',
  },
  cornerPosition: {
    top: 94,
    height: 16,
    width: 16,
    left: 0,
    position: 'absolute',
  },
  rs547782373Typo: {
    color: Color.black,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: FontFamily.poppins,
  },
  verTypo: {
    opacity: 0.4,
    textAlign: 'right',
    color: Color.black,
    fontWeight: '500',
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
  },
  losMasVendidosBorder: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_6xs,
    flexWrap: 'wrap',
    width: 384,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhitesmoke_200,
    flexDirection: 'row',
    position: 'absolute',
  },
  teslaModelXTypo: {
    color: Color.colorBlack,
    lineHeight: 18,
    marginLeft: 1,
    zIndex: 1,
    fontFamily: FontFamily.arial,
    fontWeight: '700',
    textAlign: 'left',
    fontSize: FontSize.size_xs,
  },
  gustaPosition: {
    zIndex: 4,
    position: 'absolute',
  },
  rectangleSpaceBlock: {
    marginLeft: 10,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingHorizontal: Padding.p_9xs,
    width: 180,
    borderColor: Color.colorGray_300,
    flexWrap: 'wrap',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: Border.br_5xl,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Color.colorWhite1,
  },
  buttonLayout: {
    paddingHorizontal: Padding.p_42xl,
    height: 54,
    width: 329,
    borderColor: Color.colorWhite1,
    backgroundColor: Color.colorDimgray_100,
    paddingVertical: Padding.p_mini,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: Border.br_3xs,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  homeLayout: {
    height: 32,
    width: 32,
  },
  icon: {
    overflow: 'hidden',
  },
  hypicars: {
    fontSize: FontSize.size_5xl,
    color: Color.colorSteelblue_100,
    marginLeft: 104,
    textAlign: 'center',
    fontFamily: FontFamily.poppins,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: 0,
  },
  codiconbellDot: {
    marginLeft: 104,
  },
  title: {
    top: 35,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    left: 0,
    justifyContent: 'center',
    backgroundColor: Color.colorWhite1,
  },
  lupaIcon: {
    width: 20,
    height: 19,
  },
  buscaHondaPilot: {
    color: Color.colorLightslategray,
    width: 270,
    height: 28,
    marginLeft: 7,
    display: 'flex',
    textAlign: 'left',
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppins,
    lineHeight: 22,
    letterSpacing: 0,
    alignItems: 'center',
  },
  lookForBar: {
    top: 101,
    left: 19,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_4xs,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_xl,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  filtrarIcon: {
    top: 116,
    left: 365,
    width: 26,
    height: 17,
    position: 'absolute',
  },
  bmwIcon: {
    marginTop: -266,
    left: 31,
  },
  cornerRibbon: {
    width: 110,
    height: 110,
  },
  featuredTypo: {
    transform: [
      {
        rotate: '-45.64deg',
      },
    ],
    fontFamily: FontFamily.lato,
    fontWeight: '700',
    fontSize: FontSize.size_base,
    top: 56,
    color: Color.colorWhite1,
    left: 14,
    textAlign: 'left',
    position: 'absolute',
  },
  cornerRibbonItem: {
    left: 94,
    height: 16,
    width: 16,
    top: 0,
    position: 'absolute',
  },
  bmwI4Berlinda: {
    top: 147,
    left: 37,
    width: 245,
    fontFamily: FontFamily.arial,
    textTransform: 'capitalize',
    fontSize: FontSize.size_sm,
  },
  destacado1: {
    width: 282,
    height: 176,
  },
  mercedesIcon: {
    marginTop: -77,
    left: 16,
  },
  mercedesBenzClaseC: {
    top: 151,
    left: 40,
  },
  destacado2: {
    width: 308,
    height: 186,
    marginLeft: 38,
  },
  cornerRibbonChild5: {
    display: 'none',
  },
  teslaModelS: {
    top: 148,
    left: 37,
    width: 245,
    fontFamily: FontFamily.arial,
    textTransform: 'capitalize',
    fontSize: FontSize.size_sm,
  },
  carrosDestacados: {
    top: 167,
    left: 15,
  },
  recomendados1: {
    fontSize: FontSize.size_xl,
    fontWeight: '500',
  },
  verTodos: {
    marginLeft: 123,
  },
  recomendados: {
    top: 369,
    left: 31,
    alignItems: 'center',
  },
  frameChild: {
    borderRadius: Border.br_lg,
    width: 172,
    height: 117,
    zIndex: 0,
  },
  porscheCayenneGts: {
    marginLeft: 1,
    zIndex: 1,
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
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0,
  },
  meGustaIcon: {
    top: 11,
    left: 146,
    height: 24,
    width: 24,
  },
  rectangleParent: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingHorizontal: Padding.p_9xs,
    width: 180,
    borderColor: Color.colorGray_300,
    flexWrap: 'wrap',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: Border.br_5xl,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Color.colorWhite1,
  },
  meGustaNoSeleccionado: {
    top: 9,
    left: 147,
    height: 24,
    width: 24,
  },
  rectangleGroup: {
    alignItems: 'flex-end',
  },
  teslaModelX: {
    width: 103,
    marginLeft: 1,
    zIndex: 1,
    height: 17,
  },
  rectangleContainer: {
    alignItems: 'center',
  },
  losMasVendidos: {
    top: 870,
    left: 15,
  },
  verTodos1: {
    top: 4,
    left: 283,
    position: 'absolute',
  },
  losMsVendidos: {
    fontSize: FontSize.size_xl,
    fontWeight: '500',
    top: 0,
    left: 0,
    position: 'absolute',
  },
  losMasVendidos1: {
    top: 830,
    width: 361,
    height: 30,
    left: 31,
    position: 'absolute',
  },
  carrosRecomendados: {
    top: 415,
    left: 14,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_6xs,
    flexWrap: 'wrap',
    width: 384,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    borderRadius: Border.br_5xl,
  },
  contenedorFiltroIcon: {
    width: 391,
    height: 705,
    zIndex: 0,
    borderRadius: Border.br_xl,
  },
  button: {
    fontSize: FontSize.size_mini,
    color: Color.colorWhite1,
    textAlign: 'center',
    fontFamily: FontFamily.poppins,
    fontWeight: '600',
  },
  buttonButtonPrimary: {
    top: 134,
    left: 26,
    paddingHorizontal: Padding.p_42xl,
    height: 54,
    width: 329,
    borderColor: Color.colorWhite1,
    backgroundColor: Color.colorDimgray_100,
    zIndex: 1,
  },
  buttonButtonPrimary1: {
    top: 226,
    left: 26,
    paddingHorizontal: Padding.p_42xl,
    height: 54,
    width: 329,
    borderColor: Color.colorWhite1,
    backgroundColor: Color.colorDimgray_100,
    zIndex: 2,
  },
  buttonButtonPrimary2: {
    top: 318,
    left: 25,
    zIndex: 3,
  },
  icon2: {
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
  },
  vector: {
    left: '89.77%',
    top: '2.13%',
    right: '4.86%',
    bottom: '94.89%',
    width: '5.37%',
    height: '2.98%',
  },
  contenedorItemsMenu: {
    top: 91,
    left: 11,
  },
  icon3: {
    borderRadius: Border.br_xl,
    overflow: 'hidden',
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
    left: 27,
    borderRadius: Border.br_25xl,
    backgroundColor: Color.colorGray_400,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
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
  itemsMenuScreen: {
    flex: 1,
    height: 896,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.colorWhite1,
  },
});

export default ItemsMenuScreen;
