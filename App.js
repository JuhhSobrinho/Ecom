import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from "./router";
import Posto from './src/pages/Posto';
import Salvo from './src/pages/salvo';
import Config from './src/pages/Configuracao/Config';
import Local from './src/pages/Local';

import Ajuda from './src/pages/Configuracao/Ajuda';
import Segura from './src/pages/Configuracao/Segura';
import Idioma from './src/pages/Configuracao/Idioma';
import Notif from './src/pages/Configuracao/Notif';
import Sobre from './src/pages/Configuracao/Sobre';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen options={{headerShown: false,}} name="Posto" component={Routes} />
                <Stack.Screen options={{headerShown: false,}} name="Salvo" component={Routes} />
                <Stack.Screen options={{headerShown: false,}} name="Config" component={Routes} />
                <Stack.Screen options={{headerShown: false,}} name="Local" component={Routes} />

                <Stack.Screen options={{headerShown: false,}} name="Ajuda" component={Ajuda} />
                <Stack.Screen options={{headerShown: false,}} name="Sobre" component={Sobre} />
                <Stack.Screen options={{headerShown: false,}} name="Segura" component={Segura} />
                <Stack.Screen options={{headerShown: false,}} name="Notif" component={Notif} />
                <Stack.Screen options={{headerShown: false,}} name="Idioma" component={Idioma} />

          </Stack.Navigator>
    </NavigationContainer>
    );
}
