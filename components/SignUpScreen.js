// SignUpScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      {/* Add your sign up form components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUpScreen;
