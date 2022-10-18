import React, {useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text} from 'react-native';

import Posto from './Posto';
import Salvo from './salvo';
import Config from './Config';
import Local from './Local';
import Mais from './Mais';


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
                position: 'absolute',
                backgroundColor: '#62D9AD',
                height: 70,
                borderTopWidth: 0,

                borderRadius: 4,

            }
        }}>
            <Tab.Screen
             name="Local"
             component={Local} 
             options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <Image
                        style={{height: 45,
                            width: 45,}}
                        source={require('./assets/local.png')}
                        />
                    }

                    return <Image
                    style={{height: 45,
                        width: 45, opacity: 0.7}}
                    source={require('./assets/local.png')}
                    />
                }
                }} />


            <Tab.Screen 
            name="Posto" 
            component={Posto}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <Image
                        style={{height: 45,
                            width: 45,}}
                        source={require('./assets/posto.png')}
                        />
                    }

                    return <Image
                    style={{height: 45,
                        width: 45, opacity: 0.7}}
                    source={require('./assets/posto.png')}
                    />
                }
                }}
            />

            <Tab.Screen 
            name="Mais" 
            component={Mais} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <Image
                        style={{height: 45,
                            width: 45,}}
                        source={require('./assets/mais.png')}
                        />
                    }

                    return <Image
                    style={{height: 45,
                        width: 45, opacity: 0.7}}
                    source={require('./assets/mais.png')}
                    />
                }
                }}
            
            />
            
            <Tab.Screen 
            name="Salvo" 
            component={Salvo} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <Image
                        style={{height: 45,
                            width: 45,}}
                        source={require('./assets/salvo.png')}
                        />
                    }

                    return <Image
                    style={{height: 45,
                        width: 45, opacity: 0.8}}
                    source={require('./assets/salvo.png')}
                    />
                }
                }}
            
            />

            <Tab.Screen 
            name="Config" 
            component={Config}
            options={{
                headerShown: false,
                tabBarStyle:{display: 'none',},
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <Image
                        style={{height: 45,
                            width: 45,}}
                        source={require('./assets/config.png')}
                        />
                        
                    }

                    return <Image
                    style={{height: 45,
                        width: 45, opacity: 0.7}}
                    source={require('./assets/config.png')}
                    />
                }
                }}
            
            />


        </Tab.Navigator>
    )
}