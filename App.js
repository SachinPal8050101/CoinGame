import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppNavigation from './src/config/navigationSetup';

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
