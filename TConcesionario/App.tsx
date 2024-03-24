import React, { useState,useEffect, FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUpScreen from './screens/SignUpScreen';
import ItemsMenuScreen from './screens/ItemsMenuScreen';
import CarDetailsScreen from './screens/CarDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PreLoadScreen from './screens/PreloadScreen';
import WelcomeAppScreen from './screens/WelcomeAppScreen';
import SaveCarScreen from './screens/SaveCarScreen';
import NewCarScreen from './screens/NewCarScreen';
import UsedCarScreen from './screens/UsedCarScreen';
import DealerScreen from './screens/DealerScreen';
import ContactScreen from './screens/ContactScreen';
import QuotationCarScreen from './screens/QuotationCarScreen';
import HistoryScreen from './screens/HistoryScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import TestDriveCarScreen from './screens/TestDriveCarScreen';
import WorkshopServiceScreen from './screens/WorkshopServiceScreen';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideSplashScreen(false); // Mostrar el Splash Screen después de 2 segundos
    }, 2000); // 2000 milisegundos = 2 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PreLoadScreen" component={PreLoadScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="WelcomeAppScreen" component={WelcomeAppScreen} />
          <Stack.Screen name="WorkshopServiceScreen" component={WorkshopServiceScreen} />
          <Stack.Screen name="TestDriveCarScreen" component={TestDriveCarScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="DealerScreen" component={DealerScreen} />
          <Stack.Screen name="ItemsMenuScreen" component={ItemsMenuScreen} />
          <Stack.Screen name="CarDetailsScreen" component={CarDetailsScreen} />
          <Stack.Screen name="ContactScreen" component={ContactScreen} />
          <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="SaveCarScreen" component={SaveCarScreen} />
          <Stack.Screen name="NewCarScreen" component={NewCarScreen} />
          <Stack.Screen name="UsedCarScreen" component={UsedCarScreen} />
          <Stack.Screen name="QuotationCarScreen" component={QuotationCarScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
