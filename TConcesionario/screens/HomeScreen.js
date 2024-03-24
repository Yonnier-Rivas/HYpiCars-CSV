import * as React from 'react';
import {ScrollView, Image, StyleSheet, Text, View, Pressable, } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Padding, Color, Border, FontFamily, FontSize} from '../GlobalStyles';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.homeScreen}>
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
        <View style={[styles.losMasVendidos1, styles.recomendadosPosition]}>
          <Text style={[styles.losMsVendidos, styles.rs547782373Typo]}>
            Los más vendidos
          </Text>
          <Text style={[styles.verTodos, styles.verTypo]}>Ver todos</Text>
        </View>
        <View style={[styles.carrosRecomendados, styles.losMasVendidosBorder]}>
          <Pressable
            style={styles.rectangleParent}
            onPress={() => navigation.navigate('CarDetailsScreen')}>
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
          </Pressable>
          <Pressable
            style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}
            onPress={() => navigation.navigate('CarDetailsScreen')}>
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
          </Pressable>
          <Pressable
            style={[styles.rectangleContainer, styles.rectangleSpaceBlock]}
            onPress={() => navigation.navigate('CarDetailsScreen')}>
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
          </Pressable>
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
        <View style={[styles.recomendados, styles.recomendadosPosition]}>
          <Text style={[styles.losMsVendidos, styles.rs547782373Typo]}>
            Recomendados
          </Text>
          <Text style={[styles.verTodos1, styles.verTypo]}>Ver todos</Text>
        </View>
        <View style={[styles.carrosDestacados, styles.navegationFlexBox]}>
          <View>
            <Pressable
              style={styles.destacado1}
              onPress={() => navigation.navigate('CarDetailsScreen')}>
              <Image
                style={[styles.bmwIcon, styles.bmwIconLayout]}
                resizeMode="cover"
                source={require('../assets/bmw.png')}
              />
              <Image
                style={[styles.destacadoIcon, styles.tituloPosition]}
                resizeMode="cover"
                source={require('../assets/destacado.png')}
              />
              <Text style={[styles.bmwI4Berlinda, styles.teslaModelSTypo]}>
                BMW i4 Berlinda
              </Text>
            </Pressable>
          </View>
          <View style={styles.destacado3Wrapper}>
            <View style={styles.destacado3}>
              <Image
                style={[styles.bmwIcon1, styles.bmwIconLayout]}
                resizeMode="cover"
                source={require('../assets/bmw1.png')}
              />
              <Text style={[styles.teslaModelS, styles.teslaModelSTypo]}>
                BMW i4 Berlinda
              </Text>
              <Image
                style={[styles.destacadoIcon, styles.tituloPosition]}
                resizeMode="cover"
                source={require('../assets/destacado.png')}
              />
            </View>
          </View>
          <View style={styles.destacado3Wrapper}>
            <View style={styles.destacado3}>
              <Image
                style={[styles.bmwIcon1, styles.bmwIconLayout]}
                resizeMode="cover"
                source={require('../assets/bmw2.png')}
              />
              <Text style={[styles.teslaModelS, styles.teslaModelSTypo]}>
                BMW i4 Berlinda
              </Text>
              <Image
                style={[styles.destacadoIcon, styles.tituloPosition]}
                resizeMode="cover"
                source={require('../assets/destacado.png')}
              />
            </View>
          </View>
        </View>
        <View style={[styles.bucarYFiltro, styles.navegationFlexBox]}>
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
            style={styles.bucarYFiltroChild}
            resizeMode="cover"
            source={require('../assets/frame-122.png')}
          />
        </View>
        <View style={[styles.titulo, styles.tituloPosition]}>
          <View style={styles.titleLayout}>
            <View style={[styles.titleChild, styles.titleLayout]} />
            <Pressable
              style={[styles.bxbxMenu, styles.bxbxMenuPosition]}
              onPress={() => navigation.navigate('ItemsMenuScreen')}>
              <Image
                style={[styles.icon, styles.iconLayout1]}
                resizeMode="cover"
                source={require('../assets/bxbxmenu1.png')}
              />
            </Pressable>
            <Pressable
              style={[styles.codiconbellDot, styles.bxbxMenuPosition]}
              onPress={() => navigation.navigate('NotificationsScreen')}>
              <Image
                style={[styles.icon, styles.iconLayout1]}
                resizeMode="cover"
                source={require('../assets/codiconbelldot.png')}
              />
            </Pressable>
            <Text style={styles.hypicars}>HypiCars</Text>
          </View>
        </View>
        <View style={[styles.navegation, styles.navegationFlexBox]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require('../assets/home1.png')}
          />
          <Pressable
            onPress={() => navigation.navigate('SaveCarScreen')}>
            <Image
              style={[styles.starIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/star1.png')}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  losMasVendidosBorder: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_6xs,
    flexWrap: 'wrap',
    width: 384,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_5xl,
    flexDirection: 'row',
    position: 'absolute',
  },
  teslaModelXTypo: {
    zIndex: 1,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.arial,
    fontWeight: '700',
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    marginLeft: 1,
  },
  rs547782373Typo: {
    color: Color.black,
    fontWeight: '500',
    fontFamily: FontFamily.poppins,
    textAlign: 'left',
  },
  gustaPosition: {
    zIndex: 4,
    height: 24,
    width: 24,
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
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: Border.br_5xl,
    overflow: 'hidden',
    backgroundColor: Color.colorWhite1,
  },
  recomendadosPosition: {
    left: 31,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  verTypo: {
    opacity: 0.4,
    textAlign: 'right',
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.poppins,
    fontWeight: '500',
  },
  navegationFlexBox: {
    flexDirection: 'row',
    position: 'absolute',
  },
  bmwIconLayout: {
    height: 170,
    width: 292,
    borderRadius: Border.br_3xs,
    left: 16,
    top: '50%',
    position: 'absolute',
  },
  tituloPosition: {
    left: 0,
    position: 'absolute',
  },
  teslaModelSTypo: {
    height: 29,
    width: 245,
    color: Color.colorWhite1,
    textTransform: 'capitalize',
    fontSize: FontSize.size_sm,
    left: 37,
    display: 'flex',
    textAlign: 'left',
    fontFamily: FontFamily.arial,
    fontWeight: '700',
    alignItems: 'center',
    position: 'absolute',
  },
  titleLayout: {
    height: 56,
    width: 414,
  },
  bxbxMenuPosition: {
    top: 16,
    height: 24,
    width: 24,
    position: 'absolute',
  },
  iconLayout1: {
    height: '100%',
    width: '100%',
  },
  iconLayout: {
    height: 32,
    width: 32,
    borderRadius: Border.br_xl,
    overflow: 'hidden',
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
    lineHeight: 22,
    letterSpacing: 0,
    color: Color.black,
    fontWeight: '500',
    marginLeft: 1,
  },
  meGustaIcon: {
    top: 11,
    left: 146,
  },
  rectangleParent: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingHorizontal: Padding.p_9xs,
    width: 180,
    borderColor: Color.colorGray_300,
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: Border.br_5xl,
    overflow: 'hidden',
    backgroundColor: Color.colorWhite1,
  },
  meGustaNoSeleccionado: {
    top: 9,
    left: 147,
  },
  rectangleGroup: {
    alignItems: 'flex-end',
  },
  teslaModelX: {
    width: 103,
    height: 17,
    marginLeft: 1,
  },
  rectangleContainer: {
    alignItems: 'center',
  },
  losMasVendidos: {
    top: 870,
    left: 15,
  },
  losMsVendidos: {
    fontSize: FontSize.size_xl,
  },
  verTodos: {
    marginLeft: 102,
  },
  losMasVendidos1: {
    top: 830,
  },
  carrosRecomendados: {
    top: 415,
    left: 14,
  },
  verTodos1: {
    marginLeft: 123,
  },
  recomendados: {
    top: 369,
  },
  bmwIcon: {
    marginTop: -77.5,
  },
  destacadoIcon: {
    width: 110,
    height: 110,
    top: 0,
    left: 0,
  },
  bmwI4Berlinda: {
    top: 147,
  },
  destacado1: {
    height: 185,
    width: 308,
  },
  bmwIcon1: {
    marginTop: -77,
  },
  teslaModelS: {
    top: 148,
  },
  destacado3: {
    height: 186,
    width: 308,
  },
  destacado3Wrapper: {
    marginLeft: 38,
  },
  carrosDestacados: {
    top: 167,
    left: 15,
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
    fontFamily: FontFamily.poppins,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'left',
    fontSize: FontSize.size_xs,
    alignItems: 'center',
  },
  lookForBar: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_4xs,
    borderRadius: Border.br_xl,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.colorWhitesmoke_200,
  },
  bucarYFiltroChild: {
    width: 26,
    marginLeft: 21,
    height: 17,
  },
  bucarYFiltro: {
    top: 101,
    left: 19,
    alignItems: 'center',
  },
  titleChild: {
    left: 0,
    position: 'absolute',
    top: 0,
    backgroundColor: Color.colorWhite1,
    height: 56,
    width: 414,
  },
  icon: {
    overflow: 'hidden',
  },
  bxbxMenu: {
    left: 24,
  },
  codiconbellDot: {
    left: 366,
  },
  hypicars: {
    top: 17,
    left: 152,
    fontSize: FontSize.size_5xl,
    fontWeight: '600',
    color: Color.colorSteelblue_100,
    textAlign: 'center',
    fontFamily: FontFamily.poppins,
    lineHeight: 22,
    letterSpacing: 0,
    position: 'absolute',
  },
  titulo: {
    top: 35,
  },
  starIcon: {
    marginLeft: 89,
  },
  union: {
    width: 28,
    height: 31,
    marginLeft: 89,
  },
  navegation: {
    top: 815,
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
    justifyContent: 'center',
    paddingHorizontal: Padding.p_28xl,
    paddingVertical: Padding.p_sm,
    left: 24,
    alignItems: 'center',
  },
  homeScreen: {
    flex: 1,
    height: 896,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.colorWhite1,
  },
});

export default HomeScreen;
