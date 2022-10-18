import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';

import Pesquisa from './MeuComponente/Pesquisa';
import Card from './MeuComponente/Card';

export default function Posto() {
  return (
      <View style={styles.container}>
              <StatusBar backgroundColor='#e0e0e0' style="auto" />
        <Pesquisa />

        <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <View style={{height:90}}></View>
        </ScrollView>
        

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingTop: 30,
  },
});