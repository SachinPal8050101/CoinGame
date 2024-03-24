import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameScreen = () => {
  console.log('===>>>>');
  return (
    <View style={styles.conatiner}>
      <Text>GameScreen.componentsdsd==</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
