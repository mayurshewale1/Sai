// components/MainScreen.js
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Sai Vaishnavi Buildcon</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
