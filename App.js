import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./router";


export default function App() {
  return (
    <NavigationContainer>
             <StatusBar backgroundColor='#e0e0e0' style="auto" />
      <Routes/>
    </NavigationContainer>
  );
}
