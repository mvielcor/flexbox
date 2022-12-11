/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet, View} from 'react-native';

import {Provider as PaperProvider, Text} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <View>
        <Text> Zona artWork </Text>
      </View>
      <View>
        <Text> Zona Titol/cantant </Text>
      </View>
      <View>
        <Text> Zona Controls </Text>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
